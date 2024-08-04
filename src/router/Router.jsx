import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PropertySection from "../sections/PropertySection/PropertySection"
import TestimonialSection from "../sections/TestimonialSection/TestimonialSection";
import NewsLetterSection from '../sections/NewsLetterSection/NewsLetterSection';
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<PropertySection/>
    },
    {
      path: "/about",
      element:<TestimonialSection/>
    },
    {
      path: "/newsletter",
      element:<NewsLetterSection/>
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default Router