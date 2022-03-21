import { useState,useReducer } from "react";
import ComponentA from "../Components/Component_A";
import ComponentB from "../Components/Component_B";



const HomePage = () => {
  
const initState= 10;

const reducer=(state, action) => {
   switch(action) {
     case 'increment' : return state + 1;
     case 'decrement' : return  state===0? state: state - 1;
     default:
        return state; 

   } 

}

const [count, dispatch] = useReducer(reducer,initState)
 
  // let [value, setValue] = useState(10);

  // const IncrementFunction = () => {

  //   setValue((value += 1));
  // }

  // const DecrementFunction = () => {
  //   value === 0 ? setValue(value):
  //   setValue((value -= 1));
  // }

  return (

    <div>
      <h2>Counter App</h2>
      <h3>Count:{count}</h3>

        <div>
          <ComponentA Increment={() => dispatch('increment')} Decrememnt={()=>dispatch('decrement')}></ComponentA>
        </div>
  
        <div>
          <ComponentB Increment={() => dispatch('increment')} Decrememnt={()=>dispatch('decrement')}></ComponentB>
        </div>
     


    </div>




  );
}

export default HomePage;

