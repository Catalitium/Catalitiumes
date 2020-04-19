import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import AALogo from '../../../../assets/img/AALogo.png'
import BPLogo from '../../../../assets/img/BPLogo.png'
import UipathLogo from '../../../../assets/img/UipathLogo.png'
import ASCMAA from './ASCM/ASCMRPA/ASCMAA'
import ASCMBP from './ASCM/ASCMRPA/ASCMBP'
import ASCMUI from './ASCM/ASCMRPA/ASCMUi'


export const AServiciosCRPA = () => {
    return (
        <div>
  <CardDeck style={{display: 'flex', flexDirection: 'row'}}  className="card border-0">
            <br></br>
  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={AALogo} />
    <Card.Body>
      <br></br>
      <Card.Title>AA</Card.Title>
      <Card.Text>
      Durante años hemos trabajado con multinacionales capacitando plantillas alrededor del mundo para optimizar su mano de obra usando Automation Anywhere. Ofrecemos cursos Introductorios y avanzados
      para que su plantilla pueda desarrollar soluciones robustas una vez completado el curso
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <ASCMAA/>

    </Card.Footer>
  </Card>
  
  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={BPLogo} />
    <Card.Body>
      <Card.Title>BluePrism</Card.Title>
      <Card.Text>
      Contamos con recursos capaces de entrenar a su plantilla y posicionarlos como expertos para que tenga una ventaja competitiva con respecto a los otros departamentos de automatización
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <ASCMBP />
    
    </Card.Footer>
  </Card>
  
  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={UipathLogo}  />
    <Card.Body>

      <Card.Title>UiPath</Card.Title>
      <Card.Text>
    
      Inscribiendose en nuestro curso personalizado de Uipath será capaz de usar la herramienta mas usada en el mercado de RPA para construir sus propias soluciones sin depender de consultoras sobrevaloradas.
      
      </Card.Text>
    </Card.Body>
    <Card.Footer>

      <ASCMUI />

    </Card.Footer>
  </Card>

</CardDeck>
        </div>
    )
}
export default AServiciosCRPA;