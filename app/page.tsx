import React from "react";
import Banner from "./Banner";
import Movie from "./Movie";
import Movies from "./Movies";

async function HomePage() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );

  const popularMovie = await tmdbResponse.json();
  const trendingResponse = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`,
  );

  const trendingMovie = await trendingResponse.json();
  return (
    <div className=''>
      <Banner movies={trendingMovie.results} />
      <h1 className='mx-8 text-xl font-bold mt-4'>
        Top Rated
      </h1>

      <div className='flex gap-4 mx-8 my-4 hidden-over'>
        {trendingMovie?.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            title={movie.title}
          />
        ))}
      </div>
      <Movies
        movies={popularMovie}
        category='popular'
      />
    </div>
  );
}

export default HomePage;
