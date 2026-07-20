/**
 * サイト共通設定
 * ・GAS_WEB_APP_URL だけ、GASを「ウェブアプリ」としてデプロイした後に発行されるURLに書き換えてください。
 *   （導入手順マニュアルの「5. ウェブアプリとしてデプロイする」参照）
 * ・SITE_BOARD_HTML_URL は、このサイトの board.html の実際のURLです。
 *   https://kenken6291.github.io/keijiban/ で公開する前提で、あらかじめ設定済みです。
 */
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/【ここにデプロイIDを貼り付け】/exec';
const SITE_BOARD_HTML_URL = 'https://kenken6291.github.io/keijiban/board.html';
