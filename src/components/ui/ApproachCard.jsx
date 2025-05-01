import React, { useEffect, useState } from "react";

const ApproachCard = ({ approach, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-slate-50 p-6 rounded-lg border border-slate-100 transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mb-4">{approach.icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        {approach.title}
      </h3>
      <p className="text-slate-600">{approach.description}</p>
    </div>
  );
};

export default ApproachCard;
