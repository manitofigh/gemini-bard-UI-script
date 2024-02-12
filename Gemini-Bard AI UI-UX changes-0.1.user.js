// ==UserScript==
// @name         Gemini/Bard AI UI/UX changes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  UI/UX changes
// @author       Mani Tofigh
// @match        https://gemini.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
let css = `

        .text-input-field[_ngcontent-ng-c976819243] {
            border: 2px solid white;
        }
    `;

if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();

