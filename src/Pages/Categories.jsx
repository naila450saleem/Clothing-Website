import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Ski & Snow Wear",
    sub: ["Ski Jackets", "Snow Pants", "Base Layers", "Snowboard Bags"],
  },
  {
    title: "Street Wear",
    sub: ["Pullover Hoodies", "Onesies", "Casual Shorts", "Bomber Jackets"],
  },
  {
    title: "Fitness Wear",
    sub: ["Leggings", "Track Suits", "Hoodies", "Jogger Pants"],
  },
  {
    title: "Custom Team Wear",
    sub: ["Soccer Uniforms", "Baseball Uniforms", "Rugby Gear"],
  },
  {
    title: "Accessories",
    sub: ["Hats", "Bags", "Arm/Leg Warmers"],
  },
];

const Categories = () => {
  return (
    <section className="pt-28 pb-10 px-6 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Categories</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div key={index} className="border p-6 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">{cat.title}</h2>
            <ul className="text-gray-600">
              {cat.sub.map((subItem, idx) => (
                <li key={idx}>
                  <Link to={`/shop?category=${encodeURIComponent(subItem)}`} className="hover:underline">
                    {subItem}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
