import { createBrowserRouter } from "react-router";
import { MenuScreen } from "./pages/MenuScreen";
import { FoodDetailScreen } from "./pages/FoodDetailScreen";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MenuScreen,
  },
  {
    path: "/food/:id",
    Component: FoodDetailScreen,
  },
  {
    path: "/favorites",
    element: <PlaceholderPage title="Favorites" description="Your favorite dishes will appear here" />,
  },
  {
    path: "/orders",
    element: <PlaceholderPage title="Orders" description="Your order history will appear here" />,
  },
  {
    path: "/profile",
    element: <PlaceholderPage title="Profile" description="Manage your account settings here" />,
  },
]);
