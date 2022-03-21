import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"
import HomePage from './Pages/HomePage';

function App() {
  return (
  
    <div className="App">
     <HomePage/>
    </div>

  );
}

export default App;
