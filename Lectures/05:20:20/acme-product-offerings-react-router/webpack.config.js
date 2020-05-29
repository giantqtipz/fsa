const path = require('path');

module.exports = {
    entry: path.join(__dirname, './app.js'),
    mode: 'development',
    // devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                },
                exclude: /(node_modules)/
            }
        ]
    }
}