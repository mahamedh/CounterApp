 
 var arr1 = [45, 99, 55, 17, 93, 23];
 var arr2 = [45, 18, 93, 7, 17];

function intersection(arr1, arr2) {

  arr1.sort();                      
  arr2.sort();
  var common = [];                
  var i = 0, j = 0;                
  
  while(i<arr1.length && j<arr2.length) {
    
    if(arr1[i] == arr2[j]) {       
      common.push(arr1[i]);
      i++;
      j++;
    }
    else if(arr1[i] < arr2[j]) {  
      i++;                      
    }                             
    else {
      j++;
    }
  }
  console.log(common);
  return common;
}


Array.prototype.intersection = function(array) { 

  this.sort();                      
  arr2.sort();
  var common = [];                
  var i = 0, j = 0;                
  
  while(i<this.length && j<arr2.length) {
    
    if(this[i] == arr2[j]) {        
      common.push(this[i]);
      i++;
      j++;
    }
    else if(this[i] < arr2[j]) {  
      i++;                        
    }                            
    else {
      j++;
    }
  }
  console.log(common)
  return common;

}

const first=intersection(arr1,arr2);
const second=arr1.intersection(arr2);


console.log(first);
console.log(second);