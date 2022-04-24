const dev = process.env.NODE_ENV !== 'production';

// export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

//  let response = await fetch('http://localhost:3000//api/media');

export const server = dev
  ? 'http://localhost:3000/api/media'
  : 'http://localhost:3000/api/media';
