import { Movie } from "../interfaces/movie";

export type CardRowProps = {
  heading: string;
  movies: Movie[];
  headingLink?: string;

  // searchbar specific props
  onMovieClick?: () => void;
};