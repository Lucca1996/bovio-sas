import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link"

export const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent >
                <Link href="/" className="block">Inicio</Link>
                <Link href="/" className="block">Productos</Link>
                <Link href="/" className="block">Contacto</Link>
            </PopoverContent>
        </Popover>
    )
}
