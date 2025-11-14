'use client'

import { Instagram, Facebook, MessageCircle, Mail, Heart, Circle } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/liniersvoley_bahiablanca/" },
    { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/liniers.voley.9?locale=es_LA" },
    { name: "WhatsApp", icon: MessageCircle, link: "https://wa.me/5492915093873?text=Hola,%20tengo%20dudas%20sobre%20cómo%20donar"},
    { name: "Email", icon: Mail, link: "mailto:claudiocampera@hotmail.com",  }
  ]

  const quickLinks = [
    { name: "Inicio", link: "#" },
    { name: "Equipo", link: "#gallery" },
    { name: "Sponsors", link: "#donate" },
    { name: "Contacto", link: "#contact" }
  ]

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      
      {/* Animated pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 animate-float">
          <Circle className="h-16 w-16" />
        </div>
        <div className="absolute top-32 right-32 animate-float-delayed">
          <Circle className="h-12 w-12" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-float">
          <Circle className="h-20 w-20" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <img 
                src="/Liniers_BB.png" 
                alt="Club Liniers" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="mb-4 text-sm text-gray-400 leading-relaxed">
              Unidos por el vóley, unidos por Bahía Blanca, unidos por el sueño federal.
            </p>
            <div className="inline-flex items-center gap-1 text-xs text-gray-500">
              <span>Hecho con</span>
              <Heart className="h-3 w-3 text-red-500 animate-pulse" />
              <span>en Bahía Blanca</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="group inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Seguinos
            </h3>
            <div className="flex justify-center gap-3 md:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 transition-colors group-hover:text-black" />
                    
                    {/* Ripple effect on hover */}
                    <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-all duration-500 group-hover:animate-ping" />
                  </a>
                )
              })}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Bahía Blanca, Buenos Aires
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-xs text-gray-500">
            © 2026 Club Liniers. Todos los derechos reservados.
          </p>

          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidad
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-white">
              Términos
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  )
}