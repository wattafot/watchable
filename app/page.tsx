import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import { Button } from "@/components/ui/button";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2">
        <MovieCarousel movies={upcomingMovies} title="upcoming" />
        <MovieCarousel movies={popularMovies} title="popular" />
        <MovieCarousel movies={topRatedMovies} title="top rated" />
      </div>
    </main>
  );
}
