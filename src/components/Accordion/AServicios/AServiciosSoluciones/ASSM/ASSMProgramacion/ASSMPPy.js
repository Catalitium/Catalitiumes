import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PythonLogo from './../../../../../../assets/img/PythonLogo.jpeg'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" align="center" >
          <h4 align="center">JavaScript</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          
          <h3 align="center"><img src={PythonLogo} alt="AALogo" ></img></h3>
          <p>
          Apodado el lenguaje del futuro y el mejor para integrar A.I,  ML y NPLG.
          Se enfoca en ser fácil de usar, entender y aprender, 
          manteniendo una alta potencia en su desempeño.
          El hardware de la época hizo difícil su uso y el proyecto no trascendió como se esperaba pero con las nuevas y mejores computadoras de hoy en dia lo convierten en el lenguaje favorito de muchos.
         </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMPPy() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button onClick={() => setModalShow(true)} variant="outline-info" className="text-info" >  
          Ver mas
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default ASSMPPy;