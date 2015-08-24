// ==UserScript==
// @name        RMCheckBranch
// @namespace   http://tnp.dtu.ac.in
// @description highlights companies in RM open for your branch
// @include     /^http:\/\/tnp\.dtu\.ac\.in\/rm3y\/utilities\/new_rec_table\.php\?id=2k12\/se\/[0-1][0-9][0-9]&l1=0&l2=[0-9]{4}$/
// @version     1.1
// @grant       none
// ==/UserScript==
var rows = document.getElementsByTagName('tr');
var len = rows.length;
for (var i = 1; i < len; i++)
{
  var tr = rows[i];
  var cll = tr.cells[1].innerHTML;
  var dt = tr.cells[7].innerHTML;
  var bits = dt.split('/');

  var d = Number(bits[0]) + 1;
  var col_date = new Date(bits[2], bits[1] - 1, d);
  var curr_date = new Date();

// change the branch name to your branch
  if (cll.indexOf('Software') != - 1 || cll.indexOf('software') != - 1)
  {
    if (col_date.getTime() > curr_date.getTime())
    {
      tr.style.backgroundColor = '#66CCFF';
    } 
    else
    {
      tr.style.backgroundColor = '#FF0000';
    }
  }
}
