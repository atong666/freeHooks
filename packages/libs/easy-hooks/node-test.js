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

console.log(getNamedInputs());
console.log(getAbsPath('dist'));
