import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import JSLogo from './../../../../../../assets/img/JSLogo.png'


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
        
          
          <h3 align="center"><img src={JSLogo} alt="AALogo" ></img></h3>
          <p>
              Indiscutiblemente el lenguaje del internet es el mas usado y conocido,
              esencial para cualquier desarrollo web,
              se integra muy bien con herramientas de RPA para la automatización de procesos y 
              su naturaleza multiparadígmica permiten a desarrolladores de diferentes perfiles sintetizar soluciones robustas.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMPJS() {
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
  
  export default ASSMPJS;