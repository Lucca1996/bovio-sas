import { getPayload } from 'payload';
import { NextRequest, NextResponse } from 'next/server';
import config from '@/payload.config'; // Import your Payload config

export async function POST(req: NextRequest) {
  try {
    const payloadConfig = await config; // Get the config
    const payload = await getPayload({ config: payloadConfig }); // Pass the config
    const { productId, userId, action } = await req.json();

    if (!productId || !userId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const user = await payload.findByID({
      collection: 'users',
      id: userId,
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    let updatedFavorites = [...(user.favorites || [])];

    if (action === 'add') {
      if (!updatedFavorites.includes(productId)) {
        updatedFavorites.push(productId);
      }
    } else if (action === 'remove') {
      updatedFavorites = updatedFavorites.filter((id) => id !== productId);
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const updatedUser = await payload.update({
      collection: 'users',
      id: userId,
      data: {
        favorites: updatedFavorites,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating favorites:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
