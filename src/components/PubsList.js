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
                    async function getPubs() {
                        const url = `http://192.168.31.124:8000/publicaciones/categoria/${categoria}`
                        const response = await fetch(url);
                        const data = await response.json();
                        if(data){
                            setPublicaciones(data);
                        } 
                    }
                    async function getCategoria () {
                        const url = `http://192.168.31.124:8000/categorias/${categoria}`
                        const response = await fetch(url);
                        const data = await response.json();
                        if(data){
                            setCategoriaName(data[0].nombre);
                        } 
                    }
                    getPubs()
                    getCategoria()
                }, [categoria]);
        
    
    

    function getCards() {
    const cards = publicaciones.map( (publicacion, i) =>{
        return (
            <PubCard
            key={i}
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
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5" style={{paddingBottom: 60}}>
        {getCards()}
        </Row>
        </Container>
    )
}
 