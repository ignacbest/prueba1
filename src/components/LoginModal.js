import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function LoginModal(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleResetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleCancelRegister = () => {
        props.handleCloseRegisterLogin();
        handleResetForm();
    }

    const handleAcceptClick = () =>{
    props.handleLogin(email, password);
    handleResetForm();
    }

    return (
        <Modal show={props.show} onHide={props.handleCloseLogin}>
            <Modal.Header closeButton>
                <Modal.Title>Iniciar Sesion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <Button onClick={handleAcceptClick} variant="primary">
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

