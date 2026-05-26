export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  time: string;
  rating: number;
  image: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Pear & Orange",
    category: "Breakfast",
    price: 12.99,
    time: "15 min",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1576831438132-7b74c94006b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGVhciUyMG9yYW5nZSUyMHNhbGFkfGVufDF8fHx8MTc3OTgwNTA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fresh seasonal pears and orange slices perfectly arranged with a light honey drizzle and crushed pistachios. A refreshing and healthy start to your day."
  },
  {
    id: 2,
    name: "Meat & Mushrooms",
    category: "Lunch",
    price: 18.99,
    time: "25 min",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1777994505601-fe18ab41f8f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbXVzaHJvb20lMjBkaXNofGVufDF8fHx8MTc3OTgwNTA0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Tender grilled beef served with sautéed wild mushrooms, roasted vegetables, and a rich red wine reduction. A hearty and satisfying lunch option."
  },
  {
    id: 3,
    name: "Egg & Bread",
    category: "Breakfast",
    price: 9.99,
    time: "10 min",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608019527671-bc9c89e31045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2clMjBicmVhZCUyMGJyZWFrZmFzdHxlbnwxfHx8fDE3Nzk4MDUwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic breakfast featuring perfectly poached eggs on artisan sourdough toast with butter and fresh herbs. Simple, delicious, and always satisfying."
  },
  {
    id: 4,
    name: "Sweet Pancake",
    category: "Dessert",
    price: 11.99,
    time: "15 min",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565004602745-718e1b0d44f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMHBhbmNha2UlMjBkZXNzZXJ0fGVufDF8fHx8MTc3OTgwNTA0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fluffy pancakes layered with fresh berries, whipped cream, and a drizzle of maple syrup. A sweet treat that's perfect any time of day."
  },
  {
    id: 5,
    name: "Avocado Toast",
    category: "Breakfast",
    price: 10.99,
    time: "8 min",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzc5NzY0OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Creamy smashed avocado on toasted multigrain bread, topped with cherry tomatoes, microgreens, and a sprinkle of chili flakes."
  },
  {
    id: 6,
    name: "Grilled Salmon",
    category: "Lunch",
    price: 22.99,
    time: "20 min",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1598441764246-9badfc83e3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBsdW5jaCUyMHBsYXRlfGVufDF8fHx8MTc3OTgwNTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter sauce. Rich in omega-3 and full of flavor."
  },
  {
    id: 7,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 8.99,
    time: "5 min",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3Nzk3OTU0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Decadent triple-layer chocolate cake with rich ganache frosting and chocolate shavings. A chocolate lover's dream dessert."
  },
  {
    id: 8,
    name: "Berry Smoothie Bowl",
    category: "Treats",
    price: 13.99,
    time: "7 min",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1621797350488-fb28c9217e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc3OTc4NzAyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Thick and creamy smoothie bowl topped with fresh berries, granola, coconut flakes, and chia seeds. Nutritious and Instagram-worthy."
  }
];

export const categories = ["All", "Breakfast", "Lunch", "Treats", "Dessert", "Drinks"];
