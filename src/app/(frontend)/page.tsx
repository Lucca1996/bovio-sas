import React from "react";
import { ChooseCategory } from './components/choose-category';

import { BannerOne } from "./components/banner-one";
import { BannerTwo } from "./components/banner-two";
import { CarouselMain } from "./components/carousel-main";
import { BannerThree } from "./components/banner-three";
import { Equipamento } from "./components/equipamento";
import { FeaturedProducts } from "./components/featured-products";
import { getCategories } from "./components/getCategories";
import { getProducts } from "./components/getProducts";
import { getUser } from "./(authenticated)/actions/getUser";


export default async function page(){
  const categories = await getCategories(); // Obtiene las categorías
  const products = await getProducts(); // Obtiene las categorías
  const user = await getUser();
  
  const favoriteIds = user?.favorites?.map(fav => 
    typeof fav === 'number' ? fav : fav.id
  ) || [];

  return <main>
        <BannerOne />
        <CarouselMain />
        <BannerTwo />
        <FeaturedProducts products={products} initialFavorites={favoriteIds} />
        <BannerThree />
        <ChooseCategory categories={categories} />
        <Equipamento />
  </main>
}
