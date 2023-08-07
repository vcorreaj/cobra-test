import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; 
import Row from 'react-bootstrap/Row'; 
import axios from 'axios';   
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react'
function Login() { 
  const [email, setemail] = useState('')
  const [pww, setpww] = useState('')
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false); 
  const handleSubmit = () => { 
    console.log(email)
    console.log(pww)    
    if(email!='' && pww!=''){
        axios.get("http://localhost:3000/users").then((resp) => {
              console.log(resp.data);  
             for (let i = 0; i < resp.data.length; i++) { 
                 if(resp.data[i].email==email && resp.data[i].password==pww ){ 
                    document.getElementById('nav').classList.add("loginOn");
                    navigate('/profile');
                 }else{
                    setShow(true);
                 }
             }
        });  
    } 
    setValidated(true); 
  };

  return (
    <div className="loginPage">
        <div className="boxForm shadow">
            <Form noValidate validated={validated} >
                <Row className="mb-12 ">
                    <Form.Group as={Col} md="12" className='relative' controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email" 
                        value={email}
                        onChange={e => setemail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">You must put your email</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" className='relative' controlId="validationCustom02">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Contraseña" 
                        value={pww}
                        onChange={e => setpww(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">You must enter your password</Form.Control.Feedback>
                    </Form.Group> 
                </Row>  
                <Button onClick={handleSubmit} className='btnLogin'>
                    <span>Login</span>
                    <i className="bi bi-arrow-right"></i>
                </Button>
            </Form>
        </div> 
        {/* modal alert */} 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>The Email or Password are wrong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;