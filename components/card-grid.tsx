import MovieCard from "./movie-card"
import { getMovies } from "@/lib/data/tmdb"
import { Movie } from "@/lib/interfaces/movie";
import Pagination from "./pagination";

export default async function CardGrid({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | undefined}>;
}) {
    const { page = "1", filter = "all"} = await searchParams;
    const pageNumber = parseInt(page)
    const { movies, totalPages} = await getMovies(pageNumber, filter as "popular" | "upcoming" | "all"); 

    return (
        <div className="flex flex-col items-center">
            
            <header className="flex self-start mt-18 md:mt-20 px-4 md:px-8 text-2xl font-bold pb-4 md:pt-4 md:pb-8">
                {/* heading */}
                <h1>
                    {filter === "popular"
                    ? "Popular Movies"
                    : filter === "upcoming"
                    ? "Upcoming Movies"
                    : "All Movies"}
                </h1>
            </header>

            <section className="flex flex-col items-center px-4 md:px-8">
                <ul className="grid gap-x-4 gap-y-4 sm:gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {movies.map((movie: Movie) => (
                        <li key={movie.id}>
                            <MovieCard movie={movie}/>
                        </li>
                    ))}
                </ul>

                {/* pagination */}
                <Pagination totalPages={totalPages}/>

            </section>
        </div>
    )
}