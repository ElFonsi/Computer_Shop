import './Carrito.css'
import laptop from '../multimedia/laptop.svg'
import airplay from '../multimedia/airplay.svg'
import minus from '../multimedia/minus.svg'
import plus from '../multimedia/plus.svg'
import xcircle from '../multimedia/xcircle.svg'
import React, { useState } from 'react';

 function Carrito({carrito, eliminarDelCarrito, decrementarCant, incrementarCant}) {
        

    return (

        <section id="section_body">
            <div className="carrito">
                <h1 id="cart_titulo">Carrito de compras</h1>
                <div id="clasificacion"> 
                <h4 className="clas">Imagen</h4><h4 className="clas">Nombre</h4><h4 className="clas">Precio</h4><h4 className="clas">Cantidad</h4><h4 className="clas">Subtotal</h4><h4 className="clas">Eiminar</h4>
                </div>

                {carrito.map((producto, index) => (
                <div className="objetos_carrito" key={index}>
                    <div id='imgs_menu'><img className="imgs_carrito" src={laptop} alt=""/></div>
                    <h4 id="nombre_prod">{producto.nombre_producto}</h4>
                    <h5 id="price">${producto.precio_producto}</h5>
                    <div id='ct'>
                    <button className="botonCant" onClick={incrementarCant(producto)}><div className="_producto"><img src={plus} alt=""/></div></button>
                    <h5 id="price_total">{producto.count}</h5>
                    <button className="botonCant" onClick={decrementarCant(producto)}><div className="_producto"><img src={minus} alt=""/></div></button>
                    </div>
                    <div id="Subtotal">${producto.precio_producto*producto.count}</div>

                    <button id="botonElim" onClick={() => eliminarDelCarrito(producto)}><div id="eliminar"><img src={xcircle} alt=""/></div></button>

                </div>
                ))}
            </div>

        </section>
    );
}

export default Carrito;