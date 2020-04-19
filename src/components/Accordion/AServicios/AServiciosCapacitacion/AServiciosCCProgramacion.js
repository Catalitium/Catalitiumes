import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import JSLogo from '../../../../assets/img/JSLogo.png'
import PythonLogo from '../../../../assets/img/PythonLogo.jpeg'
import DBLogo from '../../../../assets/img/DBLogo.png'
import ASSMPJS from './ASCM/ASCMProgramacion/ASSMPJS'
import ASSMPPy from './ASCM/ASCMProgramacion/ASSMPPy'
import ASSMPDB from './ASCM/ASCMProgramacion/ASSMPDB'


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
      Brindamos cursos para principiantes y expertos de JavaScript en donde 
      transmitiremos las buenas practicas y las metodologias usadas para el efectivo desarrollo de Scripts usando JavaScript </Card.Text>
    
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
      Ofrecemos desde cursos introductorios para programar con Python hasta niveles expertos. Integrando las librerias mas populares dependiendo de su necesidad y requerimiento                               
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
      Nuestros servicios de capacitación de base de datos resultan una ventaja competitiva , siendo una herramienta primordial al momento de tomar decisiones. 
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