import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, TrendingUp, Briefcase, Zap } from "lucide-react";

const SolutionSection = () => {
  const careers = [
    {
      title: "Customer Success Engineer",
      salary: "$110K - $160K",
      growth: "40% job growth",
      description: "Help customers achieve success with technical products through onboarding, training, and ongoing support.",
      skills: ["Customer Success", "Technical Support", "Relationship Building"],
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
      title: "Partner Engineer",
      salary: "$125K - $175K",
      growth: "35% job growth",
      description: "Build and maintain technical partnerships, integrations, and ecosystem relationships.",
      skills: ["API Integration", "Partnership Development", "Technical Strategy"],
      highlight: "Strategic Role"
    },
    {
      title: "Business Engineer",
      salary: "$120K - $170K",
      growth: "45% job growth",
      description: "Bridge business and engineering teams to drive technical decisions and product strategy.",
      skills: ["Business Analysis", "Technical Strategy", "Cross-functional Leadership"],
      highlight: "Leadership Track"
    },
    {
      title: "Solutions Engineer",
      salary: "$120K - $180K",
      growth: "45% job growth",
      description: "Bridge the gap between sales and engineering. Help customers implement technical solutions.",
      skills: ["Technical Communication", "Problem Solving", "Customer Success"],
      highlight: "Versatile Role"
    },
    {
      title: "Forward Deployed Engineer",
      salary: "$140K - $190K",
      growth: "50% job growth",
      description: "Work directly with customers to implement and customize software solutions on-site.",
      skills: ["On-site Implementation", "Customer Collaboration", "System Integration"],
      highlight: "High Impact"
    },
    {
      title: "Technical Account Executive",
      salary: "$150K - $220K",
      growth: "25% job growth",
      description: "Manage enterprise accounts with technical expertise, driving revenue through technical relationships.",
      skills: ["Account Management", "Technical Sales", "Enterprise Relations"],
      highlight: "Top Earner"
    },
    {
      title: "Solutions Architect",
      salary: "$135K - $185K",
      growth: "40% job growth",
      description: "Design and architect technical solutions for complex customer requirements and enterprise needs.",
      skills: ["System Architecture", "Solution Design", "Technical Leadership"],
      highlight: "Senior Role"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {careers.map((career, index) => (
            <Card key={index} className="card-premium hover-lift group relative overflow-hidden">
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {career.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-accent font-semibold">
                    {career.salary}
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
              and help you land interviews within 60 days.
            </p>
            <Button className="btn-hero" size="lg">
              View Curriculum
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
