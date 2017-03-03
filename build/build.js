import ip from 'ip'
import path from 'path'
import webpack from 'webpack'
import config from './config'
import prodConfig from './webpack.prod.config'
import Koa from 'koa'
import server from 'koa2-static-files'
import history from 'koa-connect-history-api-fallback'

export default () => {

  webpack(prodConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  })

  const app = new Koa()
  app.use(history({verbose: true}))
  app.use(server.static(path.resolve(__dirname, '../dist')))

  const port = config.build.port || 9000;
  app.listen(port, () => {
    console.log(`\n==> Listening at http://localhost:${port}`)
    console.log(`==> Listening at http://${ip.address()}:${port}\n`)
  })
}