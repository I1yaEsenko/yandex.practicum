const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = (env) => {

    const isDev = env.mode === 'development'
    const isProd = env.mode === 'production'
    return {
        context: path.resolve(__dirname, 'dist'),
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, 'dist'),
            assetModuleFilename: "images/[name][ext][query]",
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin(
                {template: path.resolve(__dirname, 'src', 'index.html')}
            ),
            new MiniCssExtractPlugin(
                {
                    filename: 'css/style.css',
                    chunkFilename: 'css/[name].css',
                }
            ),
        ],

        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][ext]'
                    }
                },
                {
                    test: /\.(jpeg|jpg|png|gif|svg|ico)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
            ],
        },
        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        level: {
                            1: {
                                roundingPrecision: "all=3,px=5",
                            },
                        },
                    },
                    minify: CssMinimizerPlugin.cssnanoMinify,
                }),
            ],
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true
        } : undefined,
        resolve: {
            alias: {
                images: path.resolve(__dirname, 'src', 'images'),
            }
        },
    }
}