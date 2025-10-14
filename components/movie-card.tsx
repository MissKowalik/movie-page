import { getPopularMovies } from "@/lib/data/tmdb"
import Image from "next/image";

export default async function MovieCard() {
    const popularMovies = await getPopularMovies();
    const movie = await popularMovies[6];
    const release_year = await movie.release_date.split("-")[0];

    return (
        <article className="min-w-[150px] max-w-[250px]">
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`poster of ${movie.title}`}
                width={500}
                height={750}
                className="rounded"
            />
            <div className="p-2">
                <div className="flex justify-between gap-4 text-xs lg:text-lg text-neutral-500">
                    <span>{release_year}</span>
                    <span><span className="text-amber-400 pr-1">★</span>{movie.vote_average.toFixed(1)}</span>
                </div>
                <h3 className="text-md lg:text-xl">{movie.title}</h3>
            </div>
            <button className="rounded-full px-5 py-1 bg-neutral-800 text-xs lg:text-lg hover:cursor-pointer hover:bg-neutral-300 hover:text-black">
                + Watchlist
            </button>
        </article>
    )
}