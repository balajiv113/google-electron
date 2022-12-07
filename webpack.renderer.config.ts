import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  target: "web",
  module: {
    rules: [...rules, {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          exclude: /node_modules/,
          presets: ['@babel/preset-react']
        }
      }
    }],
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
