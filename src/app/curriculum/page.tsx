import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  Users, 
  Briefcase, 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Rocket,
  Target,
  FileText,
  MessageSquare,
  Zap,
  Award,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

export default function CurriculumPage() {
  const hybridRoles = [
    "Forward Deployed Engineer",
    "Business Engineer", 
    "Solutions Engineer",
    "Partner Engineer",
    "Sales Engineer",
    "Customer Success Engineer",
    "Technical Solutions Consultant",
    "Technical Support Engineer",
    "Solutions Architect",
    "Technical Account Executive"
  ];

  const phase1Days = [
    {
      day: "Day 1",
      title: "Orientation + Hybrid Role Deep Dive",
      items: [
        "What roles we are training for and why they're AI-resistant",
        "Understanding client-facing + business impact positions",
        "Market demand, salary ranges, and job descriptions"
      ]
    },
    {
      day: "Day 2", 
      title: "Career Positioning Fundamentals",
      items: [
        "Identifying transferable skills (coding + communication)",
        "How to frame \"Why Hybrid Engineer?\" in your career story",
        "Self-assessment: current skills vs role expectations"
      ]
    },
    {
      day: "Day 3",
      title: "Resume + LinkedIn Baseline Audit",
      items: [
        "Fellows submit current resumes + LinkedIn for mentor review",
        "Group walkthrough of strong vs weak examples",
        "Assignment: baseline edits (to be refined in Phase 3)"
      ]
    }
  ];

  const phase2Days = [
    { day: "Day 4", title: "Levels 1–2", topics: "Arrays, Hashmaps" },
    { day: "Day 5", title: "Levels 3–4", topics: "Stacks, Queues, Two Pointers" },
    { day: "Day 6", title: "Levels 5–6", topics: "Trees, Graphs" },
    { day: "Day 7", title: "Levels 7–8", topics: "Heaps, Sorting, Greedy" },
    { day: "Day 8", title: "Levels 9–10", topics: "Dynamic Programming, Backtracking" },
  ];

  const behavioralPrompts = [
    "What experience do you have working cross functionally with sales and product?",
    "Tell me about a time you worked with a difficult client.",
    "How do you explain a complex technical concept to a non-technical stakeholder?",
    "Give me an example where you had to balance technical trade-offs with business needs."
  ];

  const projects = [
    {
      number: 1,
      title: "Client Analytics Dashboard",
      description: "Build a dashboard that ingests customer data and visualizes insights.",
      hybridSkill: "Translating messy business data into actionable insights.",
      icon: Database
    },
    {
      number: 2,
      title: "API Integration + Automation Tool",
      description: "Create a service that integrates multiple APIs (Stripe, Slack, HubSpot) and automates workflows.",
      hybridSkill: "Explaining integrations in terms of business value.",
      icon: Code
    },
    {
      number: 3,
      title: "Cloud Migration Mini-Project",
      description: "Migrate a sample app (Node/React) from one major cloud provider (AWS/GCP/Azure) to a different one (add serverless / containers).",
      hybridSkill: "Explaining cost savings and scalability trade-offs.",
      icon: Cloud
    },
    {
      number: 4,
      title: "MCP (Model Context Protocol)",
      description: "Build an MCP server that provides contextual answers from APIs + a knowledge base.",
      hybridSkill: "Positioning AI assistants as cost-saving, support-enhancing solutions.",
      icon: Brain
    },
    {
      number: 5,
      title: "Databricks Data Pipeline",
      description: "Build an ETL pipeline that ingests raw data, transforms it, and presents insights.",
      hybridSkill: "Framing data pipelines as tools for churn reduction and growth.",
      icon: Database
    },
    {
      number: 6,
      title: "Snowflake Data Warehouse",
      description: "Consolidate multiple mock data sources into a Snowflake warehouse and run forecasting queries.",
      hybridSkill: "Explaining revenue forecasting to business stakeholders.",
      icon: Database
    },
    {
      number: 7,
      title: "NVIDIA GPU-Powered Service",
      description: "Deploy a lightweight image recognition model on GPU (CUDA/TensorRT) as an API hosted on DGX Cloud.",
      hybridSkill: "Showing how GPU acceleration enables real-time, client-facing use cases.",
      icon: Zap
    }
  ];

  const projectFormat = [
    { icon: MessageSquare, text: "Pre-sales mock call (requirements gathering)" },
    { icon: Target, text: "GTM planning session / roadmap influence" },
    { icon: Code, text: "Build + Live Demo / Presentation Practice" },
    { icon: FileText, text: "Documentation deliverable (1–2 page client-facing doc)" },
    { icon: Users, text: "Mock client call (handle objections & resistance)" },
    { icon: MessageSquare, text: "Post-sales mock call" },
    { icon: Zap, text: "Live debugging scenario with \"customer\" feedback" },
    { icon: Briefcase, text: "Integrate the project into fellow resume" }
  ];

  const phase4Weeks = [
    {
      week: "Week 9",
      title: "Interview Prep",
      description: "Deep dive into hybrid interview formats: coding, system design, behavioral, and client-facing. 3 rounds of full mock interviews with feedback offered each week.",
      required: true
    },
    {
      week: "Week 10",
      title: "AI Job Agent & Apprenticeships",
      description: "Setup + customization of AI-powered job application agent. Automate 100+ tailored applications. Paid apprenticeship opportunities from partners: Equity Works, PriorityQ, Redefining Reflection, InfluenceOS.",
      required: false
    },
    {
      week: "Week 11",
      title: "SQL Masterclass",
      description: "Focused training on SQL queries and analytics tasks that come up in hybrid interviews.",
      required: false
    },
    {
      week: "Week 12",
      title: "Stacking Roles",
      description: "Strategy for layering a SWE job alongside a hybrid role and/or stacking multiple hybrid roles (for those seeking multiple offers to work concurrently).",
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-6 py-16 relative">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
                <Calendar className="h-4 w-4 mr-2 inline" />
                9-Week Intensive Program
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Engineering Career
                <span className="block text-gradient-primary">Accelerator</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transform your engineering career with our comprehensive program designed to land you 
                high-paying, AI-resistant hybrid roles at top tech companies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#signup">
                  <Button className="btn-hero" size="lg">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Roles We Train For */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Roles We Train You For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                High-demand, AI-resistant positions that combine technical expertise with client-facing impact
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {hybridRoles.map((role, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Phase 1 – Foundations</h2>
                <p className="text-muted-foreground">Days 1–3</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {phase1Days.map((day, index) => (
                <Card key={index} className="card-premium hover-lift">
                  <CardHeader className="pb-4">
                    <Badge className="w-fit mb-2 bg-accent/10 text-accent border-accent/20">{day.day}</Badge>
                    <CardTitle className="text-xl">{day.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {day.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 2 */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Phase 2 – Technical Interview Assessment</h2>
                <p className="text-muted-foreground">Days 4–10</p>
              </div>
            </div>

            {/* DS&A Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                DS&A Mock Interviews (PriorityQ 10 Levels)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {phase2Days.map((day, index) => (
                  <Card key={index} className="card-premium hover-lift border-l-4 border-l-primary">
                    <CardContent className="p-5">
                      <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">{day.day}</Badge>
                      <h4 className="font-bold text-foreground mb-1">{day.title}</h4>
                      <p className="text-sm text-muted-foreground">{day.topics}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* System Design & Behavioral */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-premium">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-warning/10 text-warning border-warning/20">Day 9</Badge>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    System Design (1.5 days)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Morning: Full System Design #1 (e.g., "Design Twitter Feed")</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Afternoon: Full System Design #2 (e.g., "Design Notification System")</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Next Morning: Feedback session and discussion of trade-offs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent/10 text-accent border-accent/20">Day 10</Badge>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Behavioral Interviews (0.5 day)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Hybrid-role specific behavioral prompts:</p>
                  <ul className="space-y-2">
                    {behavioralPrompts.map((prompt, i) => (
                      <li key={i} className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3 italic">
                        "{prompt}"
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Deliverable */}
            <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Deliverable: Personal Interview Readiness Report</h3>
                    <p className="text-muted-foreground mb-4">
                      Scores and feedback on DS&A, system design, and behavioral performance with a custom prep track assignment.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/50 rounded-lg px-4 py-2">
                        <span className="font-semibold text-primary">Track A:</span>
                        <span className="text-muted-foreground ml-2">Needs deeper DS&A practice → detour to Interview Prep course</span>
                      </div>
                      <div className="bg-white/50 rounded-lg px-4 py-2">
                        <span className="font-semibold text-accent">Track B:</span>
                        <span className="text-muted-foreground ml-2">DS&A solid → continue with accelerator</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Phase 3 - Projects */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-warning to-warning/80 flex items-center justify-center text-warning-foreground font-bold text-xl shadow-lg">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Phase 3 – Projects</h2>
                <p className="text-muted-foreground">Weeks 3–8</p>
              </div>
            </div>

            {/* Project Format */}
            <Card className="card-premium mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Format for Each Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {projectFormat.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-secondary/30 rounded-lg p-3">
                      <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="card-premium hover-lift group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-warning/10 text-warning border-warning/20">
                        Project {project.number}
                      </Badge>
                      <project.icon className="h-6 w-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                      <p className="text-sm">
                        <span className="font-semibold text-accent">Hybrid Skill:</span>
                        <span className="text-muted-foreground ml-2">{project.hybridSkill}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 4 - Final Prep */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Phase 4 – Final Prep</h2>
                <p className="text-muted-foreground">Weeks 9–12</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {phase4Weeks.map((week, index) => (
                <Card key={index} className={`card-premium hover-lift ${week.required ? 'border-l-4 border-l-accent' : 'border-l-4 border-l-muted'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={week.required ? 'bg-accent/10 text-accent border-accent/20' : 'bg-muted text-muted-foreground'}>
                        {week.week}
                      </Badge>
                      {!week.required && (
                        <Badge variant="outline" className="text-xs">Optional</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mt-2">{week.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{week.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ongoing Support */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
              <CardContent className="p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4">Ongoing Post-Course Support</h2>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>Lifetime access to templates & recordings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>AI job agent access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>Alumni community for networking & referrals</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/#signup">
                    <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 flex-shrink-0">
                      Start Your Journey
                      <Rocket className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Career?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the next cohort and start your journey to a high-paying, AI-resistant hybrid engineering role.
              </p>
              <Link href="/#signup">
                <Button className="btn-hero" size="lg">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

