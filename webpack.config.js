const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
 
    mode: 'development',

     output:{
          clean: true
     },

    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MinicssExtractPlugin.loader,
                    'css-loader'
                ]
            },
                {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                },
            },
            {
               test: /\.(png|jpe?g|gif)$/,
               use: [
                    {
                      loader: 'file-loader',
                    },
                  ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MinicssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
          patterns: [
            { from: "src/assets", to: "assets" },
          ],
        }),
 
    ]
 
}