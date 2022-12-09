#!/bin/node
function getLetter(s){

	let letterA = ['a','e','i','o','u']
	let letterB = ['b','c','d','f','g']
	let letterC = ['h','j','k','l','m']
	let letterD = ['n','p','q','r','s','t','v','w','y','z']

	for(let i=0; i<letterA.length; i++){
		if(s[0] == letterA[i]){
			return 'A'
		}
	
           }
	for(let i=0; i<letterB.length; i++){
            
		if(s[0]==letterB[i]){
			return 'B'
           
		}
	}
	for(let i=0; i<letterC.length; i++){
		if(s[0]==letterC[i]){
			return 'C'
			}
	}
	for(let i=0;i<letterD.length; i++){
		if(s[0]==letterD[i]){
			return 'D'
		}
	}
          }
console.log( getLetter('nadfg'))

function firstLetter(S){

    }
module.export = {getLetter};

