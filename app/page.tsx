import React from "react";
import Banner from "./Banner";
import Movie from "./Movie";

async function HomePage() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );

  const tmdbUpcomingResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=ta&page=1`,
  );

  const movieData = await tmdbResponse.json();

  const upcomingMovies = await tmdbUpcomingResponse.json();

  return (
    <div className=''>
      <Banner movies={upcomingMovies.results} />
      <div className='grid gap-16 grid-cols-fluid mx-8 my-4'>
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
