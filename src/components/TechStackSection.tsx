import { Badge } from "@/components/ui/badge"
import { Database, Zap, Palette, Mic, Brain, Smartphone } from "lucide-react"

const techStack = [
  { name: "Supabase", icon: Database, description: "Realtime DB & Auth" },
  { name: "GPT", icon: Brain, description: "AI Task Planning" },
  { name: "Tailwind", icon: Palette, description: "Beautiful UI" },
  { name: "Vapi.ai", icon: Mic, description: "Voice Summaries" },
  { name: "React", icon: Zap, description: "Fast & Responsive" },
  { name: "PWA", icon: Smartphone, description: "Mobile-First" }
]

const TechStackSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Built with Real-Time Tech
          </h3>
          <p className="text-muted-foreground">
            Not buzzwords. Actual technology that works.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div 
              key={tech.name}
              className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-soft hover:shadow-focus transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-bonsai rounded-lg flex items-center justify-center mb-3">
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <Badge variant="secondary" className="mb-2">
                {tech.name}
              </Badge>
              <p className="text-xs text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection