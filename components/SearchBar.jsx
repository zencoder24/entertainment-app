import React, { useState } from 'react';
import SearchIcon from '../public/assets/icon-search.svg';

const SearchBar = ({placholderText, onChange, setSearchVal, searchVal}) => {
    const [hits, setHits] = useState([]);

    const search = async (e) => {
        const q = e.target.value;
        setSearchVal(e.target.value)

        if(q.length > 2){
            const params = new URLSearchParams({q});

            const res = await fetch('/api/search?' + params);

            const result = await res.json; 
            console.log(result);
            setHits(result['media'])
        }
    }

  return (
    <div>
      <label className="relative block">
        <SearchIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          value={searchVal}
          onChange={search}
          placeholder={placholderText}
          className=" py-5 px-4 bg-x-vulcan font-light placeholder:no-underline placeholder:text-red-500 placeholder:font-light placeholder:text-base text-x-white appearance-none w-full block pl-12 focus:outline-none focus:underline focus:underline-offset-[5px]"
        />
      </label>
      <h1
        className={`${
          searchVal.length == 0 ? 'hidden' : 'block'
        } text-xl mt-2 ml-4 md:text-3xl`}
      >
        {' '}
        Found Results for: '{searchVal}'
      </h1>

      <ul>
        {hits.map((hit) => (
            <li>
              {hit.title} {hit.category}
            </li>
          ))}
      </ul>



    </div>
  );
};

export default SearchBar;
