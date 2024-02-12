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
    'use strict';

    const css = `

        // Apply border to the specified class
        .text-input-field[_ngcontent-ng-c976819243] {
            border: 2px solid white;
        }
    `;

    GM_addStyle(css);
})();
