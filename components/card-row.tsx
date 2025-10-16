import { Movie } from "@/lib/interfaces/movie";
import MovieCard from "./movie-card";

type CardRowProps = {
    heading: string;
    movies: Movie[];
};

export default function CardRow({ heading, movies }: CardRowProps) {
    return (
        <section className="px-4 md:px-8 py-8 overflow-hidden">
            <h2 className="text-xl lg:text-3xl pb-8">{heading}</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}
