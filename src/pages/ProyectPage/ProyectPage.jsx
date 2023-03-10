import React, {useEffect, useState} from 'react'
import "./ProyectPage.css";
import proyectService from '../../services/example.service';
import ProyectoCard from '../../components/ProyectoCard/ProyectoCard';

function ProyectPage() {

  const [proyectos, setProyectos]= useState ([]);

  const ProyectPageLoader=async()=>{
    const {data:proyectos} = await proyectService.getProyectos()
    console.log(proyectos)
    setProyectos(proyectos)
  }
    useEffect(()=>{
      ProyectPageLoader()
    },[])
  return (
    <div>
      <div className="rect">
          .
      </div>

      <>
        {proyectos.map((proyecto)=>(
        <ProyectoCard key={proyecto._id}{...proyecto}/>   
        )) }
        </>
    </div>
  )
}

export default ProyectPage