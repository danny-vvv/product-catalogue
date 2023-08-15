import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Listings as IListings } from '../types/types';

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
          return (
            <div key={product.id}>
              <h2>{product.productName}</h2>
              <img src={product.image.url} alt={product.productName} />
              <p>
                {product.price.priceIncTax} {product.price.currencyCode}
              </p>
            </div>
          );
        })
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
