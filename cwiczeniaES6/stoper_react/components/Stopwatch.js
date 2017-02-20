class Stopwatch extends React.Component {

	pad0(value) {
    	let result = value.toString();
    	if (result.length < 2) {
        	result = '0' + result;
    	}
    	return result;
	}

	render() {
		return (
	    	<div class={'stopwatch'}>`${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`</div>
	    );
	}
}