// ==UserScript==
// @name         Enable Snapshot Mode
// @namespace    https://BraydenPeacock.ca/waze/scripts
// @version      0.3
// @description  Enables the use of WME Snapshot mode (top right corner near country select)
// @author       CoolCanuck
// @updateURL    https://BraydenPeacock.ca/waze/scripts/SnapshotMode.user.js
// @include    	 /^https://(editor-beta|www|beta).waze.com/(.*/)?editor/.*/
// @exclude      https://www.waze.com/user/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle("#snapshot-toggler { display: inline !important; }");
