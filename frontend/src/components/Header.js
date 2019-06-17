import React from 'react';
import { Link } from 'react-router-dom'  // Parecido com uma anchor do HTML (seria um <a> com href)

import './Header.css';

import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

export default function Header() {
  return ( // EM IMG SRC, com as chaves {} você pode embutir um codigo javascript dentro html. No caso usando o atributo LOGO e CAMERA
    <header id="main-header">
        <div class="header-content">
            <Link to="/">
            <img src={logo} alt="InstaRocket" /> 
            </Link>
            <Link to="/new">
            <img src={camera} alt="Enviar publicação" />
            </Link>
        </div>
    </header>

  );
}
