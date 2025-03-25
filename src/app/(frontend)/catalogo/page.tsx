import React, { Suspense } from 'react';
import { getProducts } from '../components/getProducts';
import CatalogClient from './components/catalog-client';
import { getCategories } from '../components/getCategories';
import { getStyles } from './components/getStyles';
import type { Product, Category, Style } from '@/payload-types';

export const dynamic = 'force-dynamic';

export default async function CatalogPage() {
  let products: Product[] | null = null;
  try {
    products = await getProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
    products = [];
  }
  const categories: Category[] = await getCategories();
  const styles: Style[] = await getStyles();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center my-10">Catálogo de Productos</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <CatalogClient 
          initialProducts={products} 
          initialCategories={categories} 
          initialStyles={styles} 
        />
      </Suspense>
    </main>
  );
}
