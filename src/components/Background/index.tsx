import React from 'react';

// importing css
import './style.css';

// assets
import BackgroundImg from '../../assets/background.svg';
import { FaCog } from 'react-icons/fa';

const Background: React.FC = () => {
  return (
    <>
      <div className="background-main">
        <div className="btn-cog">
          <FaCog />
        </div>
        <img id="img" src={BackgroundImg} alt="Background" />
      </div>
    </>
  );
}

export default Background;
