import React from 'react';
import '@styles/Header.scss';

const header = () => {

  var navElement = document.querySelector("header");
  console.log(navElement)
  function changeCss () {
  
    //var navElement = document.querySelector("header");
    //console.log(navElement)
    if(this.scrollY > 10){
        navElement.style.marginTop=0;
        navElement.style.position="fixed";
        navElement.style.backgroundColor="#FF00FF";
    } 
    //? navElement.style.backgroundColor="#ccc" : "";
    console.log(navElement)
  }


window.addEventListener("scroll", changeCss , false);
    return (
        <header class='header'>
          <title>Navbar</title>
          <div>

          </div>
        
        <img alt='menu' className='menu' />
        <div className='navbar-izquierda'>
          <a href='/'>
            <img src="" alt='logo1' className='logo1' />
          </a>
          <ul>
            <li>
              <a href='/'>Inicio</a>
            </li>
            <li>
              <a href='/'>Peliculas</a>
            </li>
            <li>
              <a href='/'>Series</a>
            </li>
            <li>
              <a href='/'>Favoritos</a>
            </li>
            <li>
              <a href='/'>Categorias</a>
            </li>
          </ul>
        </div>
        <div className='navbar-derecha'>
          <ul>
            <li className='navbar-email'>
              <a href>dulce@gmail.com</a>
            </li>
            <li className='navbar-carrito'>
              <img src="" alt='carrito-compras' className='carrito' />
                <div>1</div>
            </li>
          </ul>
        </div>
      </header>
    );
}

export default header;