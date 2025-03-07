import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"



export default function Page() {
    return (
        <>
            <section className="" id="about">
                <div className="max-w-screen-xl flex-wrap items-end justify-between mx-auto mt-20 mb-40 p-4">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

                            <h2 className="font-heading mb-4 font-bold tracking-tight  text-3xl sm:text-5xl">
                                Sobre nosotros
                            </h2>
                        </div>
                    </div>
                    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
                        <h3 className='px-6 pb-4 text-3xl'>1. Introducción breve sobre la empresa</h3>
                        <div className="p-5 sm:p-20 text-center">
                            <h2 className="uppercase font-black text-xl text-primary">Innovación y diseño a medida</h2>
                        </div>
                        <div className="flex">
                            <div>

                                <p className="text-lg  text-gray-700 leading-relaxed mt-8 mb-8 px-4 md:px-8">Bovio SAS es una carpintería especializada en ofrecer soluciones personalizadas para proyectos empresariales y clientes particulares. Desde nuestra apertura, nos hemos comprometido con la calidad, la creatividad y la atención a medida para transformar espacios y necesidades con madera de la más alta calidad.
                                </p>

                            </div>
                            <img src="https://img.freepik.com/fotos-premium/carpintero-trabajando-maquinas-carpinteria-carpinteria-hombre-trabaja-casa_1037926-3.jpg"
                                alt="asdasd"
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-full hover:scale-110" />
                        </div>
                    </div>
                    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
                        <h3 className='px-6 pb-4 text-3xl sm:pb-8'>2. Equipo y profesionalismo</h3>
                        <div className="p-5 sm:p-20 text-center">
                            <h2 className="uppercase font-black text-xl text-primary">Transformamos tus ideas en material, con calidad y precisión</h2>
                        </div>
                        <div className="flex">
                            <img src="https://carpinteriasenmexico.com/wp-content/uploads/2024/09/herramientas-manuales.webp"
                                alt="asdasd"
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-full hover:scale-110" />
                            <div>

                                <p className="text-lg text-gray-700 leading-relaxed mt-8 mb-8 px-4 md:px-8">Contamos con un equipo de artesanos altamente calificados y diseñadores comprometidos con la excelencia. Nuestra dedicación y pasión por el trabajo bien hecho se reflejan en cada uno de los proyectos que realizamos, asegurando que nuestros clientes reciban siempre lo mejor.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
                        <h3 className='px-6 pb-4 text-3xl sm:pb-8'>3. Compromiso con la calidad y el cliente</h3>
                        <div className="p-5 sm:p-20 text-center">
                            <h2 className="uppercase font-black text-xl text-primary">En Bovio SAS pensamos en el futuro de tu negocio</h2>
                        </div>
                        <div className="flex">
                            <div>

                                <p className="text-lg text-gray-700 leading-relaxed mt-8 mb-8 px-4 md:px-8">En Bovio SAS, la satisfacción del cliente es nuestra prioridad. Nos aseguramos de que cada pieza que fabricamos y cada servicio que ofrecemos cumpla con los más altos estándares de calidad y dureza, garantizando la satisfacción y la confianza a largo plazo.
                                </p>

                            </div>
                            <img src="https://lat.eragroup.com/wp-content/uploads/2023/11/manos-estrechandose.jpg"
                                alt="asdasd"
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-full hover:scale-110" />
                        </div>
                    </div>
                    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
                        <h3 className='px-6 pb-4 text-3xl sm:pb-8'>4. Servicios ofrecidos</h3>
                        <div className="p-5 sm:p-20 text-center">
                            <h2 className="uppercase font-black text-xl text-primary">Soluciones a medida, para cada espacio y necesidad</h2>
                        </div>
                        <div className="flex">
                            <img src="https://alumacscm.es/wp-content/uploads/2024/04/servicios-carpinteria-de-aluminio.jpg"
                                alt="asdasd"
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-full hover:scale-110" />
                            <div>

                                <p className="text-lg text-gray-700 leading-relaxed mt-8 mb-8 px-4 md:px-8">Ofrecemos una amplia gama de servicios: desde muebles a medida para hogares y oficinas hasta soluciones empresariales que incluyen diseño y fabricación de mobiliario corporativo. Ya sea que necesites un producto estándar de nuestro catálogo o un diseño personalizado, nuestro equipo está listo para hacer realidad tus ideas con la mejor calidad.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
                        <div className="p-5 sm:p-20 text-center">
                            <h2 className="uppercase font-black text-xl text-primary">Te invitamos a explorar nuestro catálogo en línea o a ponerte en contacto con nosotros para crear juntos el proyecto perfecto. ¡Estaremos encantados de ayudarte!</h2>
                        </div>
                        <div className="flex">

                            <div className="max-w-md mx-auto sm:flex justify-center gap-8">
                                <Link href="#" className={buttonVariants()}>Comprar</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}