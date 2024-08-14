const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.common.js');
const os = require('os');

const coreLen = os.cpus().length;

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/eslintcache'),
      threads: coreLen,
    }),
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
    maxAge: 3600,
  },
  optimization: {
    nodeEnv: 'development',
  },
  devServer: {
    compress: true,
    // port: 3001,
    // host: '0.0.0.0',
    open: true,
    hot: false,
    liveReload: true,
    static: false,
    historyApiFallback: true,
    client: {
      logging: 'info',
      progress: true,
    },
    proxy: {
      '/api': {
        target: 'https://target.com',
        changeOrigin: true,
        pathRewrite: { '^/api/': '/v1/' },
      },
    },
  },
});
