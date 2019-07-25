const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: {
        hotserver: "webpack-dev-server/client?http://activity-ktv.camera360.com/"
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
    // devServer: {
    //     contentBase: './dist'
    // }
});