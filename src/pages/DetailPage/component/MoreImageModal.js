import React, { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import './MoreImageModal.style.css';
import { useGameScreenShotsQuery } from '../../../hooks/apis/useGameScreenShots';
import { Spinner } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MoreImageModal = ({ id, setMoreImageModal, selectImageIndex }) => {
  const { data: screenShotsData, isLoading: screenShotLoading } =
    useGameScreenShotsQuery({ game_pk: id });
  console.log('모달/id :', id);
  console.log('모달/ : ', screenShotLoading);
  console.log('모달/스샷데이터 :', screenShotsData);
  console.log(
    '모달/선택이미지링크 :',
    screenShotsData?.results[selectImageIndex]?.image
  );
  const [modalImageIndex, setModalImageIndex] = useState(selectImageIndex);

  if (screenShotLoading) {
    return <Spinner />;
  } else {
    return (
      <div className='모달배경 detail-modal-bg'>
        <div className='이미지박스 detail-modal-selected-image-area'>
          <div className='넘기기버튼들 detail-modal-paging-btns'>
            <button
              className='이전'
              onClick={() => {
                if (modalImageIndex === 0) {
                  setModalImageIndex(screenShotsData?.results.length - 1);
                } else {
                  setModalImageIndex(modalImageIndex - 1);
                }
              }}
            >
              <IoIosArrowBack className='detail-modal-paging-btn' />
            </button>
            <button
              className='다음'
              onClick={() => {
                if (screenShotsData?.results.length - 1 === modalImageIndex) {
                  setModalImageIndex(0);
                } else {
                  setModalImageIndex(modalImageIndex + 1);
                }
              }}
            >
              <IoIosArrowForward className='detail-modal-paging-btn' />
            </button>
          </div>
          <div
            className='detail-modal-selected-image'
            style={{
              backgroundImage: `url(${screenShotsData?.results[modalImageIndex]?.image})`,
            }}
          ></div>
        </div>
        <div className='닫기버튼 detail-modal-close-btn-area'>
          <IoCloseCircleOutline
            className=''
            onClick={() => {
              setMoreImageModal(false);
            }}
          />
        </div>
      </div>
    );
  }
};

export default MoreImageModal;
