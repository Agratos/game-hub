// import { Card } from "react-bootstrap";
import "./ContentsCard.style.css"
import React from 'react'

const exceptContents = [1081, 50];

const ContentsCard = ({item}) => {
// 1081, 50 tags 는 제외 시키기.


  const handleImage = () => {
    // console.log(item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 && item?.background_image);
    return item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 && item?.background_image;
  }



  return (
      <figure className='mainpage-card-area'style={{ width: '18rem'}}>
          <img style={{height:'10rem'}} src={handleImage() ? item?.background_image : "/images/emptyImage.webp"} alt="card img"/>
          <figcaption>
            <h4>
              {item?.name}
            </h4>
            <div className="mainpage-card-overlay">
              <div>
                dddddd
              </div>
              <div>
                dddddd
              </div>
              <div>
                dddddd
              </div>
            </div>
          </figcaption>
      </figure>
  )
}

export default ContentsCard