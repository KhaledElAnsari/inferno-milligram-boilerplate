const path = require('path');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        "app": ['./src/app/app.js'],
        "styles": ['./src/styles.css']
    },
    
    
    output: {
        path: path.join(process.cwd(), "dist"),
        filename: '[name].[hash].js'
    },
    
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
            {
                "test": /\.css$/,
                "use": ExtractTextPlugin.extract(["css-loader",])
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin("vendor.[hash].css"),

        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        }),
      
        new CopyWebpackPlugin([
          {
            from: "./src/assets",
            to: "assets"
          }
        ])
    ]
}