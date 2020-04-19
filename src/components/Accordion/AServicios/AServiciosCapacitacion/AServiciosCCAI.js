import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import TFLogo from '../../../../assets/img/TFLogo.png'
import AWSLogo from '../../../../assets/img/AWSLogo.png'
import PythonLogo from '../../../../assets/img/PythonLogo.jpeg'
import ASCMAITF from './ASCM/ASCMAI/ASCMTF'
import ASCMPyAI from './ASCM/ASCMAI/ASCMPyAI'
import ASCMAIAWS from './ASCM/ASCMAI/ASCMAWS'




export const AServiciosCAI = () => {
    return (

<div >

  <CardDeck style={{display: 'flex', flexDirection: 'row'}}  className="card border-0">
            <br></br>
  <Card style={{ width: '20rem' }}  >
    <Card.Img variant="top" src={PythonLogo} fluid  />
    <Card.Body>
      <Card.Title>Python</Card.Title>
      <Card.Text>
      Nuestros servicios de capacitación de Python son personalizados dependiendo del nivel de conocimiento de su plantilla.
      Desde cursos introductorios para programar con Python hasta niveles expertos. Integramos las librerias mas populares depoendiendo de su necesidad y requerimiento                              
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ASCMPyAI/>
    </Card.Footer>
  </Card>

  <Card style={{ width: '20rem' }}  >
    <Card.Img variant="top" src={TFLogo} fluid />
    <Card.Body>
    <br></br>
      <Card.Title>TensorFlow</Card.Title>
      <br></br><br></br>
      <Card.Text>
      Nuestro curso de TensorFlow te daran los cimientos para evolucionar su capacidad analitica y adentrarse en el mundo de Deep Learning.
      Despues de nuestra capacitación podrá elaborar modelos unicos adecuados a su negocio para optimizar la trata de datos
      </ Card.Text>
    </Card.Body>
    <Card.Footer>
      <ASCMAITF/>
    </Card.Footer>
  </Card>

  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={AWSLogo} fluid  />
    <Card.Body>
    <br></br>
      <Card.Title>AWS - Machine Learning </Card.Title>
      <br></br>
      <Card.Text>
      AWS ofrece el conjunto más amplio y completo de herramientas para que su empresa cree soluciones de aprendizaje automático efectivas con mayor rapidez.
     </Card.Text>
    </Card.Body>
    <Card.Footer>
        <ASCMAIAWS />
    </Card.Footer>
  </Card>

</CardDeck>

</div>
  )
}

export default AServiciosCAI;