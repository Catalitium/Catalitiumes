import React from 'react';
import { Tab, Row, Col, Tabs, Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import AServiciosCRPA from './AServiciosSoluciones/AServiciosCRPA';
import AServiciosCAppDev from './AServiciosSoluciones/AServiciosCAppDev';
import AServiciosCProgramacion from './AServiciosSoluciones/AServiciosCProgramacion';
import AServiciosCCAI from './AServiciosCapacitacion/AServiciosCCAI';
import AServiciosCCRPA from './AServiciosCapacitacion/AServiciosCCRPA';
import AServiciosCCAppDev from './AServiciosCapacitacion/AServiciosCCAppDev';
import AServiciosCCProgramacion from './AServiciosCapacitacion/AServiciosCCProgramacion';


export const AServicios = () => {
    return (
        <div>

<Container fluid> 

<Tab.Container id="list-group-tabs-example" defaultActiveKey="#soluciones">

  <Row >
    <Col >
     <div align="center" >  
      <ListGroup align="center" >
        <ListGroup.Item action href="#soluciones" >
          Soluciones
        </ListGroup.Item>
        <ListGroup.Item action href="#capacitacion" >
          Formación
        </ListGroup.Item>
      </ListGroup>
      </div>
    </Col>
    
    <Col>

    <div align="center" >  

      <Tab.Content >
        
      <Tab.Pane eventKey="#soluciones">
            <Tabs defaultActiveKey="RPA" transition={false} id="noanim-tab-example">
            <Tab eventKey="AppDev" title="Apps">
            
                  <AServiciosCAppDev />
            </Tab>

            <Tab eventKey="RPA" title="RPA">
            <br></br><br></br>
                  <AServiciosCRPA />
            </Tab>
            
            <Tab eventKey="Programacion" title="Programación">
            <br></br><br></br>
                  <AServiciosCProgramacion />
            </Tab>
            </Tabs>
        </Tab.Pane>

        <Tab.Pane eventKey="#capacitacion">
        <Tabs defaultActiveKey="Apps" transition={false} id="noanim-tab-example">

            <Tab eventKey="Apps" title="Apps">
            <br></br><br></br>
              <AServiciosCCAppDev />
            </Tab>

            <Tab eventKey="AI" title="AI" >
            <br></br><br></br>
            <AServiciosCCAI />

            </Tab>
            <Tab eventKey="RPA" title="RPA">
            <br></br><br></br>
            <AServiciosCCRPA/>
            </Tab>
            <Tab eventKey="Programacion" title="Programación">
            <br></br><br></br>
            <AServiciosCCProgramacion/>
            </Tab>
            </Tabs>
        </Tab.Pane>
      </Tab.Content>
      </div>
    </Col>

  </Row>
</Tab.Container>

</Container>

        </div>
    )
}

export default AServicios;