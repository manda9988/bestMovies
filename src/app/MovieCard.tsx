// MovieCard.tsx

import React from "react";

interface Movie {
  title: string;
  releaseDate: string;
  genre: string;
  director: string;
  cast: string;
  imageUrl: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex bg-gray-700 shadow-md rounded-lg overflow-hidden w-[95%] max-w-[650px] mx-auto">
      <div className="w-[35%] rounded-md overflow-hidden relative">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="absolute top-0 w-full h-auto max-h-full object-cover rounded-md"
        />
        <div className="pt-[133.33%]"></div>
      </div>

      <div className="w-[65%] p-4 pt-2">
        <h2 className="text-2xl font-bold mb-2 text-gray-100">{movie.title}</h2>
        <p className="text-gray-400 mb-2 font-normal">
          {movie.releaseDate} |{" "}
          <span className="text-gray-200 font-semibold">{movie.genre}</span>
        </p>
        <p className="text-gray-400 mb-2 font-normal">
          De{" "}
          <span className="text-gray-200 font-semibold">{movie.director}</span>
        </p>
        <p className="text-gray-400 mb-2 font-normal">
          Avec <span className="text-gray-200 font-semibold">{movie.cast}</span>
        </p>
      </div>
    </div>
  );
}
