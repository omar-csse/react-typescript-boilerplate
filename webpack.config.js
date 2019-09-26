let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: "source-map",
    mode: 'development',
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,    
                loader: 'ts-loader',
                options: { allowTsInNodeModules: true }
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/main.html'),
            favicon: path.resolve(__dirname, 'public/favicon.ico')
        })
    ]
}