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
    { url: 'chivas/chivas(14).jpeg', alt: 'Equipo femenino 4' },
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
    { url: 'chivos/chivos(8).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(9).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(10).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(11).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(12).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(13).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(14).jpeg', alt: 'Equipo masculino 4' },
    { url: 'chivos/chivos(15).jpeg', alt: 'Equipo masculino 4' },   
  ],
  entrenando: [
    { url: 'entrenando/entrenando(1).jpeg', alt: 'Entrenando 1' },
    { url: 'entrenando/entrenando(2).jpeg', alt: 'Entrenando 2' },
    { url: 'entrenando/entrenando(3).jpeg', alt: 'Entrenando 3' },
    { url: 'entrenando/entrenando(4).jpeg', alt: 'Entrenando 4' },
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
    { url: 'competencia/competencia(10).jpeg', alt: 'Competencia 10' },
    { url: 'competencia/competencia(11).jpeg', alt: 'Competencia 11' },
    { url: 'competencia/competencia(12).jpeg', alt: 'Competencia 12' },
    { url: 'competencia/competencia(13).jpeg', alt: 'Competencia 13' },
    { url: 'competencia/competencia(14).jpeg', alt: 'Competencia 14' },
    { url: 'competencia/competencia(15).jpeg', alt: 'Competencia 15' },
    { url: 'competencia/competencia(16).jpeg', alt: 'Competencia 16' },
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
};

const categories: Category[] = [
  { id: 'femenino', name: 'Equipo Femenino' },
  { id: 'masculino', name: 'Equipo Masculino' },
  { id: 'entrenando', name: 'Entrenando' },
  { id: 'competencia', name: 'Competencia' },
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
        
        {/* Contador de fotos */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Controles */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicadores */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
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
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <div className="max-w-5xl max-h-[90vh] w-full">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain"
        />
        <div className="text-white text-center mt-4 text-lg font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <section className="bg-black py-20 px-4 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Nuestro Equipo
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