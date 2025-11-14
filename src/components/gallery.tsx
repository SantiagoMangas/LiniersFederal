'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  url: string;
  alt: string;
}

interface Category {
  id: string;
  name: string;
}

interface GalleryData {
  [key: string]: GalleryImage[];
}

interface LightboxState {
  images: GalleryImage[];
  index: number;
}

interface ImageCarouselProps {
  images: GalleryImage[];
  onImageClick: (images: GalleryImage[], index: number) => void;
}

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

const galleryData: GalleryData = {
  femenino: [
    { url: 'chivas/chivas(1).jpeg', alt: 'Equipo femenino 1' },
    { url: 'chivas/chivas(2).jpeg', alt: 'Equipo femenino 2' },
    { url: 'chivas/chivas(3).jpeg', alt: 'Equipo femenino 3' },
    { url: 'chivas/chivas(4).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(5).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(6).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(7).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(8).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(9).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(10).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(11).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(12).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(13).jpeg', alt: 'Equipo femenino 4' },
    { url: 'chivas/chivas(15).jpeg', alt: 'Equipo femenino 4' },
  ],
  masculino: [
    { url: 'chivos/chivos(1).jpeg', alt: 'Equipo masculino 1' },
    { url: 'chivos/chivos(2).jpeg', alt: 'Equipo masculino 2' },
    { url: 'chivos/chivos(3).jpeg', alt: 'Equipo masculino 3' },
    { url: 'chivos/chivos(4).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(5).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(6).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(7).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(9).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(10).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(11).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(12).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(13).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(14).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(15).jpeg', alt: 'Equipo masculino 4' },   
  ],
  entrenando: [
    { url: 'entrenando/entrenando(3).jpeg', alt: 'Entrenando 3' },
    { url: 'entrenando/entrenando(5).jpeg', alt: 'Entrenando 5' },
    { url: 'entrenando/entrenando(6).jpeg', alt: 'Entrenando 6' },
    { url: 'entrenando/entrenando(7).jpeg', alt: 'Entrenando 7' },
    { url: 'entrenando/entrenando(8).jpeg', alt: 'Entrenando 8' },
    { url: 'entrenando/entrenando(9).jpeg', alt: 'Entrenando 9' },
    { url: 'entrenando/entrenando(10).jpeg', alt: 'Entrenando 10' },
    { url: 'entrenando/entrenando(11).jpeg', alt: 'Entrenando 11' },
    { url: 'entrenando/entrenando(12).jpeg', alt: 'Entrenando 12' },
    { url: 'entrenando/entrenando(13).jpeg', alt: 'Entrenando 13' }
  ],
  competencia: [
    { url: 'competencia/competencia(1).jpeg', alt: 'Competencia 1' },
    { url: 'competencia/competencia(2).jpeg', alt: 'Competencia 2' },
    { url: 'competencia/competencia(3).jpeg', alt: 'Competencia 3' },
    { url: 'competencia/competencia(4).jpeg', alt: 'Competencia 4' },
    { url: 'competencia/competencia(5).jpeg', alt: 'Competencia 5' },
    { url: 'competencia/competencia(6).jpeg', alt: 'Competencia 6' },
    { url: 'competencia/competencia(7).jpeg', alt: 'Competencia 7' },
    { url: 'competencia/competencia(8).jpeg', alt: 'Competencia 8' },
    { url: 'competencia/competencia(9).jpeg', alt: 'Competencia 9' },
    { url: 'competencia/competencia(11).jpeg', alt: 'Competencia 11' },
    { url: 'competencia/competencia(12).jpeg', alt: 'Competencia 12' },
    { url: 'competencia/competencia(13).jpeg', alt: 'Competencia 13' },
    { url: 'competencia/competencia(14).jpeg', alt: 'Competencia 14' },
    { url: 'competencia/competencia(17).jpeg', alt: 'Competencia 17' },
    { url: 'competencia/competencia(18).jpeg', alt: 'Competencia 18' },
    { url: 'competencia/competencia(19).jpeg', alt: 'Competencia 19' },
    { url: 'competencia/competencia(20).jpeg', alt: 'Competencia 20' },
    { url: 'competencia/competencia(21).jpeg', alt: 'Competencia 21' },
    { url: 'competencia/competencia(22).jpeg', alt: 'Competencia 22' },
    { url: 'competencia/competencia(23).jpeg', alt: 'Competencia 23' },
    { url: 'competencia/competencia(24).jpeg', alt: 'Competencia 24' },
    { url: 'competencia/competencia(25).jpeg', alt: 'Competencia 25' },
  ],
  staff:[
    { url: 'equipo-tecnico/staff(1).jpeg', alt: 'Staff 1' },
    { url: 'equipo-tecnico/staff(2).jpeg', alt: 'Staff 2' },
    { url: 'equipo-tecnico/staff(3).jpeg', alt: 'Staff 3' },
    { url: 'equipo-tecnico/staff(4).jpeg', alt: 'Staff 4' },
    { url: 'equipo-tecnico/staff(5).jpeg', alt: 'Staff 5' },
    { url: 'equipo-tecnico/staff(6).jpeg', alt: 'Staff 6' },
  ],
  noticias:[
    { url: 'noticias/noticias(1).png', alt: 'Noticia 1' },
    { url: 'noticias/noticias(2).png', alt: 'Noticia 2' },
    { url: 'noticias/noticias(3).png', alt: 'Noticia 3' },
    { url: 'noticias/noticias(4).png', alt: 'Noticia 4' },
    { url: 'noticias/noticias(5).png', alt: 'Noticia 5' },
    { url: 'noticias/noticias(6).png', alt: 'Noticia 6' },
    { url: 'noticias/noticias(7).png', alt: 'Noticia 7' },
    { url: 'noticias/noticias(8).png', alt: 'Noticia 8' },
    { url: 'noticias/noticias(9).png', alt: 'Noticia 9' },
    { url: 'noticias/noticias(10).png', alt: 'Noticia 10' },
    { url: 'noticias/noticias(11).png', alt: 'Noticia 11' },
    { url: 'noticias/noticias(12).png', alt: 'Noticia 12' },
    { url: 'noticias/noticias(13).png', alt: 'Noticia 13' },
    { url: 'noticias/noticias(14).png', alt: 'Noticia 14' },
    { url: 'noticias/noticias(15).png', alt: 'Noticia 15' },
    { url: 'noticias/noticias(16).png', alt: 'Noticia 16' },
  ]
};

