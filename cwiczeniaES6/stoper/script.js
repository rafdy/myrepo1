class Stopwatch {
    constructor(display, displayList) {
        this.running = false;
        this.display = display;
        this.displayList = displayList;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    print() {
        this.display.innerText = this.format(this.times);
	}


	format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
    	if (!this.running) {
        this.running = true;
        this.watch = setInterval(() => this.step(), 10);
    	}
	}

	step() {
    	if (!this.running) return;
    	this.calculate();
    	this.print();
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

	stop() {
    	this.running = false;
    	clearInterval(this.watch);
	}

	addList() {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(`${pad0(this.times.minutes)}:${pad0(this.times.seconds)}:${pad0(Math.floor(this.times.miliseconds))}`));
		this.displayList.appendChild(li);
	}

	clearList() {
		this.displayList.innerHTML = '';
	}
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'), document.querySelector('.results'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', function () {stopwatch.start()});

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {stopwatch.stop()});

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {stopwatch.reset(); stopwatch.print()});

var addListButton = document.getElementById('addList');
addListButton.addEventListener('click', function () {stopwatch.addList()});

var clearListButton = document.getElementById('clearList');
clearListButton.addEventListener('click', function () {stopwatch.clearList()});

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}