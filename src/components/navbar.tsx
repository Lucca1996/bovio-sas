"use client";

import { User as UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { MenuList } from "./menu-list";
import { ItemsMenuMobile } from "./items-menu-mobile";
import { ToggleTheme } from "./toggle-theme";

export const NAVBAR_HEIGHT = "4rem"; // 64px

export const Navbar = ({ user }: { user: { email: string } | null }) => {
    const router = useRouter();

    return (
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 border-b h-[4rem]">
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
                        <button onClick={() => router.push("/dashboard")} > 
                        <div className="flex ">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <span className="text-xl font-bold text-primary">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4yKnjT4EmZwDGMxrPtjt4xJChaDC79N-AzzfU0uKs8LHI43gM3imE2MA5M6WzttveH8&usqp=CAU" alt="imagen generica de usuario" />
                                </span>
                        </div>
                        {user?.email} 
                        </div>
                        </button> : 
                        <button onClick={() => router.push("/login")} >Iniciar sesión</button>}
                    <ToggleTheme />
                </div>
            </div>
        </div>
    );
};
