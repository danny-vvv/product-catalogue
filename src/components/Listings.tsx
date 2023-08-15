import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Listings as IListings } from '../types/types';
import { ProductGalleryView } from './ProductGalleryView/ProductGalleryView';

export function Listings() {
  const [listings, setListings] = React.useState<IListings | null>(null);

  React.useEffect(() => {
    async function getListings() {
      try {
        const response: AxiosResponse<IListings> = await axios.post(
          'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI',
          {
            query: 'toilets',
            pageNumber: 0,
            size: 0,
            additionalPages: 0,
            sort: 1,
            // 1: Recommended (?)
            // 2: Lowest price
            // 3: Highest price
            // 4: Highest discount
          }
        );

        setListings(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getListings();
  }, []);

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
