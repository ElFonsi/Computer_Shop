import React from 'react';
import airplay from '../multimedia/airplay.svg'
import search from '../multimedia/search.svg'
import shoppingcart from '../multimedia/shopping-cart.svg'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@600&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@200&display=swap" rel="stylesheet"/>
                <title>Computer shop</title>
            </head>
        <nav class="nav_main">
                <div class="div_logo_titulo">
                    <Link to="/" class="links_img"><img id="Logo" src={airplay} alt="Logo"/></Link>
                    <h1 id="title">Computer Shop</h1>
                </div>
                <div class="div_links">
                    <ul class="ul_nav_2">
                        <Link to='/Categorias' class="links" target=""><li class="li_nav">Categorias</li></Link>
                        <a class="links"href=""><li class="li_nav">Redes Sociales</li></a>
                    </ul>
                </div>
                <div class="navegador"> 
                    <img src={search} alt="" id="logo_buscar"/>
                    <input id="buscar" type="text" placeholder="Buscar..."/>
                </div>
                <div class="div_links">
                    <ul class="ul_nav">
                        <a class="links"href=""><li class="li_nav">Ingresar</li></a>
                        <a class="links"href=""><li class="li_nav">Registrarse</li></a>
                    </ul>
                </div>
                <div class="div_logo_tienda">
                    <a class="links_img" href=""><img id="Tienda" src={shoppingcart} alt="Tienda"/></a>
                    <h4 id="Tienda_title">Tienda</h4>
                </div>
            </nav>
            
        </div>
        
    );
};

export default Header;