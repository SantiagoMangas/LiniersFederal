"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
    return(
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <div className="absolute inset-0">
                <img src="/celebrando.jpeg" alt="Equipo de voley" className="h-full w-full object-cover opacity-60"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"/>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    Liga Federal 2026
                </div>

                <h1 className="mb-6 text-balance text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">
                    Unidos por el
                <br />
                <span className="italic">Sueño Federal</span>
                </h1>

                <p className="mb-10 max-w-2xl text-pretty text-lg font-medium text-white/90 md:text-xl">
                    Ayudanos a representar a Bahía Blanca en la Liga Federal de Vóley 2026
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <button 
                        onClick={() => document.getElementById('donaciones')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-base font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <span className="relative z-10">Donar Ahora</span>
                        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-gray-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </button>

                    <button 
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative overflow-hidden rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl"
                    >
                        <span className="relative z-10">Conocé Más</span>
                    </button>
                </div>

                <div className="absolute bottom-8 animate-bounce">
                    <ArrowDown className="h-8 w-8 text-white" />
                </div>
            </div>
        </section>
    )
}