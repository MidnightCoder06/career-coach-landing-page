"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Do I need prior technical background to succeed?",
      answer: "Absolutely not! We welcome career changers from every industry - marketing, sales, finance, education, and beyond. Our curriculum starts with foundational concepts and progressively builds your technical expertise. Many of our most successful graduates came from completely non-technical backgrounds."
    },
    {
      question: "What's the advantage of these career paths over traditional coding jobs?",
      answer: "These roles combine technical skills with business strategy and customer interaction, making them less saturated and more lucrative. You'll enjoy better job security, higher compensation packages, and the opportunity to directly impact business outcomes while using your technical knowledge."
    },
    {
      question: "How is this different from other career programs?",
      answer: "We specialize exclusively in high-demand alternative tech roles rather than traditional programming. Our approach includes strategic career positioning, industry networking, and hands-on experience with real business scenarios. You'll graduate with both skills and connections."
    },
    {
      question: "Will I receive personalized guidance and mentorship?",
      answer: "Absolutely! Each participant gets paired with an experienced industry mentor who provides weekly one-on-one sessions, career strategy development, and ongoing support. You'll also have access to our community of professionals and alumni network."
    },
    {
      question: "What background or qualifications do I need to start?",
      answer: "The most important qualification is your dedication to making a career change. We accept students from all educational and professional backgrounds. Basic computer literacy is helpful, but we'll guide you through everything else step-by-step."
    },
    {
      question: "What's the time commitment and learning format?",
      answer: "Most students complete the program in 4-8 months, studying 8-15 hours per week. Our flexible format lets you learn around your current schedule - evenings, weekends, or whenever works best. All materials remain accessible indefinitely for future reference."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It's your gateway to a career in alternative tech roles. With our program, you'll gain the skills, 
              confidence, and portfolio to stand out in the competitive world of technology careers.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Plus className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
