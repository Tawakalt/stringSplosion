'use strict';   

// Declaing the function 
class StringSplosion {
	//initializing constructor
  constructor(stringSupplied) {
    this.stringSupplied = stringSupplied;
  }
  
  //Declaring method manipulate
  manipulate() {
  	if (typeof(this.stringSupplied) === 'string'){
	  	//splitting the supplied string into an array
	    this.splitStringSupplied = this.stringSupplied.split('');
	    this.manipulatedString = "";
	    this.temp = "";
	    for (this.count=0; this.count<this.splitStringSupplied.length; this.count++){
	      this.temp += this.splitStringSupplied[this.count];
	      this.manipulatedString += this.temp;
	    }
	    return this.manipulatedString;
  	}
  	else 
		return "Argument must be a string";
  }
	
  //Declaring method indexOf
  indexOf(stringSupplied) {
    this.stringSupplied = stringSupplied;
    return -1;
  }
}
module.exports = StringSplosion