import { Movie } from "./movie-card";
import MovieCard from "./movie-card";

type CardRowProps = {
    heading: string;
    movies: Movie[];
};

export default function CardRow({ heading, movies }: CardRowProps) {
    return (
        <section className="px-4 py-8 overflow-hidden">
            <h2 className="text-2xl pb-8">{heading}</h2>
            <div className="grid grid-flow-col gap-4 overflow-x-auto scrollbar-hide">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}
