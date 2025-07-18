import { Button } from "@/components/ui/button"
import { Github, Instagram, MessageCircle, Moon, Sun } from "lucide-react"
import { useState } from "react"

const FooterSection = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <footer className="py-16 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-bonsai rounded-lg flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold">FocusFuel EDU+</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Turn your focus into a superpower. Designed for Gen-Z students who want to beat phone addiction 
              and build real study habits that stick.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#help" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Made with ❤️ by <span className="font-medium text-primary">Team Achievers</span> for IIT Delhi Hackathon
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDark ? 'Light' : 'Dark'} Mode
            </Button>
            
            <div className="text-xs text-muted-foreground">
              © 2024 FocusFuel EDU+
            </div>
          </div>
        </div>

        {/* Fun Bottom Message */}
        <div className="text-center mt-8 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            "Kal se pakka start karunga" → "Today I actually did!" 🎯
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection