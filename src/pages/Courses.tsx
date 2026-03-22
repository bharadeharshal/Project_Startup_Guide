import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Users, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      title: "Business Communication Essentials",
      category: "Communication",
      duration: "4 hours",
      students: "2,450",
      level: "Beginner",
      description: "Master the art of professional communication for business success",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Digital Marketing Fundamentals",
      category: "Marketing",
      duration: "6 hours",
      students: "3,200",
      level: "Intermediate",
      description: "Learn to market your business online using social media and SEO",
      color: "from-primary to-primary-glow",
    },
    {
      title: "Financial Planning for Startups",
      category: "Finance",
      duration: "5 hours",
      students: "1,890",
      level: "Beginner",
      description: "Understand budgeting, cash flow, and basic accounting principles",
      color: "from-accent to-accent-glow",
    },
    {
      title: "Mushroom Farming Business",
      category: "Agriculture",
      duration: "8 hours",
      students: "1,450",
      level: "Beginner",
      description: "Complete guide to starting and managing a profitable mushroom farm",
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "E-commerce & Online Selling",
      category: "Business",
      duration: "7 hours",
      students: "4,100",
      level: "Intermediate",
      description: "Sell on Amazon, Flipkart, and build your own online store",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Business Laws & Licensing",
      category: "Legal",
      duration: "5 hours",
      students: "2,670",
      level: "Beginner",
      description: "Navigate legal requirements, licenses, and compliance for your business",
      color: "from-orange-500 to-red-400",
    },
  ];

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Training Courses</h1>
            <p className="text-muted-foreground text-lg">
              Learn essential business skills from expert instructors
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${course.color} mb-4 flex items-center justify-center`}>
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="default">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Popular Categories</CardTitle>
              <CardDescription>Browse courses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Business", "Marketing", "Finance", "Agriculture", "Legal", "Technology", "Communication"].map((category) => (
                  <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
