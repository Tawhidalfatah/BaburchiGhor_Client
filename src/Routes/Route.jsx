import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Blog from "../components/Blog";
import Header from "../Layouts/Header/Header";
import Register from "../Layouts/Register/Register";

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
