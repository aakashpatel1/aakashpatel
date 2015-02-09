function setBackgroundColor() 
{
	var backgroundColor = document.getElementById("backgroundColor");
	document.body.style.backgroundColor = backgroundColor.value;
}

function validateEmail()
{
	var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
	var address = document.getElementById("emailAddress");
	var emailAddress = address.value;
	
	if (reg.test(emailAddress) == false)
	{
		alert("Invalid Email Address!");
	}
	else
	{
		alert("Valid Email Address Entered!");
	}



}

function changeTitlePage() 
{
	var newTitle = document.getElementById("titleText");
	document.title = newTitle.value;
	alert("Title Has been changed to " + newTitle.value);
}

function printTextToConsole()
{ 	 
    console.log("[\"id\": 4,");
	console.log("\"title\": \"Assignment 4\", ");
	console.log("\"questions\":[\"1. Set the background of a page\",");
	console.log("\"2. Read in and alert the title of the page\",");
	console.log("\"3. Validate an email address using regex\",");
	console.log("\"4. Load http://private-40e0f-smugui2015.apiary-mock.com/assignments/4 and print it to the console\"]");             
}