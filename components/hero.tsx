import { getGenres, getRandomMovie } from "@/lib/data/tmdb"
import Image from "next/image";
import { Genre } from "@/lib/types/genre";


export default async function Hero() {
    const heroMovie = await getRandomMovie();
    const genres = await getGenres();
    
    // map genre ids to names
    const genreNames = heroMovie.genre_ids.map((id: number) => genres.find((g: Genre) => g.id === id)?.name)

    return (
    <header 
        className="relative w-full"
        style={{
            height: "auto",
            minHeight: "70vh",
            maxHeight: "100vh",
            aspectRatio: "16 / 9",
        }}
    >
        <Image
            src={`https://image.tmdb.org/t/p/original/${heroMovie.backdrop_path}`}
            alt={`Backdrop image of ${heroMovie.title}`}
            fill  // Makes the image fill the parent container
            style={{ objectFit: "cover" }}  // Ensures image covers the area without distortion
            sizes="100vw"  // Responsive image sizing for optimization
            priority  // Loads image early for better UX
        />

        {/* dark gradient background for contrast against the white text */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t to-transparent from-black" />

        <div
            className="
                absolute bottom-15 text-center flex flex-col
                left-1/2 -translate-x-1/2 
                w-[90%] sm:w-[80%] 
                lg:left-[10%] lg:bottom-[15%] lg:translate-x-0 lg:max-w-[40%] lg:text-left
            "
        >
            <h1 className="text-2xl md:text-4xl xl:text-6xl">
                {heroMovie.title}
            </h1>

            {/* genres */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap mt-2">
                {genreNames.map((genre: string) => (
                <span
                    key={genre}
                    className="px-2 py-1 bg-gray-600/60 rounded text-sm md:text-lg xl:text-xl"
                >
                    {genre}
                </span>
                ))}
            </div>
        </div>

    </header>
  );
}