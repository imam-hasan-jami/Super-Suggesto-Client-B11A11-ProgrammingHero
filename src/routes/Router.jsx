import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddQuery from "../pages/AddQuery";
import MyQueries from "../pages/MyQueries";
import Loading from "../components/Loading";
import QueryDetails from "../pages/QueryDetails";
import UpdateQuery from "../pages/UpdateQuery";

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
      },
      {
        path: "/query-details/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/queries/${params.id}`),
        hydrateFallbackElement: <Loading />,
        Component: QueryDetails,
      },
      {
        path: "/update-query/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/queries/${params.id}`),
        hydrateFallbackElement: <Loading />,
        Component: UpdateQuery,
      }
    ]
  },
]);

export default router;
