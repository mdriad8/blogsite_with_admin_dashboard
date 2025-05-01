import React from "react";
import { DollarSign, Users, GraduationCap } from "lucide-react";
import StatCard from "../ui/StatCard";
import { useInView } from "../hooks/useInView"; // ✅

const Stats = () => {
  const { ref, inView } = useInView({ threshold: 0.2 }); // ✅

  return (
    <section className="py-16 md:py-24 bg-white" id="stats">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <StatCard
            icon={<DollarSign size={32} className="text-red-600" />}
            value="$600B"
            label="Combined Valuation"
            delay={0}
          />
          <StatCard
            icon={<Users size={32} className="text-red-600" />}
            value="5,000"
            label="Funded Startups"
            delay={200}
          />
          <StatCard
            icon={<GraduationCap size={32} className="text-red-600" />}
            value="200"
            label="Startup School"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
