# Image Processing API 

Image Processing API is the first project in the [Udacity’s Full Stack JavaScript Developer Nanodegree](https://learn.udacity.com/nanodegrees/nd0067-alg-t2).

# Project Overview

The image processing api can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API will handle resizing and serving stored images for you.

# Technologies and tools 
- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Sharp](https://sharp.pixelplumbing.com/)

#### Tests
- [Jasmine](https://jasmine.github.io/)
- [Supertest](https://github.com/ladjs/supertest#readme)
#### Code Formatters
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)



## Endpoints 
 - `http://localhost:4000/image?name={imageName}&width={width}&height={height}` 
    - `{imageName}` -> image name example `car`,`nature`.
    - `{width}` -> image width (pixel) example `1280`.
    - `{height}` -> image height (pixel) example `720`.
 
## Coming Features:
- [x]  Modify the thumbnail filename to include the image size to allow for multiple sizes of the same image.
- [x]  Add in logging to record when images are processed or accessed.
---
- [ ]  Add additional processing to accept and output other image formats than JPG.
- [ ]  Further explore the options in the Sharp module and add additional processing options.
---
- [ ]  Create a front-end for uploading more images to the full-size directory.
- [ ]  Create a front-end that displays a thumbnail directory.
- [ ]  Create a front-end that allows for the selection of how to process a selected image.


## Installation

### To run the app you need to:

open the project directory with cmd, then you can run the following commands:

1- open the project directory then use the following commend .

`npm i` or `pnpm i` to install project dependencies.

2- run server using `npm start` or `pnpm start`
    the server will run on [localhost:4000](http://localhost:4000/).

## Other useful commands:
-   `npm run build`  compile typescript to /dist folder,
-   `npm run lint`  run Eslint
-   `npm run test` run unit tests (jasmine) 
-   `npm run start` start the server on production mode
-   `npm run prettier` formate the code  
-   `npm run dev`  watch the project in development mode 

#### Credit to  :
- [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode).
