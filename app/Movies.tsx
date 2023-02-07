"use client";

import MovieBackDrop from "./MovieBackDrop";
import Carousel from "react-grid-carousel";

type Props = {
  movies: any;
  category: string;
};

function Movies({ movies, category }: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className='mx-8 text-xl font-bold mt-4 capitalize'>
        {category}
      </h1>
      <div className='flex gap-4 mx-8 my-4 hidden-over'>
        <Carousel
          cols={5}
          showDots
          loop>
          {movies?.results.map((movie: any) => (
            <MovieBackDrop
              key={movie.id}
              id={movie.id}
              posterPath={movie.backdrop_path}
              releaseDate={movie.release_date}
              title={movie.title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Movies;
