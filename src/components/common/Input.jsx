import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, error, fullWidth = true, className = "", ...props }, ref) => {
    return (
      <div className={`mb-4 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block rounded-md sm:text-sm focus:ring-1 ${
            error ? "border-red-500" : ""
          } ${fullWidth ? "w-full" : ""} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
