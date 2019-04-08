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
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ],
    }
};