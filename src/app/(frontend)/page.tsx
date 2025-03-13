import React from "react";
import { ChooseCategory } from './components/choose-category';
import { getPayload } from 'payload'; // Se importa getPayload
import config from '@/payload.config'; // Importamos la configuracion
import type { Category } from '@/payload-types'; // Importamos el tipo correcto
import { BannerOne } from "./components/banner-one";
import { BannerTwo } from "./components/banner-two";
import { CarouselMain } from "./components/carousel-main";


export const getCategories = async () => {
  try {
      const payloadConfig = await config; //Obtenemos la config
      const payload = await getPayload({ config: payloadConfig }); // Le pasamos la configuracion a getPayload
      const { docs: categories } = await payload.find({
        collection: 'categories',
        depth: 1, // Ajustar la profundidad en 1 para que me traiga el dato de la imagen.
        limit: 10,
        sort: '-createdAt'
      })
      return categories as Category[]; // Retornamos las categorias sin hacer un casteo
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
};

export default async function page(){
  const categories = await getCategories(); // Obtiene las categorías
  return <main>
        <BannerOne />
        <CarouselMain />
        <BannerTwo />
        <ChooseCategory categories={categories} />

  </main>
}
