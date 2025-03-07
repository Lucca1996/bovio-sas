"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

const dataFooter = [
    {
        id: 1,
        name: "Sobre nosotros",
        link: "#"
    },
    {
        id: 2,
        name: "Productos",
        link: "#"
    },
    {
        id: 3,
        name: "Mi cuenta",
        link: "#"
    },
    {
        id: 4,
        name: "Contactenos",
        link: "#"
    },
]
export const Footer = () => {
    const router = useRouter()
    return (
        <footer className="mt-4">

            <div className="w-full text-center max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">

                    <h2 className="text-3xl" onClick={() => router.push("/")}>
                        Bovio
                        <span className="font-bold">SAS</span>
                    </h2>

                    <ul className="flex flex-wrap mt-5 justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.link} className="hover:underline me-4 sm:me-6">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; 2025 Bovio SA. Todos los derechos reservados.
                </span>
                <div className="grid place-self-center sm:flex justify-between mt-6">

                    <Link href="#" className="hover:underline ml-4 sm:ml-6">
                        Aviso de privacidad
                    </Link>
                    |
                    <Link href="#" className="hover:underline ml-4 sm:ml-6">
                        Términos y condiciones
                    </Link>
                    |
                    <Link href="#" className="hover:underline ml-4 sm:ml-6">
                        Política de cookies
                    </Link>
                    |
                    <Link href="#" className="hover:underline ml-4 sm:ml-6">
                        Política de retención de datos
                    </Link>
                    |
                    <Link href="#" className="hover:underline ml-4 sm:ml-6">
                        Política de seguridad
                    </Link>

                </div>
            </div>
        </footer>
    )
}
