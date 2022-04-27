const dev = process.env.NODE_ENV !== 'production';

  const server = dev ? process.env.LOCAL_SERVER : process.env.PRODUCTION_URL; 

  export default server;