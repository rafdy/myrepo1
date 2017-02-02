process.stdin.setEncoding('utf-8');
process.stdout.write('Write /nodever to see node version, /langsys to see system language and /exit to exit the app\n');
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();  
    if (input !== null) { 
    	var instruction = input.toString().trim();
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
    		default:
        		process.stderr.write('Wrong instruction!\n');
		}
	}
		
 //   if (input !== null) {
 //       var instruction = input.toString().trim();
 //       if (instruction === '/exit') {
 //           process.stdout.write('Quitting app!\n');
 //           process.exit();
 //       } else {
 //           process.stderr.write('Wrong instruction!\n');
 //       }
 //   }
});