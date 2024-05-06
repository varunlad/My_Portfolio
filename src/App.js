import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './Component/UseContex/HomePage';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={
            <div className='container-fluid main_poins_container'>
              <HomePage />
            </div>} />
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
