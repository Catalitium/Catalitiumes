import React from 'react';
import Servicios from './Servicios/Servicios';
import AccordionAbout from './Accordion/Accordion';
import logo from '../assets/img/logo.png'
export const Inicio = () => (

    <div align="center" >

            <h1 align="center" > Catalitium</h1>
            <br></br>
            <h2 align="center" > <img  src={logo} alt="catalitium-logo" width={100} height={100} ></img></h2>
            <br></br>
            
            <h4 align="center" > Empoderando individuos y organizaciones con tecnología para el uso eficiente de sus recursos</h4>
            <br></br><br></br>
        <div>
            <Servicios />
            <AccordionAbout />
            <br>
            </br>
        </div>
    </div>
)
