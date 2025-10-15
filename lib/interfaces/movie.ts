import { Genre } from "../types/genre";

export interface Movie {
  id: number;
  release_date: string;
  poster_path: string;
  title: string;
  vote_average: number;
  backdrop_path: string;
  genres?: Genre[];
  overview?: string;
}