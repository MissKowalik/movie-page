import { Movie } from "@/lib/interfaces/movie"
import { Genre } from "@/lib/types/genre"
import HeroBackdrop from "./hero-backdrop"
import HeroHeader from "./hero-header"
import HeroReleaseRating from "./hero-release-rating"
import HeroHeading from "./hero-heading"
import HeroActions from "./hero-actions"

export default function HeroMoviePage({movie}: {movie: Movie}) {
    return (
        <HeroHeader>
                <HeroBackdrop movie={movie}/>
        
                {/* dark gradient background for contrast against the white text */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t to-neutral-400/20 from-black" />

                {/* hero content */}
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

                    <HeroHeading movie={movie}/>

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

                    
                    {/* description */}
                    <div className="text-pretty">
                        {movie.overview}
                    </div>

                    {/* Release year & rating */}
                    <HeroReleaseRating movie={movie}/>

                    <div className="flex flex-wrap mt-2 justify-center lg:justify-start gap-4">
                        <button className="rounded-full max-w-[200] py-1 px-3 bg-amber-400 text-black font-semibold text-md hover:bg-neutral-800 hover:text-white transition-colors hover:cursor-pointer">
                            Add to Watchlist
                        </button>

                        <button className="rounded-full max-w-[200] py-1 px-3 bg-gray-600/60 text-white font-semibold text-md hover:bg-neutral-200 hover:text-black transition-colors hover:cursor-pointer">
                            Mark as watched
                        </button>
                    </div>
                </div>
        
            </HeroHeader>
    )
}