import React from 'react';
import { Listings as IListings } from '../types/types';

import { ProductGalleryView } from './ProductGalleryView/ProductGalleryView';
import { getListings } from '../api/getListings';

export function Listings() {
  const [listings, setListings] = React.useState<IListings | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      const listings = await getListings();
      setListings(listings);
    }

    fetchData();
  }, []);

  // TODO: delete this when done:
  console.log(listings);

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
              <select id="select-sort-method">
                <option>Recommended</option>
                <option>Lowest price</option>
                <option>Highest price</option>
                <option>Highest discount</option>
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
