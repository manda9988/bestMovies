// MovieCard.tsx

import React from "react";

interface Movie {
  title: string;
  releaseDate: string;
  genre: string;
  director: string;
  cast: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-1/4 bg-black h-full flex items-center justify-center">
        <div className="w-full h-48"></div>
      </div>

      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-gray-500 mb-2">
          {movie.releaseDate} | {movie.genre}
        </p>
        <p className="text-gray-700 mb-2">
          De <span className="font-semibold">{movie.director}</span>
        </p>
        <p className="text-gray-700">
          Avec <span className="font-semibold">{movie.cast}</span>
        </p>
      </div>
    </div>
  );
}
