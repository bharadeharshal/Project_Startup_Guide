import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Phone, Navigation, Search } from "lucide-react";
import { Link } from "react-router-dom";

const SupplierFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const mockSuppliers = [
    {
      name: "Maharashtra Packaging Supplies",
      category: "Packaging Materials",
      distance: "2.3 km",
      rating: 4.5,
      phone: "+91 98765 43210",
      address: "Shop No 12, Industrial Area, Amravati",
    },
    {
      name: "Quality Print Solutions",
      category: "Printing Services",
      distance: "3.1 km",
      rating: 4.8,
      phone: "+91 98765 43211",
      address: "Near Railway Station, Amravati",
    },
    {
      name: "Fresh Produce Wholesalers",
      category: "Raw Materials",
      distance: "1.5 km",
      rating: 4.3,
      phone: "+91 98765 43212",
      address: "Market Road, Amravati",
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Supplier Finder</h1>
            <p className="text-muted-foreground text-lg">
              Discover nearby suppliers and resources for your business
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>Find Suppliers Near You</CardTitle>
              <CardDescription>
                Search for specific products or services you need
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                  <Input
                    placeholder="E.g., packaging materials, printing services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Location</label>
                  <Input
                    placeholder="E.g., Amravati, Maharashtra"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <Button className="w-full bg-gradient-accent hover:opacity-90" size="lg">
                <Search className="w-4 h-4 mr-2" />
                Search Suppliers
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Nearby Suppliers</h2>
            {mockSuppliers.map((supplier, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{supplier.name}</h3>
                          <Badge variant="secondary">{supplier.category}</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-accent">
                          <span className="text-lg font-bold">{supplier.rating}</span>
                          <span>★</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{supplier.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Navigation className="w-4 h-4" />
                          <span>{supplier.distance} away</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{supplier.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:w-48">
                      <Button variant="default" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierFinder;
