import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Shield, Zap, CheckCircle, PlayCircle } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  const benefits = [
    "1-on-1 career strategy session (15 minutes)",
    "Personalized career transition roadmap",
    "Resume & LinkedIn optimization guide",
    "Interview preparation for alternative roles",
    "Salary negotiation strategies",
    "30-day job search action plan"
  ];

  return (
    <section className="py-12 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="flex justify-center px-6 relative z-10">
        <div className="w-full max-w-4xl text-center">
          <div className="mb-8">
            <h2 className="text-display font-bold text-primary-foreground mb-6">
              Ready to Break Into Your Next Tech Role?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Book a free strategy call and I&apos;ll show you exactly how to position yourself 
              for these high-demand alternative careers.
            </p>
          </div>
          
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 mb-8 w-full">
            <CardContent className="py-8 pl-16 pr-12">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                What You&apos;ll Get in Your Strategy Call:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="https://calendly.com/jleconte36/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="success" size="lg" className="min-w-[280px] group">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              No sales pitch - genuine career guidance
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              15-minute time investment
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Immediate actionable insights
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
