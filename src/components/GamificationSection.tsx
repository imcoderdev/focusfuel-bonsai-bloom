import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Flame, Trophy, Zap, Target, Star } from "lucide-react"

const GamificationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-calm">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Level Up Your Focus Game
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Turn boring study sessions into an addictive growth journey. 
            Your bonsai grows, you grow. Simple.
          </p>
          <div className="text-primary font-medium">
            "Dopamine de raha hai bhai!" 🎮
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* XP & Bonsai Growth */}
          <Card className="lg:col-span-2 shadow-focus border-none animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-bonsai rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                Bonsai Growth System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* XP Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current Level: Focus Padawan</span>
                  <span className="text-sm text-muted-foreground">1,250 / 2,000 XP</span>
                </div>
                <Progress value={62.5} className="h-3" />
                <div className="text-xs text-muted-foreground">
                  750 XP to unlock "Focus Ninja" 🥷
                </div>
              </div>

              {/* Bonsai Stages */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { stage: "Seedling", level: "1-5", active: false, emoji: "🌱" },
                  { stage: "Sprout", level: "6-15", active: true, emoji: "🌿" },
                  { stage: "Young Tree", level: "16-30", active: false, emoji: "🌳" },
                  { stage: "Master Bonsai", level: "31+", active: false, emoji: "🎋" }
                ].map((stage, index) => (
                  <div 
                    key={stage.stage}
                    className={`text-center p-3 rounded-lg transition-all ${
                      stage.active 
                        ? 'bg-primary/10 border-2 border-primary/30' 
                        : 'bg-muted/30 border border-border'
                    }`}
                  >
                    <div className="text-2xl mb-2">{stage.emoji}</div>
                    <div className="text-xs font-medium">{stage.stage}</div>
                    <div className="text-xs text-muted-foreground">Lvl {stage.level}</div>
                  </div>
                ))}
              </div>

              {/* Emergency Mode */}
              <div className="bg-streak/10 border border-streak/30 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-5 h-5 text-streak" />
                  <span className="font-medium text-streak">Emergency Mode</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Bro, 45 mins wasted on Instagram — let's get back! 🔥"
                  <br />
                  <span className="text-streak font-medium">Quick 15-min focus session to save your streak?</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Achievements & Streaks */}
          <div className="space-y-6">
            {/* Current Streak */}
            <Card className="shadow-soft border-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-dopamine rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-streak mb-2">🔥 4 Days</div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Don't break it now bhai!
                </p>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="shadow-soft border-none animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-xp" />
                  Recent Badges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "3-Day Streak", icon: "🔥", rarity: "common" },
                  { name: "10 Tasks Crushed", icon: "💪", rarity: "rare" },
                  { name: "Focus Warrior", icon: "⚡", rarity: "epic" }
                ].map((badge, index) => (
                  <div key={badge.name} className="flex items-center gap-3">
                    <div className="text-lg">{badge.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{badge.name}</div>
                      <Badge 
                        variant={badge.rarity === 'epic' ? 'default' : 'secondary'} 
                        className="text-xs"
                      >
                        {badge.rarity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weekly Stats */}
            <Card className="shadow-soft border-none animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-xp" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sessions</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Focus Time</span>
                  <span className="font-medium">6h 32min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">XP Earned</span>
                  <span className="font-medium text-xp">+420 XP</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamificationSection