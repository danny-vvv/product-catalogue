import React from 'react';
import { Listings as IListings } from '../types/types';
import { ProductGalleryView } from './ProductGalleryView/ProductGalleryView';
import { getListings } from '../api/getListings';
import { Sorter } from './Sorter/Sorter';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  gte: number;
  lte: number;
};

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

  const {
    register,
    handleSubmit,
    // formState: { errors }, // TODO: error handling
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    setSearchParameters((previousState) => ({
      ...previousState,
      prices: [
        {
          value: {
            gte: data.gte,
            lte: data.lte,
          },
        },
      ],
    }));
  };

  if (listings === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5">
      <div className="flex flex-row gap-5">
        <div className="w-72">
          <h2 className="text-2xl font-semibold">Filter by</h2>

          <div className="bg-white p-3">
            <h3 className="text-xl">Price (£)</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3">
                <label>
                  Min
                  <div>
                    <input
                      type="text"
                      {...register('gte')}
                      className="border-2 border-black w-full"
                    />
                  </div>
                </label>

                <label>
                  Max
                  <div>
                    <input
                      type="text"
                      {...register('lte')}
                      className="border-2 border-black w-full"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="bg-gray-400 text-white font-semi-bold w-full"
                >
                  Go
                </button>
              </div>
            </form>
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
