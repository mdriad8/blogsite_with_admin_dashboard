import React, { useEffect, useState } from "react";

const PortfolioCard = ({ company, delay = 0 }) => {
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
      <div className="p-6">
        <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center h-16 mb-4">
          <h3 className="text-xl font-bold text-slate-800">{company.logo}</h3>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {company.name}
        </h3>
        <p className="text-sm text-red-600 mb-3">{company.category}</p>
        <p className="text-slate-600 text-sm">{company.description}</p>
      </div>
      <div className="bg-slate-50 p-4 flex justify-between items-center">
        <span className="text-sm text-slate-500">Portfolio Company</span>
        <button
          className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
          aria-label={`Learn more about ${company.name}`}
        >
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
