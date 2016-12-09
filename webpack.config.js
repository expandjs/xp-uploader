// Const
const webpack = require('webpack');

// Exporting
module.exports = {
    entry: './index.js',
    externals: {
        'expandjs': 'XP',
        'http': 'http',
        'https': 'https',
        'stream': 'stream',
        'xp-buffer': 'XPBuffer',
        'xp-emitter': 'XPEmitter'
    },
    output: {
        filename: 'xp-uploader.js',
        path: './dist'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
    ]
};
