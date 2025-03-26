"use client";

import { IconButton } from "../icon-button";
import { ProductSticker } from "./product-sticker";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import { ProductType } from "../../types/product";
import { formatPrice } from "../../lib/formatPrice";
import { useState } from "react";
import { toggleFavorite } from "../../actions/favoriteActions";
import { toast } from "sonner";
import { useFavoriteStore } from '@/store/useFavoriteStore';

interface ProductCardProps extends ProductType {
    onFavoriteRemoved?: () => void;
}

export const ProductCard = (props: ProductCardProps) => {
    const { style, category, slug, title, image, price, id, onFavoriteRemoved } = props;
    const router = useRouter();
    const [isFavorite, setIsFavorite] = useState(props.initialIsFavorite || false);
    const { updateFavoritesCount } = useFavoriteStore();

    const handleFavoriteClick = async () => {
        try {
            const newFavoriteStatus = await toggleFavorite(id);
            setIsFavorite(newFavoriteStatus);
            updateFavoritesCount(newFavoriteStatus);
            
            if (!newFavoriteStatus && onFavoriteRemoved) {
                onFavoriteRemoved();
            }

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
        <Card className="py-4 border border-gray-200 shadow-none">
            <CardContent className="relative flex items-center justify-center px-6 py-2 sm:h-[25rem]">
                <img
                    src={image}
                    alt="Image Featured"
                    className="h-80 object-cover"
                />
                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={() => router.push(`producto/${slug}`)}
                            icon={<Expand size={20} />}
                            className="text-gray-600"
                        />
                        <IconButton
                            onClick={console.log}
                            icon={<ShoppingCart size={20}  />}
                            className="text-gray-600"
                        />
                        <IconButton
                            onClick={handleFavoriteClick}
                            icon={<Heart size={20} fill={isFavorite ? "currentColor" : "none"} />}
                            className={`text-gray-600 ${isFavorite ? "text-red-500" : ""}`}
                        />
                    </div>
                </div>
            </CardContent>
            <div className="flex justify-between gap-4 px-8">
                <div>
                    <h3 className="text-lg font-bold text-center">{title}</h3>
                    <p className="text-bold text-center">{formatPrice(price)}</p>
                </div>
                <ProductSticker style={style.title} category={category.name} />
            </div>
        </Card>
    );
};
