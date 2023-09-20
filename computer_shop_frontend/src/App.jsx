import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/header/header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Categorias from './Components/Categorias/Categorias';
import MainSection from './Components/MainSection/MainSection';
import Login from './Components/Login/Login'
import Singin from './Components/Singin/Singin'
import Carrito from './Components/Carrito/Carrito'


function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      window.alert("Este producto ya esta agregado al carrito")
      return;
    }

    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== producto.id);
    setCarrito(nuevoCarrito);
  };


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
                <Categorias agregarAlCarrito={agregarAlCarrito}/>
                <Footer/>
              </>}
              />

              <Route path='/Login' element={<>
                <Header/>
                <Login/>
              </>}
              />

              <Route path='/Carrito' element={<>
                <Header/>
                <Carrito carrito={carrito }eliminarDelCarrito={eliminarDelCarrito} /> 
                <Footer/>
              </>}
              />

              <Route path='/Singin' element={<>
                <Header/>
                <Singin/>
              </>}
              />
              
              
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
