import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/header/header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Categorias from './Components/Categorias/Categorias';
import MainSection from './Components/MainSection/MainSection';
import Login from './Components/Login/Login'
import Singin from './Components/Singin/Singin'
import Carrito from './Components/Carrito/Carrito'


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

              <Route path='/Login' element={<>
                <Header/>
                <Login/>
                <Footer/>
              </>}
              />

              <Route path='/Carrito' element={<>
                <Header/>
                <Carrito/>
                <Footer/>
              </>}
              />

              <Route path='/Singin' element={<>
                <Header/>
                <Singin/>
                <Footer/>
              </>}
              />
              
              
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
