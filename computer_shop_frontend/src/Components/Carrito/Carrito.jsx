import './Carrito.css'
import laptop from '../multimedia/laptop.svg'
import airplay from '../multimedia/airplay.svg'


const Carrito = () => {
    return (
        <section id="section_body">
            <div class="carrito">
                <h1 id="cart_titulo">Carrito de compras</h1>
                <div class="objetos_carrito">

                    <img class="imgs_menu" src={laptop} alt=""/>
                    <h4 class="descripcion_prod">descripción de la imagen</h4>
                    <h5 class="precio">10$</h5>
                    <a class="agregar_producto" href=""><div class="Agregar"><h5>Agregar</h5></div></a>

                </div>
                <div class="objetos_carrito"></div>
                <div class="objetos_carrito"></div>
            </div>

        </section>
    );
};

export default Carrito;