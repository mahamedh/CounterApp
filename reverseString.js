
const array = ["A", "B", "C", "D"];
const rarray = [];

function reverseString(array) {

  rarray = array.map((item, idx) => array[array.length - 1 - idx]);
  return rarray;
}

