module.exports = {
  // Базовые настройки форматирования
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',

  // Плагин для сортировки импортов
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '^react',
    '<THIRD_PARTY_MODULES>',
    '^@/',
    '^(?!.*\\.(css|scss)$)[./]',
    '.+\\.(css|scss)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['jsx'],
};
