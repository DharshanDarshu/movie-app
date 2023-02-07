import React from "react";
import Movie from "./Movie";

async function HomePage() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );

  const movieData = await tmdbResponse.json();
  console.log(movieData);

  return (
    <main>
      <h1></h1>
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
    </main>
  );
}

export default HomePage;
