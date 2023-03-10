import React from 'react'
import { useLoaderData } from 'react-router-dom'
import proyectService from "../../services/auth.service";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Card';

export const detailsPageLoader=async({params})=>{
    const {data} =await proyectService.getDetailsPageByID(params.id)
    return{
        detail: data.productos,
        productos: data.productos
    }
}

function DetailsPage() {
    const {detail, productos }=useLoaderData()
    console.log(detail,productos)

  return (
<div>
<Col sm ={{span: 24}} md={{span: 12}} lg={{span: 6}}/>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

</div> 
  )
}

export default DetailsPage