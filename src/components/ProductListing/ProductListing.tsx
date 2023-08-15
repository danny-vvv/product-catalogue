import React from 'react';
import { ProductEntity } from '../../types/types';

type ProductListingProps = {
  product: ProductEntity;
};

export function ProductListing({ product }: ProductListingProps) {
  return (
    <div className="max-w-sm bg-white flex flex-col">
      <img src={product.image.url} alt={product.productName} />

      <div className="p-3 grid grid-cols-1 gap-1">
        <img
          src={product.brand.brandImage.url}
          alt={product.brand.name}
          className="w-24"
        />

        <h2 className="font-semibold">{product.productName}</h2>

        <p>
          {/* Would need to handle other currencies (product.price.currencyCode) */}
          <span className="text-2xl font-bold text-red-600">
            £{product.price.priceIncTax}
          </span>

          {product.price.wasPriceIncTax ? (
            <s className="ml-2 text-gray-500">
              Was {product.price.wasPriceIncTax}
            </s>
          ) : null}
        </p>

        {/* Would need to check product.stockStatus.status.
        This is currently "G" for all products. 
        Not sure what this means. "Good?" */}
        <p>✅ In stock</p>

        {/* Rating seems to be out of 5, representing stars, but would need to confirm this. */}
        {/* TODO: Add star icons */}
        <p>
          {product.averageRating} stars from {product.reviewsCount} reviews
        </p>
      </div>
    </div>
  );
}
