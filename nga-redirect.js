// ==UserScript==
// @name         NGA网址重定向2020
// @namespace    https://github.com/Kennnnnnji/nga-redirect/blob/master/nga-redirect.js
// @version      0.2
// @description  重定向NGA玩家社区的各种不同域名的网址到NGA.cn
// @include      *://*.ngacn.cc/*
// @include      *://nga.178.com/*
// @include      *://ngabbs.com/*
// @author       created by 咕德 @ WoW-玛洛加尔-<蓝丨图>, updated by Kennnnnnji
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('nga.178.com', 'bbs.nga.cn').replace('ngacn.cc', 'nga.cn').replace('ngabbs.com', 'bbs.nga.cn');
