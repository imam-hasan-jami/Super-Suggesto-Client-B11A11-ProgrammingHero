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
import Queries from "../pages/Queries";
import MyRecommendations from "../pages/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import PrivateRoute from "../providers/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
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
        path: "/queries",
        loader: () => fetch("http://localhost:3000/queries"),
        hydrateFallbackElement: <Loading />,
        Component: Queries,
      },
      {
        path: "/add-query",
        element: <PrivateRoute><AddQuery/></PrivateRoute>,
      },
      {
        path: "/my-queries/:email",
        loader: ({ params }) => fetch(`http://localhost:3000/queries/user/${params.email}`),
        hydrateFallbackElement: <Loading />,
        element: <PrivateRoute><MyQueries/></PrivateRoute>
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
      },
      {
        path: "/my-recommendations/:email",
        loader: ({ params }) => fetch(`http://localhost:3000/recommendations/recommender/${params.email}`),
        hydrateFallbackElement: <Loading />,
        Component: MyRecommendations,
      },
      {
        path: "/recommendations-for-me/:email",
        loader: ({ params }) => fetch(`http://localhost:3000/recommendations/user/${params.email}`),
        hydrateFallbackElement: <Loading />,
        Component: RecommendationsForMe,
      }
    ]
  },
]);

export default router;
