const path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]


            }
        ]
    },

    devServer: {
        port: 4200,
    },
    plugins: [
        new CleanWebpackPlugin([dist]),
        new HtmlWebpackPlugin({
            title: 'Reload page',
            template: './page.html'
        })
    ]

}