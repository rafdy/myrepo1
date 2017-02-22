function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

class Result extends React.Component {

	format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	render() {
		var print = this.format(this.props.result)
		return (
			<li>{print}</li>
		)
	}
}

class Results extends React.Component {
	get results () {
		return this.props.results.map(result => <Result result={result}/>)
	}

	render() {
      return (
      	<ul>
      		{this.results}
      	</ul>
      );
    }
}

class Stopwatch extends React.Component {

	format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	render() {
		var print = this.format(this.props.times)
		return (
	    	<div className={'stopwatch'}>{print}</div>
	    );
	}
}

class Controls extends React.Component {
	constructor(props) {
    	super(props);
        this.state = {
        	running: false,
        	times: {
            	minutes: 0,
            	seconds: 0,
            	miliseconds: 0
        	},
        	results: []
        };
    }

    reset() {
    	this.setState({
    		times: {
            	minutes: 0,
            	seconds: 0,
            	miliseconds: 0
        	}
        });
    }

	step() {
		if (!this.running) return;
    	this.calculate();
	}

	calculate() {

		var minutes, seconds, miliseconds;

     	miliseconds = this.state.times.miliseconds + 1;
    	if (miliseconds >= 100) {
        	seconds = this.state.times.seconds+1;
        	miliseconds = 0;
    	}
    	if (seconds >= 60) {
      	  minutes = this.state.times.minutes+1;
      	  seconds = 0;
    	}

    	this.setState({
    		times: {
            	minutes: minutes,
            	seconds: seconds,
            	miliseconds: miliseconds
        	}
        });
	}

	start() {
    	if (!this.running) {
        this.running = true;
        this.watch = setInterval(() => this.step(), 10);
    	}
	}

	stop() {
		this.setState({
        	running: false
        });
    	clearInterval(this.watch);
	}

	addList() {
		this.state.results.push(this.state.times)
	}


	clearList() {
		this.setState({
    		results: []
        });
	}

	render() {
		return (
		<div className='controls'>
			<a href='#' className='button' id='start' onClick={() => this.start()}>Start </a>
      		<a href='#' className='button' id='stop' onClick={() => this.stop()}>Stop </a>
      		<a href='#' className='button' id='reset' onClick={() => this.reset()}>Reset </a>
      		<a href='#' className='button' id='addList' onClick={() => this.addList()}>Add To List </a>
      		<a href='#' className='button' id='clearList' onClick={() => this.clearList()}>Clear List</a>
      		<br/>
    		<Stopwatch times={this.state.times}/>
			<Results results={this.state.results}/>
		</div>	
		);
	}
}

ReactDOM.render(<Controls />, document.getElementById('app'));