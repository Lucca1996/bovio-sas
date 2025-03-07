"use client";

import { useState } from "react";

const images = [
    "https://img.freepik.com/fotos-premium/taller-industrial-carpinteria-dos-hombres-trabajando-madera_116407-6348.jpg",
    "https://static.vecteezy.com/system/resources/previews/003/658/025/non_2x/a-man-works-in-a-joiner-s-shop-working-with-a-tree-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/387/457/non_2x/professional-carpenter-man-working-with-woodwork-industry-tool-construction-craftsman-person-workshop-with-timber-and-equipment-wood-work-free-photo.jpg",
    "https://st2.depositphotos.com/4946015/9976/i/950/depositphotos_99769824-stock-photo-man-doing-woodwork-in-carpentry.jpg",
    "https://st2.depositphotos.com/36771728/44864/i/450/depositphotos_448645688-stock-photo-carpenter-working-workshop-man-work.jpg",
    "https://static.vecteezy.com/system/resources/previews/032/626/259/non_2x/strong-woman-worker-builder-team-work-joiner-in-wood-workshop-lady-carpenter-staff-helping-man-working-making-furniture-hard-work-fix-wooden-board-photo.jpg",
    "https://media.istockphoto.com/id/530209574/es/foto/joven-hombre-carpintero-trabajando-con-madera-en-el-taller.jpg?s=1024x1024&w=is&k=20&c=7Y299hKLIgzOJnk-dovMkMJ6ZKjBOi86RWSgpBFOo-Y=",
    "https://media.istockphoto.com/id/1155739091/es/foto/hombre-trabajando-en-una-carpinter%C3%ADa-haciendo-muebles.jpg?s=1024x1024&w=is&k=20&c=A4e-2KBhgeAOajUZLpPDl05jY0F7gV2_N_IRioGBBks=",
    "https://img.freepik.com/fotos-premium/taller-industrial-carpinteria-dos-hombres-trabajando-madera_116407-6348.jpg",
    "https://static.vecteezy.com/system/resources/previews/003/658/025/non_2x/a-man-works-in-a-joiner-s-shop-working-with-a-tree-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/387/457/non_2x/professional-carpenter-man-working-with-woodwork-industry-tool-construction-craftsman-person-workshop-with-timber-and-equipment-wood-work-free-photo.jpg",
    "https://st2.depositphotos.com/4946015/9976/i/950/depositphotos_99769824-stock-photo-man-doing-woodwork-in-carpentry.jpg",
    "https://st2.depositphotos.com/36771728/44864/i/450/depositphotos_448645688-stock-photo-carpenter-working-workshop-man-work.jpg",
    "https://static.vecteezy.com/system/resources/previews/032/626/259/non_2x/strong-woman-worker-builder-team-work-joiner-in-wood-workshop-lady-carpenter-staff-helping-man-working-making-furniture-hard-work-fix-wooden-board-photo.jpg",
    "https://media.istockphoto.com/id/530209574/es/foto/joven-hombre-carpintero-trabajando-con-madera-en-el-taller.jpg?s=1024x1024&w=is&k=20&c=7Y299hKLIgzOJnk-dovMkMJ6ZKjBOi86RWSgpBFOo-Y=",
    "https://media.istockphoto.com/id/1155739091/es/foto/hombre-trabajando-en-una-carpinter%C3%ADa-haciendo-muebles.jpg?s=1024x1024&w=is&k=20&c=A4e-2KBhgeAOajUZLpPDl05jY0F7gV2_N_IRioGBBks=",
];

export default function Page() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const closeModal = () => setSelectedImage(null);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-10">Galería de Imágenes</h1>

                {/* Galería con diseño original */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-2 cursor-pointer ${index % 3 === 0 ? "col-span-2 row-span-2" : "" // Hacer que algunas imágenes ocupen más espacio
                                }`}
                            onClick={() => setSelectedImage(src)} // Hacer clic en la imagen para abrir el modal
                        >
                            <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img
                                src={src}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-300 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg font-semibold">Imagen {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal para ver imagen a tamaño completo */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={closeModal} // Cerrar modal al hacer clic fuera de la imagen
                    >
                        <div
                            className="relative max-w-3xl mx-auto p-4 bg-white rounded-lg"
                            onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic en la imagen
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 px-4 py-1 rounded-full bg-slate-950 opacity-85 text-white text-3xl"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedImage}
                                alt="Imagen seleccionada"
                                className="w-full h-auto max-h-[90vh] object-contain rounded-lg transition-transform duration-500"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
