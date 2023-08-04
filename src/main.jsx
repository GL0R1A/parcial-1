import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Biografia from "./pages/Biografia";
import Logros from "./pages/Logros";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "popper.js";
import "bootstrap/dist/js/bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/biografia",
    element: <Biografia />,
  },
  {
    path: "/logros",
    element: <Logros/>,
  },
  {
    path: "/contacto",
    element: <Contacto/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
