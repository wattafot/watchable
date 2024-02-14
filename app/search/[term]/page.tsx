import MovieCarousel from "@/components/MovieCarousel";
import { getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getSearchedMovies(termToUse);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h2 className="pl-8 text-2xl font-bold md:text-5xl dark:text-white">
          Results for {termToUse}
        </h2>
        <MovieCarousel movies={movies} isVertical />
      </div>
    </div>
  );
}

export default SearchPage;
