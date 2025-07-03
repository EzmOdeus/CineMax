import { TMDBResponse, Movie } from '@/lib/tmdb';

export async function getTrendingMoviesPage(page: number): Promise<TMDBResponse<Movie>> {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=c473487d0e572b0c0976ffda5b6b6ba7&page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch trending movies');
  return res.json();
}

export async function getPopularMoviesPage(page: number): Promise<TMDBResponse<Movie>> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c473487d0e572b0c0976ffda5b6b6ba7&page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch popular movies');
  return res.json();
}

export async function getTopRatedMoviesPage(page: number): Promise<TMDBResponse<Movie>> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c473487d0e572b0c0976ffda5b6b6ba7&page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch top rated movies');
  return res.json();
}

export async function getUpcomingMoviesPage(page: number): Promise<TMDBResponse<Movie>> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c473487d0e572b0c0976ffda5b6b6ba7&page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch upcoming movies');
  return res.json();
}
