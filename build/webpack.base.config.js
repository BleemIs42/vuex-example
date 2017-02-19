import path from 'path'
import webpack from 'webpack'
import px2rem from 'postcss-px2rem'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from './config'
import { cssLoaders } from './utils'


export default {
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        },{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: 'images/[name].[hash:10].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: 'css/fonts/[name].[hash:10].[ext]'
            }
        }]
    },
    vue: {
        loaders: cssLoaders(),
        postcss: [
            px2rem({remUnit: 70}),
            autoprefixer({browsers: ['>1%']})
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(config.dev.srcRoot, 'index.html'),
            inject: true,
            // favicon: path.join(config.dev.srcRoot, 'assets/favicon.ico')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(config.env)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]

}

