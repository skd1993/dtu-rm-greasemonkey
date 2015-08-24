##DTU-RM-Greasemonkey Script
By default, the _recruiters_ section of the DTU Resume Manager website is very unorganised.
This is an attempt to enhance the user experience and utility of the website.

The script currently does the following:
* Highlights all companies of your branch.
* Those companies who have already visited the campus for your branch are marked in red color.

To change your branch name, open the **checkBranch.user.js** file and edit the branch name in the following line and then save the changes made to the file:
```
if (cll.indexOf('Software') != - 1 || cll.indexOf('software') != - 1)
```
---------------
Please read [this](http://wiki.greasespot.net/Greasemonkey_Manual:Installing_Scripts) to learn how to install Greasemonkey scripts. Chrome users may use _Tampermonkey_.
