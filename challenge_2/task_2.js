#!/bin/node
const theFunction = (x)=>{
            return x
      
}

function callback(x,theFunction){
	for(let i=0; i<=x; i++){
		console.log(theFunction(i))
	}
}
callback(4,theFunction)
 
module.export = {theFunction,callback};
