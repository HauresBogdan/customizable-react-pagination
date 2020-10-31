var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/pagination.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'pagination.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}