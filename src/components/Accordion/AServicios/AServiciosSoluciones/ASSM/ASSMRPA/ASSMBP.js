import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import BPLogo from './../../../../../../assets/img/BPLogo.png'


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
          <h4 align="center">BluePrism</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          
          <h3 align="center"><img src={BPLogo} alt="AALogo" ></img></h3>
          <p>
            Ayuda a organizaciones a automatizar las operaciones de la empresa de manera ágil y económica. Esta herramienta se basa principalmente en el lenguaje de programación Java y ofrece un diseño visual.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMRPABP() {
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
  
  export default ASSMRPABP;