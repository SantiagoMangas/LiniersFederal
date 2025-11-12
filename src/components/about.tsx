import { Users, Trophy, Heart } from "lucide-react"

export function About() {
    return(<section id="about" className="bg-white py-20 px-4 md:py-32">
        <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-balance font-sans text-4xl font-black uppercase tracking-tight text-black md:text-5xl lg:text-6xl">
                    Nuestra Historia
                </h2>
                <div className="mx-auto h-1 w-24 bg-black" />
            </div><div className="grid gap-8 md:grid-cols-3">
          <div className="group text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-black p-6 transition-transform group-hover:scale-110">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">Tradición</h3>
            <p className="text-pretty leading-relaxed">
              El Club Liniers es historia viva del deporte bahiense. Durante décadas, nuestras canchas han formado
              campeones y personas de bien.
            </p>
          </div>

          <div className="group text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-black p-6 transition-transform group-hover:scale-110">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">Crecimiento</h3>
            <p className="text-pretty leading-relaxed">
              Nuestros equipos de vóley masculino y femenino crecieron con esfuerzo, disciplina y pasión. Hoy están
              listos para el desafío federal.
            </p>
          </div>

          <div className="group text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-black p-6 transition-transform group-hover:scale-110">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">Pasión</h3>
            <p className="text-pretty leading-relaxed">
              Cada entrenamiento, cada partido, cada sacrificio nos acerca al sueño de representar a Bahía Blanca a
              nivel nacional.
            </p>
          </div>
        </div>
      </div>
    </section>  
    )
}
