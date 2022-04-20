import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import TrendingMediaItems from '../components/TrendingMediaItems';
import mediaItems from '../public/data.json'




/*Example Code */

/** Each page will probably have this */

//getStaticProps is a nextjs fuction that allows us to get the json infomation before the page is rendered. 
//A practical use case would be a database call
export const getStaticProps = async () => {
  return{
    props:{
      mediastuff: mediaItems
    }  
  }
}


export default function Home({mediastuff}) {
  return (
    <>
      <SearchBar placholderText={'Search for movies or TV series'}/>
      {/** Recommended for you */}
      <div className='flex overflow-x-auto no-scrollbar flex-row '>
        {mediastuff
        .filter((media) => media.isTrending === true)
        .map((media) => (
          <TrendingMediaItems
          year={media.year}
          category={media.category}
          rating={media.rating}
          title={media.title}
          small={media.thumbnail.trending.small}
          large={media.thumbnail.trending.large}
          />
        ))}
      </div>


    </>
  );
}
