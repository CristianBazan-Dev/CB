import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/ServicesPages/ServicesPage/Services";
import About from "./pages/About";
import { DataProvider } from "./GlobalState";
import Contact from "./pages/Contact";
import Service from "./pages/ServicesPages/ServicePage/Service";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services/:id",
    element: <Service />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
