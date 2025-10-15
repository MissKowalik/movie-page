import Image from "next/image"
import { Movie } from "@/lib/interfaces/movie"
import { Genre } from "@/lib/types/genre"

export default function HeroMoviePage({movie}: {movie: Movie}) {
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
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={`Backdrop image of ${movie.title}`}
                    fill  // Makes the image fill the parent container
                    style={{ objectFit: "cover" }}  // Ensures image covers the area without distortion
                    sizes="100vw"  // Responsive image sizing for optimization
                    priority  // Loads image early for better UX
                />
        
                {/* dark gradient background for contrast against the white text */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t to-neutral-400/20 from-black" />
        
                <div
                    className="
                        absolute 
                        top-[20%] sm:top-auto sm:bottom-[15%]
                        left-1/2 -translate-x-1/2 
                        w-[90%] sm:w-[80%] 
                        lg:left-[10%] lg:translate-x-0 lg:max-w-[40%]
                        text-center lg:text-left flex flex-col gap-2
                    "
                >
                    <h1 className="text-2xl md:text-4xl xl:text-6xl">
                        {movie.title}
                    </h1>

                    

                    {/* genres */}
                    <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                        {movie.genres?.map((genre: Genre) => (
                        <span
                            key={genre.id}
                            className="px-2 py-1 bg-gray-600/60 rounded text-sm md:text-lg xl:text-xl"
                        >
                            {genre.name}
                        </span>
                        ))}
                    </div>

                    

                    <div className="text-pretty">
                        {movie.overview}
                    </div>

                    {/* Release year & rating */}
                    <div className="flex justify-center lg:justify-start gap-4 text-sm lg:text-lg">
                        <span>{movie.release_date.split("-")[0]}</span>
                        <span className="flex items-center">
                            <span className="text-amber-400 pr-1">★</span>
                            {movie.vote_average.toFixed(1)}
                        </span>
                    </div>

                    <div className="flex flex-wrap mt-2 justify-center lg:justify-start gap-4">
                        <button className="rounded-full max-w-[200] py-1 px-3 bg-amber-400 text-black font-semibold text-md hover:bg-neutral-800 hover:text-white transition-colors hover:cursor-pointer">
                            Add to Watchlist
                        </button>

                        <button className="rounded-full max-w-[200] py-1 px-3 bg-gray-600/60 text-white font-semibold text-md hover:bg-neutral-200 hover:text-black transition-colors hover:cursor-pointer">
                            Mark as watched
                        </button>
                    </div>
                </div>
        
            </header>
    )
}