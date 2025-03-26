import { getPayload } from 'payload';
import config from '@/payload.config';
import { ProductType } from "../types/product";

export async function getProduct(slug: string) {
  try {
    const payload = await getPayload({ config: await config });
    const { docs: products } = await payload.find({
      collection: 'products',
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 2,
    });

    if (!products[0]) return null;

    const product = products[0];
    return {
      id: product.id,
      slug: product.slug,
      title: product.title,
      image: product.image,
      style: {
        title: typeof product.style === 'object' ? product.style.title : '',
        slug: typeof product.style === 'object' ? product.style.slug : '',
      },
      category: {
        name: typeof product.category === 'object' ? product.category.name : '',
        slug: typeof product.category === 'object' ? product.category.slug : '',
      },
      description: (product as any).description || '',
      contenido: (product as any).contenido || '',
      isActive: product.isActive,
      isFeatured: product.isFeatured,
      fecha: product.publishedAt,
      price: product.price,
    } as ProductType;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
} 