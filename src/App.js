import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components import
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages import
import Home from './pages/Home/Home';
import GerarAposta from './pages/GerarAposta/GerarAposta';
import Sobre from './pages/Sobre/Sobre';
import ComoFunciona from './pages/ComoFunciona/ComoFunciona';
import DuplaSena from './pages/Options/DuplaSena/DuplaSena';
import Lotofacil from './pages/Options/Lotofacil/Lotofacil';
import Quina from './pages/Options/Quina/Quina';
import Megasena from './pages/Options/Megasena/Megasena';
import Lotomania from './pages/Options/Lotomania/Lotomania';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              {/*Rotas da navbar */}
              <Route path='/' element={<Home />} />
              <Route path='/gerarapostas' element={<GerarAposta />} />
              <Route path='/comofunciona' element={<ComoFunciona />} />
              <Route path='/sobre' element={<Sobre />} />

              {/*Rotas das options*/}
              <Route path='/lotofacil' element={<Lotofacil />} />
              <Route path='/duplasena' element={<DuplaSena />} />
              <Route path='/lotomania' element={<Lotomania />} />
              <Route path='/megasena' element={<Megasena />} />
              <Route path='/quina' element={<Quina />} />
            
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
