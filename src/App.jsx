import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

// imperative vs. declarative
const router = createBrowserRouter([
  {
    // "layout route" because it doesn't contain a path
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // "render-as-you-fetch", loading and fetching at same time
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// App Planning Steps:
// 1. UI Components
// 2. Static version (no state yet)
// 3. State management + data flow

// Feature Categories:
// 1. User
// 2. Menu
// 3. Cart
// 4. Order

// Pages:
// Homepage (/)
// Pizza Menu (/menu)
// Cart (/cart)
// Placing New Order (/order/new)
// Looking Up Order (/order:orderID)

// State Slices:
// 1. Global UI State (stored in App)
// 2. Global Remote State (fetched from API)
// 3. Global UI State (stored in App)
// 4. Global Remote State (fetched from API)
