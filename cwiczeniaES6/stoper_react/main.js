function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const Result = props => {

  const {minutes, seconds, miliseconds} = props.result;

  return (
    <li>{`${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`}</li>
    )
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

const Stopwatch = props => {

  const {minutes, seconds, miliseconds} = props.times;

  return (
    <div className={'stopwatch'}>{`${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`}</div>
  )
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
		if (!this.state.running) return;
    	this.calculate();
	}

	calculate() {

      let {minutes, seconds, miliseconds} = this.state.times;

    	miliseconds += 1;
    	if (miliseconds >= 100) {
        	seconds += 1;
        	miliseconds = 0;
    	}
    	if (seconds >= 60) {
      	  minutes += 1;
      	  seconds = 0;
    	}

      this.setState({
        times: {
              minutes,
              seconds,
              miliseconds,
          }
        });
	}

	start() {
    	if (!this.state.running) {
        this.state.running = true;
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
    this.state.results = [...this.state.results, this.state.times];
	}


	clearList() {
		this.setState({
    		results: []
        });
	}

	render() {
		return (
		<div className='controls'>
			<a href='#' onClick={() => this.start()}>Start </a>
      		<a href='#' onClick={() => this.stop()}>Stop </a>
      		<a href='#' onClick={() => this.reset()}>Reset </a>
      		<a href='#' onClick={() => this.addList()}>Add To List </a>
      		<a href='#' onClick={() => this.clearList()}>Clear List</a>
      		<br/>
    		<Stopwatch times={this.state.times}/>
			<Results results={this.state.results}/>
		</div>	
		);
	}
}

ReactDOM.render(<Controls />, document.getElementById('app'));