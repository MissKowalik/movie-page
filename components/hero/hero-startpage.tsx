import { getGenres, getRandomMovie } from "@/lib/data/tmdb"
import { Genre } from "@/lib/types/genre";
import HeroBackdrop from "./hero-backdrop";
import HeroHeader from "./hero-header";
import HeroReleaseRating from "./hero-release-rating";
import HeroHeading from "./hero-heading";


export default async function HeroStartpage() {
    const movie = await getRandomMovie();
    const genres = await getGenres();
    
    // map genre ids to names
    const genreNames = movie.genre_ids.map((id: number) => genres.find((g: Genre) => g.id === id)?.name)

    return (
    <HeroHeader>
        <HeroBackdrop movie={movie} backdropLink={`/movies/${movie.id}`}/>

        {/* dark gradient background for contrast against the white text */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t to-transparent from-black" />

        {/* hero content */}
        <div
            className="
                absolute bottom-15 text-center flex flex-col
                left-1/2 -translate-x-1/2 
                w-[90%] sm:w-[80%] 
                lg:left-[10%] lg:bottom-[15%] lg:translate-x-0 lg:max-w-[40%] lg:text-left gap-4
            "
        >
            
            <HeroHeading movie={movie} headingLink={`/movies/${movie.id}`}/>

            {/* genres */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                {genreNames.map((genre: string) => (
                <span
                    key={genre}
                    className="px-2 py-1 bg-gray-600/60 rounded text-sm md:text-lg xl:text-xl"
                >
                    {genre}
                </span>
                ))}
            </div>

            {/* Release year & rating */}
            <HeroReleaseRating movie={movie}/>
        </div>

    </HeroHeader>
  );
}