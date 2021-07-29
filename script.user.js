    // ==UserScript==
    // @name         显示被隐藏的 12306 订票帮手
    // @namespace    ShowMe12306TicketHelper
    // @version      1.0
    // @description  显示被隐藏的12306订票帮手
    // @author       maidmeow4
    // @match        *://kyfw.12306.cn/otn/leftTicket/*
    // @grant        none
    // ==/UserScript==
     
    var drawer = document.getElementById ("sear-sel-bd");
    var drawerHeight = 179;
    drawer.style.height = drawerHeight + 'px';
    console.log('maidmeow4: Enlarged drawer to ' + drawerHeight + 'px!');
