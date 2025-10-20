// postcss.config.js
import functions from './public/js/functions.js';

export default {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {},
    'postcss-functions': { functions },
    autoprefixer: {},
  },
};
