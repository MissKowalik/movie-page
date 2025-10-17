import { Movie } from "@/lib/interfaces/movie";

export default function getMovieDetailUrl(movie: Movie) {
  const slug = movie.title.replace(/\s+/g, '-');
  return `/movies/${movie.id}/${slug}`;
}