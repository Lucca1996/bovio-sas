import type { Product as PayloadProduct } from '@/payload-types';

export type ProductType = Omit<PayloadProduct, 'id'> & {
    id: number,
    slug: string,
    title: string;
    image: string;
    style: {
        title: string;
        slug: string;
    };
    description: string;
    contenido: string;
    isActive: boolean;
    isFeatured: boolean;
    fecha: string;
    price: number;
    category: {
        name: string;
        slug: string;
        };

};