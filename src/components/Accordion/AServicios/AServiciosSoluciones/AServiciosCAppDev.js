import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import ReactLogo from '../../../../assets/img/ReactLogo.png'
import MernLogo from '../../../../assets/img/MERNLogo.png'
import AngularLogo from '../../../../assets/img/AngularLogo.png'
import ASSMWebDevAngular from './ASSM/ASSMWebDev/ASSMAngular' 
import ASSMWebDevReact from './ASSM/ASSMWebDev/ASSMReact'
import ASSMWebDevMERN from './ASSM/ASSMWebDev/ASSMMERN'



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
        Potenciado por Google, Framework para desarrollar excelentes aplicaciones. 
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
      Creado por Facebook, es una librería fácil de usar para desarrollar applicaciones web y de escritorio.
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
      MEAN o MERN es la tendencia actual para construir soluciones end-to-end. 
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