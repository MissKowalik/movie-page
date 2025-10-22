import { Movie } from "@/lib/interfaces/movie"

export default function HeroReleaseRating({movie}: {movie: Movie}) {
    return (
        <div className="flex justify-center lg:justify-start gap-4 text-sm lg:text-lg">
            <span>{movie.release_date.split("-")[0]}</span>
            <span className="flex items-center">
                <span className="text-amber-400 pr-1">★</span>
                {movie.vote_average.toFixed(1)}
            </span>
        </div>
    )
}