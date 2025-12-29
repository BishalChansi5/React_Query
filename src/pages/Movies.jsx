import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Movies = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center mt-8">
      {data.Search.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => navigate(`/movies/${movie.imdbID}`)}
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
      ))}
    </div>
  );
};

export default Movies;
