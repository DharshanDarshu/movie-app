import React from "react";
import Movie from "./Movie";

async function SearchPage({ params }: any) {
  const { term } = params;

  const searchResponse = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${term}`,
  );

  const movieData = await searchResponse.json();

  return (
    <div className='mx-8'>
      <h1 className='my-4 text-lg font-bold capitalize'>
        Search Term: {term}
      </h1>
      <div className='grid gap-2 grid-cols-fluid my-4'>
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

export default SearchPage;
