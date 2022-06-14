/* 
function initializeVariables()
{
	malletTracker = document.getElementById("mallet_tracker");
	keyTracker = document.getElementById("key_tracker");
	note2ReadTracker = document.getElementById("note2_read_tracker");
}
*/

function windowChecked()
{
	if(!sessionStorage.checkedWindow)
		sessionStorage.checkedWindow = 1;
	else
		sessionStorage.checkedWindow = 1;
	
	display();
}

function readNote1()
{
	if(!sessionStorage.note1Read)
		sessionStorage.note1Read = 1;
	else
		sessionStorage.note1Read = 1;
	
	display();
}

function readNote2()
{
	if(!sessionStorage.note2Read)
		sessionStorage.note2Read = 1;
	else
		sessionStorage.note2Read = 1;
	
	display();
}

function ownKey()
{
	if(!sessionStorage.keyObtained)
		sessionStorage.keyObtained = 1;
	else
		sessionStorage.keyObtained = 1;
	
	display();
}
function ownMallet()
{
	if(!sessionStorage.malletObtained)
		sessionStorage.malletObtained = 1;
	else
		sessionStorage.malletObtained = 1;
	
	display();
}

function resetHouse()
{
	sessionStorage.checkedWindow = 0;
	sessionStorage.keyObtained = 0;
	sessionStorage.malletObtained = 0;
	sessionStorage.note1Read = 0;
	sessionStorage.note2Read = 0;
	
	/*
	sessionStorage.numVisitsR1 = 0;
	sessionStorage.numVisitsR3 = 0;
	sessionStorage.numVisitsR4 = 0;
	sessionStorage.numVisitsR9 = 0;
	*/
}
