import { CheckCircle, Circle } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: "🌤️",
    title: "Mood Check",
    description: "How are you feeling today?",
    detail: "Sets your UI theme and adjusts recommendations"
  },
  {
    number: "2", 
    icon: "🧠",
    title: "AI Task Planning",
    description: "Tell us what you need to study",
    detail: "GPT breaks it into 3 focused steps"
  },
  {
    number: "3",
    icon: "🧘‍♂️", 
    title: "Focus Session",
    description: "Pomodoro timer + Lofi + Bonsai",
    detail: "Watch your plant grow as you focus"
  },
  {
    number: "4",
    icon: "✅",
    title: "Reflection Time", 
    description: "Did you focus? What distracted you?",
    detail: "Honest feedback stored securely"
  },
  {
    number: "5",
    icon: "📈",
    title: "Weekly Dashboard",
    description: "XP, streaks, distraction patterns",
    detail: "See your growth over time"
  }
]

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple steps, powerful results. From chaos to focus in 5 easy stages.
          </p>
        </div>

        {/* Steps - Mobile: Vertical, Desktop: Horizontal */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/20 transform -translate-x-1/2" />
                )}
                
                {/* Step Circle */}
                <div className="relative z-10 w-24 h-24 bg-card border-4 border-primary/20 rounded-full flex items-center justify-center mb-4 shadow-soft hover:shadow-focus transition-all duration-300 group">
                  <div className="text-3xl group-hover:animate-bounce">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-soft">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 max-w-xs">
                  <h3 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {step.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border shadow-soft">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-sm font-medium">
              Takes 2 minutes to start. Works on any device.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection