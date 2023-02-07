import React from "react";
import Banner from "./Banner";
import Movie from "./Movie";

async function HomePage() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );

  const movieData = await tmdbResponse.json();

  return (
    <div className='my-4'>
      <Banner />
      <div className='grid gap-16 grid-cols-fluid'>
        {movieData?.results.map((movie: any) => (
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
