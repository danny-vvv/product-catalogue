import React from 'react';
import axios from 'axios';

export function Listings() {
  React.useEffect(() => {
    axios
      .post(
        'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI',
        {
          query: 'toilets',
          pageNumber: 0,
          size: 0,
          additionalPages: 0,
          sort: 1,
        }
      )
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div>
      <h2> Listings </h2>
    </div>
  );
}
