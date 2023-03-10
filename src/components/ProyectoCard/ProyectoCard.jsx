import React from 'react'
import Card from 'react-bootstrap/Card';
import Link  from 'react-bootstrap/Card';
import proyectService from "../../services/example.service";
import Button from 'react-bootstrap/Button';
import "./ProyectoCard.css";

function ProyectoCard({proye,descripcion, _id, fotos, categoria}) {
 
  const borrar= async(id)=>{
    const nuevo = await proyectService.deleteProject (id)
    console.log(nuevo)
  }
 
  return (
  <>
    {/*<Link to={`/proyecto/editar/${_id}`}>
      <button> Editar</button>
      </Link>


      <button onClick={() => borrar(_id)}> Borrar</button>
    
     
    <Card title={proye} >
  {descripcion}</Card>*/}


    <div className='carta'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fotos} />
      <Card.Body>
        <Card.Title >{proye}</Card.Title>
        <Card>{categoria}</Card>
        <Card.Text>
        {descripcion}
        </Card.Text>
        <div className='borrar'>
        <Button onClick={() => borrar(_id)}  variant="primary">Borrar</Button>
        </div>
        <Button
        onClick={()=>
         < Link to={`/proyecto/editar/${_id}`}/>}
         >Editar</Button>
        

      </Card.Body>
    </Card>
    </div>



    </>


  )
}

export default ProyectoCard