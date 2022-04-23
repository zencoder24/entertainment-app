import React  from 'react';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import mediaItems from '../../public/data.json';
import MediaContainer from '../../components/MediaContainer';
import MediaCards from '../../components/MediaCards'

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

  export default function TvShowsPage ({media}) {
  
    const[searchVal, setSearchVal] = useState("")
  
  
    return (
      <>
  
        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} placholderText={'Search for TV series'}/>
  
          {/** Trending Component */}
          <MediaContainer searchVal={searchVal} title={'TV Series'}>
            {media
              .filter((item) => item.category === "TV Series")
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
      </>
    );
  }