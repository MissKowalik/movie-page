import MovieCard from "./movie-card"
import { getPopularMovies } from "@/lib/data/tmdb"
import { Movie } from "@/lib/interfaces/movie";

export default async function CardGrid() {
    const movies = await getPopularMovies(); 

    return (
        <section className="flex flex-col items-center px-4 md:px-8">
            <ul className="grid gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                {movies.map((movie: Movie) => (
                    <li key={movie.id}>
                        <MovieCard movie={movie}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}