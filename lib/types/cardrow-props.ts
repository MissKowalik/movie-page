import { Movie } from "../interfaces/movie";

export type CardRowProps = {
  heading: string;
  movies: Movie[];

  // searchbar specific props
  onMovieClick?: () => void;
};