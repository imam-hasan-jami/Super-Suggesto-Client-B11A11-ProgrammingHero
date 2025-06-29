import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddQuery from "../pages/AddQuery";
import MyQueries from "../pages/MyQueries";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/add-query",
        Component: AddQuery,
      },
      {
        path: "/my-queries/:email",
        loader: ({ params }) => fetch(`http://localhost:3000/queries/user/${params.email}`),
        hydrateFallbackElement: <Loading />,
        Component: MyQueries,
      }
    ]
  },
]);

export default router;
