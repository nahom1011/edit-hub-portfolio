import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Camera,
  Linkedin
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@videoeditor.com",
    href: "mailto:hello@videoeditor.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: "#"
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 9AM - 6PM PST",
    href: "#"
  }
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "Twitter", href: "#" }
];

const Contact = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-glass p-8 slide-up">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="bg-input/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="bg-input/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-input/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Input placeholder="Music Video, Commercial, Documentary..." className="bg-input/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="bg-input/50 min-h-[120px]"
                />
              </div>
              
              <Button className="btn-hero w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 slide-up" style={{ animationDelay: "200ms" }}>
            {/* Contact Information */}
            <Card className="card-glass p-8">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      {item.href !== "#" ? (
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="card-glass p-8">
              <h3 className="text-xl font-bold mb-6">Follow my work</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors group"
                  >
                    <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Quick Response:</strong> I typically respond to inquiries within 24 hours. 
                  For urgent projects, feel free to call directly.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;