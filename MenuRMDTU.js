// ==UserScript==
// @name        MenuRMDTU
// @namespace   http://tnp.dtu.ac.in
// @include     /^http:\/\/tnp\.dtu\.ac\.in\/rm3y*$/
// @description gives easier access to frequently used RM menu items
// @version     1
// @grant       none
// ==/UserScript==
var URLProtocolHost = window.location.protocol + '//' + window.location.host;
var URLPathName = window.location.pathname;
var newURL = URLProtocolHost + '/' + URLPathName;
var URL = window.location.href;
var len_url = newURL.length;
//extracts the roll no. from the URL pattern
var roll_no = URL.substring(len_url + 3, len_url + 14);
//console.log(roll_no);
//console.log(newURL);
//console.log(URLPathName);
var notif = 'Notifcations';
var res_notif = notif.link('http://tnp.dtu.ac.in/rm3y/index.php?id=' + roll_no + '#announce');
var recruiters = 'Recruiters';
var res_recruiters = recruiters.link('http://tnp.dtu.ac.in/rm3y/utilities/new_rec_table.php?id=' + roll_no + '&l1=0&l2=1000');
var applications = 'Applications';
var res_applications = applications.link('http://tnp.dtu.ac.in/rm3y/utilities/app_test.php?id=' + roll_no);
var div = document.createElement('div_menu');
div.innerHTML = res_notif + ' || ' + res_recruiters + ' || ' + res_applications;
//div.style.background = "#464D54";
div.style.position = 'absolute';
div.style.cssFloat = 'right';
div.style.left = '75%';
div.style.zIndex = '1000';
var body = document.body;
body.insertBefore(div, body.firstChild);
//document.getElementById('wrapper').appendChild(div);
