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
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Elegí la forma que más te convenga para ser parte de este sueño federal
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-[#CECECE] p-8 transition-all hover:border-black hover:shadow-lg">
                <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-black p-4">
                        <Heart className="h-8 w-8 text-white" />
                    </div>
                </div>
                <h3 className="mb-4 text-center text-2xl font-bold text-black">Donación Personal</h3>
            <div className="mb-6 space-y-3 text-center">
              <div className="rounded-sm p-1 w-full bg-[#dbdada] text-black hover:bg-black hover:text-white font-semibold">
                $5.000
              </div>
              <div className="rounded-sm p-1 w-full bg-[#dbdada] text-black hover:bg-black hover:text-white font-semibold">
                $10.000
              </div>
              <div className="rounded-sm p-1 w-full bg-[#dbdada] text-black hover:bg-black hover:text-white font-semibold">
                $20.000
              </div>
              <div className="rounded-sm p-1 w-full bg-black text-white hover:bg-black/90 font-bold">Otro Monto</div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Todo aporte suma y nos ayuda a cumplir el objetivo
            </p>
            </div>    
        </div>
      </div>
    </section>
    )
}