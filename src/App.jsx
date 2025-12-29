import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Bishal from "./pages/Bishal";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Movies from "./pages/Movies";
// import { getMovies } from "./utils/getMovies";
import MovieDetails, { getSingleMovie } from "./pages/MovieDetails";
// import { getData } from "./utils/api";
import { getMovies } from "./utils/getMovies";
import FetchOld from "./components/FetchOld";
import Fetch_React_Query from "./components/Fetch_React_Query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SinglePage from "./components/SinglePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />, // catch all the error that is route error as well as runtime error
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
        loader: getMovies,
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
        loader: getSingleMovie,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: ":bishal",
            element: <Bishal />,
          },
        ],
      },
      {
        path: "fetch_old",
        element: <FetchOld />,
      },
      {
        path: "fetch_react_query",
        element: <Fetch_React_Query />,
      },
      {
        path: "fetch_react_query/:id",
        element: <SinglePage />,
      },
    ],
  },
]);
const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router}></RouterProvider>;
      </QueryClientProvider>
    </>
  );
};

export default App;
