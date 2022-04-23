import React from 'react';
import SearchBar from '../../components/SearchBar';
import {useState} from 'react';
import MediaContainer from '../../components/MediaContainer';
import MediaCards from '../../components/MediaCards';
import mediaItems from '../../public/data.json';

export async function getServerSideProps(context){
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  // let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ?'http://localhost:3000' : 'https://your_deployment.server.com'}/api/media`);
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
