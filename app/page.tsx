import CardRow from "@/components/card-row";
import Hero from "@/components/hero";
import { getPopularMovies } from "@/lib/data/tmdb";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const fivePopularMovies = await popularMovies.slice(0, 6)

  return (
    <main className="flex-grow">
      <Hero/>
      <CardRow movies={fivePopularMovies} heading="Popular Movies"/>
    </main>
  )
}
