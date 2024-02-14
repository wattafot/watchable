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
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
            <Image
              className="w-full h-full object-cover object-center"
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              width={1920}
              height={1080}
            />
            <div className="hidden md:inline absolute top-0 left-0 p-12 w-full h-full">
              <div className="h-[65%]" />
              <h2 className="text-white z-40 text-3xl font-bold max-w-xl py-4">
                {movie.title}
              </h2>
              <p className="text-white z-40 max-w-lg line-clamp-3">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselBanner;
