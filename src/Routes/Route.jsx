import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Blog from "../components/Blog";
import Header from "../Layouts/Header/Header";
import Register from "../Layouts/Register/Register";
import ChefDetails from "../components/ChefDetails";

/* eslint-disable no-undef */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: ":id",
        element: <ChefDetails></ChefDetails>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
