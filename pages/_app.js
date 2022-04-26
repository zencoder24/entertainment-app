import {motion} from 'framer-motion'
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({Component, pageProps, router}) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

 
  return(
      <Layout>
        <motion.div key={router.route} initial="hidden" animate="enter" exit="exit" transition={{type:'linear'}} variants={variants}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>
  ) 
}

export default MyApp;
