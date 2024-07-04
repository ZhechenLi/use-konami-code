const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts', // 替换为你的组件库的入口文件路径
  output: {
    path: path.resolve(__dirname, 'dist'), // 替换为你的组件库的输出目录
    filename: path.basename(require('./package.json').main), // 使用 package.json 中的 main 字段的值作为输出文件名
    library: 'MyLibrary', // 替换为你的组件库的全局变量名
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      // 添加适用于 TypeScript 的加载器配置
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
