import { useState } from "react";
import "./App.css";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PropertyCard from "./components/Card/Card";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element:<PropertyCard/>
    },
  ]);
  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
