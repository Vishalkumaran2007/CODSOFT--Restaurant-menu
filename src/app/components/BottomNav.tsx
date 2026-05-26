import { Home, Heart, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router";

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Menu", path: "/" },
    { icon: Heart, label: "Favorites", path: "/favorites" },
    { icon: ShoppingBag, label: "Orders", path: "/orders" },
    { icon: User, label: "Profile", path: "/profile" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 pb-6 pt-3 shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <Icon 
                className={`w-6 h-6 ${
                  isActive ? "text-[#0F9D8A]" : "text-gray-400"
                }`}
              />
              <span 
                className={`text-xs ${
                  isActive ? "text-[#0F9D8A] font-medium" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
