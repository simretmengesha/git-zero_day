#!/bin/node
/*
function simpleArraySum(ar) {
let sum = 0;
	const arr = [3,4,1]
	for(const value of ar){
             sum+= value;
	}
 console.log(sum);
}
*/
function simpleArraySum(ar){

	let sum = 0;
	for(let i=0; i<ar.length; i++){
		sum+=ar[i]
	
	}
	return sum
}
console.log(simpleArraySum([1,2,3]))

