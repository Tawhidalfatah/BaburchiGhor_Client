import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Blog from "../components/Blog";
import Header from "../Layouts/Header/Header";
import Register from "../Layouts/Register/Register";
import ChefDetails from "../components/ChefDetails";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";

/* eslint-disable no-undef */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-tawhidalfata-tawhidalfatah.vercel.app/${params.id}`
          ),
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
