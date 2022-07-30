import React from 'react';

import { InputSearch, ProductCard } from '@/components';
import { useFetchProducts } from '@/hooks/useFetchProducts';

export const Home = () => {
  const { products } = useFetchProducts();

  return (
      <main data-testid="product-list" className="my-8">
      <InputSearch doSearch={(event) => console.log(event)} />
      <div className="container mx-auto px-6 mt-6">
        <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span className="mt-3 text-sm text-gray-500">
          200+ Products
        </span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map(product  => (
            <ProductCard key={product.id} product={product} addToCart={() => null} />
          ))}
        </div>
      </div>
    </main>
  )
} 