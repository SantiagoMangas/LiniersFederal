"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    { src: "/celebrando.jpeg", alt: "Equipo masculino celebrando" },
    { src: "/celebrando2.jpeg", alt: "Equipo femenino celebrando" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20 pb-32 text-center">
        <div className="mb-6 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
          <img 
            src="/Liniers_BB.png" 
            alt="Club Liniers" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-sm font-medium text-white">Liga Federal 2026</span>
        </div>

        <h1 className="mb-4 text-balance text-4xl font-black uppercase leading-[1.1] tracking-tight text-white md:mb-6 md:text-7xl lg:text-8xl">
          Unidos por el
          <br />
          <span className="italic">Sueño Federal</span>
        </h1>

        <p className="mb-8 max-w-2xl text-pretty text-base font-medium text-white/90 md:mb-10 md:text-xl">
          Ayudanos a representar a Bahía Blanca por sexto año consecutivo a nivel nacional. La Liga Federal Argentina de Voley 2026 es nuestro sueño y necesitamos del apoyo de toda la ciudad.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button 
            onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl md:py-4 md:text-base"
          >
            <span className="relative z-10">Donar Ahora</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-gray-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </button>

          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl md:py-4 md:text-base"
          >
            <span className="relative z-10">Conocé Más</span>
          </button>
        </div>

        <div className="absolute bottom-16 flex gap-2 md:bottom-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentImage === index 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-6 animate-bounce md:bottom-8">
          <ArrowDown className="h-6 w-6 text-white md:h-8 md:w-8" />
        </div>
      </div>
    </section>
  )
}