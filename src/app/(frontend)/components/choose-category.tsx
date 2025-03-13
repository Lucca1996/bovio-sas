"use client";

import Link from 'next/link';
import React from 'react';
import type { Category } from '@/payload-types'; // Importamos el tipo correcto

interface Props{
    categories: Category[]
}

export const ChooseCategory: React.FC<Props> = ({categories}) => {
    
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
        <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Encontra lo que estabas buscando:</h3>
        <div className='grid gap-5 sm:grid-cols-3'>
            {categories && categories.length > 0 ? (
                categories.map((category) => (
                    <Link key={category.id}
                        href={`/category/${category.id}`} // Usamos el id, puedes cambiarlo si tienes otro slug.
                        className='relative max-w-xs mx-auto overflow-hidden bg-auto bg-no-repeat bg-center rounded-lg'
                    >
                    {category.image && <img src={category.image}
                            alt={category.name}
                            className='max-w-[270px] h-96 object-cover transition duration-300 ease-in-out rounded-lg hover:scale-110' />}
                        
                        <p className='absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg '>{category.name}</p>
                    </Link>
                ))
            ) : (
                <p>No se encontraron categorías.</p>
            )}
        </div>
    </div>
  );
};
