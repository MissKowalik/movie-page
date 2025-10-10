import { getGenres, getPopularMovies } from "@/lib/data/tmdb"
import Image from "next/image";

type Genre = {
    name: string,
    id: number,
}

export default async function Hero() {
    const movies = await getPopularMovies();
    const heroMovie = await movies[6];
    const genres = await getGenres();
    
    // map genre ids to names
    const genreNames = heroMovie.genre_ids.map((id: number) => genres.find((g: Genre) => g.id === id)?.name)

    // Extract release year from release_date string
    const releaseYear = heroMovie.release_date.split("-")[0];

    return (
    <header className="relative w-full h-screen">
        <Image
            src={`https://image.tmdb.org/t/p/original/${heroMovie.backdrop_path}`}
            alt={`Backdrop image of ${heroMovie.title}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority
        />

        <div className="absolute bottom-0 left-0 w-full h-200 bg-gradient-to-t to-transparent from-black" />
        <div className="absolute bottom-45 left-1/10 max-w-[40%] p-4 rounded-md text-white">
            <h1 className="text-6xl">
                {heroMovie.title}
                <span className="ml-6 text-2xl font-light align-baseline">{releaseYear}</span>
            </h1>

            {/* genres */}
            <div className="flex gap-4 flex-wrap mt-2">
                {genreNames.map((genre: string) => (
                    <span
                        key={genre}
                        className="px-2 py-1 bg-gray-600/60 rounded text-xl"
                    >
                        {genre}
                    </span>
                ))}
            </div>
        </div>
    </header>
  );
}