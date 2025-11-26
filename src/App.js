import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Create from './Components/Create';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>}></Route>
      </Routes>
     
      </BrowserRouter>
    
    </div>
  );
}

export default App;
