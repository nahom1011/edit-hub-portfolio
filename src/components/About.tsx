import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Clock, 
  Users, 
  Zap,
  Palette,
  Film,
  Music,
  Monitor
} from "lucide-react";
import editorPortrait from "@/assets/editor-portrait.jpg";

const skills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "DaVinci Resolve", level: 90 },
  { name: "After Effects", level: 85 },
  { name: "Color Grading", level: 92 },
  { name: "Audio Editing", level: 88 },
  { name: "Motion Graphics", level: 80 }
];

const stats = [
  { icon: Film, label: "Projects Completed", value: "200+" },
  { icon: Clock, label: "Hours of Content", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: Award, label: "Years Experience", value: "8+" }
];

const services = [
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction and cinematic grading to enhance your visual storytelling."
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Precise cutting, pacing, and narrative structure to create compelling content."
  },
  {
    icon: Music,
    title: "Audio Post",
    description: "Sound design, mixing, and audio enhancement for crystal-clear production."
  },
  {
    icon: Monitor,
    title: "Motion Graphics",
    description: "Dynamic graphics and animations to elevate your video content."
  }
];

const About = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="slide-up">
            <img 
              src={editorPortrait} 
              alt="Video Editor" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
            />
          </div>
          
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate video editor with over 8 years of experience in post-production. 
              I specialize in creating compelling visual narratives through expert editing, 
              color grading, and motion graphics.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My work spans across music videos, commercials, documentaries, and corporate content. 
              I believe every frame tells a story, and I'm dedicated to making yours unforgettable.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="card-glass text-center p-6 slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video editing services to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-glass p-6 text-center hover:border-primary/50 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;