import './reset.css';
import styled from 'styled-components';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Footer from './Componentes/Footer';

const Contenido = styled.div`
    background-color: rgba(0, 0, 0, 0.90);
    height: 100px;
`

function App() {
  return (
  <>
    <Header />
    <Banner />
    <Contenido />
    <Footer />
  </>
  );
};

export default App;
