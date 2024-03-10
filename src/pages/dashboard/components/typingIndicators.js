import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping animation-delay-200"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping animation-delay-400"></div>
    </div>
  );
};

export default TypingIndicator;
