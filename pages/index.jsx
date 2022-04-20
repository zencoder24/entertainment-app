import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

import mediaItems from '../public/data.json';

import MediaCards from '../components/MediaCards';
import MediaContainer from '../components/MediaContainer';

import TrendingCards from '../components/TrendingCards';
import TrendingContainer from '../components/TrendingContainer';



/**TODO: Need to add keys to the the json file. */

export const getStaticProps = async () => {
  return {
    props: {
      mediastuff: mediaItems,
    },
  };
};

export default function Home({mediastuff}) {
  return (
    <>

      <SearchBar placholderText={'Search for movies or TV series'}/>

        {/** Trending Component */}
        <TrendingContainer title={'Trending'}>
          {mediastuff
          .filter((media) => media.isTrending === true)
          .map((media) => (
            <TrendingCards
            year={media.year}
            category={media.category}
            rating={media.rating}
            title={media.title}
            small={media.thumbnail.trending.small}
            large={media.thumbnail.trending.large}
            />
          ))}
       </TrendingContainer>

        {/** Trending Component */}
        <MediaContainer title={'Recommended for you'}>
          {mediastuff
            .filter((media) => media.isTrending === false)
            .map((media) => (
              <MediaCards
                small={media.thumbnail.regular.small}
                medium={media.thumbnail.regular.medium}
                large={media.thumbnail.regular.large}
                year={media.year}
                category={media.category}
                rating={media.rating}
                title={media.title}
              />
            ))}
        </MediaContainer>
    </>
  );
}
