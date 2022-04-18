 
const array = ["A","B","C","D"]; 
var rarray = [];

  const reverseArray = () => {

    rarray = array.map((item, idx) => array[array.length - 1 - idx]);
    
  }
 reverseArray();
 console.log(rarray);