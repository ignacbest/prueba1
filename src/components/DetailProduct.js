 import React, {useEffect, useState} from 'react'
 import { Container, Col, Row} from 'react-bootstrap'
 import Button from 'react-bootstrap/Button'
 import { Card } from 'react-bootstrap'
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

 
 export default function DetailProduct(props) {
     const [publicacion, setPublicacion] = useState(null)

    const id = props.match.params.id

    useEffect( () => {
        getPub()
    }, [id]);

    async function getPub() {
        const url = `http://localhost:8000/publicaciones/${id}`
        const response = await fetch(url);
        const data = await response.json();

        setPublicacion(data[0]);

    }

    if (!publicacion){
        return <p>Error 404</p>
    }
     return (
    <Container>
        <Row>
            <Col>
            <Card>
                <img src={`http://localhost:8000/images/${publicacion.imagen}`} width="300" height="300" alt="DetailProduct"/>
                </Card>
                
            </Col>
            
            <Col>
            
            <h1 className="m-4 p-4">{publicacion.titulo}</h1>
            {publicacion.descripcion_L}

            <h4 className="my-2 py-1">PRECIO ${publicacion.precio}</h4>
            <Button className="my-2">Agregar al carro</Button>
            <aside>
            <small class="d-none d-md-inline-block">Compartir en:</small>
                <a href="https://twitter.com" title="Compartir en Twitter" target="_blank" rel="nofollow noopener noreferrer"><FontAwesomeIcon className="mx-2" icon={faTwitter}/></a>
                <a href="https://facebook.com" title="Compartir en Facebook" target="_blank" rel="nofollow noopener noreferrer"><FontAwesomeIcon className="mx-2" icon={faFacebook}/></a>
                <a href="https://instagram.com" title="Compartir en Instagram" target="_blank" rel="nofollow noopener noreferrer"><FontAwesomeIcon className="mx-2" icon={faInstagram}/></a>
                
            </aside>
            </Col>   
         </Row>
</Container>
     )
 }
 