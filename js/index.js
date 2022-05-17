/*
 * @Description: File Description
 * @FilePath: /zzailianlian.github.io/zzailianlian.github.io/js/index.js
 * @LastEditors: zzz
 * @LastEditTime: 2022-05-17 13:05:16
 */
if (window.location.href.includes('refre=meitun')) {
  const baseUrl = 'http://sitm.meitun.com:8080/plus/buy?&mtoapp=0&hideNav=1&load_url=true&immerse=1&activeTabIndex=0&isOnlineDebug=true'
  window.location.href = baseUrl.includes('code')
    ? baseUrl.replace(/code=\w+(?=(&|$))/, 'code=12323')
    : baseUrl + '&code=123234'
}