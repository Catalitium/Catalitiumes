import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import AServicios from './AServicios/AServicios'
import AEspecialidades from './AEspecialidades/AEspecialidades'
import Button from 'react-bootstrap/Button'

export const AccordionAbout = () => {
  return (

    <div>

<Container fluid> 
<Accordion defaultActiveKey="1" >
<Card>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Experiencia
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0" >   
      <Card.Body className='card-text text-seconday' >
        <div align="left" >    
          Nuestra amplia trajectoria trabajando con clientes y emprendedores nos ha demostrado que todos se pueden beneficiar de las tecnologías disponibles, independientemente de su negocio.
          Nuestro equipo de ingenieros, programadores y consultores han ayudado a multinacionales y pequeñas empresas en la mejora de sus operaciones,
          implementando tecnología no invasiva y de fácil uso.
         <br></br><br></br>  
        </div>     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle align="center" as={Button} variant="link" eventKey="1">
      Servicios
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body align="center"> <AServicios/>  </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle align="center" as={Button} variant="link" eventKey="2">
      Especialidades
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body> <AEspecialidades /> </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Container>
    </div>
  )
}

export default AccordionAbout