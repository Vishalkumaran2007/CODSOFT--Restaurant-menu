import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { BottomNav } from "../components/BottomNav";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9F7] to-[#E8F5F2] pb-24">
      <div className="bg-white rounded-b-3xl shadow-sm px-6 pt-8 pb-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 mt-12 text-center">
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
