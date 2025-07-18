import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Clock, Target } from "lucide-react"
import { useState } from "react"

const samplePlans = [
  {
    input: "Revise Physics Chapter 12",
    tasks: [
      { text: "Read key formulas & definitions", time: "15 min", type: "review" },
      { text: "Solve 5 example problems", time: "25 min", type: "practice" },
      { text: "Quick revision quiz", time: "10 min", type: "test" }
    ]
  },
  {
    input: "Prepare for Math exam",
    tasks: [
      { text: "Review last 3 chapters", time: "20 min", type: "review" },
      { text: "Practice integration problems", time: "30 min", type: "practice" },
      { text: "Mock test (previous year)", time: "15 min", type: "test" }
    ]
  }
]

const AITaskPlannerDemo = () => {
  const [currentPlan, setCurrentPlan] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGeneratePlan = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setCurrentPlan((prev) => (prev + 1) % samplePlans.length)
      setIsGenerating(false)
    }, 2000)
  }

  const plan = samplePlans[currentPlan]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Turn vague plans into action in 3 seconds
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            No more staring at blank notebooks wondering where to start. 
            GPT breaks down ANY study goal into doable chunks.
          </p>
          <div className="text-primary font-medium">
            "Bhai, planning bhi AI karega!" 🤖
          </div>
        </div>

        {/* Demo Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Input Demo */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <label className="text-sm font-medium text-muted-foreground">
                What do you need to study today?
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={plan.input}
                  readOnly
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <Sparkles className="absolute right-3 top-3 w-5 h-5 text-accent animate-pulse" />
              </div>
            </div>

            <Button 
              onClick={handleGeneratePlan}
              disabled={isGenerating}
              variant="hero" 
              size="lg"
              className="w-full group"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  AI thinking...
                </>
              ) : (
                <>
                  Generate My Focus Plan
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <span className="bg-card/50 backdrop-blur-sm px-3 py-1 rounded-full border">
                GPT + Supabase = smarter planning
              </span>
            </div>
          </div>

          {/* Right: Generated Plan */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="shadow-focus border-none">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-success">
                    Plan Generated
                  </span>
                </div>

                <div className="space-y-4">
                  {plan.tasks.map((task, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {task.type === 'review' && <Target className="w-5 h-5 text-primary" />}
                        {task.type === 'practice' && <Sparkles className="w-5 h-5 text-accent" />}
                        {task.type === 'test' && <Clock className="w-5 h-5 text-success" />}
                      </div>
                      
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {task.text}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">
                            ⏱️ {task.time}
                          </span>
                          <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded-full capitalize">
                            {task.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Focus Time:</span>
                    <span className="font-medium text-foreground">
                      {plan.tasks.reduce((total, task) => total + parseInt(task.time), 0)} minutes
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="calm" size="lg">
            Try it yourself →
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AITaskPlannerDemo