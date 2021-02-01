Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"

let debugger_function_function_entering = Bright
let debugger_function_function_args = FgBlue
let debugger_function_function_exiting = FgGreen
let debugger_function_function_return = FgMagenta
let debugger_function_values_header = FgCyan
let debugger_function_values = FgCyan

let debugger_vague_function_entering = Bright
let debugger_vague_function_args = FgBlue
let debugger_vague_function_exiting = FgGreen
let debugger_vague_function_returning = FgMagenta
let debugger_vague_values_header = FgCyan
let debugger_vague_values = FgCyan
let debugger_vague_error_header = BgBlack + FgRed
let debugger_vague_errors = FgRed

let inner_function_entering = '\t' + Bright  
let inner_function_args = '\t' + Bright
let inner_function_exiting = '\t' + Bright
let inner_function_returning = '\t' + Bright
let inner_function_values_header = '\t' + Bright
let inner_function_values = '\t' + Bright

let inner_debugger_vague_function_entering = '\t' + Bright 
let inner_debugger_vague_function_args = '\t' + Bright
let inner_debugger_vague_function_exiting = '\t' + Bright
let inner_debugger_vague_function_returning = '\t' + Bright
let inner_debugger_vague_function_values_header = '\t' + Bright
let inner_debugger_vague_values = '\t' + Bright
let inner_debugger_vague_error_header = '\t' + FgRed + Bright 
let inner_debugger_vague_error = '\t' + FgRed + Bright

let particular_debugger_function_entering = BgBlack 
let particular_debugger_function_args = BgBlack + FgBlue 
let particular_debugger_function_exiting = BgBlack + FgGreen 
let particular_debugger_function_returning = BgBlack + FgMagenta 
let particular_debugger_values_header = BgBlack + FgCyan 
let particular_debugger_values = BgBlack + FgCyan 

let particular_debugger_vague_function_entering = BgBlack 
let particular_debugger_vague_function_args = BgBlack + FgBlue 
let particular_debugger_vague_function_exiting = BgBlack + FgGreen 
let particular_debugger_vague_function_returning = BgBlack + FgMagenta 
let particular_debugger_vague_values_header = BgBlack + FgCyan 
let particular_debugger_vague_values = BgBlack + FgCyan 
let particular_debugger_vague_errors_header = BgBlack + FgRed  
let particular_debugger_vague_error = BgBlack + FgRed 

class DebuggerStuff{
	constructor(props) {
		// super(props);
		this.logging_list = [];

		// which debuggers to run
		this.run_debugger_function = true
		this.run_debugger_dealing_with_vague_error = true
		this.run_inner_call_debugger = true
		this.run_inner_call_debugger_with_vague_error = true
		this.run_particular_debugger = true
		this.run_particular_debugger_with_vague_error = true

		// components of logs
		this.show_errors = true
		this.show_values = true
		this.show_function_entering = true
		this.show_function_args = true
		this.show_function_exiting = true
		this.show_function_return = true

	}

	debugger_function(target_function, ...target_args){
		if ( this.run_debugger_function ){
			// function entering
			if ( this.show_function_entering ){

				console.log('\n')
				console.log(debugger_function_function_entering, 'LOG::::-------------------Entering ' , target_function , ' Function--------------------', Reset)

			}

			// function args
			if ( this.show_function_args ){

				console.log('\n')
				console.log(debugger_function_function_args, 'LOG::::-------------------Passing ' , target_args , ' as args--------------------', Reset)

			}

			// function exiting
			if ( this.show_function_exiting ){

				console.log('\n')
				console.log(debugger_function_function_exiting, 'LOG::::-------------------Exiting ' , target_function , ' Function--------------------', Reset)

			}

			// get retuned value
			if ( this.show_function_return ){

				var returned_value = target_function(target_args)
				console.log('\n')
				console.log(debugger_function_function_return, 'LOG::::-------------------Return Value From ' , target_function , ' is ' , returned_value , ' --------------------', Reset)

			}

			// log all values from the wrapped function
			console.log('\n')
			console.log(debugger_function_values_header, 'LOG::::-------------------Value From ' , target_function , '--------------------', Reset)
			if ( this.show_values ){
				logging_list.map((log_item) => {
					console.log(debugger_function_values, '\t' + log_item, Reset)
				})
			}
		}
	}

