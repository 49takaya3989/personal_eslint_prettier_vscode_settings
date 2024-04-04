/** @type {import("prettier").Config} */
const config = {
  // printWidth: 80, // 折り返し位置
  // tabWidth: 2, // インデントサイズ
  // useTabs: false, // タブでインデント
  // semi: true, // 文末のセミコロン
  // singleQuote: false, // シングルクウォートの使用
  // quoteProps: "as-needed", // オブジェクトプロパティのクォート
  // jsxSingleQuote: false, // JSX でのシングルクウォートの使用
  // trailingComma: "all", // 末尾のカンマ
  // bracketSpacing: true, // オブジェクト内の要素と括弧の間のスペース
  // bracketSameLine: false, // HTML タグの閉じ括弧を同一行に
  // arrowParens: "always", // アロー関数の引数括弧
  // rangeStart: 0, // フォーマット適用開始位置
  // rangeEnd: Infinity, // フォーマット適用完了位置
  // requirePragma: false, // プラグマを含むファイルのみにフォーマット適用
  // insertPragma: false, // プラグマの挿入
  // proseWrap: "preserve", // マークダウンテキストのテキスト折り返し
  // htmlWhitespaceSensitivity: "css", // 空白感度の指定
  // endOfLine: "lf", // 改行コードの指定
  // embeddedLanguageFormatting: "auto", // 組み込み言語のフォーマット
  // singleAttributePerLine: false, // HTML, JSX で1行1属性
}; // 全てデフォルトの設定

module.exports = config;
