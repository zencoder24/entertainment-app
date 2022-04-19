module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit: ['Outfit', 'sans-serif']
      }
    },
    colors: {
      // sunset orange
      'x-orange': '#FC4747',

      // blue-ish gray
      'x-gray': '#5A698F',

      // dark black
      'x-vulcan': '#10141E',

      // dark blue
      'x-mirage': '#161D2F',

      // white
      'x-white': '#FFFFFF',
    },
  },
  plugins: [],
};
