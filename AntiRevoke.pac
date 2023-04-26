//
// MYbloXX by MYXXdev
// Anti-Revoke by DeltAndy
// Updated: 04/26/23 - 13:08 EDT
// Support Development: MYXXfm.com/donate
//
var MYbloXX="PROXY 127.0.0.1:8021";var ALLOW="DIRECT";var BYPASS="PROXY 8.8.8.8:53";function s(u,r){return shExpMatch(u,r)}
function d(h,r){return dnsDomainIs(h,r)}
function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();if(d(h,"*ocsp.apple.com")||d(h,"*ocsp2.apple.com"))return MYbloXX;return ALLOW}