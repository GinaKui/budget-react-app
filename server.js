const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
// app.use(express.static(publicPath));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  
app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening`);
});