class Controls extends React.Component {
	constructor(props) {
    	super(props);
        this.state = {
        	running: false,
        	resultAdded: false
        };
        reset();
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

	step() {
    	if (!this.running) return;
    	this.calculate();
	}

	calculate() {
    	this.times.miliseconds += 1;
    	if (this.times.miliseconds >= 100) {
        	this.times.seconds += 1;
        	this.times.miliseconds = 0;
    	}
    	if (this.times.seconds >= 60) {
    		this.times.minutes += 1;
	      	this.times.seconds = 0;
    	}
	}

	start() {
    	if (!this.running) {
        	this.setState({
        		running: true,
        	});
		}
		this.watch = setInterval(() => this.step(), 10)
	}

	stop() {
		this.setState({
        	running: false
        });
    	clearInterval(this.watch);
	}

	addList() {
		this.setState({
        	resultAdded: true,
        });
	}


	clearList() {
        const list = this.refs.list;
        list.innerHTML = '';
	}

	componentDidUpdate() {
		this.setState({ 
        	resultAdded: false
        });
	}

	render() {
		return (
		<div className='control'>
			<a href='#' className='button' id='start' onclick='this.start()'>Start</a>
      		<a href='#' className='button' id='stop' onclick='this.stop()'>Stop</a>
      		<a href='#' className='button' id='reset' onclick='this.reset()'>Reset</a>
      		<a href='#' className='button' id='addList' onclick='this.addList()'>Add To List</a>
      		<a href='#' className='button' id='clearList' onclick='this.clearList()'>Clear List</a>
      		<br/>
    		<Stopwatch times={this.times}/>
			<ul id='resultsList' ref='list'>
				<Results resultAdded={this.state.resultAdded} times={this.times}/>
			</ul>
		</div>	
		);
	}
}