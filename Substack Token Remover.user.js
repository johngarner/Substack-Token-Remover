// ==UserScript==
// @name         Substack Token Remover
// @namespace    https://garner.io
// @version      1.0
// @description  Removes everything after and including the token parameter from Substack URLs.
// @author       John Garner
// @icon         https://cdn.substack.com/icons/substack/favicon.ico
// @grant        none
// @run-at       document-start
// @include      *://*.substack.com/*?token=*
// ==/UserScript==

var site = location.href.replace(/\?token=.*/, '');
location.replace (site);