import { Movie } from "@/typings";
import React from "react";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MovieCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-20">
      <h2>{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5",
          isVertical && "flex-col space-x-0 space-y-8"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <h2 className="dark:text-white text-xl font-bold">
                    {movie.title}
                  </h2>
                  <p className="text-gray-400">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MovieCarousel;
