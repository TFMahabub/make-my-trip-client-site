import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/login/Login";
import Register from "../components/Pages/Register/Register";
import ServiceDetails from "../components/Pages/Services/Service-Details/ServiceDetails";
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
        element: <PrivateRoute><Services></Services></PrivateRoute>
      },
      {
        path: '/service/:id',
        loader: async({params}) => fetch(`http://localhost:5000/service/${params.id}`),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      },
      
    ]
  }
])