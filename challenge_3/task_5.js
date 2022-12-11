#!/bin/node
function birthdayCakeCandles(ar){
	let count =0;
	ar.sort();
	for(let i=0; i<=ar.length; i++){
	if (ar[i]>ar[i+1]){
               count+=1
           }

	}
	return count	
	

   }
console.log(birthdayCakeCandles([4,2,5,4,4,4,4,5,4,5,4,5,6]))

