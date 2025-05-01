import React, { useEffect, useState } from "react";

const TeamCard = ({ member, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          {member.name}
        </h3>
        <p className="text-red-600 text-sm mb-3">{member.position}</p>
        <p className="text-slate-600 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
