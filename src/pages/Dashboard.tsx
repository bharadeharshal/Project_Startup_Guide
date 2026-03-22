import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  MapPin,
  TrendingUp,
  BookOpen,
  Building2,
  LogOut,
  Sparkles,
} from "lucide-react";

const Dashboard = () => {
  const features = [
    {
      title: "AI Idea Validator",
      description: "Get instant AI-powered feedback on your startup idea's potential and market fit",
      icon: Lightbulb,
      link: "/idea-validator",
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Supplier Finder",
      description: "Find nearby suppliers and resources for your business using location-based search",
      icon: MapPin,
      link: "/supplier-finder",
      gradient: "from-accent to-accent-glow",
    },
    {
      title: "Business Roadmap",
      description: "Get a step-by-step plan for launching and growing your startup",
      icon: TrendingUp,
      link: "/roadmap",
      gradient: "from-success to-green-400",
    },
    {
      title: "Training Courses",
      description: "Learn essential business skills through expert-curated video courses",
      icon: BookOpen,
      link: "/courses",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Government Schemes",
      description: "Explore funding opportunities, subsidies, and support programs",
      icon: Building2,
      link: "/schemes",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                StartupGuide
              </h1>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your Entrepreneurial Journey
            </h2>
            <p className="text-xl text-white/90">
              Everything you need to turn your startup idea into reality - AI guidance, resources, and expert knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <Card
                className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Ideas Validated</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-muted-foreground">Suppliers Connected</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-success mb-2">500+</div>
              <div className="text-muted-foreground">Courses Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
