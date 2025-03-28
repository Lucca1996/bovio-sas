"use client"

import { notFound } from 'next/navigation';
import { ProductDetails } from '../../components/product-details';
import { getUser } from '../../(authenticated)/actions/getUser';
import { useEffect, useState } from 'react';
import { ProductType } from '../../types/product';
import { useParams } from 'next/navigation';
import { SkeletonProduct } from './components/skeleton-product';

export const dynamic = 'force-dynamic';

export default function ProductPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            if (typeof slug === 'string') {
                const response = await fetch(`/api/products/${slug}`);
                if (!response.ok) {
                    notFound();
                }
                const fetchedProduct = await response.json();
                setProduct(fetchedProduct);
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            if (user && product) {
                setIsFavorite(user.favorites?.some((fav) => typeof fav === 'object' && fav.id === product.id) || false);
            }
        };

        fetchUser();
    }, [product]);

    if (isLoading) {
        return (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
                <SkeletonProduct />
            </main>
        );
    }

    if (!product) {
        notFound();
    }

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
            <ProductDetails product={product} initialIsFavorite={isFavorite} />
        </main>
    );
}
