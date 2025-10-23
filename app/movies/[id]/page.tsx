import { getMovieById } from "@/lib/data/tmdb"
import HeroMoviePage from "@/components/hero/hero-moviepage";


export default async function MovieDetails({params}: {params: Promise<{id: number}>}) {
    const {id} = await params;
    const movie = await getMovieById(id);

    return (
        <HeroMoviePage movie={movie}/>
    )
}