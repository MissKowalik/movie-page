import { getPopularMovies } from "@/lib/data/tmdb"
import Image from "next/image";

export default async function MovieCard() {
    const popularMovies = await getPopularMovies();
    const movie = await popularMovies[1];

    return (
        <article className="min-w-4xs max-w-xs">
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`poster of ${movie.title}`}
                width={500}
                height={750}
                className="rounded"
            />
            <div className="flex justify-between py-2 text-xl">
                <h3>{movie.title}</h3>
                <span>{movie.vote_average}</span>
            </div>
        </article>
    )
}