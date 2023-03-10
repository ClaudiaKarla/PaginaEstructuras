import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import proyectService from "../../services/example.service";

function ProyectoCard({proye,descripcion, _id, fotos, categoria}) {
 
  const borrar= async(id)=>{
    const nuevo = await proyectService.deleteProject (id)
    console.log(nuevo)
  }
 
  return (
  <>
    <Link to={`/proyecto/editar/${_id}`}>
      <button> Editar</button>
      </Link>


      <button onClick={() => borrar(_id)}> Borrar</button>
    
     
    <Card title={proye} >
    {descripcion}</Card>
    </>

    
  )
}

export default ProyectoCard