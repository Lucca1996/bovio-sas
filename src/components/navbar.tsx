"use client";

import { Heart, ShoppingCart, User, User as UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { MenuList } from "./menu-list";
import { ItemsMenuMobile } from "./items-menu-mobile";
import { ToggleTheme } from "./toggle-theme";
import { IconButton } from "@/app/(frontend)/components/icon-button";

export const NAVBAR_HEIGHT = "4rem"; // 64px

export const Navbar = ({ user }: { user: { email: string } | null }) => {
    const router = useRouter();

    return (
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 border-b  h-[4rem]">
            <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
                <h1 className="text-3xl cursor-pointer" onClick={() => router.push("/")}>
                    Bovio
                    <span className="font-bold">SAS</span>
                </h1>

                <div className="items-center justify-between hidden sm:flex">
                    <MenuList />
                </div>

                <div className="flex sm:hidden">
                    <ItemsMenuMobile />
                </div>

                <div className="flex items-center justify-between gap-2 sm:gap-7">
                    
                        {user ?
                        <div>

                        <div className="flex justify-between gap-2">
                        
                            <IconButton
                                        onClick={() => router.push("/dashboard")}
                                        icon={<User size={20} />}
                                        className="text-gray-600"
                                        />
                        <IconButton
                                    onClick={() => router.push("/favorites")}
                                    icon={<Heart size={20} />}
                                    className="text-gray-600"
                                    />
                        <IconButton
                                    onClick={() => router.push("/favorites")}
                                    icon={<ShoppingCart size={20} />}
                                    className="text-gray-600"
                                    />
                        </div>
                                    </div>
                         : 
                        <button onClick={() => router.push("/login")} >Iniciar sesión</button>}
                    <ToggleTheme />
                </div>
            </div>
        </div>
    );
};
