import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'
import TwitterLogo from './../assets/img/TwitterLogo.png'
import InstagramLogo from './../assets/img/InstagramLogo.png'
import LinkedinLogo from './../assets/img/LinkedinLogo.png'
import FacebookLogo from './../assets/img/FacebookLogo.png'



export const Contacto = () => {
    return (
<div >

<Container >

    <CardDeck style={{display: 'flex', flexDirection: 'row'}} >

        <Card style={{ width: '18rem' }}  >
            <div align="center">
                <Card.Img variant="top" src={FacebookLogo} style={{ width: '6rem' }} align="middle" />
            </div>
            <Card.Body>
            <Card.Title className="center" align="middle" >Facebook</Card.Title>
                <Card.Text>
                    Se miembro de nuestra comunidad en Facebook.
                </Card.Text>
            </Card.Body>
        <Card.Footer>
            <div align="center">
                <a href="https://www.facebook.com/Catalitium" target="_blank" rel="noopener noreferrer" className='btn btn-outline-info'>
                    Únetenos
                </a> 
            </div>
        </Card.Footer>
        </Card>

        <Card style={{ width: '18rem' }}  >
            <div align="center"> 
                <Card.Img variant="top" src={InstagramLogo} style={{ width: '6rem' }}  />
            </div>
            <Card.Body>
            <Card.Title align="middle" >Instagram</Card.Title>
                <Card.Text>
                Síguenos en Instagram y valora nuestro contenido publicado.
                </Card.Text>
            </Card.Body>
        <Card.Footer>
        <div align="center"> 
            <a href='https://www.instagram.com/catalitiumen/' rel="noopener noreferrer" target="_blank" className='btn btn-outline-info'>
            Síguenos
            </a> 
        </div>
        </Card.Footer>
        </Card>

        <Card style={{ width: '18rem' }} >
        <div align="center"> 
            <Card.Img variant="top" src={TwitterLogo} style={{ width: '6rem' }} />
        </div>
        <Card.Body>
        <Card.Title align="middle" > Twitter</Card.Title>
            <Card.Text>
            Síguenos en Twitter para para estar al tanto de nuestros servicios y productos.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div align="center" >  
            <a href="https://twitter.com/catalitium" target="_blank" rel="noopener noreferrer" className='btn btn-outline-info'>
            Síguenos
            </a> 
        </div>
        </Card.Footer>
        </Card>

        <Card style={{ width: '18rem' }} >
            <div align="center"> 
                <Card.Img variant="top" src={LinkedinLogo} style={{ width: '6rem' }} />
            </div>
            <Card.Body>
            <Card.Title align="middle" > Linkedin</Card.Title>
            <Card.Text>
            Únetenos a nuestra comunidad en Linkedin para estar al dia de nuestras atividades y ofertas. 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <div align="center" >  
            <a href="https://www.linkedin.com/in/catalitium-es-3886941a6/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-info'>
            Únetenos
            </a> 
            </div>
            </Card.Footer>
            </Card>
    
    </CardDeck>

</Container>

</div>
    )
}
export default Contacto;