import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Button from "../components/ui/Button";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Machine Learning Engineer",
      company: "IntelSense AI",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      description:
        "Join our team to develop cutting-edge AI solutions for enterprise clients.",
      logo: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "CloudForge",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Build the future of cloud infrastructure automation.",
      logo: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "SecureShield",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Lead product strategy for our cybersecurity solutions.",
      logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "HealthTech Solutions",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$140k - $180k",
      description: "Apply ML to revolutionize healthcare diagnostics.",
      logo: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    },
  ];

  const locations = [
    "All",
    "San Francisco, CA",
    "Remote",
    "Boston, MA",
    "Austin, TX",
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      selectedLocation.toLowerCase() === "all" ||
      job.location.toLowerCase() === selectedLocation.toLowerCase();

    return matchesSearch && matchesLocation;
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
                Find Your Next Opportunity
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Join the most innovative startups shaping the future of
                technology
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location} value={location.toLowerCase()}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Jobs List */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {job.title}
                          </h3>
                          <p className="text-slate-600">{job.company}</p>
                        </div>
                        <Button variant="outline">
                          Apply Now <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                      <p className="text-slate-600 mb-4">{job.description}</p>
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center text-slate-600">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Briefcase size={16} className="mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-slate-600">
                          <DollarSign size={16} className="mr-1" />
                          {job.salary}
                        </div>
                      </div>
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

export default Jobs;
