import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
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
    <div>
      {/** These lines filter through the objects that are true and them maps them to jsx (html 
       * elements) */}
     {mediastuff.filter(media => media.isTrending === true)
        .map(media => (
          <h1>{media.title}</h1>
        ))
     }
    </div>
  );
}
