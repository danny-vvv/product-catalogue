import React from 'react';
import { ProductEntity } from '../../types/types';

type ProductListingProps = {
  product: ProductEntity;
};

export function ProductListing({ product }: ProductListingProps) {
  return (
    <div className="max-w-sm bg-white flex flex-col">
      <img src={product.image.url} alt={product.productName} />

      <h2 className="font-semibold">{product.productName}</h2>

      <p>
        {/* Would need to handle other currencies (product.price.currencyCode) */}
        £{product.price.priceIncTax}
      </p>
    </div>
  );
}
