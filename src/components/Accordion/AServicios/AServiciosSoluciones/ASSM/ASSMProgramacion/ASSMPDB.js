import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DBLogo from '../../../../../../assets/img/DBLogo.png'


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
          <h4 align="center">Databases</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 align="center"><img src={DBLogo} alt="AALogo" ></img></h3>
        <h6 align="center" > <b> SQL - NoSQL - MongoDB  </b></h6>
          <p>Las bases de datos relacionales (SQL) son las más utilizadas, existen una serie de desventajas, pues son de gran rigidez, impidiendo que se produzca un crecimiento constante de los archivos. 
            En el caso de las NoSQL son quizás las alternativa más usadas en un futuro más cercano.
          Todavía hay expertos que son reacios a usarlas, fundamentalmente porque no conocen todas las posibilidades que pueden ofrecer. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMPDB() {
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
  
  export default ASSMPDB;