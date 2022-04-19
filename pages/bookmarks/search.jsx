import React from 'react';
import SearchBar from '../../components/SearchBar';

const BookmarksSearchPage = () => {
    return (
        <div>
            <SearchBar placholderText={'Search for bookmarked shows'}/>
            <h1>Bookmarks Search Page</h1>
        </div>
    );
};

export default BookmarksSearchPage;