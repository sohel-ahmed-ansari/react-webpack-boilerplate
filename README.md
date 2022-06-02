# React-Webpack boilerplate

A boilerplate which uses webpack to build a front-end app with the following:
* React
* Less
* ESLint
* Babel (for es6 support)

## Run the app locally

To launch the app locally, clone the repo. Then,
```
npm i
npm run build
npm start
```
You should be able to see the page on http://127.0.0.1:8080

## Run the app in dev mode

To watch the files and build as you make changes, run
```
npm run dev
```
Just refresh the page after saving your files and your changes will reflect.
This will build the app in dev mode, which means it will include source map so that its easy to debug using browser dev tools.

## Build for production

To build the app for production, run
```
npm run build
```
This will build the app so that its optimised for production and put it in a directory named 'dist'.

## Import styles

Simply import `less` or `css` files using `import`

Example:
```
import 'path/to/style.less';
import 'path/to/style.css';
```

## Import images

Webpack has been setup with `file-loader` which means you can import images in your code

You can import image like this:
```
import myImage from 'path/to/image.png';
```
Then you can use `myImage` in the `src` attribute of `<img>` tag.
