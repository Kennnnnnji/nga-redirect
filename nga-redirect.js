// ==UserScript==
// @name         NGA网址重定向
// @namespace    http://bbs.nga.cn/nuke.php?func=ucp&uid=9559415
// @version      0.1.1
// @description  重定向NGA玩家社区的各种不同域名的网址到NGA.cn
// @include      *://*.ngacn.cc/*
// @include      *://nga.178.com/*
// @include      *://ngabbs.com/*
// @author       咕德 @ WoW-玛洛加尔-<蓝丨图>
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('nga.178.com', 'bbs.nga.cn').replace('ngacn.cc', 'nga.cn').replace('ngabbs.com', 'bbs.nga.cn');
