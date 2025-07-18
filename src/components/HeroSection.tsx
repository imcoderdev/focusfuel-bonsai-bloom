import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import heroBonsai from "@/assets/hero-bonsai.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                From IG-addict to{" "}
                <span className="bg-gradient-bonsai bg-clip-text text-transparent">
                  Focus Beast 🌱
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Stop feeling guilty about scrolling. Start feeling proud of your progress. 
                <br />
                <span className="font-medium text-primary">AI + dopamine + Gen-Z feels = productivity that actually works ✨</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Bonsai Banale Bhai 🌱
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="calm" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                See it in action
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-bonsai rounded-full border-2 border-background" />
                  <div className="w-8 h-8 bg-gradient-dopamine rounded-full border-2 border-background" />
                  <div className="w-8 h-8 bg-gradient-calm rounded-full border-2 border-background" />
                </div>
                <span>500+ students growing daily</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span>🔥 4.9/5 rating</span>
            </div>
          </div>

          {/* Right Content - Bonsai */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-bonsai rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Bonsai Container */}
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-focus">
                <img 
                  src={heroBonsai} 
                  alt="Growing Bonsai - Your Focus Journey"
                  className="w-80 h-60 object-cover rounded-2xl shadow-soft animate-bonsai-grow"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-soft animate-float">
                  🌱 Growing!
                </div>
                
                <div className="absolute -bottom-2 -left-4 bg-xp text-xp-foreground px-3 py-1 rounded-full text-sm font-medium shadow-soft animate-float" style={{ animationDelay: '0.5s' }}>
                  +25 XP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection