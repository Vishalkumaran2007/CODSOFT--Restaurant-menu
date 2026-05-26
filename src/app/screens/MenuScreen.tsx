import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { FoodCard } from "../components/FoodCard";
import { foodItems, categories } from "../data/menuData";

export function MenuScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F9F8] pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white rounded-b-[30px] px-6 pt-12 pb-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Menu</h1>
            <button className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#0F9D8A] transition-all"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="px-6 py-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-[#0F9D8A] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        <div className="px-6">
          <div className="grid grid-cols-2 gap-4">
            {filteredItems.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab="home" />
      </div>
    </div>
  );
}
