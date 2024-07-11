import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  title: string;
  imageUrl: any;
  imdb: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl, imdb }) => {
  return (
    <div className="tooltip" data-tip={title}>
      <Link
        href={`/movie/${imdb}`}
        className="block rounded-lg p-1 shadow-sm shadow-indigo-100"
      >
        <div className="h-56 w-full rounded-md overflow-hidden">
          <Image
            width={772}
            height={80}
            alt={title}
            src={imageUrl}
            className="object-cover h-full w-full"
            priority={true}
          />
        </div>

        <div className="mt-2 p-1 text-center ">
          <dl>
            <div>
              <dd className="font-medium line-clamp-1">{title}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
