import Link from "next/link";
import { Movie } from "@/lib/interfaces/movie"

type HeroHeadingProps = {
    movie: Movie;
    headingLink?: string;
}

export default function HeroHeading({ movie, headingLink }: HeroHeadingProps) {
    return (
        <>
            {headingLink ? (
                <Link href={headingLink}>
                    <h1 className="text-2xl md:text-4xl xl:text-6xl">
                        {movie.title}
                    </h1>
                </Link>
            ) : (
                <h1 className="text-2xl md:text-4xl xl:text-6xl">
                    {movie.title}
                </h1>
            )}
        </>
    )
}