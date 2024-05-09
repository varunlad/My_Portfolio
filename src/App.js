import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './Component/UseContex/HomePage';
import Footer from "./Common/Footer";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
          <div className='container-fluid main_poins_container'>
            <HomePage />
            <Footer />
          </div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
