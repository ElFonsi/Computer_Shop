import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/header/header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Categorias from './Components/Categorias/Categorias';
import MainSection from './Components/MainSection/MainSection';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<>
                <Header/>
                <MainSection/>
                <Footer/>
              </>}
              />
              <Route path='/Categorias' element={<>
                <Header/>
                <Categorias/>
                <Footer/>
              </>}
              />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
