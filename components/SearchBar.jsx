import React from 'react';
import SearchIcon from '../public/assets/icon-search.svg'

const SearchBar = () => {
    return (
        <label className="relative block">
            <SearchIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"/>
            <input placeholder='Search for movies' className="py-3 px-4 bg-x-vulcan font-light placeholder-gray-700 placeholder:font-light placeholder:text-base text-x-white appearance-none w-full block pl-14 focus:outline-none"/>
        </label>
    );
};

export default SearchBar;