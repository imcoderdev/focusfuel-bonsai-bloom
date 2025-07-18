import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Timer, BarChart3, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Task Planner",
    description: "GPT breaks down 'Revise Physics' into 3 smart steps. No more overwhelming todo lists.",
    subtext: "Your chaotic brain meets organized AI. Finally, a plan that makes sense! 🤖",
    emoji: "🧠",
    gradient: "bg-gradient-bonsai"
  },
  {
    icon: Timer,
    title: "Focus Timer + Bonsai",
    description: "Pomodoro sessions that grow your virtual plant. Watch it bloom as you focus.",
    subtext: "Every 25 mins of focus = bonsai grows. Simple dopamine that actually helps! 🌿",
    emoji: "🌱",
    gradient: "bg-gradient-dopamine"
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description: "XP tracking, streak counters, and distraction insights. Know exactly where you stand.",
    subtext: "Your mom gets a weekly report. You don't get yelled at. Win-win! 📈",
    emoji: "📊",
    gradient: "bg-gradient-calm"
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Students Love{" "}
            <span className="bg-gradient-bonsai bg-clip-text text-transparent">
              FocusFuel
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            We get it. Your phone is addictive. Study feels overwhelming. Mom keeps asking about progress. 
            That's why we built something that actually gets you.
          </p>
          <div className="text-primary font-medium">
            "Focus kar bhai, kal regret karega." 🎯
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-focus transition-all duration-300 transform hover:scale-105 animate-fade-in border-none shadow-soft"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex w-16 h-16 ${feature.gradient} rounded-2xl items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
                  {feature.title}
                  <span className="text-2xl">{feature.emoji}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed mb-3">
                  {feature.description}
                </p>
                <p className="text-sm text-primary/80 text-center italic">
                  {feature.subtext}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border shadow-soft">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Powered by Supabase realtime + GPT intelligence
            </span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection