app.controller("contactController", function ($scope) {
  // Email shrouding usage borrowed from http://help.website-creator.org/customer/portal/articles/1409304-avoiding-spam-when-posting-an-email-address
  var username = "hklee310";
  var hostname = "gmail.com";
  var linktext = username + "@" + hostname ;
  // document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
});