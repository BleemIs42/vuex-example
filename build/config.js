import path from 'path'

const env = process.env.NODE_ENV
console.log(`\n🌹  NODE_ENV: "${env}"\n`)

export default {
    env: env,
    dev: {
        port: 8000,
        srcRoot: path.resolve(__dirname, '../src'),
        proxyTable: {
            '/api': {
                target: 'http://in.box.com',
                changeOrigin: true,
                logs: true
            }
        }
    },
    build: {
        port: 9000,
        distRoot: path.resolve(__dirname, '../dist'),
        // 空值使css文件里边的图片路径为 '../images/', 
        // 有值替换为相应的值,配置见 utils.js
        publicPath: '' 
    }
}
