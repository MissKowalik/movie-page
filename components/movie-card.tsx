import Image from "next/image";
import { Movie } from "@/lib/interfaces/movie";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  const release_year = movie.release_date.split("-")[0];

  return (
    
      <article className="min-w-[150px] max-w-[250px] flex flex-col bg-neutral-900 rounded-lg overflow-hidden">
        
        {/* Poster */}
        <Link href={`/movies/${movie.id}`} className="w-full">
          <div
            className="relative w-full"
            style={{ aspectRatio: '2 / 3' }} // default poster ratio
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`poster of ${movie.title}`}
              fill
              className="object-cover"
            />
          </div>
        </Link>

        {/* Info section */}
        <div className="flex flex-col justify-between flex-1 p-2 gap-2">

          {/* Release year & rating */}
          <div className="flex justify-between text-xs lg:text-sm text-neutral-500">
            <span>{release_year}</span>
            <span className="flex items-center">
              <span className="text-amber-400 pr-1">★</span>
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          {/* Title */}
          <Link href={`/movies/${movie.id}`}>
            <h3 className="text-sm lg:text-base font-medium text-white leading-tight line-clamp-1 hover:underline">
              {movie.title}
            </h3>
          </Link>

          {/* Watchlist Button */}
          <button className="mt-auto w-full rounded-full py-1 bg-neutral-700 text-xs lg:text-sm font-medium hover:bg-neutral-300 hover:text-black transition-colors">
            + Watchlist
          </button>
        </div>
      </article>
    
  );
}
