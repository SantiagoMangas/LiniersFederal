'use client'

import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/liniersvoley_bahiablanca/"
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/liniers.voley.9?locale=es_LA"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      link: "https://wa.me/5492915093873?text=Hola,%20tengo%20dudas%20sobre%20cómo%20donar"
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:claudiocampera@hotmail.com"
    }
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-black blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-black blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <h2 className="mb-4 text-balance font-sans text-4xl font-black uppercase tracking-tight text-black md:text-5xl lg:text-6xl animate-fade-in">
            Contacto
          </h2>
          <div className="mx-auto h-1 w-24 bg-black transition-all duration-500 hover:w-32" />
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-gray-700 md:text-xl">
            Seguinos en redes y mantente al día con nuestro camino hacia la Liga Federal
          </p>
        </div>

        {/* Creative Social Media Grid */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                target="_blank"
                key={social.name}
                href={social.link}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-black"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-black transition-all duration-300 group-hover:bg-white">
                    <Icon className="h-8 w-8 text-white transition-all duration-300 group-hover:text-black group-hover:scale-110" />
                  </div>
                  <p className="font-bold text-black transition-colors duration-300 group-hover:text-white">
                    {social.name}
                  </p>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
              </a>
            )
          })}
        </div>
        <div className="group relative overflow-hidden rounded-2xl border-2 border-black bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="mb-2 inline-block rounded-full bg-black px-4 py-1">
              <p className="text-sm font-medium uppercase tracking-wide text-white">
                Club Liniers
              </p>
            </div>
            <p className="mb-4 text-2xl font-bold text-black md:text-3xl">
              Bahía Blanca, Buenos Aires
            </p>
            <p className="text-pretty leading-relaxed text-gray-700">
              Unidos por el vóley, unidos por Bahía Blanca, unidos por el sueño federal
            </p>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 h-2 w-16 bg-black transition-all duration-300 group-hover:w-24" />
          <div className="absolute bottom-0 right-0 h-2 w-16 bg-black transition-all duration-300 group-hover:w-24" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}