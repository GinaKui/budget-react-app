const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;
/**
 * this express server is configured to work with webpack
 */
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));
  
app.listen(PORT, () => {
    console.log(`Express server is listening on PORT ${PORT}`);
});