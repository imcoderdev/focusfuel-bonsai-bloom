import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Arjun",
    title: "JEE Dropout Slayer",
    avatar: "🧑‍💻",
    content: "First time I studied 2 hours without guilt. My bonsai is thriving. So is my GPA. This app gets me! 🌱",
    rating: 5,
    location: "Delhi",
    achievement: "21-day streak"
  },
  {
    name: "Priya",
    title: "Focus Ke Papa",
    avatar: "👩‍🎓", 
    content: "Phone addiction was REAL. Now I can resist Instagram for 50+ mins straight. The dopamine hit from my growing bonsai > endless scroll! 🌿✨",
    rating: 5,
    location: "Mumbai",
    achievement: "15 hrs focused this week"
  },
  {
    name: "Rohan",
    title: "Distraction Destroyer",
    avatar: "👨‍🔬",
    content: "Bro, ye app magic hai. AI calls my parents weekly - they're actually PROUD now. No more nagging, just wholesome appreciation! 🙌",
    rating: 5,
    location: "Bangalore", 
    achievement: "Level 12 Bonsai Master"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real Students, Real Results
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Don't just take our word for it. See what Gen-Z students across India are saying.
          </p>
          <div className="text-primary font-medium">
            "Sab ke sab khush hai!" 😊
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="shadow-soft border-none hover:shadow-focus transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-xp text-xp" />
                  ))}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-bonsai rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.title}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">Latest Achievement:</div>
                  <div className="text-sm font-medium text-success">
                    🏆 {testimonial.achievement}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Active Students" },
            { value: "10,000+", label: "Focus Sessions" },
            { value: "4.9/5", label: "App Rating" },
            { value: "85%", label: "Streak Success" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="animate-fade-in"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection