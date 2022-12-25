# react-animal-search

# Create React App from scratch
1) Install react, webpack, babel, linters, path, loader dependencies
```sh
npm init -y \
&& npm i react react-dom prop-types \
&& npm i --save-dev \
webpack-cli \
webpack-dev-server \
babel-loader \
@babel/preset-env \
@babel/plugin-transform-runtime \
@babel/preset-react \
path \
style-loader \
css-loader \
jest-environment-jsdom \
@testing-library/jest-dom \
@testing-library/react \
&& npm i -g jest-cli
```

2) Create a new file webpack.config.js
```js
const path = require("path");

module.exports={
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "9500",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use:  'babel-loader' 
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}
```

3) Create a new file .babelrc
```js
{
    "presets": [
        "@babel/preset-env", 
        "@babel/preset-react" 
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
```

4) Create a new file jest.config.js
```js
module.exports = {
    testEnvironment: 'jsdom',
}
```

5) Config start, build, test scripts to package.json
```json
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
    "test": "jest --watch"
  },
```

6) Create 2 directory
* public
* src

7) Create file index.html to public directory
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <div id="root"></div>
    <script src="main.js"></script>
</body>
</html>
```

8) Create index.js to src directory
```js
import React from "react"
import { createRoot } from "react-dom/client"

const App = () => {
    return <div>Hello World</div>
}

const el = document.getElementById("root")
const root = createRoot(el)
root.render(<App/>)
```

https://github.com/codebangkok/react/
