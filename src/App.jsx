import { useState } from "react";
import "./App.css";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PropertySection from "./sections/PropertySection/PropertySection";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element:<PropertySection/>
    },
  ]);
  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
