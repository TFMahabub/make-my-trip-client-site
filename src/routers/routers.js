import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/Pages/AddService/AddService";
import Blog from "../components/Pages/Blog/Blog";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/login/Login";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import UpdateReview from "../components/Pages/MyReviews/Update/UpdateReview";
import Register from "../components/Pages/Register/Register";
import ServiceDetailsPage from "../components/Pages/Services/Service-Details/ServiceDetailsPage";
import Services from "../components/Pages/Services/Services";
import ErrorPage from "./ErrorPage";
import MainOutlet from "./MainOutlet";
import PrivateRoute from "./PrivateRoute";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/service/:id',
        loader: async({params}) => fetch(`https://make-my-trip-server.vercel.app/service/${params.id}`),
        element: <ServiceDetailsPage></ServiceDetailsPage>
      },
      {
        path: '/my_reviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: '/my_reviews/update/:id',
        loader: async({params}) => fetch(`https://make-my-trip-server.vercel.app/reviews/update/${params.id}`),
        element: <UpdateReview></UpdateReview>
      },
      {
        path: '/add_service',
        loader: async() => fetch('https://make-my-trip-server.vercel.app/services'),
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      },
      
    ]
  }
])