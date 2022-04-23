import SearchBar from '../components/SearchBar';
import mediaItems from '../public/data.json';
import MediaCards from '../components/MediaCards';
import MediaContainer from '../components/MediaContainer';
import TrendingCards from '../components/TrendingCards';
import TrendingContainer from '../components/TrendingContainer';
import {useState} from 'react';




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


export default function Home( {media}) {
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
          .filter((item) => item.isTrending === true)
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
          .filter((item) => item.isTrending === false)
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
