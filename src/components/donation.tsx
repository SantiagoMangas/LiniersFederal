import { Card } from "../components/card"

import { Heart, Building2, Users } from "lucide-react"

export function Donation(){
    return (
        <section id="donate" className="bg-white py-20 px-4 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-black uppercase tracking-tight text-black md:text-5xl lg:text-6xl">
            Cómo Podés Ayudar
          </h2>
          <div className="mx-auto h-1 w-24 bg-black" />
          <p className="text-black mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Elegí la forma que más te convenga para ser parte de este sueño federal
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-background border-2 border-border p-10 transition-all hover:border-black hover:shadow-lg">
                <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-black p-4">
                        <Heart className="h-8 w-8 text-white" />
                    </div>
                </div>
                <h3 className="mb-4 text-center text-2xl font-bold text-black">Donación Personal</h3>
            <div className="mb-8 space-y-3 text-center">
              <a 
                href="https://wa.me/5492915093873?text=Hola,%20quiero%20donar%20$5.000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-sm p-1 w-full bg-secondary text-black hover:bg-black hover:text-white font-semibold cursor-pointer"
              >
                $5.000
              </a>
              <a 
                href="https://wa.me/5492915093873?text=Hola,%20quiero%20donar%20$10.000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-sm p-1 w-full bg-secondary text-black hover:bg-black hover:text-white font-semibold cursor-pointer"
              >
                $10.000
              </a>
              <a 
                href="https://wa.me/5492915093873?text=Hola,%20quiero%20donar%20$20.000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-sm p-1 w-full bg-secondary text-black hover:bg-black hover:text-white font-semibold cursor-pointer"
              >
                $20.000
              </a>
              <a 
                href="https://wa.me/5492915093873?text=Hola,%20quiero%20hacer%20una%20donación%20personalizada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-sm p-1 w-full bg-black text-white hover:bg-black/90 font-semibold cursor-pointer"
              >
                Otro Monto
              </a>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Todo aporte suma y nos ayuda a cumplir el objetivo
            </p>
            </div>    

          <div className="bg-background rounded-xl border-2  border-border p-10 transition-all hover:shadow-lg hover:border-black">
            <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-black p-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-black">Sponsor</h3>
              <div className="mb-8 space-y-4">
                <div className="rounded-lg bg-secondary p-4">
                  <p className="mb-1 font-bold text-black">Bronce</p>
                  <p className="text-2xl font-black text-black">$50.000</p>
                  <p className="text-sm text-muted-foreground">Logo en redes sociales</p>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="mb-1 font-bold text-black">Plata</p>
                  <p className="text-2xl font-black text-black">$100.000</p>
                  <p className="text-sm text-muted-foreground">Logo en indumentaria</p>
                </div>
                <div className="rounded-lg bg-black p-4 text-white">
                  <p className="mb-1 font-bold">Oro</p>
                  <p className="text-2xl font-black">$200.000+</p>
                  <p className="text-sm text-white/70">Sponsor principal</p>
                </div>
              </div>
              <a 
                href="https://wa.me/5492915093873?text=Hola,%20quiero%20ser%20sponsor%20del%20torneo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center rounded-sm p-1 w-full bg-black text-white hover:bg-black/90 font-semibold cursor-pointer"
              >
                Contactar
              </a>
            </div>

            <div className="bg-background rounded-xl border-2  border-border p-10 transition-all hover:shadow-lg hover:border-black">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-black p-4">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-2xl font-bold text-black">Donación Grupal</h3>
            <p className="mb-8 text-pretty text-center leading-relaxed text-muted-foreground">
              Organizá una colecta con tu familia, amigos o compañeros de trabajo. Juntos podemos más.
            </p>
            <div className="mb-8 space-y-4">
              <div className="rounded-lg bg-secondary p-4 text-center">
                <p className="mb-2 text-sm font-medium text-muted-foreground">Sugerido por grupo</p>
                <p className="text-3xl font-black text-black">$30.000</p>
              </div>
            </div>
            <a 
              href="https://wa.me/5492915093873?text=Hola,%20quiero%20organizar%20una%20colecta%20grupal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center rounded-sm p-1 w-full bg-black text-white hover:bg-black/90 font-semibold cursor-pointer"
            >
              Organizar Colecta
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="rounded-xl border-2 border-black bg-black p-8 text-white">
            <h3 className="mb-3 text-2xl font-bold">¿Tenés dudas sobre cómo donar?</h3>
            <p className="mb-6 text-pretty text-white/80">Contactanos por WhatsApp y te ayudamos con el proceso</p>
            <a 
              href="https://wa.me/5492915093873?text=Hola,%20tengo%20dudas%20sobre%20cómo%20donar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black hover:bg-white/90 font-bold px-6 py-3 rounded-sm cursor-pointer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}