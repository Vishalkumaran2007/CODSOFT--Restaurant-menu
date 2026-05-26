import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ShoppingCart, Clock, Star, Heart } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { foodItems } from "../data/menuData";
import { useState } from "react";

export function FoodDetailsScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const food = foodItems.find((item) => item.id === id);

  if (!food) {
    return (
      <div className="min-h-screen bg-[#F5F9F8] flex items-center justify-center">
        <p>Food item not found</p>
      </div>
    );
  }

  // Get other items for "Recently Viewed" section
  const recentlyViewed = foodItems.filter((item) => item.id !== id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F5F9F8] pb-32">
      <div className="max-w-md mx-auto">
        {/* Hero Image */}
        <div className="relative h-[320px] bg-white rounded-b-[40px] overflow-hidden shadow-md">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />
          
          {/* Top Navigation */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6">
            <button
              onClick={() => navigate("/")}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Food Information */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{food.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span className="text-sm">{food.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                <span className="text-sm font-medium text-gray-900">{food.rating}</span>
              </div>
              <div className="ml-auto text-2xl font-bold text-[#0F9D8A]">
                ${food.price.toFixed(2)}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {food.description}
            </p>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="px-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently Viewed</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {recentlyViewed.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(`/food/${item.id}`)}
                className="flex-shrink-0 w-32"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-[#0F9D8A] font-semibold text-sm mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-20 left-0 right-0 px-6 max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-4 shadow-lg flex items-center gap-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                isFavorite
                  ? "bg-[#FF6B6B] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Heart className={`w-6 h-6 ${isFavorite ? "fill-white" : ""}`} />
            </button>
            <button className="flex-1 bg-[#0F9D8A] text-white py-4 rounded-2xl font-semibold hover:bg-[#0D8B7A] transition-colors shadow-md">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab="home" />
      </div>
    </div>
  );
}
