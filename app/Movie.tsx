import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  posterPath: string;
  releaseDate: string;
  id: number;
};

function Movie({
  title,
  posterPath,
  releaseDate,
  id,
}: Props) {
  return (
    <>
      {posterPath && (
        <div className='border-x-2 border-white'>
          <Link href={`/${id}`}>
            <div className='w-full md:w-[250px] h-full md:h-[350px] hover:scale-[1.02] transition-all duration-300 ease-out'>
              <Image
                src={`https://image.tmdb.org/t/p/original${posterPath}`}
                width={250}
                height={350}
                className='w-full h-full'
                alt={title}
              />
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Movie;
