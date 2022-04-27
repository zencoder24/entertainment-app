import SearchBar from '../components/SearchBar';
import mediaItems from '../public/data.json';
import MediaCards from '../components/MediaCards';
import MediaContainer from '../components/MediaContainer';
import TrendingCards from '../components/TrendingCards';
import TrendingContainer from '../components/TrendingContainer';
import {useState} from 'react';
import server from '../../config/server'

export async function getServerSideProps(context) {
 


  let response = await fetch(`${server}/api/media`);
  // extract the data
  let data = await response.json();

  return {
    props: {
      media: data['message'],
    },
  };
}

export default function Home({media}) {
  const [searchVal, setSearchVal] = useState('');

  return (
    <>
      <SearchBar
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        placholderText={'Search for movies or TV series'}
      />

      {/** Trending Component */}
      <TrendingContainer searchVal={searchVal} title={'Trending'}>
        {media
          .filter((item) => item.isTrending)
          .map((item) => (
            <TrendingCards
              key={item._id}
              id={item._id}
              mediaBookmarked={item.isBookmarked}
              year={item.year}
              category={item.category}
              rating={item.rating}
              title={item.title}
              small={item.thumbnail.trending.small}
              large={item.thumbnail.trending.large}
            />
          ))}
      </TrendingContainer>

      {/** Trending Component */}
      <MediaContainer searchVal={searchVal} title={'Recommended for you'}>
        {media
          .filter((item) => searchVal? item.title.toLowerCase().includes(searchVal.toLowerCase()) : item.isTrending === false)
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
