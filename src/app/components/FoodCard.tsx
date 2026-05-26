import { Clock, Star } from "lucide-react";
import { Link } from "react-router";
import { MenuItem } from "../data/menuData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FoodCardProps {
  item: MenuItem;
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <Link 
      to={`/food/${item.id}`}
      className="block bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{item.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            <span>{item.rating}</span>
          </div>
        </div>
        <p className="text-lg font-semibold text-[#0F9D8A]">${item.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
