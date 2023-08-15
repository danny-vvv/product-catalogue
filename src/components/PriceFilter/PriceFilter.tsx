import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export type PriceFilterInputs = {
  gte: number;
  lte: number;
};

type PriceFilterProps = {
  onFilter: (data: PriceFilterInputs) => void;
};

export function PriceFilter({ onFilter }: PriceFilterProps) {
  const {
    register,
    handleSubmit,
    // formState: { errors }, // TODO: error handling
  } = useForm<PriceFilterInputs>();

  const onSubmit: SubmitHandler<PriceFilterInputs> = (data) => {
    console.log(data);
    onFilter(data);
  };

  return (
    <>
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

          <button
            type="reset"
            className="w-full border-solid border-2 border-gray-400"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
