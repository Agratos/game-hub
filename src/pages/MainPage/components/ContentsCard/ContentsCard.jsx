import React from 'react'
import { Card } from 'react-bootstrap'

const ContentsCard = ({item}) => {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{maxHeight:'10rem'}} src={item?.background_image} />
      <Card.Body>
        <Card.Title>{item?.name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ContentsCard