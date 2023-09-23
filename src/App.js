import './reset.css';
import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';
import NuevoVideo from './Componentes/NuevoVideo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/NuevoVideo' element={<NuevoVideo />} />
    </Routes> 
    <Footer />
  </ Router>
  );
};

export default App;
