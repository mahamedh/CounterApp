
function reverseString(str) {

  const newString = "";

  //loop the string provided by last index and assigned to empty string of first index
  for (let i = str.length - 1; i >= 0; i--) {

       newString += str[i];
       
  }

  return newString;
}
