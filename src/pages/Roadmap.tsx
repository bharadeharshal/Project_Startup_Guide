import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1: Planning & Research",
      duration: "Weeks 1-2",
      status: "current",
      tasks: [
        { name: "Validate your business idea", completed: true },
        { name: "Research target market and competitors", completed: true },
        { name: "Create initial business plan", completed: false },
        { name: "Calculate startup costs and budget", completed: false },
      ],
    },
    {
      title: "Phase 2: Legal & Setup",
      duration: "Weeks 3-4",
      status: "upcoming",
      tasks: [
        { name: "Register business name and entity", completed: false },
        { name: "Obtain necessary licenses and permits", completed: false },
        { name: "Open business bank account", completed: false },
        { name: "Set up accounting system", completed: false },
      ],
    },
    {
      title: "Phase 3: Resources & Suppliers",
      duration: "Weeks 5-6",
      status: "upcoming",
      tasks: [
        { name: "Identify and contact suppliers", completed: false },
        { name: "Negotiate pricing and terms", completed: false },
        { name: "Secure initial inventory or materials", completed: false },
        { name: "Set up workspace or location", completed: false },
      ],
    },
    {
      title: "Phase 4: Marketing & Launch",
      duration: "Weeks 7-8",
      status: "upcoming",
      tasks: [
        { name: "Create brand identity and logo", completed: false },
        { name: "Build website and social media presence", completed: false },
        { name: "Develop marketing strategy", completed: false },
        { name: "Launch soft opening or beta test", completed: false },
      ],
    },
    {
      title: "Phase 5: Growth & Optimization",
      duration: "Ongoing",
      status: "upcoming",
      tasks: [
        { name: "Gather customer feedback", completed: false },
        { name: "Optimize operations and processes", completed: false },
        { name: "Scale marketing efforts", completed: false },
        { name: "Explore expansion opportunities", completed: false },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "from-primary to-primary-glow";
      case "completed":
        return "from-success to-green-400";
      default:
        return "from-muted to-secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-success to-green-400 mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Business Roadmap</h1>
            <p className="text-muted-foreground text-lg">
              Your step-by-step guide to launching your startup
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Track your journey from idea to launch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Overall Completion</span>
                  <span>10%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full w-[10%] transition-all duration-500" />
                </div>
                <div className="flex gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <span>2 Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span>2 In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted" />
                    <span>16 Pending</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phases */}
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card
                key={index}
                className={`animate-slide-up ${phase.status === "current" ? "border-2 border-primary shadow-elegant" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{phase.title}</CardTitle>
                      <CardDescription>{phase.duration}</CardDescription>
                    </div>
                    <Badge
                      className={`${phase.status === "current" ? "bg-gradient-primary" : phase.status === "completed" ? "bg-success" : "bg-muted"} text-white`}
                    >
                      {phase.status === "current" ? "In Progress" : phase.status === "completed" ? "Completed" : "Upcoming"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${task.completed ? "bg-success" : "bg-muted border-2 border-border"}`}>
                          {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                          {task.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Section */}
          <Card className="mt-8 border-2 border-accent">
            <CardHeader className="bg-gradient-accent text-white">
              <CardTitle>💡 Pro Tips for Success</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li>• Take it one step at a time - don't rush the process</li>
                <li>• Document everything for future reference</li>
                <li>• Network with other entrepreneurs in your area</li>
                <li>• Stay flexible and adapt your plan as you learn</li>
                <li>• Celebrate small wins along the way</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
