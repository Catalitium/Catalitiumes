import React from 'react';
import {  Row, Col, } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import WebLogo from '../../../assets/img/WebLogo.png'
import WebAppLogo from '../../../assets/img/WebAppLogo.png'
import CapLogo from '../../../assets/img/CapLogo.png'
import BotLogo from '../../../assets/img/BotLogo.png'

export const AEspecialidades = () => {
    return (
       <div>

<Container  style={{display: 'inline-block'}} > 

<Row  >
    <Col >
    <Image src={BotLogo} fluid />
    <p>Bots</p>
    </Col>
  
    <Col>
    <Image src={CapLogo} fluid />
    <p>Capacitación</p>
    </Col>

    <Col>
    <br></br>
    <Image src={WebLogo} fluid />
       
    <p> <br></br> <br></br>Páginas Web</p>
    </Col>

    <Col>
    <br></br>
    <Image src={WebAppLogo}  fluid />
    <p>Aplicaciones Web</p>
    </Col>
  
</Row>
</Container>

        </div>
    )
}

export default AEspecialidades;