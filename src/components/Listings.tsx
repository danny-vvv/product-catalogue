import React from 'react';
import { Listings as IListings } from '../types/types';
import { ProductGalleryView } from './ProductGalleryView/ProductGalleryView';
import { getListings } from '../api/getListings';

export function Listings() {
  const [listings, setListings] = React.useState<IListings | null>(null);
  const [sort, setSort] = React.useState<number>(1);

  React.useEffect(() => {
    async function fetchData() {
      const listings = await getListings({
        sort,
      });

      // TODO: delete this when done:
      console.log(listings);

      setListings(listings);
    }

    fetchData();
  }, [sort]);

  function handleChangeSort(event: React.ChangeEvent<HTMLSelectElement>) {
    setSort(Number(event.target.value));
  }

  if (listings === null) {
    return <p>Loading...</p>;
  }

  if (listings?.products && listings?.products.length > 1) {
    return (
      <div className="p-5">
        <div>
          <label htmlFor="select-sort-method">
            Sort by
            <div>
              <select id="select-sort-method" onChange={handleChangeSort}>
                <option value="1">Recommended</option>
                <option value="2">Lowest price</option>
                <option value="3">Highest price</option>
                <option value="4">Highest discount</option>
              </select>
            </div>
          </label>
        </div>

        <ProductGalleryView products={listings.products} />
      </div>
    );
  }

  return <p>No products found</p>;
}
