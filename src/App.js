import logo from './logo.svg';
import './App.css';
import TodoUi from './Componentt/TodoUi';

import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import Navbar from './Componentt/Navbar';
import Sinup from './Componentt/Sinup';
import Login from './Componentt/Login'
import EditContent from './Componentt/EditTodo';
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={ <TodoUi/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sinup' element={<Sinup/>}/>
        <Route path='/edit/:id' element={<EditContent/>}/>
      </Routes>
     </BrowserRouter>

     
    
    </div>
  );
}

export default App;
