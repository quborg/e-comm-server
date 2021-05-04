import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import RunNodeWebpackPlugin from 'run-node-webpack-plugin';
import PATHS from '../paths';

process.env.NODE_ENV = 'production';
import common from './common';

const prodConfig = merge(common, {
  devtool: 'source-map',
  entry: PATHS.mainEntry,
  externals: [nodeExternals({})],
  plugins: [
    new CleanWebpackPlugin(),
    new RunNodeWebpackPlugin({ scriptToRun: PATHS.nodeScript }),
  ],
});

export default prodConfig;
