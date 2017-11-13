# Giphy search
Serch giphys and share any gif.

## Instructions
Build a simple fronted such as https://giphy.com/ or https://tenor.com/ which provides funny gifs.

The two use cases that it has to implement are:

* As a user I want to search over gif images (use an existing api of your choice)
* As a user I want to be able to share the chosen gif to other users

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
