//Elements on the page
var dateField = document.getElementById('date');
var usernameField = document.getElementById('username');
var passwordField = document.getElementById('password');
var submitButton = document.getElementById("submit");
var h1element = document.getElementById("h1element");








function validateDateField(datefieldvalue){

	var characters = datefieldvalue.split("/");
	var month = parseInt(characters[0]);
	var day = parseInt(characters[1]);
	var year = parseInt(characters[2]);
	if(month < 1 || month > 12  ){
		alert("are you from the future?");
	}
	if(day < 1 || day > 31 ){
		alert("thats a cool day of the calendar");
	}
	if(year < 1950 || year > 2016 ){
		alert("we dont accept people from that year");
	}

}

function validateUsernameField(usernamevalue){
	if(usernamevalue.length == 0)
    alert("fill in a value in username");
}

function validatePassword(passwordvalue){
	if(passwordvalue != 12345){
		alert("your password is incorrect");
	}else{
		alert("your password is correct");
	}
}

function validateForm() {
	validateDateField(dateField.value);
	validateUsernameField(usernameField.value);
	validatePassword(passwordField.value);
}

// the code starts here and waits for the onclick events to fire
submitButton.onclick = function(){
	validateForm();
}

function checkKeyPress(event) {
	  // alert(String.fromCharCode(event.keyCode));
	  h1element.innerText = String.fromCharCode(event.keyCode);
	}


