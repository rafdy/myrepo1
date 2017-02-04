var os = require('os');
var OSinfo = require('./modules/osinfo');

process.stdin.setEncoding('utf-8');
process.stdout.write('Write /nodever to see node version, /langsys to see system language, /getOSinfo to see OS information and /exit to exit the app\n');
if (process.env.LANG === undefined) {
	process.stdout.write('Warning: Please note that system language is not defined in your system enviromental variables!\n');
}
process.stdin.on('readable', function() {
    var input = process.stdin.read();  
    if (input !== null) { 
    	var instruction = input.toString().trim();
        // odpalanie zdarzenia beforeCommand (z parametrem)
        emitter.emit('beforeCommand', instruction);
    	switch (instruction) {
    		case '/exit':
        		process.stdout.write('Quitting app!\n');
				process.exit();
	       		break;
    		case '/nodever':
        		process.stdout.write(process.versions.node + '\n');
        		break;
        	case '/langsys':
        		process.stdout.write(process.env.LANG + '\n');
        		break;
        	case '/getOSinfo':
        		OSinfo.print();
        		break;
    		default:
    			process.stderr.write('Wrong instruction!\n');
		}
        // emitowanie zdarzenia afterCommand (bez parametru)
        emitter.emit('afterCommand');
	}
});
