import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Solutions Engineer at Stripe",
      company: "Stripe",
      salary: "$165K",
      image: "👩‍💻",
      quote: "I went from 0 interviews to 3 job offers in 45 days. The Solutions Engineer path was perfect for my technical background and communication skills.",
      previousRole: "Struggling Developer"
    },
    {
      name: "Marcus Rodriguez",
      role: "Sales Engineer at Snowflake", 
      company: "Snowflake",
      salary: "$190K",
      image: "👨‍💼",
      quote: "Best career decision ever. I'm making 60% more than I would as a junior developer, and I love the client interaction aspect.",
      previousRole: "Bootcamp Graduate"
    },
    {
      name: "Emily Park",
      role: "Technical Writer at MongoDB",
      company: "MongoDB", 
      salary: "$125K",
      image: "👩‍🎓",
      quote: "I thought my CS degree was useless after 200+ rejections. Now I'm documenting APIs for a top database company and working 100% remote.",
      previousRole: "Recent CS Graduate"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Transitions" },
    { number: "40%", label: "Average Salary Increase" },
    { number: "30", label: "Days to First Interview" },
    { number: "94%", label: "Job Placement Rate" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted to-secondary/50">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            Real Results from Real People
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            These are actual career transitions I&apos;ve helped facilitate in the past 12 months.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-premium hover-lift relative">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="btn-success text-xs">{testimonial.salary}</Badge>
                      <span className="text-xs text-muted-foreground">← {testimonial.previousRole}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-primary">Google</div>
            <div className="text-2xl font-bold text-primary">Microsoft</div>
            <div className="text-2xl font-bold text-primary">Stripe</div>
            <div className="text-2xl font-bold text-primary">Snowflake</div>
            <div className="text-2xl font-bold text-primary">MongoDB</div>
            <div className="text-2xl font-bold text-primary">Twilio</div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Companies where our students have landed roles
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
