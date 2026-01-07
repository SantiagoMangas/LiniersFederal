"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import Image from "next/image"

const premiumSponsors = [
  { name: "Inmobiliaria Tornquist", image: "/sponsors/LOGOINMOBILIARIATORNQUIST.png", tier: "premium" },
  { name: "La Chiara", image: "/sponsors/Logo-Rosa-Transparente.png", tier: "premium" },
  { name: "Moreno Insumos", image: "/sponsors/MorenoInsumos.jpeg", tier: "premium"},
  { name: "Core Vascular", image: "/sponsors/LOGOCOREVASCULA.png", tier: "premium" },
  { name: "Fusión", image: "/sponsors/fusion_logo.jpg", tier: "premium" },
  { name: "Coachirone", image: "/sponsors/Coachirone.jpeg", tier: "premium" },
  { name: "LabDiagnostic", image: "/sponsors/LabDiagnostic.jpeg", tier: "premium"},
  { name: "Wild Shrimp", image: "/sponsors/WildShrimp.jpeg", tier: "premium"},
  { name: "CelularesTF", image: "/sponsors/TFC.png", tier: "premium" },
]

const standardSponsors = [
  { name: "YPF Agro", image: "/sponsors/YPFAgro.png", tier: "standard" },
  { name: "Complejo Darregueira", image: "/sponsors/ComplejoDarregueira.jpeg", tier: "standard" },
  { name: "Points", image: "/sponsors/Points.png", tier: "standard" },
  { name: "Complejo Darregueira", image: "/sponsors/ComplejoDarregueira.jpeg", tier: "standard" },
  { name: "YPF Agro", image: "/sponsors/YPFAgro.png", tier: "standard" },
  { name: "Points", image: "/sponsors/Points.png", tier: "standard" },
]

export function Sponsors() {
  return (
    <section className="relative py-12 md:py-16 bg-black border-t border-b border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">
          Nuestros Sponsors
        </h2>
        <p className="text-center text-white/60 mb-6">
          Empresas que hacen posible el sueño
        </p>

        {/* Premium Sponsors */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="text-xl font-semibold text-white/90">Sponsors Premium</h3>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {premiumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative w-full h-40 md:h-52 bg-white rounded-2xl 
                           flex items-center justify-center
                           border-4 border-white shadow-2xl shadow-white/20
                           hover:scale-105 hover:shadow-white/50 hover:shadow-3xl
                           transition-all duration-500
                           overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                             translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                  />
                  
                  {/* Premium badge */}
                  <div className="absolute z-11 top-2 right-2 bg-yellow-400 text-black text-xs font-bold 
                                px-2 py-1 rounded-full shadow-lg">
                    PREMIUM
                  </div>
                  
                  <div className="relative z-10 w-full h-full p-2 md:p-4 flex items-center justify-center">
                    <Image
                      src={sponsor.image || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={384}
                      height={208}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Sponsor Name */}
                <p className="text-center text-white/80 font-medium mt-3 text-sm md:text-base">
                  {sponsor.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Sponsors */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white/80 mb-6 text-center">
            Sponsors Oficiales
          </h3>
          <div className="relative overflow-hidden">
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x">
              <div className="flex gap-8 animate-scroll hover:animation-paused">
                {[...Array(3)].map((_, setIndex) => (
                  standardSponsors.map((sponsor, index) => (
                    <div
                      key={`set-${setIndex}-${index}`}
                      className="flex-shrink-0 flex flex-col items-center"
                    >
                      <div className="w-52 h-32 md:w-64 md:h-40 bg-white/90 hover:bg-white 
                                 rounded-lg flex items-center justify-center
                                 border-2 border-white/30 hover:border-white
                                 hover:scale-105 transition-all duration-300 shadow-lg 
                                 overflow-hidden group"
                      >
                        <div className="w-full h-full p-2 flex items-center justify-center">
                          <Image
                            src={sponsor.image || "/placeholder.svg"}
                            alt={sponsor.name}
                            width={256}
                            height={160}
                            className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      
                      {/* Sponsor Name */}
                      <p className="text-center text-white/70 font-medium mt-2 text-xs md:text-sm">
                        {sponsor.name}
                      </p>
                    </div>
                  ))
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center relative">
          <p className="text-white/70 mb-5 text-base md:text-lg">
            ¿Querés que tu empresa sea parte de nuestra historia?
          </p>
          <a 
            href="#donate"
            className="inline-block group relative px-8 py-4 bg-white text-black font-bold text-lg 
                           rounded-full hover:bg-white/90 transition-all duration-300
                           hover:scale-105 hover:shadow-2xl hover:shadow-white/50
                           overflow-hidden">
            <span className="relative z-10">Convertite en Sponsor</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 
                          translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </a>
          
          <div className="flex justify-center mt-6">
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-white/50 md:h-8 md:w-8" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * (208px + 32px) * 6));
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-1 * (256px + 32px) * 6));
            }
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .hover\\:animation-paused:hover {
          animation-play-state: paused;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}