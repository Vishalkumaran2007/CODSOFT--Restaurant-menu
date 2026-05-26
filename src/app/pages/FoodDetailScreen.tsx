import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Clock, Star, Heart, ShoppingCart } from "lucide-react";
import { menuItems } from "../data/menuData";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function FoodDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const item = menuItems.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Food item not found</p>
      </div>
    );
  }

  // Get recently viewed items (excluding current item)
  const recentlyViewed = menuItems.filter((i) => i.id !== item.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9F7] to-[#E8F5F2] pb-32">
      {/* Header Image */}
      <div className="relative h-80 overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0F9D8A] text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 -mt-8">
        {/* Food Info Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h1>
              <p className="text-2xl font-bold text-[#0F9D8A]">${item.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{item.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
              <span className="font-medium text-gray-900">{item.rating}</span>
              <span className="text-gray-500 text-sm">(120+ reviews)</span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recently Viewed</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {recentlyViewed.map((recentItem) => (
              <button
                key={recentItem.id}
                onClick={() => navigate(`/food/${recentItem.id}`)}
                className="flex-shrink-0 w-32 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={recentItem.image}
                    alt={recentItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {recentItem.name}
                  </p>
                  <p className="text-sm font-semibold text-[#0F9D8A] mt-1">
                    ${recentItem.price.toFixed(2)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="fixed bottom-20 left-0 right-0 px-6 pb-4 bg-gradient-to-t from-white via-white to-transparent pt-6">
          <div className="max-w-md mx-auto flex items-center gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-14 h-14 flex items-center justify-center rounded-2xl border-2 transition-all ${
                isFavorite
                  ? "bg-red-50 border-red-400"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </button>
            <button className="flex-1 h-14 bg-[#0F9D8A] text-white rounded-2xl font-semibold hover:bg-[#0D8A78] transition-colors shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
