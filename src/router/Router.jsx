import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PropertySection from "../sections/PropertySection/PropertySection"
import TestimonialSection from "../sections/TestimonialSection/TestimonialSection";
import NewsLetterSection from '../sections/NewsLetterSection/NewsLetterSection';
import Footer from '../components/Footer/Footer';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import AboutUsSection from '../sections/AboutUsSection/AboutUsSection';
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
    },
    {
      path:"/foo",
      element:<AboutUsSection/>
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default Router