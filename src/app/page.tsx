// page.tsx

import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Le Comte de Monte-Cristo",
    releaseDate: "28 juin 2024 | 2h 58min",
    genre: "Aventure, Historique",
    director: "Matthieu Delaporte, Alexandre De La Patellière",
    cast: "Pierre Niney, Bastien Bouillon, Anaïs Demoustier",
  },

  {
    title: "Le Comte de Monte-Cristo",
    releaseDate: "28 juin 2024 | 2h 58min",
    genre: "Aventure, Historique",
    director: "Matthieu Delaporte, Alexandre De La Patellière",
    cast: "Pierre Niney, Bastien Bouillon, Anaïs Demoustier",
  },

  {
    title: "Le Comte de Monte-Cristo",
    releaseDate: "28 juin 2024 | 2h 58min",
    genre: "Aventure, Historique",
    director: "Matthieu Delaporte, Alexandre De La Patellière",
    cast: "Pierre Niney, Bastien Bouillon, Anaïs Demoustier",
  },

  {
    title: "Le Comte de Monte-Cristo",
    releaseDate: "28 juin 2024 | 2h 58min",
    genre: "Aventure, Historique",
    director: "Matthieu Delaporte, Alexandre De La Patellière",
    cast: "Pierre Niney, Bastien Bouillon, Anaïs Demoustier",
  },
];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 w-[85vw] max-w-[600px]">
      <div className="space-y-8">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </main>
  );
}
