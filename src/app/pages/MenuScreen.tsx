import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { menuItems } from "../data/menuData";
import { FoodCard } from "../components/FoodCard";
import { CategoryTabs } from "../components/CategoryTabs";
import { BottomNav } from "../components/BottomNav";

export function MenuScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9F7] to-[#E8F5F2] pb-24">
      {/* Header */}
      <div className="bg-white rounded-b-3xl shadow-sm px-6 pt-8 pb-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">Menu</h1>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0F9D8A] text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F9D8A] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 mt-6">
        {/* Category Tabs */}
        <CategoryTabs 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Food Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
