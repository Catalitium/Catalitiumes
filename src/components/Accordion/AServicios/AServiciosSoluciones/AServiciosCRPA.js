import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import AALogo from '../../../../assets/img/AALogo.png'
import BPLogo from '../../../../assets/img/BPLogo.png'
import UipathLogo from '../../../../assets/img/UipathLogo.png'
import ASSMRPAAA from './ASSM/ASSMRPA/ASSMAA'
import ASSMRPABP from './ASSM/ASSMRPA/ASSMBP'
import ASSMRPAUi from './ASSM/ASSMRPA/ASSMUi'


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
     Líder del mercado americano de RPA y única plataforma Cloud. 
      Posee las capacidades cognitivas más avanzadas para procesar datos semi-estructurados.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <ASSMRPAAA/>

    </Card.Footer>
  </Card>
  
  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={BPLogo} />
    <Card.Body>
      <Card.Title>Blue Prism</Card.Title>
      <Card.Text>
      Pionera, innovadora y popular en el mercado del RPA. Blue Prism ofrece una de las manos de obra digital más exitosa del mundo. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <ASSMRPABP />
    
    </Card.Footer>
  </Card>
  
  <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" src={UipathLogo}  />
    <Card.Body>

      <Card.Title>UiPath</Card.Title>
      <Card.Text>
      Diseñada para empresas de todos los tamaños. Permite crear, desplegar y administrar bots desde la web con una facilidad sin precedentes.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

      <ASSMRPAUi />

    </Card.Footer>
  </Card>

</CardDeck>
        </div>
    )
}
export default AServiciosCRPA;