"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Movie from "./Movie";

type Props = {
  movies: any;
  category: string;
};

function MoviesPoster({ movies, category }: Props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <div className='mx-2 md:mx-8'>
      <h1 className='text-xl font-bold mt-2 md:mt-4'>
        Trending
      </h1>

      <div className='gap-4 my-4 hidden-over'>
        <Carousel
          responsive={responsive}
          autoPlaySpeed={2000}
          focusOnSelect={true}
          keyBoardControl={true}
          customTransition='all 2'
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          containerClass='carousel-container'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'>
          {movies?.results.map((movie: any) => (
            <Movie
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              title={movie.title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MoviesPoster;
