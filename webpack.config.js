const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    return {
        entry: './src/main.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.jsx'],
            modules: ["src", "node_modules"],
        },
        devtool: "source-map",
        mode: 'development',
        module: {
            rules: [{
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                    options: {
                        allowTsInNodeModules: true
                    }
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
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: __dirname + '/public/main.html',
                filename: argv.mode == 'production' ? 'main.html' : 'index.html',
                favicon: __dirname + '/public/favicon.ico'
            })
        ]
    }
}