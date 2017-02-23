function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

class Result extends React.Component {

	render() {
		return (
			<li>{`${pad0(this.props.result.minutes)}:${pad0(this.props.result.seconds)}:${pad0(Math.floor(this.props.result.miliseconds))}`}</li>
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

	render() {
		return (
	    	<div className={'stopwatch'}>{`${pad0(this.props.times.minutes)}:${pad0(this.props.times.seconds)}:${pad0(Math.floor(this.props.times.miliseconds))}`}</div>
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
    	this.state.times.miliseconds += 1;
    	if (this.state.times.miliseconds >= 100) {
        	this.state.times.seconds += 1;
        	this.state.times.miliseconds = 0;
    	}
    	if (this.state.times.seconds >= 60) {
      	  this.state.times.minutes += 1;
      	  this.state.times.seconds = 0;
    	}
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