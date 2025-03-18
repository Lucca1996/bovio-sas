import React from "react";
import { ChooseCategory } from './components/choose-category';
import { getPayload } from 'payload'; // Se importa getPayload
import config from '@/payload.config'; // Importamos la configuracion
import type { Category, Product } from '@/payload-types'; // Importamos el tipo correcto
import { BannerOne } from "./components/banner-one";
import { BannerTwo } from "./components/banner-two";
import { CarouselMain } from "./components/carousel-main";
import { BannerThree } from "./components/banner-three";
import { Equipamento } from "./components/equipamento";
import { FeaturedProducts } from "./components/featured-products";
import { getCategories } from "./components/getCategories";
import { getProducts } from "./components/getProducts";




export default async function page(){
  const categories = await getCategories(); // Obtiene las categorías
  const products = await getProducts(); // Obtiene las categorías
  return <main>
        <BannerOne />
        <CarouselMain />
        <BannerTwo />
        <FeaturedProducts products={products} />
        <BannerThree />
        <ChooseCategory categories={categories} />
        <Equipamento />


  </main>
}
