import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Genres from "./components/Genres";
import Login from "./components/Login";
import GraphQL from "./components/GraphQL";
import ManageCatalogue from "./components/ManageCatalogue";
import EditMovie from "./components/EditMovie";
import Movie from "./components/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/genres",
        element: <Genres />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/graphql",
        element: <GraphQL />,
      },
      {
        path: "/admin/movie/0",
        element: <EditMovie />,
      },
      {
        path: "/manage-catalogue",
        element: <ManageCatalogue />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
