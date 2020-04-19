import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import JSLogo from '../../../../assets/img/JSLogo.png'
import PythonLogo from '../../../../assets/img/PythonLogo.jpeg'
import DBLogo from '../../../../assets/img/DBLogo.png'
import ASSMPDB from './ASSM/ASSMProgramacion/ASSMPDB'
import ASSMPJS from './ASSM/ASSMProgramacion/ASSMPJS'
import ASSMPPy from './ASSM/ASSMProgramacion/ASSMPPy'


export const AServiciosCProgramacion = () => {
    return (
        <div >

        <CardDeck style={{display: 'flex', flexDirection: 'row'}}  className="card border-0">
            <br></br>

  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={JSLogo} />
    <Card.Body>
      <Card.Title>JavaScript</Card.Title>
      <Card.Text>
      Indispensable para el desarrollo de páginas web y aplicaciones web. La gran ventaja yace en la extensa comunidad, las librerias y frameworks construidos sobre este lenguaje.
    </Card.Text>
    </Card.Body>
    <Card.Footer>

        <ASSMPJS/>


    </Card.Footer>
  </Card>


  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={PythonLogo}  />
    <Card.Body>

      <Card.Title>Python</Card.Title>
      <Card.Text>
      Guido van Rossum ideó el lenguaje Python a finales de los 80 y comenzó a implementarlo en diciembre de 1989. Lenguaje adelantado para el hardware de la época pero actualmente es el que mayor crece por su facilidad de entendimiento.                           
      </Card.Text>
    </Card.Body>
    <Card.Footer>

<ASSMPPy />

    </Card.Footer>
  </Card>

  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={DBLogo}  />
    <Card.Body>
      <Card.Title>Base de Datos</Card.Title>
      <Card.Text>
      Cuando una base de datos se gestiona de forma adecuada, se ve aumentada la eficacia de sus trabajos de manera más rápida y ágil, pues se simplifica la labor. 
     </Card.Text>
    </Card.Body>
    <Card.Footer>

<ASSMPDB />

    </Card.Footer>
  </Card>

</CardDeck>
        </div>
    )
}

export default AServiciosCProgramacion;