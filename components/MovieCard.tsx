import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";
import React from "react";
import { FileImage } from "lucide-react";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      {(movie.backdrop_path || movie.poster_path) === null ? (
        <FileImage className="w-fit lg:min-w-[400px] h-12 object-cover shadow-md shadow-gray-900 rounded-xl" />
      ) : (
        <>
          <Image
            className="w-fit lg:min-w-[400px] h-56 object-cover shadow-md shadow-gray-900 rounded-xl"
            src={getImagePath(movie.backdrop_path || movie.poster_path)}
            alt={movie.title}
            width={1920}
            height={1080}
          />
          <p className="text-white absolute z-20 bottom-5 left-5">
            {movie.title}
          </p>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/60" />
    </div>
  );
}

export default MovieCard;
