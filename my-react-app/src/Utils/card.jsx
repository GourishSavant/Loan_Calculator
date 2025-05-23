import React from "react";

export const Card = ({ children }) => {
  return (
    <div >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};