	debugger_dealing_with_vague_error(target_function, ...target_args){
		if ( this.run_debugger_dealing_with_vague_error ){
			// function entering
			if ( this.show_function_entering ){

				// console.log('\x1b[36m', 'sometext' ,'\x1b[0m');
				// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
				console.log('\n')
				console.log(debugger_vague_function_entering, 'LOG::::-------------------Entering ' , target_function , ' Function--------------------', Reset)

			}

			// function args
			if ( this.show_function_args ){

				console.log('\n')
				console.log(debugger_vague_function_args, 'LOG::::-------------------Passing ' , target_args , ' as args--------------------', Reset)

			}

			try{

				let returned_value = target_function(target_args)

				// function exiting
				if ( this.show_function_exiting ){

					console.log('\n')
					console.log(debugger_vague_function_exiting, 'LOG::::-------------------Exiting ' , target_function , ' Function--------------------', Reset)

				}


				// get retuned value
				if ( this.show_function_return ){

					returned_value = target_function(target_args)
					console.log('\n')
					console.log(debugger_vague_function_returning, 'LOG::::-------------------Return Value From ' , target_function , ' is ' , returned_value , ' --------------------', Reset)

				}

			} catch (err) {

				console.log(err)
				// log all values from the wrapped function

				console.log('\n')
				console.log(debugger_vague_values_header, 'LOG::::-------------------Value From ' , target_function , 'TILL ERROR WAS CAUGHT --------------------', Reset)
				if ( this.show_values ){
					logging_list.map((log_item) => {
						console.log(debugger_vague_values, log_item, Reset)
					})
				}

				console.log('\n')
				console.log(debugger_vague_error_header, 'LOG::::-------------------Error From ' , target_function , '--------------------', Reset)
				console.log(debugger_vague_errors, '\terror is ' + err , Reset)

			}
		}
	}

	inner_call_debugger(target_function, ...target_args){ // indent it
		if ( this.run_inner_call_debugger ){
			// function entering
			if ( this.show_function_entering ){

				console.log('\n')
				console.log(inner_function_entering, 'LOG::::-------------------Entering ' , target_function , ' Function--------------------', Reset)

			}

			// function args
			if ( this.show_function_args ){

				console.log('\n')
				console.log(inner_function_args, 'LOG::::-------------------Passing ' , target_args , ' as args--------------------', Reset)

			}

			// function exiting
			if ( this.show_function_exiting ){

				console.log('\n')
				console.log(inner_function_exiting, 'LOG::::-------------------Exiting ' , target_function , ' Function--------------------', Reset)

			}

			// get retuned value
			if ( this.show_function_return ){

				var returned_value = target_function(target_args)
				console.log('\n')
				console.log(inner_function_returning, 'LOG::::-------------------Return Value From ' , target_function , ' is ' , returned_value , ' --------------------', Reset)

			}

			// log all values from the wrapped function
			console.log('\n')
			console.log(inner_function_values_header, 'LOG::::-------------------Value From ' , target_function , '--------------------', Reset)
			if ( this.show_values ){
				logging_list.map((log_item) => {
					console.log(inner_function_values, log_item, Reset)
				})
			}
		}
	}

	inner_call_debugger_with_vague_error(target_function, ...target_args){ // indent it
		if ( this.run_inner_call_debugger_with_vague_error ){
			// function entering
			if ( this.show_function_entering ){

				console.log('\n')
				console.log(inner_debugger_vague_function_entering, 'LOG::::-------------------Entering ' , target_function , ' Function--------------------', Reset)

			}

			// function args
			if ( this.show_function_args ){

				console.log('\n')
				console.log(inner_debugger_vague_function_args, 'LOG::::-------------------Passing ' , target_args , ' as args--------------------', Reset)

			}

			try{

				let returned_value = target_function(target_args)

				// function exiting
				if ( this.show_function_exiting ){

					console.log('\n')
					console.log(inner_debugger_vague_function_exiting, 'LOG::::-------------------Exiting ' , target_function , ' Function--------------------', Reset)

				}


				// get retuned value
				if ( this.show_function_return ){

					returned_value = target_function(target_args)
					console.log('\n')
					console.log(inner_debugger_vague_function_returning, 'LOG::::-------------------Return Value From ' , target_function , ' is ' , returned_value , ' --------------------', Reset)

				}

			} catch (err) {

				// console.log(err)
				// log all values from the wrapped function

				console.log('\n')
				console.log(inner_debugger_vague_function_values_header, 'LOG::::-------------------Value From ' , target_function , 'TILL ERROR WAS CAUGHT --------------------', Reset)
				if ( this.show_values ){
					logging_list.map((log_item) => {
						console.log( inner_debugger_vague_values, '\t', log_item, Reset)
					})
				}

				console.log('\n')
				console.log(inner_debugger_vague_error_header, 'LOG::::-------------------Error From ' , target_function , '--------------------', Reset)
				console.log(inner_debugger_vague_error, '\terror is ' + err , Reset)

			}
		}
	}

