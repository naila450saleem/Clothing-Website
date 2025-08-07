import React, { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";

export default function ViewToggle({ onViewChange }) {
  const [activeView, setActiveView] = useState("grid");

  const handleViewChange = (view) => {
    setActiveView(view);
    if (onViewChange) {
      onViewChange(view);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        title="Grid View"
        onClick={() => handleViewChange("grid")}
        className={`p-2 rounded ${
          activeView === "grid" ? "bg-black text-white" : "bg-gray-200 text-black"
        }`}
      >
        <FaTh className="text-4xl" />
      </button>
      <button
        title="List View"
        onClick={() => handleViewChange("list")}
        className={`p-2 rounded ${
          activeView === "list" ? "bg-black text-white" : "bg-gray-200 text-black"
        }`}
      >
        <FaList className="text-4xl" />
      </button>
    </div>
  );
}
