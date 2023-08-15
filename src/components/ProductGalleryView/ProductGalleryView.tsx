import React from 'react';
import { ProductEntity } from '../../types/types';
import { ProductListing } from '../ProductListing/ProductListing';

interface ProductGalleryViewProps {
  products: ProductEntity[];
}

export function ProductGalleryView({ products }: ProductGalleryViewProps) {
  return (
    <div>
      {products.map((product) => {
        return <ProductListing key={product.id} product={product} />;
      })}
    </div>
  );
}
