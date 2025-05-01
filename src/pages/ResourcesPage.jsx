import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Book, Video, FileText, Users, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Startup School",
      description:
        "Free online program to help founders start and scale their companies.",
      icon: <Book className="w-8 h-8 text-red-600" />,
      link: "#",
    },
    {
      id: 2,
      title: "Founder Talks",
      description:
        "Video series featuring successful entrepreneurs sharing their experiences.",
      icon: <Video className="w-8 h-8 text-red-600" />,
      link: "#",
    },
    {
      id: 3,
      title: "Resource Library",
      description: "Comprehensive guides and templates for startup founders.",
      icon: <FileText className="w-8 h-8 text-red-600" />,
      link: "#",
    },
    {
      id: 4,
      title: "Founder Network",
      description: "Connect with other founders in our global community.",
      icon: <Users className="w-8 h-8 text-red-600" />,
      link: "#",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "How to Build a Successful Startup",
      category: "Startup Guide",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      id: 2,
      title: "Fundraising Strategies for Early-Stage Startups",
      category: "Fundraising",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    },
    {
      id: 3,
      title: "Building a Strong Company Culture",
      category: "Culture",
      readTime: "12 min read",
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                Founder Resources
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Everything you need to build and scale your startup
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-slate-50 rounded-lg p-6">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <Button variant="outline" fullWidth>
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-red-600">
                        {article.category}
                      </span>
                      <span className="text-sm text-slate-500">•</span>
                      <span className="text-sm text-slate-500">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {article.title}
                    </h3>
                    <Button variant="outline" fullWidth>
                      Read Article <ArrowRight size={16} className="ml-2" />
                    </Button>
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

export default Resources;
