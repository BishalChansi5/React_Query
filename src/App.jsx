// import React, { Suspense } from "react";
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
import FetchUseQueryInLoader from "./components/FetchUseQueryInLoader";
import SuspenseInLoader from "./components/SuspenseInLoader";
import UseSuspense from "./components/UseSuspense";
import {
  createQueryOptions,
  createQueryOptionsForSuspenseInLoader,
} from "./utils/helperFunction";
import { Suspense } from "react";
import ErrorBoundary from "./useSuspenseErrorHandling/ErrorBoundary";

const queryClient = new QueryClient();
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
        path: "fetch_useQueryInLoader",
        element: <FetchUseQueryInLoader />,
        loader: async () => {
          //load data before component is render so no needed to handle the loading state
          await queryClient.ensureQueryData(createQueryOptions()); //fetch data and  put data in cache
        },
      },
      {
        path: "fetch_react_query/:id",
        element: <SinglePage />,
      },
      {
        path: "/fetch_useSuspenseQuery",
        element: (
          // must use Suspense with fallback to manage Loading state
          <ErrorBoundary>
            <Suspense fallback={<div>Loading ....</div>}>
              <UseSuspense />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/fetch_useSuspenseQueryInLoader",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<div>Loading ....</div>}>
              <SuspenseInLoader />
            </Suspense>
          </ErrorBoundary>
        ),
        loader: async () => {
          await queryClient.ensureQueryData(
            createQueryOptionsForSuspenseInLoader()
          );
        },
      },
    ],
  },
]);
const App = () => {
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
