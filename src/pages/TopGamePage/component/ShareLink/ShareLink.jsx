import React from 'react';
import './ShareLink.style.css';
import { FaXTwitter, FaSquareFacebook } from 'react-icons/fa6';

const shareLink = () => {
  const shareFaceBook = () => {
    const facebookShareUrl =
      'https://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(window.location.href);
    window.open(facebookShareUrl, '_blank');
  };
  const shareTwitter = () => {
    const twitterShareUrl =
      'https://twitter.com/intent/tweet?url=' +
      encodeURIComponent(window.location.href);
    window.open(twitterShareUrl, '_blank');
  };
  return (
    <div className='shareLinkWrap'>
      <div className='buttonBox'>
        <span>Share & Enjoy Together </span>
        <button onClick={shareFaceBook} className='facebook'>
          <FaSquareFacebook />
          FaceBook
        </button>
        <button onClick={shareTwitter} className='twitter'>
          <FaXTwitter />
          Twitter
        </button>
      </div>
    </div>
  );
};

export default shareLink;
