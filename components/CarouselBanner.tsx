"use client";

import { Movie } from "@/typings";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = {
  delay: 8000,
};

function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div ref={emblaRef} className="overflow-hidden relative cursor-pointer">
      <div className="flex">
        {movies.map((movie) => (
          <div className="flex-[0_0_100%] min-w-0 relative" key={movie.id}>
            <Image
              className="w-full h-full object-cover object-center"
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              width={1920}
              height={1080}
            />
            <div className="hidden md:inline absolute top-0 left-0 z-20 p-12 bg-transparent w-full h-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent">
              <h2 className="text-5xl font-bold max-w-xl z-50 py-4">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-200/20 to-gray-900" />
    </div>
  );
}

export default CarouselBanner;
