import MovieCarousel from "@/components/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  if (!id) notFound();
  const Genre = decodeURI(genre);
  const movies = await getDiscoverMovies(id, genre);
  console.log(movies, "MOVIES");
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h2 className="pl-8 text-2xl font-bold md:text-5xl dark:text-white">
          Results for {Genre}
        </h2>
        <MovieCarousel movies={movies} isVertical />
      </div>
    </div>
  );
}

export default GenrePage;
