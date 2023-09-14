import React, { Component } from 'react';
import laptop from '../multimedia/laptop.svg'
import airplay from '../multimedia/airplay.svg'
import Carrito from '../Carrito/Carrito';


class Categorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [], // Arreglo para almacenar los productos
            carrito: [],   // Arreglo para almacenar los productos en el carrito
        };

    }
    componentDidMount() {
        // Importa los datos del archivo JSON (puedes ajustar la ruta según tu proyecto)
        import('../Mock/mock.json')
          .then((data) => {
            this.setState({ productos: data.default });
          })
          .catch((error) => {
            console.error('Error al cargar los datos:', error);
          });
      }
    
      agregarAlCarrito = (producto) => {
        // Agrega el producto al carrito
        this.setState((prevState) => ({
          carrito: [...prevState.carrito, producto],
        }));
      };
    
      render() {
        const { productos, carrito } = this.state;
    return (
        <div>
            <main id="categorias_main">

        <section id="section_menu">
            <div id="barra_categorias">
                <img id="Imagen_menu" src={airplay} alt=""/>
                <br/><br/>
                <h2 id="titulo_menu">Categorias</h2>
                <a href="" class="links_menu"><h3>Link1</h3></a>
                <a href="" class="links_menu"><h3>Link2</h3></a>
                <a href="" class="links_menu"><h3>Link3</h3></a>
                <a href="" class="links_menu"><h3>Link1</h3></a>
                <a href="" class="links_menu"><h3>Link2</h3></a>
                <a href="" class="links_menu"><h3>Link3</h3></a>
            </div>

            <div id="Content">

                <h2>Productos</h2>
                {productos.map((producto) => (
                <div class="div_img_menu" key={producto.id_producto}>
                    <img class="imgs_menu" src={laptop} alt=""/>
                    <h4 class="descripcion_prod">{producto.nombre_producto}</h4>
                    <h5 class="precio">${producto.precio_producto}</h5>
                    <button class="agregar_producto" onClick={() => this.agregarAlCarrito(producto)}><div class="Agregar"><h5>Agregar</h5></div></button>                 
                </div>

                ))}
                <Carrito carrito={carrito} /> 

                
            </div>



        </section>

        </main>
        </div>
        );
    }
};

export default Categorias;