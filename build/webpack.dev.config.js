import path from 'path'
import config from './config'
import webpack from 'webpack'
import baseConfig from './webpack.base.config'
const entry = [
    path.resolve(__dirname, '../src/entry.js'),
    path.resolve(__dirname, 'dev-client.js')
]
export default Object.assign({}, baseConfig, {
    entry: entry,
    output: {
        path: config.dev.srcRoot,
        publicPath: config.dev.publicPath,
        filename: 'js/[name].js'
    },
    plugins: [
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
})
