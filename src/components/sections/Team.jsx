import React from "react";
import { useInView } from "../hooks/useInView";
import TeamCard from "../ui/TeamCard";

const Team = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const team = [
    {
      id: 1,
      name: "Osman Haider",
      position: "Founder & CEO",
      bio: "Osman Haidar has over 20 years of business experience in the FIN Tech industry",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjT0pe9iaziasg9IaPWI0Ob-tgjghOHA8yXYzF9RJ_m1575cevYRG0eCPqi07MHGxSr1pz-UeyeWHtNk3dion2T6luoJ2YH1JVpuUUiCBRpg09cWqO7X7R29Uj71jSr_p9O7OcE6D5c6gBzGor7AI4Z0SqlTsrQ-xvXnIRTvcuy2h8lJvmFprSv_c7eCU4/s320/WhatsApp%20Image%202025-05-01%20at%2012.23.58%20PM.jpeg",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Managing Partner",
      bio: "Ex-CTO of a Fortune 500 company. Expert in AI and machine learning technologies.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      name: "Rachel Park",
      position: "Investment Director",
      bio: "Specialized in SaaS and enterprise software. Led 20+ successful exits.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "Technical Advisor",
      bio: "Former Lead Architect at AWS. Deep expertise in cloud and infrastructure.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="team">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Meet the experienced professionals who identify promising
            opportunities and help founders build successful companies.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
