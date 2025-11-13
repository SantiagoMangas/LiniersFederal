import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="bg-white py-20 px-4 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-12">
          <h2 className="mb-4 text-balance font-sans text-4xl font-black uppercase tracking-tight text-black md:text-5xl lg:text-6xl">
            Contacto
          </h2>
          <div className="mx-auto h-1 w-24 bg-black" />
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Seguinos en redes y mantente al día con nuestro camino hacia la Liga Federal
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <div className="bg-black text-white hover:bg-black/90 font-bold gap-2">
            <Instagram className="h-5 w-5" />
            Instagram
          </div>
          <div className="bg-black text-white hover:bg-black/90 font-bold gap-2">
            <Facebook className="h-5 w-5" />
            Facebook
          </div>
          <div className="bg-black text-white hover:bg-black/90 font-bold gap-2">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </div>
          <div className="border-2 border-black text-black hover:bg-black hover:text-white font-bold gap-2 bg-transparent">
            <Mail className="h-5 w-5" />
            Email
          </div>
        </div>

        <div className="rounded-lg border-2 border-black bg-secondary p-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">Club Liniers</p>
          <p className="mb-4 text-2xl font-bold text-black">Bahía Blanca, Buenos Aires</p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Unidos por el vóley, unidos por Bahía Blanca, unidos por el sueño federal
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Club Liniers - Bahía Blanca. Todos los derechos reservados.
        </p>
      </footer>
    </section>
  )
}
