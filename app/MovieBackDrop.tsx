import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  posterPath: string;
  releaseDate: string;
  id: number;
};

function MovieBackDrop({
  title,
  posterPath,
  releaseDate,
  id,
}: Props) {
  return (
    <>
      {posterPath && (
        <div className='border'>
          <Link href={`/${id}`}>
            <div className='w-[350px] h-[200px]'>
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

export default MovieBackDrop;
