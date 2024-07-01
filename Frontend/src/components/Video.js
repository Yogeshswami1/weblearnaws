import React from 'react';
import './Video.css'; // Ensure you have a Video.css for styling if needed
import styled from 'styled-components';
import Gallery from './Gallery';

const InstagramButton = styled.button`
  background-color: #405DE6;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #3b55c2;
  }
`;
const Video = () => {
    <h1>Live Recording of 4 Days</h1>
    const redirectToInstagram = () => {
        window.open('https://gallery.saumiccraft.com/', '_blank'); // Replace with your Instagram URL
      };
    return (
        <>
        <div className="video-container" style={{marginLeft:"18px"}}>
            <div className="video-row">
                <div className="video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/z2W12JcYGKI" title="Video 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fD2mN6tu7DA" title="Video 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className="video-row">
                <div className="video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Sgd6z2yQdUg" title="Video 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Vv1zHW52iXY" title="Video 4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        {/* <InstagramButton onClick={redirectToInstagram}>View on Gallery</InstagramButton> */}
        <Gallery/>

        </>
        
        
    );
}

export default Video;
