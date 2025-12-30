"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, BookOpen, Award, Briefcase, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { SignupModal } from "@/components/sections/SignupModal";

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const processSteps = [
    {
      number: "1", 
      title: "Complete Your Admissions Interview",
      description: "Share your career goals and background during a comprehensive consultation with our enrollment team"
    },
    {
      number: "2",
      title: "Meet Your Mentor",
      description: "Connect with seasoned professionals who have successfully navigated the career path you're pursuing"
    },
    {
      number: "3",
      title: "Start Learning Real-World Skills",
      description: "Dive into our industry-focused curriculum designed around what employers actually need"
    },
    {
      number: "4",
      title: "Build Your Portfolio with Capstone Projects",
      description: "Develop compelling work samples that demonstrate your expertise to potential employers"
    },
    {
      number: "5",
      title: "Get Real-World Experience Through an Internship",
      description: "Gain hands-on experience by working directly with companies in our partner network"
    },
    {
      number: "6",
      title: "Optimize Your Resume & Profile",
      description: "Craft compelling professional materials that effectively showcase your new skills and experience"
    },
    {
      number: "7",
      title: "Personalized Interview Coaching",
      description: "Receive targeted preparation for both technical assessments and behavioral interview scenarios"
    },
    {
      number: "8",
      title: "Land Your Dream Job",
      description: "Secure your ideal position and successfully transition into your new technology career"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Blended Learning Model", 
      description: "Our programs seamlessly integrate digital coursework with interactive live sessions, providing maximum flexibility while ensuring comprehensive support throughout your journey."
    },
    {
      icon: Target,
      title: "Weekly Live Online Workshops",
      description: "Maintain momentum through regular interactive sessions with instructors, where you'll collaborate with peers and receive guidance on your ongoing assignments."
    },
    {
      icon: Briefcase,
      title: "Project-Based & Experiential Learning",
      description: "Our curriculum emphasizes hands-on application and practical experience, ensuring you develop the problem-solving skills essential for success in professional environments."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              How Thrive in Tech Works for You
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Whether you're seeking to transition into high-demand alternative tech positions or make your first entry into the technology sector, our comprehensive program serves as the ideal catalyst for your professional evolution.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our flexible career transition programs enable you to master new skills from your own space, fitting seamlessly around your current commitments and lifestyle. Below is a detailed walkthrough of our proven process.
            </p>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="card-premium hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* The 1% Difference Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Difference</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-premium hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Curriculum Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Curriculum</h2>
              <p className="text-lg text-muted-foreground">Developed by industry professionals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Always current and relevant
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our course content evolves continuously to match current market demands. We research emerging trends and employer requirements, then craft educational resources and practical assignments that prepare you for immediate employment success.
                </p>
                <p className="text-muted-foreground">
                  Our curriculum development team collaborates directly with experienced industry professionals to build comprehensive training modules and project assignments that provide you with the practical expertise employers are actively seeking.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Secure the career you've always wanted
                </h3>
                <p className="text-muted-foreground mb-6">
                  We understand that navigating the job market can be the most daunting aspect of changing careers. This is why our programs feature dedicated career support services and comprehensive employment preparation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Job Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Career Readiness Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Individual Career Mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Launch Your Alternative Technology Career Path Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Begin your transformation into a thriving tech professional with Thrive in Tech. Access expert mentorship, practical project experience, and comprehensive career placement assistance.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
