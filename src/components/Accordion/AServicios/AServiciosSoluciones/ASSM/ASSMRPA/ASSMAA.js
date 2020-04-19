import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AALogo from './../../../../../../assets/img/AALogo.png'


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
          <h4 align="center">Automation Anywhere</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 align="center"><img src={AALogo} alt="AALogo" ></img></h3>
          <p align="center" >
          Indiscutiblemente es la herramienta que mejor integra ML. Su nueva plataforma Cloud es la mas innovadora en el mercado. La mas fácil de aprender, ya que no necesitan de extensos conocimientos técnicos de programación, para efectivamente desarrollar e implementar soluciones a gran escala.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMRPAAA() {
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
  
  export default ASSMRPAAA;