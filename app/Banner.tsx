import Image from "next/image";

type Props = {
  movies: any;
};

function Banner({ movies }: Props) {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original${movies[12].backdrop_path}`}
        className='hidden md:inline-block w-full h-[80vh] object-cover'
        width={600}
        height={600}
        priority
        alt={movies[12].title}
      />
      <Image
        src={`https://image.tmdb.org/t/p/original${movies[10].poster_path}`}
        className='inline-block md:hidden w-full h-[80vh] object-cover'
        width={600}
        height={600}
        priority
        alt={movies[12].title}
      />
    </div>
  );
}

export default Banner;
