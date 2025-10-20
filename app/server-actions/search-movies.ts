"use server";

import { getMoviesByTitle } from "@/lib/data/tmdb";

export async function searchMoviesAction(query: string) {
  try {
    const results = await getMoviesByTitle(query);
    return results;
  } catch (err) {
    console.error("Server action error:", err);
    return [];
  }
}