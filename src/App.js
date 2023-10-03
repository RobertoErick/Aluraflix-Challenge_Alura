import './reset.css';
import Header from './Componentes/Header/Header';
import Contenido from './Componentes/Home/Contenido'
import Footer from './Componentes/Footer/Footer';
import NuevoVideo from './Componentes/NuevoVideo/NuevoVideo';
import NuevaCategoria from './Componentes/NuevaCategoria/NuevaCategoria';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Contenido />} />
      <Route path='/NuevoVideo' element={<NuevoVideo />} />
      <Route path='/NuevaCategoria' element={<NuevaCategoria />} />
    </Routes> 
    <Footer />
  </ Router>
  );
};

export default App;
