import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, TrendingUp, Briefcase, Zap } from "lucide-react";

const SolutionSection = () => {
  const careers = [
    {
      title: "Solutions Engineer",
      salary: "$120K - $180K",
      growth: "45% job growth",
      description: "Bridge the gap between sales and engineering. Help customers implement technical solutions.",
      skills: ["Technical Communication", "Problem Solving", "Customer Success"],
      highlight: "High Demand"
    },
    {
      title: "Sales Engineer",
      salary: "$130K - $200K",
      growth: "30% job growth", 
      description: "Technical sales role with huge earning potential through commissions and bonuses.",
      skills: ["Technical Demos", "Relationship Building", "Solution Design"],
      highlight: "High Earnings"
    },
    {
      title: "Technical Writer",
      salary: "$80K - $140K",
      growth: "50% job growth",
      description: "Create documentation, tutorials, and technical content for developer tools.",
      skills: ["Writing", "API Documentation", "Developer Experience"],
      highlight: "Remote Friendly"
    },
    {
      title: "Developer Advocate",
      salary: "$110K - $160K",
      growth: "60% job growth",
      description: "Represent companies at conferences, create content, and build developer communities.",
      skills: ["Public Speaking", "Content Creation", "Community Building"],
      highlight: "Creative Freedom"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            Alternative Career Paths That Actually Hire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These roles are in high demand, pay extremely well, and value your technical background. 
            Companies are actively recruiting for these positions right now.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {careers.map((career, index) => (
            <Card key={index} className="card-premium hover-lift group relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="btn-success text-xs font-medium">
                  {career.highlight}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {career.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-accent font-semibold">
                    <DollarSign className="h-4 w-4" />
                    {career.salary}
                  </div>
                  <div className="flex items-center gap-1 text-primary font-medium">
                    <TrendingUp className="h-4 w-4" />
                    {career.growth}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {career.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Key Skills Needed:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-warning" />
              <h3 className="text-2xl font-bold text-foreground">Ready to Make the Switch?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;ll show you exactly how to position your existing skills for these high-demand roles 
              and help you land interviews within 30 days.
            </p>
            <Button className="btn-hero" size="lg">
              Get Your Personalized Career Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
