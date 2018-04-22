const path = require('path');

module.exports = {
    mode: 'production',
    context: path.join(__dirname, 'client_src'),
    entry: './index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'public/scripts')
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
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
};