module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "error", // 非 null アサーション演算子 ! の利用を禁止する。
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": ["interface", "typeAlias"],
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false
        }
      } // type や interface の変数名を PascalCase に強制する。
    ],
  },
}
