import './Carrito.css'
import laptop from '../multimedia/laptop.svg'
import airplay from '../multimedia/airplay.svg'
import minus from '../multimedia/minus.svg'
import plus from '../multimedia/plus.svg'
import xcircle from '../multimedia/xcircle.svg'

const Carrito = () => {
    return (

        <section id="section_body">
            <div class="carrito">
                <h1 id="cart_titulo">Carrito de compras</h1>
                <div id="clasificacion"> 
                <h4 class="clas">Imagen</h4><h4 class="clas">Nombre</h4><h4 class="clas">Precio</h4><h4 class="clas">Cantidad</h4><h4 class="clas">Subtotal</h4><h4 class="clas">Eiminar</h4>
                </div>
                <div class="objetos_carrito">

                    <img class="imgs_menu" src={laptop} alt=""/>
                    <h4 id="nombre_prod">Nombre</h4>
                    <h5 id="price">10$</h5>
                    <a class="agregar_producto" href=""><div class="_producto"><img src={plus} alt=""/></div></a>
                    <h5 id="price_total">0$</h5>
                    <a class="agregar_producto" href=""><div class="_producto"><img src={minus} alt=""/></div></a>
                    <div id="eliminar"><img src={xcircle} alt=""/></div>

                </div>
            </div>

        </section>
    );
};

export default Carrito;