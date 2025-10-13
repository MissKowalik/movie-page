import { getPopularMovies } from "@/lib/data/tmdb"
import Image from "next/image";

export default async function MovieCard() {
    const popularMovies = await getPopularMovies();
    const movie = await popularMovies[1];
    const release_year = await movie.release_date.split("-")[0];

    return (
        <article className="min-w-4xs max-w-xs">
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`poster of ${movie.title}`}
                width={500}
                height={750}
                className="rounded"
            />
            <div className="py-2 text-xl">
                <div className="flex justify-between gap-4 text-xs lg:text-lg">
                    <span>{movie.vote_average}</span>
                    <span>{release_year}</span>
                </div>
                <h3 className="text-md lg:text-2xl py-1">{movie.title}</h3>
            </div>
        </article>
    )
}