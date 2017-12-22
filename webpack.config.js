// Const
const Uglify = require('uglifyjs-webpack-plugin');

// Exporting
module.exports = {
    entry: './index.js',
    output: {filename: 'xp-uploader.js', path: `${__dirname}/dist`},
    plugins: [new Uglify({uglifyOptions: {output: {comments: /^$/}}})],
    externals: {
        'expandjs': 'XP',
        'http': 'http',
        'https': 'https',
        'stream': 'stream',
        'xp-buffer': 'XPBuffer',
        'xp-emitter': 'XPEmitter'
    }
};
