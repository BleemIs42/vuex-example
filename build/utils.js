import path from 'path'
import glob from 'glob'
import config from './config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export const cssLoaders = options => {
    options = Object.assign({}, {
        sourceMap: true,
        extract: false
    }, options)

    function generateLoaders(loaders) {
        var sourceLoader = loaders.map(loader => {
            var extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')
        if (options.extract) {
            return !config.build.publicPath
                    ? ExtractTextPlugin.extract('vue-style-loader', sourceLoader, {publicPath: '../'})
                    : ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
        } else {
            return ['vue-style-loader', sourceLoader].join('!')
        }
    }

    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

export const getEntries = (globPath) => {
    let entries = {}
    glob.sync(globPath).forEach(entry => {
        const basename = path.basename(entry, path.extname(entry))
        // const tmp = entry.split('/').splice(-3)
        // const pathname = tmp.splice(1, 1) + '/' + basename;
        // entries[pathname] = entry
        
        entries[basename] = entry
    })

    return entries
}