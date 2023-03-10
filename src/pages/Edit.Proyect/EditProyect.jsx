import React from 'react'
import "./EditProyect.css";
import { Link, useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import proyectService from "../../services/example.service";
import { useState, useEffect } from 'react';

function EditProyect() {

    const {id}=useParams()
  const [proyeEditar, setProyeEditar] = useState("");
  const [descripcionEditar, setDescripcionEditar] = useState("");
  const [fotosEditar, setFotosEditar] = useState("");
  const [categoriaEditar, setCategoriaEditar] = useState("");

  const handleProyeEditar = (e) => setProyeEditar (e.target.value);
  const handleDescripcionEditar = (e) => setDescripcionEditar (e.target.value);
  const handleFotosEditar = (e) => setFotosEditar(e.target.value);
  const handleCategoriaEditar = (e) => setCategoriaEditar(e.target.value);

  const ProyectPageLoader=async()=>{
    const {data:proyectos} = await proyectService.getOne(id)
    console.log(proyectos)
    setProyeEditar(proyectos.proye)
    setDescripcionEditar(proyectos.descripcion)
    setFotosEditar(proyectos.fotos)
    setCategoriaEditar(proyectos.categoria)
  }

    useEffect(()=>{
      ProyectPageLoader()
    },[])

  const handleEditarSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { proyeEditar, descripcionEditar, fotosEditar, categoriaEditar};
    console.log(requestBody)
     // console.log(email, password)
    // Send a request to the server using axios
  const nuevo = await proyectService.updateOne (id,requestBody)
  console.log(nuevo)
  }


  return (
    <div>
        <Form onSubmit={handleEditarSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmailUno">
        <Form.Label>categoria</Form.Label>
        <Form.Select onChange={handleCategoriaEditar} aria-label="categoria" value={categoriaEditar}>
      <option>Categoria</option>
      <option value="Concreto">Concreto</option>
      <option value="Acero">Acero</option>
      <option value="Mampostería">Mampostaría</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailUno">
        <Form.Label>proye</Form.Label>
        <Form.Control onChange={handleProyeEditar} name='proye' type="text" defaultValue={proyeEditar} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordUno">
        <Form.Label>description</Form.Label>
        <Form.Control onChange={handleDescripcionEditar} name='descripcion' type="text"  value={descripcionEditar}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>fotos</Form.Label>
        <Form.Control onChange={handleFotosEditar} name='fotos' type="text"  value={fotosEditar} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default EditProyect