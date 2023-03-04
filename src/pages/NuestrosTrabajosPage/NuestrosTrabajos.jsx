import "./NuestrosTrabajos.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NuestrosTrabajos() {

  

  return (
    <div>

<div className="espacio">.</div>

<div className="tituloTres">
      <p>Nuestros Trabajos</p>
      </div>

<div className="proy1">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./h.jpg"/>
      <Card.Body>
        <Card.Title>Depósito de Equipo de apoyo en tierra</Card.Title>
        <Card.Text>
          Cimentacion de concreto, Estructura de Acero, losas de entrepiso de bodegas de Losa Acero.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="proy2">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./x.jpg" />
      <Card.Body>
        <Card.Title>Cuartel General</Card.Title>
        <Card.Text>
          Estructura de Marcos Rigidos
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="proy3">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./x.jpg" />
      <Card.Body>
        <Card.Title>Cuartel General</Card.Title>
        <Card.Text>
          Estructura de Marcos Rigidos
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="proy4">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./x.jpg" />
      <Card.Body>
        <Card.Title>Cuartel General</Card.Title>
        <Card.Text>
          Estructura de Marcos Rigidos
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    
     
  </div>
  )
}

export default NuestrosTrabajos