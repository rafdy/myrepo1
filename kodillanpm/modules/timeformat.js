var os = require('os');
var uptime = os.uptime();

function toFixedDown (number, digits) {
    var regularexpression = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        rounded = number.toString().match(regularexpression);
    return rounded ? parseFloat(rounded[1]) : number.valueOf();	
};

//Number.prototype.toFixedDown = function(digits) {
//    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
//        m = this.toString().match(re);
//    return m ? parseFloat(m[1]) : this.valueOf();
//};

function formatTime(TimeInSeconds) {

	if((TimeInSeconds / 60) < 60) {
//		var min = (TimeInSeconds / 60).toFixedDown(0);
		var min = toFixedDown(TimeInSeconds/60, 0);
		var sec = ((TimeInSeconds / 60) - min) * 60;
        var strTime = ''+ min +' min. '+ Math.round(sec) +' sek.';
	} else {	
//		var min = (TimeInSeconds / 60).toFixedDown(0);
		var min = toFixedDown(TimeInSeconds/60, 0);
		var sec = ((TimeInSeconds / 60) - min) * 60;
//		var godz = (min / 60).toFixedDown	(0);
		var hour = toFixedDown(min/60, 0);
		var min2 = ((min / 60) - hour) * 60;
		var strTime = ''+ hour +' godz. '+ Math.round(min2) +' min. '+ Math.round(sec) +' sek.';
    }
    return strTime;
}

exports.formatTime = formatTime;