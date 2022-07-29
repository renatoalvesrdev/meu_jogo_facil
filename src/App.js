import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components import
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages import
import Home from './pages/home/Home';
import GerarAposta from './pages/gerarAposta/GerarAposta'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/gerarapostas' element={<GerarAposta />} />
            








            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
