"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SignupModal } from "./SignupModal";

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 3) {
        setCount(count + 1);
      }
    }, 500); // Adjust speed as needed

    return () => clearTimeout(timer);
  }, [count]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-background.jpg" 
          alt="Professional tech careers" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-hero font-bold text-primary-foreground mb-6 leading-tight">
            Struggling to Land a <span className="text-gradient-primary bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">Software Engineering</span> Job?
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover high-paying alternative tech careers that companies are desperately hiring for. Solutions Engineer, Sales Engineer, Forward Deployed Engineer and more.
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <Link href="https://calendly.com/jleconte36/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="btn-success group">
                Schedule Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 backdrop-blur-sm text-sm md:text-base px-4 md:px-6 max-w-[90vw]"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="whitespace-normal text-center leading-tight">
                Already chatted with our Founder? Get Started today!
              </span>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col items-center justify-center gap-6 text-primary-foreground/80 pb-16 md:pb-0">
            {/* Animated Counter - Centered */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">
                  <span className="inline-block min-w-[1ch] text-center font-bold text-lg">
                    {count}
                  </span>
                  {" "}Career Transitions and Counting!
                </span>
              </div>
            </div>
            
            {/* Other Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Average 38% Total Comp Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">90-Day Job Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Signup Modal */}
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
