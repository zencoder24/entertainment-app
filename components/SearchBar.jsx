import React from 'react';
import SearchIcon from '../public/assets/icon-search.svg'

const SearchBar = ({placholderText}) => {
    return (
        <label className="relative block">
            <SearchIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"/>
            <input placeholder={placholderText} className=" py-6 px-4 bg-x-vulcan font-light placeholder:no-underline placeholder:text-red-500 placeholder:font-light placeholder:text-base text-x-white appearance-none w-full block pl-12 focus:outline-none focus:underline focus:underline-offset-[5px]"/>
        </label>
    );
};

export default SearchBar;