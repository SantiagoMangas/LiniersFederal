import { Plane, LucideIcon } from "lucide-react"

export function Card({ icon: Icon, title, description }: { 
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
      <Icon className="mb-4 h-10 w-10 text-white" />
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  )
}
