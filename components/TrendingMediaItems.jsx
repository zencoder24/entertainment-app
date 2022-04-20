import React from 'react';

/*TODO: Figure out how use  large background image on md screen sizes. 

 -using the tailwind "bg-[url('/img/hero-pattern.svg')]" class doesnt work because the paths from the json call cant be called inside of the 
  global.css file which is where tailwind gets the file from

 -using the style attribute works but the element in which it is called has all of the other elements nested in it. adding a 'hidden' class to the 
  className would hide everything.
 
 */
const TrendingMediaItems = ({year, category, rating, title, small, large}) => {
    return (
        <div style={{backgroundImage: `url(${small})`}} className='grid grid-cols-3 bg-cover shrink-0 w-60 ml-4  h-36 rounded-lg md:ml-2'>
               <div className=" visible col-span-2 self-end">
                 <div className='text-left ml-4 mb-2'>
                  <div className='movie-info opacity-70 align-middle  text-xs font-light space-x-1 flex text-x-white'>
                    <p>{year}</p>
                    <span>&bull;</span> 	 
                    <div className='flex align-middle'>
                      <img
                      src="/assets/icon-category-movie.svg"
                      alt=""
                      className="w-5"
                      />
                      <span >{category}</span>
                    </div>
                    <span>&bull;</span> 	 
                    <p>{rating}</p>
                  </div>
                  <h1 className='text-base'>{title}</h1>
                 </div>
               </div>
               <div className="bg-x-mirage w-6 h-6 flex justify-center items-center rounded-full mr-4 my-2 mx-auto opacity-70 md:w-10 md:h-10 md:mt-3 md:mr-3">
                <img
                  src="/assets/icon-bookmark-empty.svg"
                  alt=""
                  className="w-2  md:w-3"
                />
              </div>
             </div>
            
    );
};

export default TrendingMediaItems;