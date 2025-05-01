import React, { useEffect, useState } from "react";

const StatCard = ({ icon, value, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg border border-slate-100 flex flex-col items-center justify-center transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mb-4">{icon}</div>
      <div className="text-3xl font-bold text-slate-900 mb-2">{value}</div>
      <div className="text-slate-600 text-center">{label}</div>
    </div>
  );
};

export default StatCard;
