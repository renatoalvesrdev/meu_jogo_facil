import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components import
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages import
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
            








            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