	particular_debugger(target_function, ...target_args){		
		if ( this.run_particular_debugger ){
			// function entering
			if ( this.show_function_entering ){

				console.log('\n')
				console.log(particular_debugger_function_entering, 'LOG::::-------------------Entering ' , target_function , ' Function--------------------', Reset)

			}

			// function args
			if ( this.show_function_args ){

				console.log('\n')
				console.log(particular_debugger_function_args, 'LOG::::-------------------Passing ' , target_args , ' as args--------------------', Reset)

			}

			// function exiting
			if ( this.show_function_exiting ){

				console.log('\n')
				console.log(particular_debugger_function_exiting, 'LOG::::-------------------Exiting ' , target_function , ' Function--------------------', Reset)

			}

			// get retuned value
			if ( this.show_function_return ){

				var returned_value = target_function(target_args)
				console.log('\n')
				console.log(particular_debugger_function_returning, 'LOG::::-------------------Return Value From ' , target_function , ' is ' , returned_value , ' --------------------', Reset)

			}

			// log all values from the wrapped function
			console.log('\n')
			console.log(particular_debugger_values_header, 'LOG::::-------------------Value From ' , target_function , '--------------------', Reset)
			if ( this.show_values ){
				logging_list.map((log_item) => {
					console.log(particular_debugger_values, '\t' + log_item, Reset)
				})
			}
		}
	}

	particular_debugger_with_vague_error(target_function, ...target_args){		
		if ( this.run_particular_debugger_with_vague_error ){
			// function entering
			if ( this.show_function_entering ){

				// console.log('\x1b[36m', 'sometext' ,'\x1b[0m');
				// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
				console.log('\n')
				console.log(particular_debugger_vague_function_entering, 'LOG::::-------------------Entering ' , target_function , ' Function--------------------', Reset)

			}

			// function args
			if ( this.show_function_args ){

				console.log('\n')
				console.log(particular_debugger_vague_function_args, 'LOG::::-------------------Passing ' , target_args , ' as args--------------------', Reset)

			}

			try{

				let returned_value = target_function(target_args)

				// function exiting
				if ( this.show_function_exiting ){

					console.log('\n')
					console.log(particular_debugger_vague_function_exiting, 'LOG::::-------------------Exiting ' , target_function , ' Function--------------------', Reset)

				}


				// get retuned value
				if ( this.show_function_return ){

					returned_value = target_function(target_args)
					console.log('\n')
					console.log(particular_debugger_vague_function_returning, 'LOG::::-------------------Return Value From ' , target_function , ' is ' , returned_value , ' --------------------', Reset)

				}

			} catch (err) {

				console.log(err)
				// log all values from the wrapped function

				console.log('\n')
				console.log(particular_debugger_vague_values_header, 'LOG::::-------------------Value From ' , target_function , 'TILL ERROR WAS CAUGHT --------------------', Reset)
				if ( this.show_values ){
					logging_list.map((log_item) => {
						console.log(particular_debugger_vague_values, '\t' + log_item, Reset)
					})
				}

				console.log('\n')
				console.log(particular_debugger_vague_errors_header, 'LOG::::-------------------Error From ' , target_function , '--------------------', Reset)
				console.log(particular_debugger_vague_error, '\terror is ' + err , Reset)

			}
		}
	}
}

module.exports = {
	DebuggerStuff	
}

function does_something(args){
	logging_list.push( 'executed till here' )
	// simulating error

	// let err = new Error()
	// err()

	logging_list.push( 'executed till here1' )
	return args
}

// const { DebuggerStuff } = require('../handy_functions/debugger')
// var execute_and_debug = new DebuggerStuff()
// var logging_list = execute_and_debug.logging_list


// // How to use debugger_function by wrapping
// logging_list = []
// execute_and_debug.inner_call_debugger( does_something, 1,2,3,4 )

// How to use debugger_dealing_with_vague_error by wrapping

// logging_list = []
// execute_and_debug.debugger_dealing_with_vague_error( does_something, 1,2,3 )