// Node.js modules
const path = require("path");

// Webpack plugins
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Environment variables
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === "build";


var config = {
    devtool: isProd ? "source-map" : "eval-source-map",

    resolve: {
        "extensions": [".js", ".jsx", ".json", ".css", ".html"]
    },
    
    entry: {
        "app": ["./src/app/app.js"],
        "styles": ["./src/styles.css"]
    },
    
    output: {
        "path": isProd ? path.join(process.cwd(), "dist") : path.join(process.cwd(), "dist-dev"),
        "filename": "[name].js?[hash]"
    },

    module: {
        "rules": [
            {
              "test": /\.js$/,
              "loader": "buble-loader",
              "exclude": /node_modules/
            },
            {
                "test": /\.css$/,
                "use": ExtractTextPlugin.extract([
                    {
                        "loader": "css-loader",
                        "options": {
                            "sourceMap": true,
                            "minimize": isProd
                        }
                    },
                ])
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin("vendor.[hash].css"),

        new HtmlWebpackPlugin({
            "template": "./index.html",
            "filename": "index.html",
            "inject": "body"
        }),
      
        new CopyWebpackPlugin([{
            "from": "./src/assets",
            "to": "assets"
        }]),
    ]
};

if(isProd) {
    const UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
    const NoEmitOnErrorsPlugin = require("webpack/lib/NoEmitOnErrorsPlugin");
    const OptimizeJsPlugin = require("optimize-js-plugin");
    Array.prototype.push.apply(config.plugins, [new UglifyJsPlugin(),
                                                new NoEmitOnErrorsPlugin(),
                                                new OptimizeJsPlugin()]);
}

module.exports = config;