
 
 /*
 CODE REVIEW
 1- use ES6 variable declaration instead of var
 2- try to do this without using sort()
 3- Format and comment the code
 4- Remove console logs
 5- Use stric equality (===)
 6- Array.prototype.intersection having issues, not working
 */


function intersection(arr1, arr2) {
 let common = [];                  
  for(let i=0 ; i<arr1.length ; ++i) {
    for(let j=0 ; j<arr2.length ; ++j) {
      if(arr1[i] == arr2[j]) {       
        common.push(arr1[i]);        
      }
    }
  }
  
  return common;   

}               


const commonElements = intersection(arr1, arr2);

Array.prototype.intersection = function(array) {

  let common = [];                  
  for(let i=0 ; i<this.length ; ++i) {
    for(let j=0 ; j<arr2.length ; ++j) {
      if(this[i] == arr2[j]) {       
        common.push(this[i]);        
      }
    }
  }
  
  return common;   

}

 const commonElements2= arr1.intersection(arr2);


