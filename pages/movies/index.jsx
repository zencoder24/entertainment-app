import React from 'react';
import SearchBar from '../../components/SearchBar';
import {useState} from 'react';
import MediaContainer from '../../components/MediaContainer';
import MediaCards from '../../components/MediaCards';
import mediaItems from '../../public/data.json';
import server from '../../config/server'

export async function getServerSideProps(context){
  
  
  let response = await fetch(`${server}/api/media`);
  // extract the data
  let data = await response.json();

  return {
      props: {
          media: data['message'],
      },
  };
}

const MoviesPage = ({media}) => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <div>
      <SearchBar
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        placholderText={'Search for movies'}
      />

      <MediaContainer searchVal={searchVal} title={'Movies'}>
        {media
          .filter((item) => item.category === 'Movie'&& item.title.toLowerCase().includes(searchVal.toLowerCase()))
          .map((item) => (
            <MediaCards
              key={item._id}
              id={item._id}
              mediaBookmarked={item.isBookmarked}
              small={item.thumbnail.regular.small}
              medium={item.thumbnail.regular.medium}
              large={item.thumbnail.regular.large}
              year={item.year}
              category={item.category}
              rating={item.rating}
              title={item.title}
            />
          ))}
      </MediaContainer>
    </div>
  );
};

export default MoviesPage;
