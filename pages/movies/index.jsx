import React from 'react';
import SearchBar from '../../components/SearchBar';

const MoviesPage = () => {
    return (
        <div>
            <SearchBar placholderText={'Search for movies'}/>
            <h1>Movies Page</h1>
        </div>
    );
};

export default MoviesPage;