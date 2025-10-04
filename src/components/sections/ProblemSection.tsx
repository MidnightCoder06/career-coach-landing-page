import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Clock, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "300+ Applications, Zero Responses",
      description: "The traditional software engineering market is oversaturated with bootcamp graduates and new CS majors."
    },
    {
      icon: Clock,
      title: "Endless Leetcode with No Progress",
      description: "Spending months grinding algorithms while companies hire from internal referrals and alternative paths."
    },
    {
      icon: Users,
      title: "Competing Against 1000s",
      description: "Every junior role receives hundreds of applications from mid level and senior engineers, making it nearly impossible to stand out."
    },
    {
      icon: AlertTriangle,
      title: "Skills Don't Match Market Reality",
      description: "What you learned doesn't align with what companies actually need right now."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-6">
            You&apos;re Not Alone in This Struggle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thousands of talented developers are facing the same challenges. The traditional path isn&apos;t working anymore.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="card-premium hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-warning/10 text-foreground px-6 py-4 rounded-full border border-warning/20 hover-lift transition-all duration-300 hover:bg-warning/15">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span className="font-medium">The good news? There&apos;s a better way forward.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
