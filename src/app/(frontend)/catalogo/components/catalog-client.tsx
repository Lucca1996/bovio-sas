"use client";

import { SkeletonSchema } from "../../components/skeletonSchema";
import { ProductType } from "../../types/product";
import type { Product, Category, Style } from '@/payload-types';
import { ProductCard } from "../../components/shared/product-card";
import { useState, useEffect } from "react";
import { FiltersControlCategory } from "./filters-control-category";
import { useRouter, useSearchParams } from "next/navigation";

interface CatalogClientProps {
  initialProducts: Product[] | null;
  initialCategories: Category[];
  initialStyles: Style[];
  initialFavorites?: number[];
}

const CatalogClient: React.FC<CatalogClientProps> = ({ initialProducts, initialCategories, initialStyles, initialFavorites = [] }) => {
  const [products, setProducts] = useState<Product[]>([]); // Initialize as empty array
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories] = useState<Category[]>(initialCategories);
  const [styles] = useState<Style[]>(initialStyles);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setIsLoading(true);
      const category = searchParams.get('category');
      const style = searchParams.get('style');

      // Si no hay filtros, usar los productos iniciales
      if (!category && !style) {
        setProducts(initialProducts || []);
        setIsLoading(false);
        return;
      }

      try {
        const queryParams = new URLSearchParams();
        if (category) queryParams.set('category', category);
        if (style) queryParams.set('style', style);

        // Usar la nueva ruta de API
        const response = await fetch(`/api/products?${queryParams.toString()}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error en la respuesta del servidor');
        }
        
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching filtered products:', error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [searchParams, initialProducts]);

  const handleCategoryChange = (categoryId: number | null) => {
    const currentStyle = searchParams.get('style');
    const params = new URLSearchParams();
    if (categoryId !== null) params.set('category', categoryId.toString());
    if (currentStyle) params.set('style', currentStyle);
    router.push(`/catalogo?${params.toString()}`);
  };

  const handleStyleChange = (styleId: number | null) => {
    const currentCategory = searchParams.get('category');
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (styleId !== null) params.set('style', styleId.toString());
    router.push(`/catalogo?${params.toString()}`);
  };

  return (
    <>
      <FiltersControlCategory
        categories={categories}
        styles={styles}
        onCategoryChange={handleCategoryChange}
        onStyleChange={handleStyleChange}
        selectedCategory={searchParams.get('category')}
        selectedStyle={searchParams.get('style')}
      />
      <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {isLoading ? (
          <SkeletonSchema grid={3} />
        ) : products.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          products.map((product) => (
            <div className="p-1 md:basis-1/2 lg:basis-1/3 group" key={product.id}>
              <ProductCard 
                {...product as ProductType} 
                initialIsFavorite={initialFavorites.includes(product.id)}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CatalogClient;
