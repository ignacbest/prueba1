import React from 'react'
import Card  from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import styles from './PubCard.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'


export default function PubCard(props) {

  const {publicacion} = props;
  const {imagen, titulo, precio, descripcion_S} = publicacion
  
  const history = useHistory()
  const imageUrl = `http://192.168.31.124:8000/images/${imagen}`

  const handleHeart = () => {
        alert('Se agrego a favoritos')
      }

    return (
      <Col className="my-4  py-4" style={{paddingLeft: 20}}>
        <Card className="h-100" >
        <FontAwesomeIcon color ="red" icon={faHeart} onClick={handleHeart}/>
        <Card.Img style={{ height: '20vh', objectFit: 'contain'}} variant="top" src={imageUrl}/>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion_S}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">${precio}</Card.Footer>
        </Card>
        <Row className= {styles.bottonProd}>
          <Button onClick={() => history.push(`/detail/${publicacion.id}`)}>Ir al producto</Button>
        </Row>
      </Col>
    )
}
