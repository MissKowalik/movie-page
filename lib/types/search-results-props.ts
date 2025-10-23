import { Movie } from "../interfaces/movie";

export type SearchResultsProps = {
    query: string;
    results: Movie[]
    onMovieClick: () => void;
    onViewAllClick: () => void;
}