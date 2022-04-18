import { useState, useReducer } from "react";
import ComponentA from "../Components/Component_A";
import ComponentB from "../Components/Component_B";



const HomePage = () => {


  const array = ["A","B","C","D"];
  const [array2, setArray2] = useState([]);
  let rarray = [];
  const reverseArray = () => {

    rarray = array.map((item, idx) => array[array.length - 1 - idx]);
    setArray2(rarray);
  }



  return (

    <div>
      <h1>Given Array:{array}</h1>
      <h2>Reversed Array:{array2}</h2>
      <button onClick={reverseArray}>Reverse Array</button>
    </div>




  );
}

export default HomePage;


