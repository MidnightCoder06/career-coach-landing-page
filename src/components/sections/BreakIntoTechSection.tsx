import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const BreakIntoTechSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-display font-bold text-foreground mb-6">
                Break into tech from<br />
                any background
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master essential tech skills from the ground up. We collaborate with seasoned industry professionals 
                to develop comprehensive learning resources that provide you with the expertise and sought-after 
                capabilities required to secure your ideal position. Whether you're starting completely fresh, 
                our digital learning platform's innovative curriculum is designed specifically for your success.
              </p>
            </div>
            
            <Button className="btn-hero" size="lg">
              Explore Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakIntoTechSection;
