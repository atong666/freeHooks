module.exports = {
  extends: ['react-app', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        printWidth: 100,
        semicolons: true,
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: 'always',
        endOfLine: 'lf',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      // 匹配任何命名，只允许camelCase、PascalCase命名。并且允许变量前面单个_，禁止变量后下划线
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      // 匹配函数参数的解构模式，只允许camelCase、PascalCase、snake_case。
      {
        selector: 'parameter',
        modifiers: ['destructured'],
        format: ['camelCase', 'PascalCase', 'snake_case'],
      },
      // 匹配匹配任何var/let/const变量名的解构模式，只允许camelCase、PascalCase、snake_case。
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: ['camelCase', 'PascalCase', 'snake_case'],
      },
      // 匹配任何对象文字属性 只允许camelCase、PascalCase、snake_case。
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'PascalCase', 'snake_case'],
      },
      // 匹配匹配任何var/let/const变量名，只允许camelCase、PascalCase、UPPER_CASE。并且允许变量前面单个_，禁止变量后下划线
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      // 与class, interface, typeAlias, enum,匹配typeParameter。只允许PascalCase
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
};
