//Elements on the page
var dateField = document.getElementById('date');
var usernameField = document.getElementById('username');
var passwordField = document.getElementById('password');
var submitButton = document.getElementById("submit");

function validateDateField(){
	alert(dateField.value)
}

function validateUsernameField(){
	alert(usernameField.value)
}

function validatePassword(){
	alert(passwordField.value)
}



function validateForm() {
	validateDateField();
	validateUsernameField();
	validatePassword();
}


submitButton.onclick = function(){
	validateForm();
}