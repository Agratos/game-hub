// import { Card } from "react-bootstrap";
import { MONTHS } from '../../../../constants/constDate';
import CardImgSlide from '../CardImg/CardImgSlide';
import './ContentsCard.style.css';
import React, { useState } from 'react';
import { PLATFORMS } from '../../../../constants/platformsData';

const exceptContents = [50, 1081, 1131];

const ContentsCard = ({ item }) => {
  // 불러온 목록중 platforms 탐색 함수
  // const findPlatforms = (dataArr) => {
  //   const platformIdArr = PLATFORMS.map((el) => el.id)
  //   const newArr = dataArr.filter((el) => !platformIdArr.includes(el.platform.id));
  //   if(newArr.length !== 0){
  //     return newArr;
  //   }
  //   else return;
  // }

  // if(item?.parent_platforms) {
  //   console.log(findPlatforms(item?.parent_platforms));
  // }

  const [isImgList, setIsImgList] = useState(false);
  const handleImage = () => {
    // console.log(item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 && item?.background_image);
    return (
      item?.tags.filter((el) => exceptContents.includes(el.id)).length === 0 &&
      item?.background_image
    );
  };

  const handleThumbnail = () => {
    if (Array.isArray(item?.short_screenshots)) {
      if (item?.short_screenshots.length > 0) {
        setIsImgList(true);
      } else {
        setIsImgList(false);
      }
    }
  };

  const findIconUrl = (id) => {
    let result = PLATFORMS.filter((obj) => obj.id === Number(id));
    if (result[0].iconUrl) {
      return result[0].iconUrl;
    } else {
      return '/images/icon/no-icon.png';
    }
  };

  const fomrmatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();
    return `${MONTHS[monthIndex]} ${day}, ${year}`;
  };

  // 1. 컨텐츠 안으로 마우스 들어올 경우 보여지는 데이터 변경

  return (
    <figure
      className='mainpage-card-area'
      style={{ width: '18rem' }}
      onMouseEnter={handleThumbnail}
      onMouseLeave={() => setIsImgList(false)}
    >
      {item?.short_screenshots?.length > 0 && isImgList ? (
        <CardImgSlide cardList={item.short_screenshots} />
      ) : (
        <img
          className='mainpage-card-slide-img'
          style={{ height: '10rem' }}
          src={
            Array.isArray(item?.tags) && handleImage()
              ? item?.background_image
              : '/images/emptyImage.webp'
          }
          alt='card img'
        />
      )}
      <div className='platform-box'>
        {item?.parent_platforms?.map((el, index) => (
          <div key={index}>
            {/* {el.platform.slug} */}
            <img src={findIconUrl(el.platform.id)} alt='platform img' />
          </div>
        ))}
      </div>
      <figcaption>
        <h4 className='mainpage-card-title'>
          <a href={`/detail/${item?.id}`}>{item?.name}</a>
        </h4>
        <div className='mainpage-card-overlay'>
          <div className='mainpage-card-text-box'>
            Release date:
            <span>{fomrmatDate(item?.released)}</span>
          </div>
          <div className='mainpage-card-text-box'>
            Genres:
            <div className='mainpage-card-text-genres-box'>
              {item?.genres?.map((el, index) => (
                <span key={index}>
                  {index !== item?.genres.length - 1 ? `${el.name},` : el.name}
                </span>
              ))}
            </div>
          </div>
          <div className='mainpage-card-text-box' style={{ border: 'none' }}>
            Rating:
            <span>{item?.rating} / 5</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default ContentsCard;
