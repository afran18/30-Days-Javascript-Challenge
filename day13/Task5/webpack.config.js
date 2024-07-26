const path = require('path');

module.exports = {
  entry: './Task5/src/index.js', // Entry point of the application
  output: {
    filename: 'bundle.js', // Output bundled file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Set the mode (development or production)
};
