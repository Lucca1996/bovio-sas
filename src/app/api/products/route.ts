import { getPayload } from 'payload';
import config from '@/payload.config';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('where[category.id][equals]');
    const style = searchParams.get('where[style.id][equals]');
    const where: any = {};

    if (category) {
      where['category.id'] = {
        equals: category,
      };
    }

    if (style) {
      where['style.id'] = {
        equals: style,
      };
    }

    const { docs: products } = await payload.find({
      collection: 'products',
      depth: 2,
      where,
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json([], { status: 500 });
  }
}
