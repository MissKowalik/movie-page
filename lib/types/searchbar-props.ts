import { Movie } from "../interfaces/movie";

export type SearchBarProps = {
    query: string;
    onQueryChange: (value: string) => void;
    onResults: (movies: Movie[]) => void;
}