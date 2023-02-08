import React from "react";
import Banner from "./Banner";
import Movie from "./Movie";
import Movies from "./Movies";
import MoviesPoster from "./MoviesPoster";

async function HomePage() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );

  const popularMovie = await tmdbResponse.json();
  const trendingResponse = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`,
  );

  const trendingMovie = await trendingResponse.json();
  const topRatedResponse = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`,
  );

  const topRatedMovie = await topRatedResponse.json();
  return (
    <div className=''>
      <Banner movies={trendingMovie.results} />
      <MoviesPoster
        movies={trendingMovie}
        category='Trending'
      />
      <Movies
        movies={topRatedMovie}
        category='top rated'
      />
      <Movies
        movies={popularMovie}
        category='popular'
      />
    </div>
  );
}

export default HomePage;
