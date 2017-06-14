"use strict";

// global variables
var profile = {};
var lodging = [];
var arrayString;
var objectString;

/////////////////////// VALIDATION CODE ////////////////////////////////////


////**** VALIDATE FIRST NAME ***//////////
function validateFName() {
   var fname = document.getElementById("fname");
   var errorDiv = document.getElementById("fNameError");
   try {
//      if (fname.value.length < 4) {
      if (/.{15,}/.test(fname.value) === false) {
         throw "Name must be at least 15 characters long";
      } else if (/\W/.test(fname.value) === true) {
         throw "Name must contain only letters";
      } else if (/^[A-Z]/.test(fname.value) === false ) {
      	 throw "Name must start with a capital letter";
      	 }
      // remove any username error styling and message
      fname.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
         }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      fname.style.background = "rgb(255,233,233)";
   }
   fname
}

// VALIDATE LAST NAME ////////////
function validateLName() {
   var lname = document.getElementById("lname");
   var errorDiv = document.getElementById("lNameError");
   try {
//      if (fname.value.length < 4) {
      if (/.{15,}/.test(lname.value) === false) {
         throw "Last Name must be at least 15 characters long";
      } else if (/\W/.test(lname.value) === true) {
         throw "Last Name must contain only letters";
      } else if (/^[A-Z]/.test(fname.value) === false ) {
      	 throw "Name must start with a capital letter";
      	 }
      // remove any username error styling and message
      lname.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
         }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      lname.style.background = "rgb(255,233,233)";
   }
}

// ********  VALIDATE PASSWORD **********///////////
function validatePassword() {
   var pw1Input = document.getElementById("pw1");
   var pw2Input = document.getElementById("pw2");
   var errorDiv = document.getElementById("pwdError");
   try {
//      if (pw1Input.value.length < 8) {
      if (/.{8,}/.test(pw1Input.value) === false) {
         throw "Password must be at least 8 characters";
      } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
         throw "Passwords must match";
      } else if (/[a-zA-Z]/.test(pw1Input.value) === false) {
         throw "Password must contain at least one letter";
      } else if (/\d/.test(pw1Input.value) === false) {
         throw "Password must contain at least one number";
      } else if (/[./0-9]/.test(pw1Input.value) === false) {
         throw "Password must contain at least one of the following symbols: Number, '.', and '/'";
      }
      // remove any password error styling and message
      pw1Input.style.background = "";
      pw2Input.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
      // copy valid password to profile object
      profile.password = pw1Input.value;
   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      pw1Input.style.background = "rgb(255,233,233)";
      pw2Input.style.background = "rgb(255,233,233)";      
   }
}

////******* VALIDATE POSTAL CODE ***********///////////////

function validatePostal() {
	var pcode = document.getElementById("pcode");
	var errorDiv = document.getElementById("pcodeError");
    var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    try {
    	if (regex.test(pcode.value) === false) {
			throw "Invalid Postal Code Format (A1A1A1)";
			}
			
		pcode.style.background = "";
      	errorDiv.style.display = "none";
      	errorDiv.innerHTML = "";
		}
	catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      pcode.style.background = "rgb(255,233,233)";
	  }
}	


///******** VALIDATE EMAIL *******////////////

function validateEmail() {
   var email = document.getElementById("email");
   var errorDiv = document.getElementById("emailError");
   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
   try {
         if (emailCheck.test(email.value) === false) {
         throw "Please provide a valid email address";
      }
       // remove any email error styling and message
      email.style.background = "";
      errorDiv.innerHTML = "";
      errorDiv.style.display = "none";
      // convert email address to lowercase
      email.value = email.value.toLowerCase();
       }
   catch(msg) {
      // display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      // change input style
      email.style.background = "rgb(255,233,233)";
   }
}


///////////////////************** EVENT LISTENERS *************/////////////////////////

// FName
function createEventListeners() {
   	 var fname = document.getElementById("fname");
   	 
     if (fname.addEventListener) {
      fname.addEventListener("change", validateFName, false); 
       } else if (fname.attachEvent) {
      fname.attachEvent("onchange", validateFName);
       } 
       
// LName
	 var lname = document.getElementById("lname");
     if (lname.addEventListener) {
      lname.addEventListener("change", validateLName, false); 
       } else if (lname.attachEvent) {
      lname.attachEvent("onchange", validateLName);
       } 
       
// Password       
	 var pw2Input = document.getElementById("pw2");
     if (pw2Input.addEventListener) {
      pw2Input.addEventListener("change", validatePassword, false); 
       } else if (pw2Input.attachEvent) {
      pw2Input.attachEvent("onchange", validatePassword);
       } 

// Postal Code
	var pcode = document.getElementById("pcode");
    if (pcode.addEventListener) {
      pcode.addEventListener("change", validatePostal, false); 
       } else if (pcode.attachEvent) {
      pcode.attachEvent("onchange", validatePostal);
       } 

// Email      
	 var email = document.getElementById("email");
     if (email.addEventListener) {
      email.addEventListener("change", validateEmail, false); 
       } else if (email.attachEvent) {
      email.attachEvent("onchange", validateEmail);
       } 
}

////// WINDOW LISTENER TO CALL createEventListeners ////
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}
