#!/bin/node
/*
function getSecondLargest(num){
 
                       // let arr = num.length;
	for(i=0; i<num.length; i++){
		if(num[i]>num[i+1]){
			console.log( num[i])

		}
	}
}
 getSecondLargest([3,6,7,2])
 */

function getSecondLargest(num){
	 num.sort();
	num.reverse();
	let second = num[1];
	return second
}
console.log(getSecondLargest([6,8,5]))

module.export = {getSecondLargest}; 

