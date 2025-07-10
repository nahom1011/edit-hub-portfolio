import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cinematic
            <span className="text-gradient block">Video Editor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting compelling visual stories through expert editing, color grading, and post-production excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-hero group"
              onClick={scrollToPortfolio}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;