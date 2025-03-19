'use client';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  // ... other product fields (add any other fields you need)
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const { user, isLoading } = useUser();

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user?.favorites && user.favorites.length > 0) {
        try {
          const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ids: user.favorites,
            }),
          });
          if (response.ok) {
            const data = await response.json();
            setFavorites(data as Product[]);
          } else {
            console.error('Failed to fetch favorites');
            setFavorites([]);
          }
        } catch (error) {
          console.error('Error fetching favorites:', error);
          setFavorites([]);
        }
      } else {
        setFavorites([]);
      }
    };

    if (user) {
      fetchFavorites();
    }
  }, [user]);

  const handleRemoveFromFavorites = async (productId: string) => {
    if (!user) return;
    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          userId: user.id,
          action: 'remove',
        }),
      });

      if (response.ok) {
        // Update the local state to reflect the change
        setFavorites(favorites.filter((fav) => fav.id !== productId));
      } else {
        console.error('Failed to remove from favorites');
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to view your favorites.</div>;
  }

  return (
    <div>
      <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Artículos favoritos
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Busca, compra, elimina tus artículos favoritos
                </p>
              </div>

              <Separator className="my-6" />

              <div className="space-y-6">
                {/* Información de favoritos */}
                <div className="space-y-4">
                  {favorites.length === 0 ? (
                    <p>No tienes artículos favoritos aún.</p>
                  ) : (
                    <ul className='grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10'>
                      {favorites.map((product) => (
                        <li key={product.id} className='p-1 md:basis-1/2 lg:basis-1/3 group'>
                          <Card className='p-4'>
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p>Precio: {product.price}</p>
                            <Button onClick={() => handleRemoveFromFavorites(product.id)}>
                              Eliminar de favoritos
                            </Button>
                          </Card>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Separator className="my-6" />

                {/* Acciones */}
                <div className="space-y-4"></div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
