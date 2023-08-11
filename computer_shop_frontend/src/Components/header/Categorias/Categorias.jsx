import React from 'react';


const Categorias = () => {
    return (
        <div>
            <main id="categorias_main">

        <section id="section_menu">
            <div id="barra_categorias">
                <img id="Imagen_menu" src="multimedia/airplay.svg" alt=""/>
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

                <div class="div_img_menu">
                    <img class="imgs_menu" src="multimedia/crosshair.svg" alt=""/>
                    <h4 class="descripcion_prod">descripción de la imagen</h4>
                    <a class="agregar_producto" href=""><div class="Agregar"><h5>Agregar</h5></div></a>
                </div>
                <div class="div_img_menu">
                    <img class="imgs_menu" src="multimedia/laptop.svg" alt=""/>
                    <h4 class="descripcion_prod">descripción de la imagen</h4>
                    <a class="agregar_producto" href=""><div class="Agregar"><h5>Agregar</h5></div></a>
                </div>

            </div>


        </section>

        </main>
        </div>
    );
};

export default Categorias;