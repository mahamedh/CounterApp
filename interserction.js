const arr1 = [45,345,56,18];
const arr2 = [45, 18, 93,];

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

console.log(commonElements);
console.log(commonElements2);