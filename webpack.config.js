const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'production',
    context: path.join(__dirname, 'client_src'),
    entry: './index.js',
    output: {
        filename: './scripts/bundle.js', 
        chunkFilename: "[id].js",
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            /*{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },*/ 
            {
                test:/\.(s*)css$/, 
                use: ExtractTextPlugin.extract({ 
                        fallback:'style-loader',
                        use:['css-loader', 'sass-loader'],
                    })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/bundle.css',
            allChunks: true
        })
    ]
};