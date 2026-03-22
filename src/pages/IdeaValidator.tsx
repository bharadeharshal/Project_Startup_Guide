import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Lightbulb, TrendingUp, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const IdeaValidator = () => {
  const [idea, setIdea] = useState("");
  const [location, setLocation] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleValidate = async () => {
    if (!idea.trim() || !location.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both your idea and location",
        variant: "destructive",
      });
      return;
    }

    setIsValidating(true);
    // Simulate AI validation
    setTimeout(() => {
      setResult({
        score: 7.5,
        verdict: "Promising",
        strengths: [
          "Growing market demand in your region",
          "Relatively low initial investment required",
          "Good profit margins possible",
        ],
        challenges: [
          "High competition from established players",
          "Seasonal demand fluctuations",
          "Need for strong marketing strategy",
        ],
        recommendations: [
          "Focus on a unique selling proposition to stand out",
          "Consider online sales channels in addition to local presence",
          "Start with a small pilot to test market response",
        ],
      });
      setIsValidating(false);
    }, 2000);
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">AI Idea Validator</h1>
            <p className="text-muted-foreground text-lg">
              Get instant AI-powered insights about your startup idea's potential
            </p>
          </div>

          {/* Input Form */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>Tell us about your idea</CardTitle>
              <CardDescription>
                The more details you provide, the better insights you'll receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Startup Idea</label>
                <Textarea
                  placeholder="E.g., I want to start a tea stall near the railway station in Amravati, serving fresh chai and snacks to commuters..."
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Location</label>
                <Textarea
                  placeholder="E.g., Amravati, Maharashtra"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  rows={2}
                  className="resize-none"
                />
              </div>
              <Button
                onClick={handleValidate}
                disabled={isValidating}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                {isValidating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing Your Idea...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Validate My Idea
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <div className="space-y-6 animate-scale-in">
              {/* Score Card */}
              <Card className="border-2 border-primary">
                <CardHeader className="bg-gradient-primary text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Validation Score</CardTitle>
                      <CardDescription className="text-white/80">
                        Based on AI analysis of market potential
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold">{result.score}/10</div>
                      <Badge className="mt-2 bg-white text-primary">
                        {result.verdict}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Strengths */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    Strengths & Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.strengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    Challenges to Consider
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="border-2 border-accent">
                <CardHeader className="bg-gradient-accent text-white">
                  <CardTitle>AI Recommendations</CardTitle>
                  <CardDescription className="text-white/80">
                    Actionable steps to improve your success chances
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {result.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Ready to take the next step?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" asChild>
                      <Link to="/supplier-finder">Find Suppliers</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/roadmap">Create Roadmap</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaValidator;
