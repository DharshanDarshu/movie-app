"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieBackDrop from "./MovieBackDrop";

type Props = {
  movies: any;
  category: string;
};

function Movies({ movies, category }: Props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1 className='mx-8 text-xl font-bold mt-4 capitalize'>
        {category}
      </h1>
      <div className='flex mx-8 my-4'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass='carousel-item-padding-40-px'>
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
