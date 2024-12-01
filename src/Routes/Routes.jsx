import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import Contacts from "../Pages/Contacts/Contacts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BlogPages from "../Pages/BlogPages/BlogPages";

import AdminPagesLayout from "../Pages/AdminPanel/AdminPagesLayout/AdminPagesLayout";
import Admin from "../Pages/AdminPanel/Admin/Admin";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../components/OurServices/ServiceDetails/ServiceDetails";
import ServiceQuoteFrom from "../components/ServiceQuoteFrom/ServiceQuoteFrom";
import AboutPages from "../Pages/AboutPages/AboutPages";

import Home from "../Pages/Home/Home";
import HomePages2 from "../Pages/HomePages2/HomePages2";
import BlogsPages2 from "../Pages/BlogPages/Blogs/BlogsPages2/BlogsPages2";
import BlogDetails from "../Pages/BlogPages/Blogs/BlogsPages2/BlogDetails/BlogDetails";
import AboutPages2 from "../Pages/AboutPages/AboutPages2/AboutPages2";
import ServicesPages2 from "../Pages/ServicesPages2/ServicesPages2";


const router = createBrowserRouter([

     {
          path: '/',
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,

          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },

               {
                    path: '/aboutPages',
                    element: <AboutPages></AboutPages>
               },
               {
                    path: '/aboutPages2',
                    element: <AboutPages2></AboutPages2>
               },
               {
                    path: '/homePages2',
                    element: <HomePages2></HomePages2>
               },
               {
                    path: '/blog',
                    element: <BlogPages></BlogPages>
               },
               {
                    path: '/blog2',
                    element: <BlogsPages2></BlogsPages2>
               },
               {
                    path: '/contacts',
                    element: <Contacts></Contacts>
               },

               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               },
               {
                    path: '/services',
                    element: <Services></Services>
               },
               {
                    path: '/servicesPages2',
                    element: <ServicesPages2></ServicesPages2>
               },
               {
                    path: '/servicesDetails/:id',
                    element: <ServiceDetails></ServiceDetails>
               },

               {
                    path: '/serviceDetails/:id/serviceQuoteFrom',
                    element: <ServiceQuoteFrom></ServiceQuoteFrom>
               },
               {
                    path: '/blogDetails/:id',
                    element: <BlogDetails></BlogDetails>
               },

               {
                    path: '/adminPanel',
                    element: <AdminPagesLayout></AdminPagesLayout>,
                    children: [
                         {
                              path: '/adminPanel',
                              element: <Admin></Admin>
                         }
                    ]
               }

          ]
     }
]);


export default router