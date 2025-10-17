import { Movie } from "@/lib/interfaces/movie";
import MovieCard from "./movie-card";
import Image from "next/image";

type CardRowProps = {
  heading: string;
  movies: Movie[];
};

export default function CardRow({ heading, movies }: CardRowProps) {
  return (
    <section className="relative px-4 md:px-8 py-8 overflow-hidden">
      <h2 className="text-xl lg:text-3xl pb-8">{heading}</h2>

        {/* left scroll button */}
        <button className="absolute left-[3%] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition hover:cursor-pointer">
            <Image
                src="/arrow-backward.svg"
                alt="Scroll left"
                width={20}
                height={20}
                className="invert"
            />
        </button>

        {/* card list */}
        <ul className="grid grid-flow-col auto-cols-[minmax(150px,1fr)] gap-4 overflow-x-auto scrollbar-hide">
            {movies.map((movie) => (
            <li key={movie.id}>
                <MovieCard movie={movie} />
            </li>
            ))}
        </ul>

        {/* right scroll button */}
        <button className="absolute right-[3%] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition hover:cursor-pointer">
            <Image
                src="/arrow-forward.svg"
                alt="Scroll right"
                width={20}
                height={20}
                className="invert"
            />
        </button>
    </section>
  );
}
