import './Carrito.css'
import laptop from '../multimedia/laptop.svg'
import airplay from '../multimedia/airplay.svg'
import minus from '../multimedia/minus.svg'
import plus from '../multimedia/plus.svg'
import xcircle from '../multimedia/xcircle.svg'
import React, { useState } from 'react';
import mock from '../Mock/mock.json';

 function Carrito({carrito, eliminarDelCarrito}) {
        const [count, setCount] = useState(1);

        const incrementarCant = () => {
          setCount(count + 1);
        };
      
        const decrementarCant = () => {
          setCount(count - 1);

          if (count <=1 ){
            setCount(count)
          }
        };

    return (

        <section id="section_body">
            <div class="carrito">
                <h1 id="cart_titulo">Carrito de compras</h1>
                <div id="clasificacion"> 
                <h4 class="clas">Imagen</h4><h4 class="clas">Nombre</h4><h4 class="clas">Precio</h4><h4 class="clas">Cantidad</h4><h4 class="clas">Subtotal</h4><h4 class="clas">Eiminar</h4>
                </div>

                {carrito.map((producto, index) => (
                <div class="objetos_carrito" key={index}>
                    <div id='imgs_menu'><img class="imgs_carrito" src={laptop} alt=""/></div>
                    <h4 id="nombre_prod">{producto.nombre_producto}</h4>
                    <h5 id="price">${producto.precio_producto}</h5>
                    <div id='ct'>
                    <button class="botonCant" onClick={incrementarCant}><div class="_producto"><img src={plus} alt=""/></div></button>
                    <h5 id="price_total">{count}</h5>
                    <button class="botonCant" onClick={decrementarCant}><div class="_producto"><img src={minus} alt=""/></div></button>
                    </div>
                    <div id="Subtotal">${producto.precio_producto*count}</div>

                    <button id="botonElim" onClick={() => eliminarDelCarrito(producto)}><div id="eliminar"><img src={xcircle} alt=""/></div></button>

                </div>
                ))}
            </div>

        </section>
    );
}

export default Carrito;