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
}

const CatalogClient: React.FC<CatalogClientProps> = ({ initialProducts, initialCategories, initialStyles }) => {
  const [products, setProducts] = useState<Product[]>([]); // Initialize as empty array
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [styles, setStyles] = useState<Style[]>(initialStyles);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setIsLoading(true);
      const category = searchParams.get('category');
      const style = searchParams.get('style');

      // If there are no filters, use the initialProducts
      if (!category && !style) {
        if (initialProducts) {
          setProducts(initialProducts);
        } else {
          setProducts([]);
        }
        setIsLoading(false);
        return;
      }

      const queryParams = new URLSearchParams();
      if (category) queryParams.append('where[category.id][equals]', category);
      if (style) queryParams.append('where[style.id][equals]', style);

      try {
        const response = await fetch(`/api/products?${queryParams.toString()}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching filtered products:', error);
        setProducts([]); // Set to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [searchParams, initialProducts]);

  const handleCategoryChange = (newCategory: string | null) => {
    const currentStyle = searchParams.get('style') || undefined;
    const params = new URLSearchParams();
    if (newCategory && newCategory !== "all") params.set('category', newCategory);
    if (currentStyle) params.set('style', currentStyle);
    router.push(`/catalogo?${params.toString()}`);
  };

  const handleStyleChange = (newStyle: string | null) => {
    const currentCategory = searchParams.get('category') || undefined;
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (newStyle && newStyle !== "all") params.set('style', newStyle);
    router.push(`/catalogo?${params.toString()}`);
  };

  return (
    <>
      <FiltersControlCategory
        categories={categories}
        styles={styles}
        onCategoryChange={handleCategoryChange}
        onStyleChange={handleStyleChange}
        selectedCategory={searchParams.get('category') || null}
        selectedStyle={searchParams.get('style') || null}
      />
      <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {isLoading ? (
          <SkeletonSchema grid={3} />
        ) : products.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          products.map((product) => (
            <div className="p-1 md:basis-1/2 lg:basis-1/3 group" key={product.id}>
              <ProductCard {...product as ProductType} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CatalogClient;
