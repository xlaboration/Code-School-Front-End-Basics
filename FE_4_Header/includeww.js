/* BBDO copied from - W3.JS 1.01 Jan 2017 by w3schools.com */
"use strict";
var BBDO = {};

BBDO.includeHTML = function() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("w3-include-html");
          BBDO.includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};

function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function validateForm() {
    var x = document.forms["myForm"]["first_name"].value;
    var y = document.forms["myForm"]["last_name"].value;
    var z = document.forms["myForm"]["email"].value;
    if (x == "") {
        document.getElementById("first_name_val").innerHTML = "first name is required";
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        document.getElementById("last_name_val").innerHTML = "last name is required";
        return false;
    }
    if (z == "") {
        document.getElementById("email_val").innerHTML = "email is  required";
        return false;
    }
    if (x != "" && y != "" && z != "") {
      document.getElementById("success_message").innerHTML = "Success! " + x + " " + y + " " + z;
      return false;
    }
}
