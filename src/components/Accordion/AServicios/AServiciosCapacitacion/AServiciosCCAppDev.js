import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import ReactLogo from '../../../../assets/img/ReactLogo.png'
import MernLogo from '../../../../assets/img/MERNLogo.png'
import AngularLogo from '../../../../assets/img/AngularLogo.png'
import ASSMWebDevAngular from './ASCM/ASCMAppDev/ASSMAngular' 
import ASSMWebDevReact from './ASCM/ASCMAppDev/ASSMReact'
import ASSMWebDevMERN from './ASCM/ASCMAppDev/ASSMMERN'



export const AServiciosCAppDev = () => {
    return (
        <div>

          
  <CardDeck style={{display: 'flex', flexDirection: 'row'}}  className="card border-0">
            <br></br>

  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={AngularLogo} />
    <Card.Body>
      <Card.Title>Angular</Card.Title>
      <Card.Text>
        Ofrecemos una inducción breve a Angular para que se familiarize con las buenas practicas para el diseño de front-end.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

        <ASSMWebDevAngular/>


    </Card.Footer>
  </Card>
  
  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={ReactLogo}  />
    <Card.Body>
      <br></br>
      <Card.Title>React</Card.Title>
      <Card.Text>
      Ofrecemos diferentes cursos de React, dependiendo de su preferencia. Podrá construir atractivas aplicaciones usando React.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
  <ASSMWebDevReact />
    </Card.Footer>
  </Card>

  

  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={MernLogo}  />
    <Card.Body>

      <Card.Title>MERN/MEAN</Card.Title>
      <Card.Text>

      Curso esencial si desea desarrollar soluciones end-to-end. Sintetizado en este curso esta lo indispensable para construir soluciones solidas. 
      
      </Card.Text>
    </Card.Body>
    <Card.Footer>

<ASSMWebDevMERN />

    </Card.Footer>
  </Card>


</CardDeck>


        </div>
    )
}

export default AServiciosCAppDev;