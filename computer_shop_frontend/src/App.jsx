import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/header/header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Categorias from './Components/Categorias/Categorias';
import MainSection from './Components/MainSection/MainSection';
import Login from './Components/Login/Login'
import Singup from './Components/Singup/Singup'
import Carrito from './Components/Carrito/Carrito'


function App() {

  const [carrito, setCarrito] = useState([]);
  // var [count, setCount] = useState(1);
      //   const incrementarCant = (producto) => {
      //     producto.count =producto.count + 1
      //  };
      
      //    const decrementarCant = (producto) => {
      //     producto.count =producto.count- 1

      //     if (producto.count<=1){
      //        producto.count=producto.count
      //    }
      //    };


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


  const actualizarCantidad = (productoId, nuevaCantidad) => {
    const nuevoCarrito = carrito.map((item) =>
      item.id === productoId ? { ...item, cantidad: nuevaCantidad } : item
    );
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
                <Carrito carrito={carrito }eliminarDelCarrito={eliminarDelCarrito} actualizarCantidad={actualizarCantidad} /> 
              </>}
              />

              <Route path='/Singup' element={<>
                <Header/>
                <Singup/>
              </>}
              />
              
              
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
