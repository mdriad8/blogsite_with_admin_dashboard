import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Award, Target, Users, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                About LOS Technologies
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                We're on a mission to empower the next generation of technology
                innovators.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  At LOS Technologies, we believe in the power of innovation to
                  transform industries and improve lives. Our mission is to
                  identify, support, and accelerate the growth of exceptional
                  technology companies that are solving meaningful problems.
                </p>
                <p className="text-lg text-slate-600">
                  We provide more than just capital – we offer strategic
                  guidance, operational expertise, and access to a global
                  network of industry leaders, technologists, and potential
                  partners.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <Award className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Excellence
                  </h3>
                  <p className="text-slate-600">
                    We set high standards and help companies achieve them.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <Target className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Focus
                  </h3>
                  <p className="text-slate-600">
                    We concentrate on high-impact opportunities.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <Users className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Community
                  </h3>
                  <p className="text-slate-600">
                    We build lasting relationships with founders.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <Rocket className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Innovation
                  </h3>
                  <p className="text-slate-600">
                    We embrace new ideas and technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Our History
              </h2>
              <div className="space-y-8">
                {[
                  {
                    year: 2020,
                    title: "Foundation",
                    desc: "LOS Technologies was founded with a vision to support innovative startups in the technology sector.",
                  },
                  {
                    year: 2021,
                    title: "First Fund",
                    desc: "Launched our first $100M fund focused on early-stage technology companies.",
                  },
                  {
                    year: 2022,
                    title: "Global Expansion",
                    desc: "Expanded operations to Europe and Asia, establishing a truly global presence.",
                  },
                  {
                    year: 2023,
                    title: "Startup School",
                    desc: "Launched LOS Startup School to provide structured guidance to early-stage founders.",
                  },
                ].map((item) => (
                  <div className="flex gap-6" key={item.year}>
                    <div className="flex-shrink-0 w-24 pt-2 text-right">
                      <span className="text-red-600 font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-4">
                  $600B+
                </div>
                <p className="text-slate-600">
                  Combined portfolio company valuation
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-4">
                  5,000+
                </div>
                <p className="text-slate-600">Startups funded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-4">50+</div>
                <p className="text-slate-600">Countries represented</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
