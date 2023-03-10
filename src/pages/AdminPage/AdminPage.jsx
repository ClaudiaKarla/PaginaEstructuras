import React from 'react'
import "./AdminPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegistro, setEmailRegistro] = useState("");
  const [passwordRegistro, setPasswordRegistro] = useState("");
  const [userName, setUserName]= useState(" ");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail (e.target.value);
  const handleEmailRegistro = (e) => setEmailRegistro (e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePasswordRegistro = (e) => setPasswordRegistro(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
     // console.log(email, password)
    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/administrador/proyect");
      })
      .catch((error) => {
        console.log(error)
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
    };

    
    const handleSignupSubmit = (e) => {
      e.preventDefault();
      // Create an object representing the request body
      const requestBody = 
      { email:emailRegistro, 
        password:passwordRegistro, 
        name: userName};
        console.log(requestBody)
  
      // Send a request to the server using axios
      /* 
      const authToken = localStorage.getItem("authToken");
      axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
        requestBody, 
        { headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {})
      */
  
      // Or using a service
      authService
        .signup(requestBody)
        .then((response) => {
          // If the POST request is successful redirect to the login page
          navigate("/administrador");
        })
        .catch((error) => {
          console.log(error)
          // If the request resolves with an error, set the error message in the state
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    };

  return (
    <div>

<div>
        <p className="espacio"> .</p>
      </div>

    <div className="tit">Administrador</div>

    <div className="LoginPage">
   <div className='iniciar'>
   <div className="session">Inicia session</div>
   <div className="formularioDos">
    <Form onSubmit={handleLoginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmailDos">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleEmail} name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordDos">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>

    <div className='separador'>
    <hr/>
    </div>

    <div className="reg">Registrate</div>
<div className='registrarse'>
    <Form onSubmit={handleSignupSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmailUno">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleEmailRegistro} name='emailRegistro' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordUno">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handlePasswordRegistro} name='passwordRegistro' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleUserName} name='userName' type="text" placeholder="name" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

    </div>

  </div>

    </div>
  )
}

export default AdminPage