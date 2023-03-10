import React, {useEffect, useState} from 'react'
import "./CrearProyectos.css";
import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import proyectService from "../../services/example.service";

function CrearProyectosPage() {

    const [proye, setProye] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fotos, setFotos] = useState("");
    const [categoria, setCategoria] = useState("");
  
    const handleProye = (e) => setProye (e.target.value);
    const handleDescripcion = (e) => setDescripcion (e.target.value);
    const handleFotos = (e) => setFotos(e.target.value);
    const handleCategoria = (e) => setCategoria(e.target.value);

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const requestBody = { proye, descripcion, fotos, categoria};
      console.log(requestBody)
       // console.log(email, password)
      // Send a request to the server using axios
    const nuevo = await proyectService.createProyect(requestBody)
    console.log(nuevo)
    }
  
  return(
<div>
<div>
<>
<div className='titulo'>
Crea Proyecto
</div>

<div className='inicioboton'>
<Link to="/trabajos">
        <div className="Regresar">
        <Button 
        /*style={{ backgroundColor: "#ce6a85" }}*/variant="secondary">Salir</Button>
        </div>
      </Link>
      </div>
</>

<div className='formularioCrear'>
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmailUno">
        <Form.Label>categoria</Form.Label>
        <Form.Select onChange={handleCategoria} aria-label="categoria" >
      <option>Categoria</option>
      <option value="Concreto">Concreto</option>
      <option value="Acero">Acero</option>
      <option value="Mampostería">Mampostaría</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailUno">
        <Form.Label>proye</Form.Label>
        <Form.Control onChange={handleProye} name='proye' type="text" placeholder="proyecto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordUno">
        <Form.Label>description</Form.Label>
        <Form.Control onChange={handleDescripcion} name='descripcion' type="text" placeholder="description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>fotos</Form.Label>
        <Form.Control onChange={handleFotos} name='fotos' type="text" placeholder="imagen" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crea
  </Button>
    </Form>
    </div>
    </div>
</div>
)
}

export default CrearProyectosPage