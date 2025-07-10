import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Music Video - Electric Dreams",
    description: "High-energy music video with dynamic color grading and rhythmic editing that perfectly syncs with the beat.",
    image: portfolio1,
    category: "Music Video",
    tags: ["Color Grading", "Motion Graphics", "Audio Sync"],
    duration: "3:45"
  },
  {
    id: 2,
    title: "Corporate Brand Film",
    description: "Professional corporate video showcasing company values with clean editing and storytelling.",
    image: portfolio2,
    category: "Commercial",
    tags: ["Corporate", "Storytelling", "Professional"],
    duration: "2:30"
  },
  {
    id: 3,
    title: "Documentary Series",
    description: "Character-driven documentary with careful pacing and emotional narrative structure.",
    image: portfolio3,
    category: "Documentary",
    tags: ["Documentary", "Narrative", "Interviews"],
    duration: "45:00"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects demonstrating expertise in various video editing styles and techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-portfolio slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary/90 rounded-full p-4 hover:bg-primary transition-colors">
                    <Play className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Duration Badge */}
                <Badge className="absolute top-4 right-4 bg-black/70 text-white border-0">
                  {item.duration}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;