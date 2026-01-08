"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

export default function WinWithJean() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Build Calendly URL with prefilled name
    const calendlyUrl = new URL("https://calendly.com/jleconte36/30min");
    calendlyUrl.searchParams.set("name", `${formData.firstName} ${formData.lastName}`);
    
    // Redirect to Calendly
    window.location.href = calendlyUrl.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center p-6">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <span className="text-3xl font-bold text-white italic">Not Just A Dev</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Stop Competing for SWE Jobs.
          <span className="block text-accent mt-2">Secure your $100k+/Year Engineering Role With My 9 Week Training Program.</span>
          <span className="block text-white/90 text-xl md:text-2xl mt-3 font-semibold">Receive Free Support Until You Succeed.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          Discover high-paying tech roles that companies are <em>desperate</em> to fill — 
          and learn how to land them in 90 days or less.
        </p>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>$110K - $220K roles</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>90-day job guarantee</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white font-semibold py-6 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        {/* Micro-copy */}
        <p className="mt-4 text-sm text-white/50">
          Free strategy call • No commitment required
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-up">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Let&apos;s get started
              </h2>
              <p className="text-gray-600">
                Enter your name to continue
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Jean"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="LeConte"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg rounded-xl mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

