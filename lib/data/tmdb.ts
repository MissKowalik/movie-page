"use server"

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

  // filter on movies with a backdrop image
  const moviesWithBackdrop = data.results.filter((movie: { backdrop_path: string | null }) => movie.backdrop_path);

  if (moviesWithBackdrop === 0) {
    return null;
  }

  // pick random movie from filtered list
  const randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
  return moviesWithBackdrop[randomIndex];
}



// Fetch movie by id
export async function getMovieById(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?&api_key=${process.env.API_KEY}`,
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
  return data;
}


// Fetch movies 
export async function getMovies(page = 1, filter: "popular" | "upcoming" | "all" = "all") {
  let endpoint = `https://api.themoviedb.org/3/discover/movie?&page=${page}&api_key=${process.env.API_KEY}`;

  if (filter === "popular") {
    endpoint = `https://api.themoviedb.org/3/movie/popular?&page=${page}&api_key=${process.env.API_KEY}`
  } else if (filter === "upcoming") {
    endpoint = `https://api.themoviedb.org/3/movie/upcoming?&page=${page}&api_key=${process.env.API_KEY}`
  }

  const response = await fetch(endpoint,
    {
      headers: {
        accept: "application/json",
      },
    }
  )

  if (!response.ok) {
    throw new Error(`TMDB API responded with status ${response.status}`);
  }

  const data = await response.json();
  return {
    movies: data.results,
    totalPages: data.total_pages
  };
}


// search movie
export async function getMoviesByTitle(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${process.env.API_KEY}`,
    {
      headers: { accept: "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error(`TMDB API responded with status ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}