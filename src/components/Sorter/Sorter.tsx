import React from 'react';

type SorterProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Sorter({ onChange }: SorterProps) {
  return (
    <div>
      <label htmlFor="select-sort-method">
        Sort by
        <div>
          <select id="select-sort-method" onChange={onChange}>
            <option value="1">Recommended</option>
            <option value="2">Lowest price</option>
            <option value="3">Highest price</option>
            <option value="4">Highest discount</option>
          </select>
        </div>
      </label>
    </div>
  );
}
