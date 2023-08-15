import React from 'react';
import { ProductEntity } from '../../types/types';

type ProductListingProps = {
  product: ProductEntity;
};

export function ProductListing({ product }: ProductListingProps) {
  return (
    <div className="max-w-sm">
      <h2>{product.productName}</h2>
      <img src={product.image.url} alt={product.productName} />
      <p>
        {product.price.priceIncTax} {product.price.currencyCode}
      </p>
    </div>
  );
}
