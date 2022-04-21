import React, {useState} from 'react';

export default function MediaCards({
  small,
  medium,
  large,
  year,
  category,
  rating,
  title,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="card">
      <div className="img">
        <div className="bookmark relative flex justify-end">
          <div
            className="bg-x-mirage z-10 absolute w-6 h-6 flex justify-center items-center rounded-full mt-1 mr-1 opacity-70 md:w-10 md:h-10 md:mt-3 md:mr-3"
            onClick={(e) => setIsBookmarked(!isBookmarked)}
          >
            <img
              src={
                isBookmarked
                  ? '/assets/icon-bookmark-full.svg'
                  : '/assets/icon-bookmark-empty-new.svg'
              }
              alt=""
              className="w-2 m-auto md:w-3"
            />
          </div>
          <img src={small} alt="" className="block md:hidden rounded-lg " />
          <img
            src={medium}
            alt=""
            className="hidden md:block lg:hidden rounded-lg"
          />
          <img src={large} alt="" className="hidden lg:block rounded-lg" />
        </div>
      </div>
      <div className="txt flex flex-wrap text-xs font-thin text-x-white opacity-75 pt-1 md:text-sm">
        <div className="date">
          <p>{year}</p>
        </div>
        <div className="bullet px-1 md:px-2">•</div>
        <div className="title flex">
          <img
            src="/assets/icon-category-movie.svg"
            alt=""
            className="w-3 mr-1 md:mr-2"
          />
          <p>{category}</p>
        </div>
        <div className="bullet px-1 md:px-2">•</div>
        <div className="rating">
          <p>{rating}</p>
        </div>
      </div>
      <div className="title">
        <h2 className="md:text-lg lg:text-2xl">{title}</h2>
      </div>
    </div>
  );
}
