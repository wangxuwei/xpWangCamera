var app = app || {};
(function($){
	app.util = {};
	
	//May 5, 2012 - 3:30 pm
	app.util.now = function() {
		var day = "";
		var month = "";
		var ampm = "am";
		var ampmhour = "";
		var year = "";
		mydate = new Date();
		mymonth = mydate.getMonth() + 1;
		myday = mydate.getDate();
		myyear = mydate.getYear();
		var hour = mydate.getHours();
		var min = mydate.getMinutes();
		if (hour > 12) {
			hour = hour - 12;
			if (hour < 10) {
				hour = "0" + hour;
			}
			ampm = "pm";
		}
		if (min < 10) {
			min = "0" + min;
		}
		year = (myyear > 200) ? myyear : 1900 + myyear;
		if (mymonth == 1)
			mymonth = "Jan.";
		else if (mymonth == 2)
			mymonth = "Feb";
		else if (mymonth == 3)
			mymonth = "Mar";
		else if (mymonth == 4)
			mymonth = "Apr";
		else if (mymonth == 5)
			mymonth = "May";
		else if (mymonth == 6)
			mymonth = "Jun";
		else if (mymonth == 7)
			mymonth = "Jul";
		else if (mymonth == 8)
			mymonth = "Aug";
		else if (mymonth == 9)
			mymonth = "Sep";
		else if (mymonth == 10)
			mymonth = "Oct";
		else if (mymonth == 11)
			mymonth = "Nov";
		else if (mymonth == 12)
			mymonth = "Dec";

		return mymonth + " " + myday + ", " + year + " - " + hour + ":" + min + " " + ampm;
	}
})(jQuery);

