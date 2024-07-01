import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';
import image13 from '../assets/image13.png';
import image14 from '../assets/image14.png';

const Regular = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the correct value based on current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    width: '101%',
    margin: '0 auto',
    padding: '20px'
  };

  const imageStyle = {
    width: isMobile ? '100%' : '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    marginTop: isMobile ? '1rem' : '2rem'
  };

  return (
    <div style={containerStyle}>
      <h2>Plugins</h2>
      <div>
        <img src={image1} alt="Update 1" style={imageStyle} />
      </div>
      <div>
        <img src={image2} alt="Update 2" style={imageStyle} />
      </div>
      <div>
        <img src={image3} alt="Update 3" style={imageStyle} />
      </div>
      <div>
        <img src={image4} alt="Update 4" style={imageStyle} />
      </div>
      <div>
        <img src={image5} alt="Update 5" style={imageStyle} />
      </div>
      <div>
        <img src={image6} alt="Update 6" style={imageStyle} />
      </div>
      <div>
        <img src={image7} alt="Update 7" style={imageStyle} />
      </div>
      <div>
        <img src={image8} alt="Update 8" style={imageStyle} />
      </div>
      <div>
        <img src={image9} alt="Update 9" style={imageStyle} />
      </div>
      <div>
        <img src={image10} alt="Update 10" style={imageStyle} />
      </div>
      <div>
        <img src={image11} alt="Update 10" style={imageStyle} />
      </div>
      <div>
        <img src={image12} alt="Update 10" style={imageStyle} />
      </div>
      <div>
        <img src={image13} alt="Update 10" style={imageStyle} />
      </div>
      <div>
        <img src={image14} alt="Update 10" style={imageStyle} />
      </div>
    </div>
  );
};

export default Regular;
