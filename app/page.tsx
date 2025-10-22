import CardRow from "@/components/card-row";
import HeroStartpage from "@/components/hero/hero-startpage";
import { getPopularMovies, getUpcomingMovies } from "@/lib/data/tmdb";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <main className="flex-grow">
      <HeroStartpage/>
      <CardRow movies={popularMovies} heading="Popular Movies" headingLink="/movies?filter=popular"/>
      <CardRow movies={upcomingMovies} heading="Upcoming Movies" headingLink="/movies?filter=upcoming"/>
    </main>
  )
}
