import axios, { AxiosResponse } from 'axios';
import { Listings } from '../types/types';

type Facets = {
  prices: Array<{
    identifier: string;
    value: {
      gte: number;
      lte: number;
    };
  }>;
};

type Payload = {
  query: string;
  pageNumber: number;
  size: number;
  additionalPages: number;
  sort: number;
  facets?: Partial<Facets>;
};

export async function getListings({ sort = 1 }: { sort: number }) {
  // sort:
  // 1: Recommended
  // 2: Lowest price
  // 3: Highest price
  // 4: Highest discount

  try {
    const payload: Payload = {
      query: 'toilets',
      pageNumber: 0,
      size: 0,
      additionalPages: 0,
      sort,
    };
    const response: AxiosResponse<Listings> = await axios.post(
      'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI',
      payload
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
