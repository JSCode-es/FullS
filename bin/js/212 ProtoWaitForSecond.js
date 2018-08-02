/* ***************************************
 * PROTOTYPE: WAIT FOR SECOND
 * ***************************************/
$.waitForSecond = ( execute, second = 1 )=>{

	let s = setTimeout(()=>{ 

		('function' == typeof execute) && execute();
		clearTimeout(s);		

	},(second*1000));
	
}
