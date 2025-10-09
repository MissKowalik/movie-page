import { getPopularMovies } from "@/lib/data/tmdb"
import Image from "next/image";

export default async function Hero() {
    const movies = await getPopularMovies();
    const heroMovie = await movies[7];

    return (
    <header className="relative w-full h-[calc(100vh-80px)]">
        <Image
            src={`https://image.tmdb.org/t/p/original/${heroMovie.backdrop_path}`}
            alt={`Backdrop image of ${heroMovie.title}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority
        />
        <div className="absolute bottom-0 left-0 w-full h-200 bg-gradient-to-t to-transparent from-black/80" />
        <div className="absolute bottom-75 left-1/10 max-w-[40%] p-4 rounded-md text-white">
            <h1 className="text-4xl font-bold">{heroMovie.title}</h1>
        </div>
    </header>
  );
}