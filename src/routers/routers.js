import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/login/Login";
import Register from "../components/Pages/Register/Register";
import Services from "../components/Pages/Services/Services";
import MainOutlet from "./MainOutlet";

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
      
    ]
  }
])