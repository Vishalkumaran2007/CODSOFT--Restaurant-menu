import { categories } from "../data/menuData";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
              isActive
                ? "bg-[#0F9D8A] text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
