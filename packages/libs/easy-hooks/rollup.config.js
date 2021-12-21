import typescript from 'rollup-plugin-typescript2'; // 处理typescript
import resolve_ from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import multi from '@rollup/plugin-multi-entry';

const fs = require('fs');
const { resolve } = require('path');

/** 获取绝对路径 */
const getAbsPath = relativePath => resolve(__dirname, relativePath);

const getSrcInputs = () => {
  const files = fs.readdirSync('./src');
  let hooksPath = [];
  files.forEach((item, index) => {
    let stat = fs.lstatSync(`./src/${item}`);
    if (stat.isDirectory() === true && item.includes('use')) {
      hooksPath.push(item);
    }
  });
  return hooksPath;
};

const getNamedInputs = () =>
  getSrcInputs().reduce((record, libName) => {
    record[`${libName}/index`] = getAbsPath(`src/${libName}/index.ts`);
    return record;
  }, {});

export default {
  input: {
    index: getAbsPath('src/index.ts'),
    // ...getNamedInputs(),
  },
  // input: getSrcInputs().map(src => {return `src/${src}/index.ts`}),
  // input: {
  //   index: getAbsPath('src/index.ts'),
  // },
  // 出口
  // output: {
  //   dir: getAbsPath('dist'), // 可以是 dir 表示输出目录 也可以是 file 表示输出文件
  //   format: 'es', // 输出的格式 可以是 cjs commonJs 规范 | es es Module 规范 | iife 浏览器可引入的规范
  //   sourceMap: false,
  //   entryFileNames: '[name]/index.js',
  //   exports: 'named',
  // },
  output: {
    dir: getAbsPath('dist'), // rollup支持的多种输出格式(有amd,cjs, es, iife 和 umd)
    format: 'es',
  },
  external: ['lodash', 'react', 'react-dom'],
  plugins: [typescript(), resolve_()],
  treeshake: {
    moduleSideEffects: false,
  },
};
