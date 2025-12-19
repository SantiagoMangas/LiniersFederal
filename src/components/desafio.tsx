import { Plane, Hotel, Shirt, TrendingUp } from "lucide-react"
import {Card} from "../components/card"

export function Desafio() {
  return (
    <section className="bg-black py-20 px-4 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
            El Desafío Federal
          </h2>
          <div className="mx-auto h-1 w-24 bg-white" />
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            Competir en la Liga Federal Argentina 2026 implica permanecer durante 10 días en la ciudad de San Juan. Por eso es que necesitamos tu apoyo para cubrir los gastos y hacer realidad este sueño.
          </p>
        </div>
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card 
            icon={Plane}
            title="Viajes"
            description="Traslado a la ciudad de San Juan el día 2 de febrero y regreso a nuestra ciudad el día 12 de febrero."
            />
            <Card 
            icon={Hotel}
            title="Alojamiento"
            description="Estadías para ambos equipos durante las competencias"
            />
            <Card 
            icon={Shirt}
            title="Indumentaria"
            description="Equipamiento profesional para representar al club, cada conjunto de 15 camisetas."
            />
            <Card
            icon={TrendingUp}
            title="Logística"
            description="Inscripción, gestión, coordinación y gastos operativos del torneo"
            />
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8 backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
            <h3 className="text-xl font-bold text-white md:text-2xl">Meta de Recaudación</h3>
            <p className="text-2xl font-black text-white md:text-3xl">$23.350.000</p>
          </div>
          <div className="mb-3 h-4 w-full overflow-hidden rounded-full bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 shadow-lg shadow-purple-500/50" 
              style={{ width: '40%' }}
            />
          </div>
          <p className="text-sm text-white/60 mt-2">Cada peso nos acerca al sueño. ¡Tu aporte hace la diferencia!</p>
        </div>
      </div>
    </section>
    )
}