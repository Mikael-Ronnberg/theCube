import { createBrowserRouter } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
