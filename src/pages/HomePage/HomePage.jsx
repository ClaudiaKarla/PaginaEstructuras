import React from "react";
import "./HomePage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


function HomePage() {

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
  
    const navigate = useNavigate();
  
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
  
    const handleSignupSubmit = (e) => {
      e.preventDefault();
      // Create an object representing the request body
      const requestBody = { email, password, name };

      // Or using a service
      authService
        .signup(requestBody)
        .then((response) => {
          // If the POST request is successful redirect to the login page
          navigate("/login");
        })
        .catch((error) => {
          // If the request resolves with an error, set the error message in the state
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    };

 
  return (

<div>

<div className="logo">
       <img src={"./e1.png"} />
      <div className="lo1">
      <strong>INGENIERIA</strong>
      <strong> ESTRUCTURAL</strong>
      </div>
      </div>

<div className="carrusel">
    <Carousel slide={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./fondo.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="uno">¡Cotiza con expertos!</h3>
        <h4 className="dos">Atención a todo tipo de publico, no importa que tan pequeño sea tu proyecto</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./2.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className="tres">Calidad y excelencia en cada proyecto</h3>
        <h4 className="cuatro">Tenemos experiencia en proyectos de mampostería, concreto y acero.</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./3.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 className="cinco">Especialistas en Ingeniería Estructural</h3>
        <h4 className="seis">
          Contactanos llenando el formulario de bajo de la página, o comunicate a los telefonos que te mostramos.
        </h4>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>

    <div>

<div>
<div className="linea">
	<a href="//parzibyte.me/blog"></a>
	</div>
</div>


<div>  
      <div className="esp">
        <p>ESPECIALIDADES</p>
      </div>
    
<div className="espec1">
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./p.jpg" />
      <Card.Body>
        <Card.Title>Ingenieria Estructural</Card.Title>
        <Card.Text>
        Nuestra empresa ofrece soluciones de alto nivel en ingeniería estructural:
          <li>Ingeniería Sísmica,</li>
          <li>Análisis Y Diseño De Cimentaciones,</li>
          <li>Análisis Tridimensional,</li>
          <li>Análisis No Lineal,</li>
          <li>Disipadores De Energía</li>
          <li>Diseño Por Viento</li>
          <li>Entre otras.</li>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

<div className="espec2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./cons.jpg" />
      <Card.Body>
        <Card.Title>Construcción</Card.Title>
        <Card.Text>
          Supervisión de Cimentaciones, losas de entrepisos, losa acero, entre otras estructuras.
          Especialistas en estructura, haran visita en campo para marcarle a sus residentes de obra
          alguna anomalia que vaya en contra del reglamento de contrucción así como algun incumplimiento
          o faltante de lo que indiquen los planos estructurales proporcionados.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    </div>

    <div>
<div className="linea">
	<a href="//parzibyte.me/blog"></a>
	</div>
</div>


    <div className="pue">
    <p className="puedes">Puedes contactarnos llenando el siguiente formato</p>

    <Form className="formato">

    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" placeholder="Nombre Completo" />
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Empresa</Form.Label>
        <Form.Control type="text" placeholder="Empresa" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>Cargo</Form.Label>
        <Form.Control type="text" placeholder="Cargo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Servicio a Cotizar</Form.Label>
        <Form.Control type="text" placeholder="Escribe aquí" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Correo Electrónico" />
        <Form.Text className="text-muted">
          A la brevedad nos contactaremos contigo.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control type="description" placeholder="Cuentanos sobre tu proyecto" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Enviar un mensaje
      </Button>
    </Form>

      <p className="link">¿Quieres Saber más de nosotros?</p>
      <Link to={"/login"}> Nuestros Trabajos</Link>
    </div>

    </div>

    <div>
<div className="linea">
	<a href="//parzibyte.me/blog"></a>
	</div>
</div>

    <div className="informacion">
        <h4 className="contacto">Contacto</h4>
        <p><strong>Oficinas:</strong> Col.Moctezuma 2da.sección,</p>
        <p>Calle Oriente 162 No.28</p>
        <p>C.P:15530, CDMX.</p>  
        <p><strong>Teléfono:</strong> ( 55 ) 7898 4592</p>
        <p><strong>Whatsapp:</strong> ( 55 ) 7898 4592</p>
        <p><strong>Correo Electrónico:</strong> karla.yap@hotmail.com</p>
        <p><strong>Whatsapp RH:</strong> ( 55 ) 7898 4592</p>
        <p><strong>Correo Electrónico RH:</strong> karla.yap@hotmail.com</p>
        <div className="logoDos"><img src={"./e1.png"} /></div>
        
        <div className="tel"><img src={"./t1.png"} /></div>
       
        <div className="correoDos"><img src={"./c1.png"} /></div>
        <div className="correoTres"><img src={"./c1.png"} /></div>
        <div className="whatsUno"><img src={"./w1.png"} /></div>
        <div className="whatsDos"><img src={"./w1.png"} /></div>
        <p className=" espacio">.</p>
    </div>

    <div className="rectanguloDos">
          .
      </div>

    </div>
   
  );
}

export default HomePage;
