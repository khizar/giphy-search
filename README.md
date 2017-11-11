# Giphy search
Serch giphys and share any gif.

## Notes
* The layout of the gifs on the page is a problem that can be solved by an alogrithm which takes into account the width and height of the object (which is available in the API response) and lays them out accordingly.
* Using CSS Grid for the grid implementation and layout. Should use something like modrenizer etc for graceful degradation on browsers with no support.
* Tests just for proof of concept.

  
## Stack
* React app with babel for transpilation and babel-polyfill for browser support of latest ECMAScript features
* CSS Grid for layout. 
* CSS Modules support and PostCSS for CSS processing.
* Prettier for code formatting
* Mocha and Enzyme for testing.
* whatwg-fetch as fetch polyfill
* webpack as the bundler.

## Run
`npm i && npm start`
