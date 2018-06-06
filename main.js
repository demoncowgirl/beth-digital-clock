function setDate() {
	// function gets current date and displays
	// it in mmonth, day, full year
	var calendar = document.querySelector('#calendar h2');

	var date = new Date();

	var month = (date.getMonth());
	var day = (date.getDay());
	var year = (date.getFullYear());

	calendar.innerHTML = month + " " + day + ", " + year;

}

// function gets current time and date and
// displays time in hours, minutes and seconds
function setTime() {
	//querySelector returns the first element that matches the specified selectors
	var clock = document.querySelector('#clock h2');

// Date() year, month, day, hour, minute, second
	var now = new Date();
	var seconds = zeroPad(now.getSeconds());
	var minutes = zeroPad(now.getMinutes());
	var hour = zeroPad(now.getHours());

		clock.innerHTML = "Military Time: " + hour + ':' + minutes + ':' + seconds;
}

function setEST() {

	var estTime = document.querySelector ('#estTime h2');

		var now = new Date();
		var hour = zeroPad(now.getHours());
		var minutes = zeroPad(now.getMinutes());
		var seconds = zeroPad(now.getSeconds());

		var timeValue;

		// hours between 12:01am and noon
		if (hour > 0 && hour <= 12) {
  		timeValue= "" + hour;
		// hours between 12:01pm and midnight
		} else if (hour > 12) {
  		timeValue= "" + (hour - 12);
		// midnight and noon
		} else if (hour == 0) {
  		timeValue= "12";
	}
		estTime.innerHTML = "EST: " + timeValue + ':' + minutes + ':' + seconds;
}

function Month(month){

//	Months are assigned 0-11
	switch(month){
		case 0:
			text = 'January';
			break;
		case 1:
			text = 'February';
			break;
		case 2:
			text = 'March';
			break;
		case 3:
			text = 'April';
			break;
		case 4:
			text = 'May';
			break;
		case 5:
			text = 'June';
			break;
		case 6:
			text = 'January';
			break;
		case 7:
			text = 'February';
			break;
		case 8:
			text = 'March';
			break;
		case 9:
			text = 'April';
			break;
		case 10:
			text = 'May';
			break;
		case 11:
			text = 'June';
			break;
}

	return month;
}


//zeropad adds a zero to end of number
function zeroPad(value) {
	if (value < 10) {
		return '0' + value;
	}
	return value;
}

// updates clock every 1 second
setInterval(setTime, 1000);

// sets current time
setTime();
