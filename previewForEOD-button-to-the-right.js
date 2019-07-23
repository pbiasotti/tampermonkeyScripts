// ==UserScript==
// @name            Open preview for EOD
// @namespace       http://tampermonkey.net/
// @version         0.1
// @description     Opens preview for EOD
// @match           https://dev.azure.com/azurecom/*/_workitems/edit/*
// @copyright       andres peralta
// @require         http://code.jquery.com/jquery-latest.js
// @updateURL       https://raw.githubusercontent.com/pbiasotti/tampermonkeyScripts/edit/pbiasotti-patch-1/previewForEOD-button-to-the-right.js
// @downloadURL     https://raw.githubusercontent.com/pbiasotti/tampermonkeyScripts/edit/pbiasotti-patch-1/previewForEOD-button-to-the-right.js
// ==/UserScript==

(function(){
    'use strict'
    window.addEventListener('pageshow', () => {
        let button = document.createElement('button')
        document.body.appendChild(button)
        button.innerHTML = "preview For EOD"
        button.onclick = function(){
        var segments = window.location.pathname.split("/")
        var id = segments[segments.length-1]
        window.open("https://sw-eod-generator3.azurewebsites.net/preview/"+id);
            };
        return button
    })
}())
