import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import mediaItems from '../public/data.json';

/*Example Code */

/** Each page will probably have this */

//getStaticProps is a nextjs fuction that allows us to get the json infomation before the page is rendered.
//A practical use case would be a database call
export const getStaticProps = async () => {
  return {
    props: {
      mediastuff: mediaItems,
    },
  };
};

export default function Home({mediastuff}) {
  return (
    <div>
      <SearchBar placholderText={'Search for movies or TV series'} />
      <div className="grid grid-cols-2 gap-4 px-4">
        {/** These lines filter through the objects that are true and them maps them to jsx (html
         * elements) */}
        {mediastuff
          .filter((media) => media.isTrending === true)
          .map((media) => (
            <div className="card">
              {/* <div className="img">
                <div className="bookmark relative">
                  <div className="bg-x-mirage z-10 absolute w-6 h-6 flex justify-center items-center rounded-full">
                    <img src="/assets/svg.svg" alt="" className="w-3 m-auto" />
                  </div>
                </div>
                <img
                  src={media.thumbnail.regular.small}
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div className="txt">
                <div className="date">
                  <p></p>
                </div>
                <div className="bullet"></div>
                <div className="title">
                  <p></p>
                </div>
                <div className="bullet"></div>
                <div className="rating">
                  <p></p>
                </div>
              </div>
              <div className="title">
                <h2></h2>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
}
