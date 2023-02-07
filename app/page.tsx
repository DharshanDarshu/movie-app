import React from "react";
import Banner from "./Banner";
import Movie from "./Movie";

async function HomePage() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );

  const popularMovie = await tmdbResponse.json();
  return (
    <div className=''>
      <Banner movies={popularMovie.results} />
      <h1 className='mx-8 text-xl font-bold mt-4'>
        Top Rated
      </h1>

      <div className='flex gap-4 mx-8 my-4 hidden-over'>
        {popularMovie?.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
