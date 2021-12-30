import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import styles from "./Footer.module.css"
import logo from '../assets/images/logo.png'

export default function Footer() {

return (
    <Container fluid className="mt-1">
            <Row className="subscriptions ">
                <h2 className="col-md-4">Contactanos:</h2>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2">
                <Row>
                    <Col className='LogoFooter'> 
                    <img className={styles.LogoFooter} src={logo} alt="logo"/>
                    </Col> 

                    <Col md={4} className="contact-info">
                        <h6>Contacto:</h6>
                        <Row className="row align-items-center align-self-center">
                            <p className="col-12"> <Link
                                to={{ pathname:"/contacto"}} 
                                target="_blank">
                                </Link> info@ciudaduniversitaria.gov.ar </p>
                        </Row>
                        <Row className="row align-items-center align-self-center">
                            <p className="col-12 nowrap"> <Link 
                                to={{ pathname: "https://goo.gl/maps/BMNqqUriUyrH2omb8" }} 
                                target="_blank">
                                </Link>9 de Julio 500. Ciudad de Mendoza</p>
                        </Row>
                    </Col>

                    <Col sm={12} md={3} className="social-media">
                        <h6>Seguinos</h6>
                        <Row className="d-flex justify-content-around">
                        <aside>
                        <small className="d-none d-md-inline-block">Compartir en:</small>
                            <a href="https://twitter.com" title="Compartir en Twitter" target="_blank" rel="nofollow noopener noreferrer"><FontAwesomeIcon className="mx-2" icon={faTwitter}/></a>
                            <a href="https://facebook.com" title="Compartir en Facebook" target="_blank" rel="nofollow noopener noreferrer"><FontAwesomeIcon className="mx-2" icon={faFacebook}/></a>
                            <a href="https://instagram.com" title="Compartir en Instagram" target="_blank" rel="nofollow noopener noreferrer"><FontAwesomeIcon className="mx-2" icon={faInstagram}/></a>
                            
                        </aside>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Row className="copyright"><p>Copyright 2020 / Ciudad de mendoza</p></Row>
        </Container>
    )
}