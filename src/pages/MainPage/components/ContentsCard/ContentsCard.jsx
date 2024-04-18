import React from 'react'
import { Card } from 'react-bootstrap'

const exceptContents = [1081, 50];

const ContentsCard = ({item}) => {
// 1081, 50 tags 는 제외 시키기.

  const handleImage = () => {
    // console.log(item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 && item?.background_image);
    return item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 && item?.background_image;
  }

  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'10rem'}} src={handleImage() ? item?.background_image : "/images/emptyImage.webp"} />
      <Card.Body>
        <Card.Title>{item?.name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ContentsCard