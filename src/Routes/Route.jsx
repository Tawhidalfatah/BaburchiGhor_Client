import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Blog from "../components/Blog";
import Header from "../Layouts/Header/Header";

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
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
