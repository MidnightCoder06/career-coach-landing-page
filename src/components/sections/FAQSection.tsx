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
      answer: "Yes, you'll need either software engineering experience or a background in technical consulting. This foundation is essential for understanding the technical concepts and being able to effectively communicate complex solutions to clients and stakeholders in these alternative tech roles."
    },
    {
      question: "What's the advantage of these career paths over traditional coding jobs?",
      answer: "These roles are AI-resistant and represent the future of tech careers. While traditional software engineering positions are shrinking due to automation and market saturation, alternative tech roles like Solutions Engineering and Sales Engineering are experiencing rapid growth and offer better long-term career stability."
    },
    {
      question: "How is this different from other career programs?",
      answer: "We provide comprehensive personal coaching from your very first day through to negotiating your final job offers. Unlike other programs that leave you to figure things out alone, we guide you through every step of the career transition process with hands-on support and strategic guidance."
    },
    {
      question: "Will I receive personalized guidance and mentorship?",
      answer: "Yes, our founder will be with you throughout your entire career journey. You'll receive direct, personal guidance and support from day one through landing your new role, ensuring you have expert mentorship every step of the way."
    },
    {
      question: "What's the time commitment and learning format?",
      answer: "Our program combines online live instruction with self-paced projects, giving you flexibility while ensuring comprehensive learning. We guarantee you'll land a job within 90 days of program completion, with our structured approach designed to accelerate your career transition."
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
