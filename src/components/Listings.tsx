import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Listings as IListings } from '../types/types';
import { ProductListing } from './ProductListing/ProductListing';

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

  return (
    <div>
      {listings ? (
        listings.products?.map((product) => {
          return <ProductListing key={product.id} product={product} />;
        })
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
