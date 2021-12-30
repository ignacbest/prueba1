import React, { useState} from 'react'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

//React Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import styles from './Navigation.module.css'

import {useHistory} from 'react-router-dom'

//images

import logo from '../assets/images/logo.png'

export default function NavigationBar(props) {
const [showLogin, setShowLogin] = useState(false);
const [showRegister, setShowRegister] = useState(false);

const history = useHistory();

const navbarStyle = {
        backgroundColor: '#ffffff',
    };

const handleRegisterClick = () => {
        setShowRegister(true);
    }

const handleCloseRegisterLogin = () => {
        setShowRegister(false);
    }

const handleLoginClick = () => {
        setShowLogin(true);
        
    };

const handleCloseLogin = () => {
        setShowLogin(false);
        
    };

const handleCreate = async (nombre, apellido, email, password) => {
    const url = 'http://192.168.31.124:8000/usuarios'
    const params = { nombre, apellido, email, password }
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'}
    })  
    const data = await response.json();
    if (response.status === 200) { 
        handleCloseRegisterLogin()
    } else {
        alert(data.message)
    }
}

const handleLogin = async(email, password) => {
    const url = 'http://192.168.31.124:8000/auth'
    const params = { email, password }
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include', 
    });
    const data = await response.json();
    if(response.status === 200) {
        props.updateUser({ name: data.data })
        handleCloseLogin();
    } else {
        alert(data.message)
    }
};

const handleLogout = async () =>{
    const url = 'http://192.168.31.124:8000/auth'
    const response = await fetch(url,{
        method: 'DELETE',
        credentials: 'include',
    });
    const data = response.json()
    if (response.status === 200) {
        props.updateUser(null)
    } else {
        alert(data.message)
    }
}

const handleHistory = (cat_id) => {
    props.setCategoria(cat_id)
    history.push("/")
}

    return (
        <>
            <Navbar style={navbarStyle} expand="lg">
                <Navbar.Brand onClick = {() => props.setCategoria(1)} href="/">
                    <img className={styles.logo} src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                        <Nav.Link className={styles.navLink} onClick = {() => handleHistory(1)}>Comidas</Nav.Link>
                        <Nav.Link className={styles.navLink} onClick = {() => handleHistory(3)}>Accesorios</Nav.Link>
                        <Nav.Link className={styles.navLink} onClick = {() => handleHistory(2)}>Snacks</Nav.Link>
                    
                    <Nav className="ml-auto">          
             
                    {props.user ? (

            <>  
                    <Nav.Link to="/favoritos" className="nav-link">
                        Favoritos
                    </Nav.Link>

                <NavDropdown
                        alignRight
                        title={props.user.name}
                        id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={handleLogout}>
                        Cerrar sesión
                    </NavDropdown.Item>
                </NavDropdown>
            </>
                    ) : (
                        <>
                        <Button variant="light" onClick={handleRegisterClick}>Registrarse</Button>
                        <Button onClick={handleLoginClick}>Iniciar Sesion</Button>
                        </>
                    )} 
                    </Nav>
                </Navbar.Collapse> 
            </Navbar>

            <>

            <RegisterModal
                showRegister={showRegister}
                handleCloseRegisterLogin={handleCloseRegisterLogin}
                handleCreate={handleCreate}
            />

            <LoginModal
                show={showLogin}
                handleCloseLogin={handleCloseLogin}
                handleLogin={handleLogin}

            />
            </>
        </>
    )
}
