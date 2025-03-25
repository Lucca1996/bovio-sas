import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { getUser } from '../actions/getUser';
import { Product } from '@/payload-types';
import { ProductCard } from '../../components/shared/product-card';
import { ProductType } from '../../types/product';

export const dynamic = 'force-dynamic';

export default async function page() {

    const user = await getUser();


    return  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" text-center my-10">

                            <h1 className="text-3xl mt-9 font-bold text-gray-900 dark:text-white">
                                Articulos favoritos
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Elimina compra y accede a tus articulos favoritos
                            </p>
        </div>
                       

                        <Separator className="my-6" />

                       
                            {/* Información del Usuario */}
                            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                                {user?.favorites?.map((product) => {
                                    const prod = product as Product;
                                    return (
                                        <div className="p-1 md:basis-1/2 lg:basis-1/3 group" key={prod.id}>
                                            <ProductCard {...prod as ProductType} initialIsFavorite={true} />
                                        </div>
                                    );
                                })}
                                        </div>

                                <Separator className="my-6" />
                               
                                </main>

                           
                      
              
}
