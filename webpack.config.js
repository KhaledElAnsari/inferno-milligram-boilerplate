// Node.js modules
const path = require("path");

// Webpack plugins
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

// Environment variables
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === "build:prod";


var config = {
    devtool: isProd ? "source-map" : "eval-source-map",

    resolve: {
        "extensions": [".js", ".jsx", ".json", ".css", ".html"],
        "modules": ["./node_modules", "./src"]
    },
    
    entry: {
        "app": ["./src/app/app.js"],
        "vendors": ["./src/vendors.js"],
        "polyfills": ["./src/polyfills.js"],
        "styles": ["./src/styles.css"]
    },
    
    output: {
        "path": isProd ? path.join(process.cwd(), "dist") : path.join(process.cwd(), "dist-dev"),
        "filename": "[name].[hash].js",
        "chunkFilename": "[hash].[name].js"
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
                    {
                        "loader": "postcss-loader"
                    }
                ])
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin("vendor.[hash].css"),

        new CommonsChunkPlugin({
            name: ["app", "vendors", "polyfills"]
        }),

        new HtmlWebpackPlugin({
            "template": "./index.html",
            "filename": "index.html",
            "inject": "body"
        }),

        new AssetsPlugin({
            path: path.join(process.cwd(), "dist"),
            filename: 'webpack-assets.json',
            prettyPrint: true
        }),
      
        new CopyWebpackPlugin([{
            "from": "./src/assets",
            "to": "assets"
        }]),
    ],

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
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