#!/bin/node
function matrix(a){
let right =0;
let left =0;
	 
	for(let i=0; i<a.length;i++){
          for(let j=0; j<a.length; j++){

		  if(i==j){

		right+=a[i][j];
	    
	    }
		  if((i+j)==(a.length-1)){
		    left+=a[i][j]
		  }
	  	 	 
	  }
	
	}
	//return {right,left}

         sub= right-left
	return Math.abs(sub);
	
}

console.log(matrix([[2,2,5],[1,3,4],[1,2,3]]))
