import React from 'react';
import { FaRegGrinHearts, FaRegThumbsUp, FaBan, FaMeh } from 'react-icons/fa';
import './HowItWorks.style.css';
const HowItWorks = () => {
  return (
    <div className='howItWorksWrap'>
      <div className='leftCon'>
        <h3>
          <span>How</span>it works
        </h3>
        <p>
          Run through the games carousel and rate the games with emoji. Sign up
          and connect your gaming profiles to personalize the queue
        </p>
      </div>
      <div className='rightCon'>
        <ul>
          <li>
            <FaRegGrinHearts />
            <strong>Great</strong>
            <p>It&apos;s either Knack 2 or some other masterpiece</p>
          </li>
          <li>
            <FaRegThumbsUp />
            <strong>Recommended</strong>
            <p>You believe that any fan of the genre should play it</p>
          </li>
          <li>
            <FaMeh />
            <strong>Meh</strong>
            <p>
              You have either mixed feelings about it or no feelings whatsoever
            </p>
          </li>
          <li>
            <FaBan />
            <strong>Skip</strong>
            <p>You won&apos;t recommend this game to your worst enemy</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
