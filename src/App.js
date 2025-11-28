import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Create from './Components/Create';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>}></Route>
        <Route exact path='/read' element={<Read/>}></Route>
        <Route exact path='/edit/:id' element={<Update/>}></Route>
      </Routes>
     
      </BrowserRouter>
    
    </div>
  );
}

export default App;
