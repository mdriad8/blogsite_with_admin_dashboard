import React from "react";

const Button = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    secondary:
      "bg-slate-800 hover:bg-slate-900 text-white focus:ring-slate-500",
    outline:
      "border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700 focus:ring-slate-500",
  };

  const sizeClasses = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${widthClass} ${className || ""}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
