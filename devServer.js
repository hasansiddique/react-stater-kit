/* eslint-disable no-console */

import open from 'open';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './config';
import devConfig from './webpack.config';

const app = express();
const compiler = webpack(devConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: devConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(config.port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`
    =====================================================
    -> Server (${'SPA'}) 🏃 (running) on ${config.host}:${config.port}
    =====================================================
  `.green);
    open(`http://${config.host}:${config.port}`);
  }
});

/* eslint-enable no-console */
