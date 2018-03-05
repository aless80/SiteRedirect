// ==UserScript==
// @name         SkipToWRC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skip annoying WRC page
// @author       Alessandro Marin
// @match        https://wrc.intersystems.com/wrc/*
// @grant        none
// ==/UserScript==

//https://wrc.intersystems.com/wrc/ProblemView.csp?OBJID=
//https://wrc.intersystems.com/wrc/Problem.csp?OBJID=
(function() {
    'use strict';
    // Your code here...
    var url = window.location.href;
    if (url.indexOf("https://wrc.intersystems.com/wrc/ProblemView.csp?OBJID=")>-1) {
        url = url.replace("ProblemView","Problem");
        window.location.href = url;
    }
    else if (url.indexOf("https://wrc.intersystems.com/wrc/ProblemView2.csp?OBJID=")>-1) {
        url = url.replace("ProblemView2","Problem");
        window.location.href = url;
    }
    else if (url=="https://wrc.intersystems.com/wrc/Work.csp") {
        //window.location.href = "https://wrc.intersystems.com/wrc/adHome.csp";
    }
})();