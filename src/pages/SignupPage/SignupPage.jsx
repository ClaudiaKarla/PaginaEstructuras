import "./SignupPage.css";
import React from 'react'

function SignupPage() {
  return (
    <div >
        <p className="pagina">.</p>
        <div className="textoo">
        <div className="serviciosUno"><img src={"./serc.jpg"} />
        </div>
        <div className="que">
        <strong>¿Que podemos ofrecerte?</strong>
        </div>
        </div>
        <div className="serviciosDos">
        <img src={"./servicios.jpg"} />
        </div>
        <div className="lista">
        <li>
        Supervisión de construcción de cimentaciones, losas de entrepisos ya sean de concreto o de losa acero.
        </li>
        <li>
        cálculo estructural:
        <p>analisis y diseño estructural usando staadPro como sofware para cálculo de diseño matematico. </p> 
        <p>Basandonos en la implementación de Reglamento de contruccion del D.F.(normas tecnicas complementarias), CFE Diseño Sismico y CFE Diseño de Viento, o cualquier otro reglamento dependiendo la ubicacion del proyecto.</p>
        </li>
        <li>
        Elaboracion de Anteproyectos y Proyectos Ejecutivos
        </li>
        <li>
        Supervición de Montaje de estructura metalica
        </li>
        </div>
        <div className="espacio">
          .
        </div>
    </div>
  )
}

export default SignupPage