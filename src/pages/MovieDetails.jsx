import React from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../utils/api";
export const getSingleMovie = async ({ params }) => {
  try {
    const res = await getData(`?i=${params.id}&apikey=96759ce6`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const MovieDetails = () => {
  const movie = useLoaderData();
  //   console.log(movie);
  return (
    <div
      key={movie.imdbID}
      className="border-2 border-gray-300 w-60 h-100 rounded-xl p-4 hover:border-gray-600 cursor-pointer transition-colors"
    >
      <div className="w-full aspect-[2/2.5] ">
        <img
          src={movie.Poster}
          className="w-full h-full object-cover rounded-2xl hover:scale-95 transition-all duration-300 ease-in-out"
          alt="no imag"
        />
      </div>
      <h1 className="text-2xl font-semibold">
        {movie.Title.length > 30
          ? movie.Title.slice(0, 30) + "..."
          : movie.Title}
      </h1>
      <p>{movie.Type}</p>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieDetails;
