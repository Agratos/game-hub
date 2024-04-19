// import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MONTHS } from "../../../../constants/constDate";
import "./ContentsCard.style.css"
import React from 'react'

const exceptContents = [1081, 50];

const ContentsCard = ({item}) => {
  const navigate = useNavigate();

// 1081, 50 tags 는 제외 시키기.
  const handleImage = () => {
    // console.log(item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 && item?.background_image);
    return item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 && item?.background_image;
  }

  const fomrmatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();
    return `${MONTHS[monthIndex]} ${day}, ${year}`;
  }

  const goDetail = () => {
    navigate(`/detail/${item?.id}`);
  }

  return (
      <figure className='mainpage-card-area'style={{ width: '18rem'}}>
          <img style={{height:'10rem'}} src={handleImage() ? item?.background_image : "/images/emptyImage.webp"} alt="card img"/>
          <div className="platform-box">
              {item?.parent_platforms.map((el,index) => 
                <div className={`platforms__platform_${el.platform.slug}`} key={index}>
                  {/* {el.platform.slug} */}
                </div>
              )}
          </div>
          <figcaption>
              <switch className="mainpage-card-title" onClick={goDetail}>
                  {item?.name}
              </switch>
            <div className="mainpage-card-overlay">
              <div className="mainpage-card-text-box">
                Release date:
                <span>{fomrmatDate(item?.released)}</span>

              </div>
              <div className="mainpage-card-text-box">
                Genres:
                <div className="mainpage-card-text-genres-box">
                {item?.genres.map((el,index) => 
                  <span key={index}>
                    {index !== item?.genres.length-1 ? `${el.name},` : el.name}
                  </span>)}
                </div>
              </div>
              <div className="mainpage-card-text-box" style={{border:"none"}}>
                Chart:
                <span>ddd</span>

              </div>
            </div>
          </figcaption>
      </figure>
  )
}

export default ContentsCard