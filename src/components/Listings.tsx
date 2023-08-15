import React from 'react';
import { Listings as IListings } from '../types/types';
import { ProductGalleryView } from './ProductGalleryView/ProductGalleryView';
import { getListings } from '../api/getListings';
import { Sorter } from './Sorter/Sorter';

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
        <Sorter onChange={handleChangeSort} />

        <ProductGalleryView products={listings.products} />
      </div>
    );
  }

  return <p>No products found</p>;
}
