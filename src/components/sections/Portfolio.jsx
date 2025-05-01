import React from "react";
import { useInView } from "../hooks/useInView";
import PortfolioCard from "../ui/PortfolioCard";

const Portfolio = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const companies = [
    {
      id: 1,
      name: "IntelSense AI",
      logo: "INTELSENSE.AI",
      description:
        "Enterprise AI solutions for business intelligence and predictive analytics.",
      category: "Artificial Intelligence",
    },
    {
      id: 2,
      name: "SenseScan",
      logo: "SenseScan",
      description:
        "Computer vision technology for advanced security and retail analytics.",
      category: "Computer Vision",
    },
    {
      id: 3,
      name: "SenseChat",
      logo: "senseChat",
      description:
        "Conversational AI platform for customer support and engagement.",
      category: "Natural Language Processing",
    },
    {
      id: 4,
      name: "DataFlow",
      logo: "DataFlow",
      description: "Big data processing and analytics platform for enterprise.",
      category: "Data Infrastructure",
    },
    {
      id: 5,
      name: "CloudForge",
      logo: "CloudForge",
      description: "Cloud infrastructure automation and optimization tools.",
      category: "Cloud Computing",
    },
    {
      id: 6,
      name: "Quantum Labs",
      logo: "QUANTUM",
      description: "Quantum computing solutions for complex problem solving.",
      category: "Quantum Computing",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="companies">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            TOP LOS Technology Companies
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our portfolio includes some of the most promising technology
            companies that are defining the future across various sectors.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {companies.map((company, index) => (
            <PortfolioCard
              key={company.id}
              company={company}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
