import { useState } from "react";

const LeftSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="w-full md:w-[60%] bg-gray-100 p-4  rounded-lg">
      {/* Category Filters */}
      <div className="space-y-4">
        {[
          { label: "Accessories", items: ["Belts", "Bags", "Hats"] },
          { label: "Fruits", items: ["Apple", "Banana", "Orange"] },
          { label: "Juice", items: ["Mango", "Guava", "Pineapple"] },
          { label: "Meats", items: ["Chicken", "Beef", "Fish"] },
          { label: "Vegetables", items: ["Carrot", "Tomato", "Spinach"] },
          { label: "Discount", items: ["10% Off", "20% Off", "50% Off"] },
        ].map((category) => (
          <div key={category.label} className="border-b pb-2">
            <button
              onClick={() => toggleDropdown(category.label)}
              className="flex justify-between items-center w-full font-medium text-gray-800 py-2 focus:outline-none"
            >
              {category.label}
              <span
                className={`transition-transform ${
                  openDropdown === category.label ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openDropdown === category.label && (
              <div className="pl-4 pt-2 space-y-2 animate-fade-in">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-700 transition duration-200"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    <span className="hover:underline">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-red-800 mb-2">Filter by price</h3>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="500"
            defaultValue="220"
            className="w-full accent-blue-600"
          />
          <span className="text-black font-medium">220</span>
        </div>
        <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Filter
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
