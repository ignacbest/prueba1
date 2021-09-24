import React, {useEffect, useState} from 'react';
import PubCard from './PubCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from './PubList.module.css'

export default function PubList(props) {
    const [publicaciones, setPublicaciones] = useState([]);
    const [categoriaName, setCategoriaName] = useState([]);
    const {categoria} = props

    useEffect( () => {
        getPubs()
        getCategoria()
    }, [categoria]);
        
    async function getCategoria () {
        const url = `http://localhost:8000/categorias/${categoria}`
        const response = await fetch(url);
        const data = await response.json();
        
        setCategoriaName(data[0].nombre);

    }
    async function getPubs() {
        const url = `http://localhost:8000/publicaciones/categoria/${categoria}`
        const response = await fetch(url);
        const data = await response.json();

        setPublicaciones(data);

    }

    function getCards() {
    const cards = publicaciones.map((publicacion) =>{
        return (
            <PubCard
            publicacion={publicacion}/>
            )
        })      
         return cards;       
    }
    

    return (
        <Container fluid>
        <Row className= {styles.titleRow}>
        <h1>Productos de {categoriaName}</h1>
        </Row>  
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        {getCards()}
        </Row>
        </Container>
    )
}
 