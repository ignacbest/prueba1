import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function RegisterModal(props) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value)
    }

    const handleApellidoChange = (event) => {
        setApellido(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleResetForm = () => {
        setNombre('');
        setApellido('');
        setEmail('');
        setPassword('');
    }

    const handleCancelRegister = () => {
        props.handleCloseRegisterLogin();
        handleResetForm();
    }

    const handleAcceptRegisterClick = () =>{
    props.handleCreate(nombre, apellido, email, password);
    handleResetForm();
    }

    return (
        <Modal show={props.showRegister} onHide={props.handleCloseRegisterLogin}>
            <Modal.Header closeButton>
                <Modal.Title>Iniciar Sesion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="nombre" required ="required" value={nombre} onChange={handleNombreChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="apellido" value={apellido} onChange={handleApellidoChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                        type="email" value={email} onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password" value={password} onChange={handlePasswordChange}/>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleCancelRegister} variant="secondary">
                    Cerrar
                </Button>
                <Button onClick={handleAcceptRegisterClick} variant="primary">
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
