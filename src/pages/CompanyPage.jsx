import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Search, Filter, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";

const Companies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "FinTech",
    "Healthcare",
    "SaaS",
  ];

  const companies = [
    {
      id: 1,
      name: "IntelSense AI",
      category: "Artificial Intelligence",
      description:
        "Enterprise AI solutions for business intelligence and predictive analytics.",
      fundingStage: "Series B",
      fundingAmount: "$45M",
      location: "San Francisco, CA",
      yearFounded: 2020,
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      id: 2,
      name: "CloudForge",
      category: "Cloud Computing",
      description: "Next-generation cloud infrastructure automation platform.",
      fundingStage: "Series A",
      fundingAmount: "$25M",
      location: "Seattle, WA",
      yearFounded: 2021,
      image:
        "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    },
    {
      id: 3,
      name: "SecureShield",
      category: "Cybersecurity",
      description: "Advanced threat detection and prevention for enterprises.",
      fundingStage: "Series C",
      fundingAmount: "$80M",
      location: "Boston, MA",
      yearFounded: 2019,
      image:
        "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    },
    {
      id: 4,
      name: "HealthTech Solutions",
      category: "Healthcare",
      description: "AI-powered diagnostic tools for healthcare providers.",
      fundingStage: "Series B",
      fundingAmount: "$35M",
      location: "Austin, TX",
      yearFounded: 2020,
      image:
        "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg",
    },
    {
      id: 5,
      name: "PayFlow",
      category: "FinTech",
      description: "Modern payment infrastructure for global commerce.",
      fundingStage: "Series D",
      fundingAmount: "$120M",
      location: "New York, NY",
      yearFounded: 2018,
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
    },
    {
      id: 6,
      name: "SalesMatrix",
      category: "SaaS",
      description: "AI-driven sales optimization and analytics platform.",
      fundingStage: "Series A",
      fundingAmount: "$18M",
      location: "Chicago, IL",
      yearFounded: 2021,
      image:
        "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg",
    },
  ];

  const filteredCompanies = companies.filter((company) => {
    const matchesCategory =
      selectedCategory.toLowerCase() === "all" ||
      company.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                Our Portfolio Companies
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Discover the innovative companies shaping the future of
                technology
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter size={20} className="text-slate-600" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedCategory === category.toLowerCase()
                        ? "bg-red-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCompanies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {company.name}
                        </h3>
                        <p className="text-sm text-red-600">
                          {company.category}
                        </p>
                      </div>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                        {company.fundingStage}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">{company.description}</p>
                    <div className="border-t border-slate-100 pt-4 mt-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500">Location</p>
                          <p className="font-medium text-slate-900">
                            {company.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500">Founded</p>
                          <p className="font-medium text-slate-900">
                            {company.yearFounded}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button variant="outline" fullWidth>
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
