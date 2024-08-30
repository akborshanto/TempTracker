import React from "react";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/home/Home";
import RootMain from "./RootMain/RootMain";
import WetherProvider from "./hook/WetherContext";
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: "/",
    element:<RootMain></RootMain>,
children:[

  {
    path:'/',
    element:<Home></Home>
  }
]


  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<WetherProvider>
<Toaster></Toaster>
<RouterProvider router={router}></RouterProvider>

</WetherProvider>

  </React.StrictMode>
);
