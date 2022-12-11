#!/bin/node
function compareTable(a,b){

	let c =[0,0]
for(let i=0; i<a.length; i++){
	for(let i=0; i<b.length;i++){
		if(a[i]>b[i]){
		c[0]+=1
		}
		if(a[i]<b[i]){
		 c[1]+=1
		}
               if(a[i]==b[i]){
                c[1]=c[1]
		c[0]=c[0]       

	       }
 
	     }
	return c

          }
      }

console.log(compareTable([3,2],[2,2]))
