import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Listings as IListings } from '../types/types';

export function Listings() {
  const [listings, setListings] = React.useState<IListings | []>([]);

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
      <h2> Listings </h2>
    </div>
  );
}
