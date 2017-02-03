var os = require('os');
var uptime = os.uptime();

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function formattime(s) {

	if((s / 60) < 60) {
		var min = (s / 60).toFixedDown(0);
		var sek = ((s / 60) - min) * 60;
        var strtime = ''+min+' min. '+Math.round(sek)+' sek.';
	} else {	
		var min = (s / 60).toFixedDown(0);
		var sek = ((s / 60) - min) * 60;
		var godz = (min / 60).toFixedDown	(0);
		var min2 = ((min / 60) - godz) * 60;
		var strtime = ''+godz+' godz. '+Math.round(min2)+' min. '+Math.round(sek)+' sek.';
    }
    return strtime;
}

exports.print = formattime;