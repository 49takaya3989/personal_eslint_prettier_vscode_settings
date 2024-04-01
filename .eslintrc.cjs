module.exports = {
  root: true,
  env: { // 指定した環境のグローバル変数を使用できるようにする。
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
  ],
  parserOptions: {
    sourceType: 'module', // モジュールとしてコードを解析
    ecmaFeatures: {
      jsx: true,
    }, // 使用する追加の言語機能を示すオブジェクト。
    project: ['tsconfig.json'], // TypeScript の型情報にアクセスする。
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', "vite.config.ts"], // ESLint を無視するファイルの配列。
  parser: '@typescript-eslint/parser', // TypeScript を ESLint で解析できるようにする。
  plugins: [
    'react',
    'react-refresh',
    "@typescript-eslint"
  ], // 使用するプラグイン。
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
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        "allowString": false, // 文字列を許容しない
        "allowNumber": false, // 数値を許容しない
        "allowNullableObject": false, // null許容オブジェクトを許容しない
        "allowNullableBoolean": false, // nullまたはundefinedが許容されるbooleanを許容する
        "allowNullableString": false, // nullまたはundefinedが許容される文字列を許容しない
        "allowNullableNumber": false, // nullまたはundefinedが許容される数値を許容しない
        "allowAny": false, // any型を許容しない
      } // boolean 型以外の型を条件式に使用することを禁止する。
    ],
    "react/jsx-no-leaked-render": [
      "error",
      { "validStrategies": ["ternary"] } // JSX での条件式を三項式に強制する。
    ],
    "no-implicit-coercion": "error", // 型変換の短い表記法を禁止する。
    "prefer-template": "error", // 文字列の結合で"+"の使用を禁止する。
  },
}
