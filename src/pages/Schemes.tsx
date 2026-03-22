import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, ExternalLink, Calendar, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const Schemes = () => {
  const schemes = [
    {
      title: "Startup India Seed Fund Scheme",
      authority: "Department for Promotion of Industry and Internal Trade",
      amount: "Up to ₹50 Lakhs",
      deadline: "Ongoing",
      category: "Funding",
      description: "Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
      eligibility: ["Recognized by DPIIT", "Incorporated within 2 years", "Annual turnover not exceeding ₹25 Crores"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "MUDRA Yojana",
      authority: "Ministry of Micro, Small and Medium Enterprises",
      amount: "Up to ₹10 Lakhs",
      deadline: "Ongoing",
      category: "Loan",
      description: "Provides loans to non-corporate, non-farm small/micro enterprises for income-generating activities.",
      eligibility: ["Indian citizen", "Business plan", "No defaulter in any bank"],
      color: "from-primary to-primary-glow",
    },
    {
      title: "Stand-Up India Scheme",
      authority: "Ministry of Finance",
      amount: "₹10 Lakhs - ₹1 Crore",
      deadline: "Ongoing",
      category: "Loan",
      description: "Facilitates bank loans for SC/ST and women entrepreneurs for greenfield enterprises.",
      eligibility: ["SC/ST or Women entrepreneurs", "Between 18-55 years", "First-time entrepreneur"],
      color: "from-accent to-accent-glow",
    },
    {
      title: "Credit Guarantee Scheme",
      authority: "Ministry of MSME",
      amount: "Up to ₹2 Crores",
      deadline: "Ongoing",
      category: "Guarantee",
      description: "Provides collateral-free credit to micro and small enterprises.",
      eligibility: ["New or existing MSME", "No collateral required", "Manufacturing or service sector"],
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Atal Innovation Mission",
      authority: "NITI Aayog",
      amount: "Grants Available",
      deadline: "Rolling Basis",
      category: "Innovation",
      description: "Promotes innovation and entrepreneurship through various programs and financial support.",
      eligibility: ["Innovative startup idea", "Technology-driven solution", "Scalable business model"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "National SC-ST Hub",
      authority: "Ministry of MSME",
      amount: "Various Benefits",
      deadline: "Ongoing",
      category: "Support",
      description: "Provides handholding support to SC/ST entrepreneurs for government tenders and procurement.",
      eligibility: ["SC/ST entrepreneur", "Registered MSME", "Government tender participation"],
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Government Schemes</h1>
            <p className="text-muted-foreground text-lg">
              Explore funding opportunities, subsidies, and support programs
            </p>
          </div>

          {/* Filter Section */}
          <Card className="mb-8 animate-slide-up">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  All Schemes
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Funding
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Loans
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Subsidies
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Innovation
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemes.map((scheme, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${scheme.color} mb-4 flex items-center justify-center`}>
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{scheme.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{scheme.title}</CardTitle>
                  <CardDescription className="text-sm">{scheme.authority}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{scheme.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <IndianRupee className="w-4 h-4" />
                      <span className="font-semibold text-foreground">{scheme.amount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{scheme.deadline}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Eligibility:</h4>
                    <ul className="text-sm space-y-1">
                      {scheme.eligibility.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More & Apply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Export Guidance Section */}
          <Card className="mt-12 border-2 border-primary">
            <CardHeader className="bg-gradient-primary text-white">
              <CardTitle>Export Guidance & Government Procurement</CardTitle>
              <CardDescription className="text-white/80">
                Learn how to supply to government and export your products
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Government e-Marketplace (GeM)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Register and sell directly to government departments
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit GeM Portal
                  </Button>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Export Promotion Councils</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get support for international trade and exports
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Find Your Council
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
