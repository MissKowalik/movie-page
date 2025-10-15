import CardRow from "@/components/card-row";
import HeroStartpage from "@/components/hero-startpage";
import { getPopularMovies, getUpcomingMovies } from "@/lib/data/tmdb";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const popularMoviesSelection = await popularMovies.slice(0, 6)

  const upcomingMovies = await getUpcomingMovies();
  const upcomingMoviesSelection = await upcomingMovies.slice(0,6)

  return (
    <main className="flex-grow">
      <HeroStartpage/>
      <CardRow movies={popularMoviesSelection} heading="Popular Movies"/>
      <CardRow movies={upcomingMoviesSelection} heading="Upcoming Movies"/>
    </main>
  )
}
