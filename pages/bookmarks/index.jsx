import React from 'react';
import SearchBar from '../../components/SearchBar';

const BookmarksPage = () => {
    return (
        <div>
            <SearchBar placholderText={'Search for bookmarked shows'}/>
            <h1>Bookmarks Page</h1>
        </div>
    );
};

export default BookmarksPage;