module.exports = {
  root: true,
  env: {
    // 指定した環境のグローバル変数を使用できるようにする。
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module", // モジュールとしてコードを解析
    ecmaFeatures: {
      jsx: true,
    }, // 使用する追加の言語機能を示すオブジェクト。
    project: ["tsconfig.json"], // TypeScript の型情報にアクセスする。
  },
  settings: {
    react: {
      version: "detect", // 使用している React バージョンに適した規則を適用する。
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"], // ESLint を無視するファイルの配列。
  parser: "@typescript-eslint/parser", // TypeScript を ESLint で解析できるようにする。
  plugins: [
    "import",
    "functional",
    "prefer-arrow-functions",
    "react",
    "unicorn",
    "react-refresh",
    "react-hooks",
    "@typescript-eslint",
  ], // 使用するプラグイン。
  reportUnusedDisableDirectives: true, // eslint-disable の不要になったコメントを削除する。
  rules: {
    /* Code quality and best practices */
    "arrow-body-style": "error", // 中括弧を省略できる場合は許容する。
    "func-style": "error", // アロー関数に強制する。
    "no-implicit-coercion": "error", // 型変換の短い表記法を禁止する。
    "prefer-template": "error", // 文字列の結合で"+"の使用を禁止する。
    "unicorn/prefer-switch": [
      "error",
      {
        minimumCases: 2, // if {} else {} の形のみ許容する。
        emptyDefaultCase: "do-nothing-comment", // else がない if 文から整形する際に default を出力する
      },
    ], // if-else より switch を優先する設定。

    /* Functional programming rules */
    "functional/immutable-data": [
      "error",
      {
        ignoreClasses: true, // Classes 内の変更は許容する。
        ignoreImmediateMutation: true, // オブジェクトを変数に代入する前の変更は許容する。
        ignoreAccessorPattern: [
          "**.current.**", // ref の変更は許容する。
          "**.scrollTop", // scrollTop の変更は許容する。
        ],
      },
    ], // 既存の配列とオブジェクトの変更を禁止する。
    "functional/no-let": [
      "error",
      { allowInForLoopInit: true }, // for 文の引数で let の使用を許容する。
    ], // let の使用を禁止する。

    /* Import rules */
    "import/newline-after-import": "error", // import ブロックの後に1行改行を強制する。
    "import/no-cycle": "error", // 循環 import を禁止する。
    "import/no-useless-path-segments": "error", // import で不要なパスを禁止する。
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // Node.jsの組み込みモジュール（例: fs, pathなど）
          "external", // 外部からインストールされたモジュール（例: react, lodashなどのnpmパッケージ）
          "internal", // プロジェクト内で定義されたエイリアス（例: ~/foo/bar）
          "parent", // 親ディレクトリ（例: ../）
          "sibling", // 同一ディレクトリ内のファイル（例: ./foo）
          "index", // 同一ディレクトリ内のindexファイル（例: ./）
          "object", // 動的インポート（例: import log = console.log;）
          "type", // TypeScriptの型定義（例: import type { Foo } from 'foo';）
        ], // import をカテゴリ分けする。
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}", // 指定したいパスの文字列。
            group: "external", // pattern で指定した対象の属するグループを指定する。
            position: "before", // import する位置を group で指定した対象の相対位置で指定する。
          },
          {
            pattern: "~/*",
            group: "internal",
            position: "before",
          },
        ], // path ごとにグループ化する。
        pathGroupsExcludedImportTypes: ["builtin"], // pathGroups の設定から除外する group を指定する。
        alphabetize: {
          order: "asc", // 昇順に並び替える。
          caseInsensitive: true, // 大文字小文字をの区別を無視する。
        }, // 各 group の並び順を整理する。
        "newlines-between": "always", // group 間の改行を強制する。
      },
    ],

    /* Misc rules */
    "no-restricted-globals": [
      "error",
      {
        name: "event",
        message:
          "Use local parameter instead. Global 'event' object can lead to unintended behavior.",
      },
      {
        name: "isNaN",
        message: "Use Number.isNaN instead to avoid type coercion.",
      },
      {
        name: "isFinite",
        message: "Use Number.isFinite instead to avoid type coercion.",
      },
    ], // グローバル変数の使用を制限する。

    /* React specific rules */
    "react-hooks/exhaustive-deps": "error", // deps を強制する。
    "react-hooks/rules-of-hooks": "error", // Hooks の正しいルールを強制する。
    "react/jsx-no-bind": [
      "error",
      { allowArrowFunctions: true }, // アロー関数のみ許容する。
    ], // 無駄なレンダリングが起こり得るコードを禁止する。
    "react/jsx-no-leaked-render": [
      "error",
      { validStrategies: ["ternary"] }, // JSX での条件式を三項式に強制する。
    ],
    "react/react-in-jsx-scope": "off", // import React from 'react' の省略を許容する。
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    /* TypeScript specific rules */
    "@typescript-eslint/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: true, // type の export で inline を許容する。
      },
    ], // type の export で "type" の記載を強制する。
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports", // type の import では {type 〇〇} を強制する。
        disallowTypeAnnotations: false, // 型注釈での import を禁止する。
        fixStyle: "inline-type-imports", // type を inline にする。
      },
    ], // import する型に type をつけることを強制する。
    "@typescript-eslint/method-signature-style": "error", // メソッドシグネチャを禁止する。
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["interface", "typeAlias"],
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      }, // type や interface の変数名を PascalCase に強制する。
    ],
    "@typescript-eslint/no-non-null-assertion": "error", // 非 null アサーション演算子 ! の利用を禁止する。
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      {
        ignoreStringArrays: true, // 文字列のみ引数なしを許容する。
      },
    ], // .sort() で引数を強制する。
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        skipCompoundAssignments: false,
      }, // 異なる型の加算を禁止する。
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false, // 文字列を許容しない
        allowNumber: false, // 数値を許容しない
        allowNullableObject: false, // null許容オブジェクトを許容しない
        allowNullableBoolean: false, // nullまたはundefinedが許容されるbooleanを許容する
        allowNullableString: false, // nullまたはundefinedが許容される文字列を許容しない
        allowNullableNumber: false, // nullまたはundefinedが許容される数値を許容しない
        allowAny: false, // any型を許容しない
      }, // boolean 型以外の型を条件式に使用することを禁止する。
    ],
    "@typescript-eslint/switch-exhaustiveness-check": [
      "error",
      {
        allowDefaultCaseForExhaustiveSwitch: true, // 全てのケースが網羅されている switch 文で default ケースを許容する。
        requireDefaultForNonUnion: true, // ユニオン型でない値の switch 文で default ケースを強制する。
      },
    ],
    "prefer-arrow-functions/prefer-arrow-functions": "error", // アロー関数へ自動修正する。
  },
};
