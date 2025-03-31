import { getUser } from "../actions/getUser";
import { CartClient } from "./components/cart-client";
import { Product } from "@/payload-types";

export default async function page() {
    const user = await getUser();

    // Filtrar solo los favoritos que son objetos Product completos
    const cartProducts = (user?.cart || []).filter((car): car is Product => 
        typeof car !== 'number' && car !== null
    );

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center my-10">
                <h1 className="text-3xl mt-9 font-bold text-gray-900 dark:text-white">
                    Carrito de compras
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Compra, elimina o accede a tus artículos del carrito
                </p>
            </div>

            <CartClient initialCart={cartProducts} />
        </main>
    );
}
