import React from 'react';
import { Listings as IListings } from '../types/types';
import { ProductGalleryView } from './ProductGalleryView/ProductGalleryView';
import { getListings } from '../api/getListings';
import { Sorter } from './Sorter/Sorter';
import { PriceFilter, PriceFilterInputs } from './PriceFilter/PriceFilter';

type SearchParameters = {
  sort: number;
  prices?: {
    // TODO: This is duplicating the type in getListings
    value: { gte: number; lte: number };
  }[];
};

export function Listings() {
  const [listings, setListings] = React.useState<IListings | null>(null);
  const [searchParameters, setSearchParameters] =
    React.useState<SearchParameters>({
      sort: 1,
    });

  React.useEffect(() => {
    async function fetchData() {
      const listings = await getListings({
        ...searchParameters,
      });

      // TODO: delete this when done:
      console.log(listings);

      setListings(listings);
    }

    fetchData();
  }, [searchParameters, searchParameters.prices, searchParameters.sort]);

  function handleChangeSort(event: React.ChangeEvent<HTMLSelectElement>) {
    setSearchParameters((previousState) => ({
      ...previousState,
      sort: Number(event.target.value),
    }));
  }

  function handleFilterPrice({ gte, lte }: PriceFilterInputs) {
    setSearchParameters((previousState) => ({
      ...previousState,
      prices: [
        {
          value: {
            gte,
            lte,
          },
        },
      ],
    }));
  }

  if (listings === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5">
      <div className="flex flex-row gap-5">
        <div className="w-72">
          <h2 className="text-2xl font-semibold">Filter by</h2>

          <div className="bg-white p-3">
            <PriceFilter onFilter={handleFilterPrice} />
          </div>
        </div>

        <div>
          <Sorter onChange={handleChangeSort} />

          {listings?.products && listings?.products.length > 1 ? (
            <ProductGalleryView products={listings.products} />
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}
