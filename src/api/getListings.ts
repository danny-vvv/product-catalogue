import axios, { AxiosResponse } from 'axios';
import { Listings } from '../types/types';

export async function getListings({ sort = 1 }: { sort: number }) {
  try {
    const response: AxiosResponse<Listings> = await axios.post(
      'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI',
      {
        query: 'toilets',
        pageNumber: 0,
        size: 0,
        additionalPages: 0,
        sort,
        // 1: Recommended (?)
        // 2: Lowest price
        // 3: Highest price
        // 4: Highest discount
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
