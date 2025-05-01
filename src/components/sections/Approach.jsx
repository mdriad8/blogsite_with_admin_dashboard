import React from "react";
import { useInView } from "../hooks/useInView";
import { Lightbulb, Microscope, Rocket, Target } from "lucide-react";
import ApproachCard from "../ui/ApproachCard";

const Approach = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const approaches = [
    {
      id: 1,
      title: "Identify",
      icon: <Lightbulb size={32} className="text-red-600" />,
      description:
        "We identify promising startups with innovative solutions to significant problems.",
    },
    {
      id: 2,
      title: "Evaluate",
      icon: <Microscope size={32} className="text-red-600" />,
      description:
        "Our team conducts thorough evaluations of business models, technology, and market potential.",
    },
    {
      id: 3,
      title: "Accelerate",
      icon: <Rocket size={32} className="text-red-600" />,
      description:
        "We provide resources, mentorship, and connections to accelerate growth and innovation.",
    },
    {
      id: 4,
      title: "Scale",
      icon: <Target size={32} className="text-red-600" />,
      description:
        "Our network and expertise help portfolio companies scale efficiently and effectively.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="approach">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Investment Approach
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We follow a systematic approach to identify, evaluate, and support
            high-potential technology startups throughout their journey.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {approaches.map((approach, index) => (
            <ApproachCard
              key={approach.id}
              approach={approach}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
