
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Compponents/Add';
import Show from './Compponents/Show';
import Update from './Compponents/Update';
import Delete from './Compponents/Delete';
import Navbar from './Compponents/Navbar';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/add' element={<Add/>} ></Route>
    <Route path='/show' element={<Show/>} ></Route>
    <Route path='/update/:studentId' element={<Update/>} ></Route>
    <Route path='/delete/:studentId' element={<Delete/>} ></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