const categories: Category[] = [
  { id: 'femenino', name: 'Equipo Femenino' },
  { id: 'masculino', name: 'Equipo Masculino' },
  { id: 'entrenando', name: 'Entrenando' },
  { id: 'competencia', name: 'Competencia' },
  { id: 'staff', name: 'Staff Técnico' },
  { id: 'noticias', name: 'Noticias' }
];

function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <div className="relative h-80 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="h-full w-full object-cover cursor-pointer"
          onClick={() => onImageClick(images, currentIndex)}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <>
          {/* Botones siempre visibles en móvil, semi-transparentes en desktop */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full backdrop-blur-sm z-20"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full backdrop-blur-sm z-20"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      <div className="max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[80vh] object-contain"
        />
        <div className="text-white text-center mt-4 text-base md:text-lg font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full backdrop-blur-sm z-20"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
      </button>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <section id="gallery" className="bg-black py-20 px-4 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Nuestros Equipos
          </h2>
          <div className="mx-auto h-1 w-24 bg-white" />
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
            Conocé a los protagonistas de esta historia
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="group">
              <ImageCarousel
                images={galleryData[category.id]}
                onImageClick={openLightbox}
              />
              <h3 className="mt-4 text-xl font-bold text-white text-center group-hover:text-white/80 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-white pl-6">
            <p className="mb-4 text-pretty text-xl italic leading-relaxed text-white md:text-2xl">
              "Representar a Bahía Blanca en la Liga Federal es el sueño de toda nuestra vida. Con el apoyo de todos,
              podemos lograrlo."
            </p>
            <footer className="text-sm font-medium text-white/70">— Capitanes de los equipos de vóley</footer>
          </blockquote>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}