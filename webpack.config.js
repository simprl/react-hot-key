// Webpack configuration
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?|ts?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/,
        use: ['url-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.woff(2)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]',
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
  // plugins: [
  //     new webpack.ProvidePlugin({
  //         process: 'process/browser',
  //     }),
  // ],
};
