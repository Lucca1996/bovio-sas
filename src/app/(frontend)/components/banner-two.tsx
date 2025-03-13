"use client"
import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-react"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Los muebles mas pijudos del norte",
        link: "#",
    },
    {
        id: 2,
        title: "Te los vas a perder salame?",
        link: "#",
    },
    {
        id: 3,
        title: "Mas duros que el diegote papa",
        link: "#",
    },
    {
        id: 4,
        title: "Duran mas que tu novia cuando te hace aca",
        link: "#",
    },
]

export const BannerTwo = () => {
    const router = useRouter()
    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    
                ]}>
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <Card className="shadow-none border-none bg-transparent">

                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </div>
    )
}
