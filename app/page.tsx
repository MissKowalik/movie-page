import CardRow from "@/components/card-row";
import Hero from "@/components/hero";
import { getPopularMovies } from "@/lib/data/tmdb";

export default async function Home() {
  const popularMovies = await getPopularMovies();

  return (
    <main className="flex-grow">
      <Hero/>
      <CardRow movies={popularMovies} heading="Popular Movies"/>
    </main>
  )
}
