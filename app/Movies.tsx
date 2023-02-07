import React from "react";
import MovieBackDrop from "./MovieBackDrop";

type Props = {
  movies: any;
  category: string;
};

function Movies({ movies, category }: Props) {
  return (
    <div>
      <h1 className='mx-8 text-xl font-bold mt-4 capitalize'>
        {category}
      </h1>
      <div className='flex gap-4 mx-8 my-4 hidden-over'>
        {movies?.results.map((movie: any) => (
          <MovieBackDrop
            key={movie.id}
            id={movie.id}
            posterPath={movie.backdrop_path}
            releaseDate={movie.release_date}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
