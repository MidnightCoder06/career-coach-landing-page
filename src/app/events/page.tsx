import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Admission Info Session",
      schedule: "Daily Monday — Saturday @ 9:00am - 9:00pm",
      type: "invite",
      description: "Learn about our alternative tech career programs and how to get started"
    },
    {
      title: "Live Technical Workshop",
      schedule: "Wednesdays @ 7:30 pm - 9:30 pm",
      type: "invite",
      description: "Hands-on workshop covering real-world tech scenarios"
    },
    {
      title: "Weekly Office Hours",
      schedule: "Sundays @ 6:30 pm - 7:30 pm", 
      type: "invite",
      description: "Get your questions answered by our career experts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Sign up for an event to learn more about studying at Thrive in Tech or drop in to hear a guest speaker talk about tech trends.
            </p>
            <Button className="btn-hero" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Events Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="card-premium hover-lift">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.schedule}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {event.type === "open" ? (
                        <Button className="w-full btn-success">
                          Register now
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full" disabled>
                          Invite only
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ASK A QUESTION
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Talk 1:1 with an Enrollment Advisor
              </h3>
              <p className="text-muted-foreground mb-8">
                Pick the date and time that works for you. Our Enrollment Advisors can answer any questions and help you with your next steps.
              </p>
              <Button className="btn-hero" size="lg">
                Schedule a 1:1 Call with an Advisor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
