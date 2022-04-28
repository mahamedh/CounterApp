

/*
CODE REVIEW
1- use ES6 variable declaration instead of var
2- try to do this without using sort()
3- Format and comment the code
4- Remove console logs
5- Use stric equality (===)
6- Array.prototype.intersection having issues, not working
*/


function intersection(array1, array2) {

  const removeDuplicates = new Set();    // set not add duplicate elements...

  const commonArray = [];


  for (let i = 0; i < array1.length; i++)   // to remove all duplicate values

    removeDuplicates.add(array1[i]);


  for (let i = 0; i < array2.length; i++) {         // loop through second array while on each index comapre with elements of duplicates removed
                                                 // array and pushes in to common array
    if (removeDuplicates.has(array2[i])) {
      commonArray.push(array2[i]);
    } 
    
  }

  return commonArray;

}


Array.prototype.intersection = function(array)
 {
  const removeDuplicates = new Set();    

  const commonArray = [];


  for (let i = 0; i < this.length; i++)  

    removeDuplicates.add(this[i]);


  for (let i = 0; i < array.length; i++) {        
                                                
    if (removeDuplicates.has(array[i])) {
      commonArray.push(array[i]);
    } 
    
  }

  return commonArray;
}


const arr1 = [7, 1, 4, 5, 6, 5];

const arr2 = [3, 8, 4];

intersection(arr1, arr2);
arr1.intersection(arr2);


//Time complexcity
//set is implementation of hash table and it got time complexcity of O(1)in average