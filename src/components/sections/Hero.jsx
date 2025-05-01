import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-red-50 opacity-50"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
            <span className="relative">
              LOS Technologies
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-600"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 font-light">
            Make something people want.
          </p>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transforming disruptive ideas into world-changing companies. We
            invest in exceptional founders building the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="large">
              Our Portfolio <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="secondary" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
