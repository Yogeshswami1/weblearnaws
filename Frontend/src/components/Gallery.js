import React from 'react'
import styled from 'styled-components';

const InstagramButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: red;
  }
`;
const Gallery = () => {
    const redirectToInstagram = () => {
        window.open('https://gallery.saumiccraft.com/', '_blank'); // Replace with your Instagram URL
      };
  return (
    
    <div>        <InstagramButton onClick={redirectToInstagram}>Explore Our Gallery</InstagramButton>
</div>
  )
}

export default Gallery