import { getGenres, getRandomMovie } from "@/lib/data/tmdb"
import Image from "next/image";

type Genre = {
    name: string,
    id: number,
}

export default async function Hero() {
    const heroMovie = await getRandomMovie();
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

        {/* dark gradient background for contrast against the white text */}
        <div className="absolute bottom-0 left-0 w-full h-200 bg-gradient-to-t to-transparent from-black" />

        <div
            className="
                absolute bottom-20 text-center flex flex-col
                left-1/2 -translate-x-1/2 
                w-[90%] sm:w-[80%] 
                lg:left-[10%] lg:bottom-[20%] lg:translate-x-0 lg:max-w-[40%] lg:text-left
            "
        >
            <h1 className="text-3xl md:text-5xl xl:text-6xl">
                {heroMovie.title}
                <span className="ml-4 xl:ml-6 text-lg xl:text-2xl font-light align-baseline">
                {releaseYear}
                </span>
            </h1>

            {/* genres */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap mt-2">
                {genreNames.map((genre: string) => (
                <span
                    key={genre}
                    className="px-2 py-1 bg-gray-600/60 rounded text-sm xl:text-xl"
                >
                    {genre}
                </span>
                ))}
            </div>
        </div>

    </header>
  );
}