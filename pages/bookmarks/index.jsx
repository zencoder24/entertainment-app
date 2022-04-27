import React  from 'react';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import mediaItems from '../../public/data.json';
import MediaContainer from '../../components/MediaContainer';
import MediaCards from '../../components/MediaCards'
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

  export default function BookmarksPage ({media}) {
  
    const[searchVal, setSearchVal] = useState("")
  
  
    return (
      <>
  
        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} placholderText={'Search bookmarked shows'}/>
  
        
          <MediaContainer searchVal={searchVal} title={'Bookmarked Movies'}>
            {media
              .filter((item) => item.category === "Movie" && item.isBookmarked === true && item.title.toLowerCase().includes(searchVal.toLowerCase()))
              .map((item) => (
                <MediaCards
                  key={item._id}
                  id={item._id}
                  small={item.thumbnail.regular.small}
                  medium={item.thumbnail.regular.medium}
                  large={item.thumbnail.regular.large}
                  year={item.year}
                  category={item.category}
                  rating={item.rating}
                  title={item.title}
                  mediaBookmarked={item.isBookmarked}
                />
              ))}
          </MediaContainer>

          <MediaContainer searchVal={searchVal} title={'Bookmarked TV Series'}>
            {media
              .filter((item) => item.category === "TV Series" && item.isBookmarked === true && item.title.toLowerCase().includes(searchVal.toLowerCase()))
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
