/*
 * @Description: File Description
 * @FilePath: /zzailianlian.github.io/zzailianlian.github.io/js/index.js
 * @LastEditors: zzz
 * @LastEditTime: 2022-05-17 12:46:02
 */
if (window.location.href.includes('meitun')) {
  window.location.href = window.location.href.includes('code')
    ? window.location.href.replace(/code=\w+(?=(&|$))/, 'code=12323')
    : window.location.href + '&code=123234'
}