import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PropertySection from "../sections/PropertySection/PropertySection"
import TestimonialSection from "../sections/TestimonialSection/TestimonialSection";
import NewsLetterSection from '../sections/NewsLetterSection/NewsLetterSection';
import AboutUsSection from '../sections/AboutUsSection/AboutUsSection';
import { NavBar } from '../components/NavBar/NavBar';
import { Header } from '../components/Header/Header';
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
    },
    {
    path:"/test",
    element:<Header/>
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default Router