// Fetch popular movies
export async function getPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?&page=1&api_key=${process.env.API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API responded with status ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}

// Fetch upcoming movies
export async function getUpcomingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?&page=1&api_key=${process.env.API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API responded with status ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}

// Fetch genres
export async function getGenres() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  )

  if (!response.ok) {
    throw new Error(`API responded with status ${response.status}`);
  }

  const data = await response.json();
  return data.genres;
}


// Fetch random movie
export async function getRandomMovie() {
  // TMDB's discover endpoint allows pagination up to 500
  const randomPage = Math.floor(Math.random() * 500) + 1;

  // fetch movies from random page
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?&page=${randomPage}&api_key=${process.env.API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  )

  const data = await response.json();

  // pick random movie from that page
  const randomIndex = Math.floor(Math.random() * data.results.length);
  return data.results[randomIndex];
}