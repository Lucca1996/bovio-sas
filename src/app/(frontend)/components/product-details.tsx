"use client";

import { useState } from "react";
import { ProductType } from "../types/product";
import { ProductSticker } from "./shared/product-sticker";
import { formatPrice } from "../lib/formatPrice";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleFavorite } from "../actions/favoriteActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
  product: ProductType;
  initialIsFavorite: boolean;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, initialIsFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const router = useRouter();

  const handleFavoriteClick = async () => {
    try {
      const newFavoriteStatus = await toggleFavorite(product.id);
      setIsFavorite(newFavoriteStatus);
      toast.success(newFavoriteStatus ? 
        "Producto añadido a favoritos" : 
        "Producto eliminado de favoritos"
      );
    } catch (error: any) {
      if (error.message === "Usuario no autenticado") {
        toast.error("Debes iniciar sesión para guardar favoritos");
        router.push("/login");
      } else {
        toast.error("Error al modificar favoritos");
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imagen del producto */}
      <div className="relative aspect-square">
        <img
          src={product.image || ''}
          alt={product.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Detalles del producto */}
      <div className=" flex-col gap-4">
<div className="flex justify-between my-20">

        <h1 className="text-3xl font-bold">{product.title}</h1>
        
          <ProductSticker 
            category={product.category.name} 
            style={product.style.title} 
            />

            </div>
        <p className="text-2xl font-bold text-primary">
          {formatPrice(product.price)}
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          {product.description}
        </p>

        <div className="flex gap-4 mt-6">
          <Button size="lg" className="flex-1">
            Agregar al carrito
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleFavoriteClick}
            className={isFavorite ? "text-red-500" : ""}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>

        {/* Contenido adicional */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Detalles del producto</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {product.contenido}
          </p>
        </div>
      </div>
    </div>
  );
}; 