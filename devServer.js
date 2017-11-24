/* eslint-disable no-console */

import open from 'open';
import colors from 'colors';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import proxy from 'http-proxy-middleware';
import config from './config';
import devConfig from './webpack.config';

const app = express();
const compiler = webpack(devConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: devConfig.output.publicPath
}));

app.use('/v1/*', proxy({
    target: config.api,
    pathRewrite: {'^/v1/': '/'}
}));
app.use(express.static(path.join(__dirname + "/client/theme-assets/")));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(colors.green(`
    =====================================================
    -> Server (${'VRG'}) 🏃 (running) on ${config.host}:${config.port}
    =====================================================
  `));
        open(`http://${config.host}:${config.port}`);
    }
});

/* eslint-enable no-console */
