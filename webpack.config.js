var path = require('path');

module.exports = {
    entry: [
        './src/js/alerting.js',
        './src/scss/alerting.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'alerting.js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
};