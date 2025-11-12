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
            Competir en la Liga Federal implica viajar por todo el país. Necesitamos tu apoyo para cubrir los gastos y
            hacer realidad este sueño.
          </p>
        </div>
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card 
            icon={Plane}
            title="Viajes"
            description="Traslados a distintas provincias para cada fecha del torneo"
            />
            <Card 
            icon={Hotel}
            title="Alojamiento"
            description="Estadías para ambos equipos durante las competencias"
            />
            <Card 
            icon={Shirt}
            title="Indumentaria"
            description="Equipamiento profesional para representar al club"
            />
            <Card
            icon={TrendingUp}
            title="Logística"
            description="Gestíon, coordinación y gastos operativos del torneo"
            />
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">Meta de Recaudación</h3>
            <p className="text-3xl font-black text-white">$0</p>
          </div>
          <div className="mb-3 h-4 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-0 bg-white transition-all duration-500" />
          </div>
          <p className="text-sm text-white/70">Cada peso nos acerca al sueño federal. ¡Tu aporte hace la diferencia!</p>
        </div>
      </div>
    </section>
    )
}