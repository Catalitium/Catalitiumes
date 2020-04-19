import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from "react-bootstrap";
import AServicios from './Accordion/AServicios/AServicios';

export const Servicios = () => (


<Jumbotron fluid>
  <Container fluid>
  <div>
    <h1 align="center"> Servicios</h1>
<p>
    Ofrecemos soluciones IT desarrolladas por nosotros, al igual que cursos de capacitación para que pueda fabricar sus propias soluciones. 
    Nuestra flexibilidad se acopla a sus requerimientos. Dentro de nuestra gama de servicios, promovemos la mejora de sus operaciones mediante desarrollos <i>in situ</i>  y capacitaciones online o remotas.
    Nos especializamos en automatizar sus procesos y promover la presencia digital de su organización. A diferencia de grandes consultoras que ofrecen servicios costosos usando tecnologías obsoletas, nos caracterizamos por 
    entregar soluciones prácticas y accesibles.

</p>
</div>
    <AServicios />
  </Container>
</Jumbotron>




    
)

