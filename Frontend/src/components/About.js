// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// // Import your video assets here
// import MN1 from "../assets/MN1.mp4";
// import MN2 from "../assets/MN2.mp4";
// import MN3 from "../assets/MN3.mp4";
// import MN4 from "../assets/MN4.mp4";
// import MN5 from "../assets/MN5.mp4";
// import MN6 from "../assets/MN6.mp4";
// import MN7 from "../assets/MN7.mp4";
// import MN8 from "../assets/MN8.mp4";
// import MN9 from "../assets/MN9.mp4";
// import k1 from "../assets/k1.mp4";
// import k2 from "../assets/k2.mp4";
// import k3 from "../assets/k3.mp4";
// import k4 from "../assets/k4.mp4";
// import k5 from "../assets/k5.mp4";
// import k6 from "../assets/k6.mp4";
// import k7 from "../assets/k7.mp4";
// import k8 from "../assets/k8.mp4";
// import k9 from "../assets/k9.mp4";

// import CPP07973 from "../assets/CPP07973.JPG";
// import CPP07974 from "../assets/CPP07974.JPG";
// import CPP07975 from "../assets/CPP07975.JPG";
// import CPP07976 from "../assets/CPP07976.JPG";
// import CPP07977 from "../assets/CPP07977.JPG";
// import CPP07978 from "../assets/CPP07978.JPG";
// import CPP07979 from "../assets/CPP07979.JPG";
// import CPP07980 from "../assets/CPP07980.JPG";
// import CPP07981 from "../assets/CPP07981.JPG";
// import CPP07982 from "../assets/CPP07982.JPG";
// import CPP07983 from "../assets/CPP07983.JPG";
// import CPP07984 from "../assets/CPP07984.JPG";
// import CPP07985 from "../assets/CPP07985.JPG";
// import CPP07986 from "../assets/CPP07986.JPG";
// import CPP07987 from "../assets/CPP07987.JPG";
// import CPP07988 from "../assets/CPP07988.JPG";
// import CPP07989 from "../assets/CPP07989.JPG";
// import CPP07990 from "../assets/CPP07990.JPG";
// import CPP07991 from "../assets/CPP07991.JPG";
// import CPP07992 from "../assets/CPP07992.JPG";
// import CPP07993 from "../assets/CPP07993.JPG";
// import CPP07994 from "../assets/CPP07994.JPG";
// import CPP07995 from "../assets/CPP07995.JPG";

// const videos = [MN1, MN2, MN3, MN4, MN5, MN6, MN7, MN8, MN9];
// const vd = [k1, k2, k3, k4, k5, k6, k7, k8, k9];
// const photos = [
//   CPP07973, CPP07974, CPP07975, CPP07976, CPP07977,
//   CPP07978, CPP07979, CPP07980, CPP07981, CPP07982,
//   CPP07983, CPP07984, CPP07985, CPP07986, CPP07987,
//   CPP07988, CPP07989, CPP07990, CPP07991, CPP07992,
//   CPP07993, CPP07994, CPP07995
// ];

// const MarginPageContainer = styled.div`
//   padding: 20px;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 20px;
// `;

// const VideoGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   gap: 20px;
// `;

// const VideoContainer = styled.div`
//   flex-basis: calc(33.33% - 40px); /* 33.33% for 3 videos per row with some margin */
//   box-sizing: border-box;
//   margin-bottom: 20px;
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     flex-basis: calc(50% - 40px); /* 50% for 2 videos per row with some margin */
//   }

//   @media (max-width: 480px) {
//     flex-basis: calc(100% - 40px); /* 100% for 1 video per row with some margin */
//   }

//   &:hover {
//     transform: scale(1.05); /* Scale up on hover */
//     transition: transform 0.3s ease;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
//   }
// `;

// const VideoElement = styled.video`
//   width: 100%;
//   height: 13rem; /* Maintain aspect ratio */
// `;

// const InstagramButton = styled.button`
//   background-color: #405de6;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   font-size: 1rem;
//   cursor: pointer;
//   border-radius: 5px;
//   margin-top: 20px;

//   &:hover {
//     background-color: #3b55c2;
//   }
// `;

// const SliderContainer = styled(Slider)`
//   .slick-slide {
//     padding: 10px;
//   }
// `;

// const ImageContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.05); /* Scale up on hover */
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto; /* Maintain aspect ratio */
//   cursor: pointer;
//   border-radius: 10px;
// `;

// const ButtonContainer = styled.div`
//   position: absolute;
//   bottom: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 10px;
// `;

// const DownloadButton = styled(InstagramButton)`
//   background-color: rgba(255, 255, 255, 0.8);
//   color: #405de6;
//   font-size: 0.8rem;
//   padding: 5px 10px;

//   &:hover {
//     background-color: rgba(255, 255, 255, 1);
//   }
// `;

// const FullScreenOverlay = styled.div`
//   display: ${({ show }) => (show ? 'flex' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const FullScreenImage = styled.img`
//   max-width: 90%;
//   max-height: 90%;
//   border-radius: 10px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: transparent;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   font-size: 1.5rem;
//   color: white;

//   &:hover {
//     color: #ddd;
//   }
// `;

// const CloseIcon = styled.svg`
//   width: 24px;
//   height: 24px;
// `;

// const About = () => {
//   const redirectToInstagram = () => {
//     window.open('https://www.instagram.com/saumic_craft_/', '_blank');
//   };

//   const [showFullscreen, setShowFullscreen] = useState(false);
//   const [fullscreenSrc, setFullscreenSrc] = useState('');

//   const openFullscreen = (src) => {
//     setFullscreenSrc(src);
//     setShowFullscreen(true);
//   };

//   const closeFullscreen = () => {
//     setShowFullscreen(false);
//   };

//   const downloadPhoto = (src) => {
//     const anchor = document.createElement('a');
//     anchor.href = src;
//     anchor.download = '';
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
//   };

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <MarginPageContainer>
//       <Heading>Manufacturing</Heading>
//       <VideoGrid>
//         {videos.map((videoSrc, index) => (
//           <VideoContainer key={index}>
//             <VideoElement src={videoSrc} controls />
//           </VideoContainer>
//         ))}
//       </VideoGrid>

//       <Heading>4k Videos</Heading>
//       <VideoGrid>
//         {vd.map((videoSrc, index) => (
//           <VideoContainer key={index}>
//             <VideoElement src={videoSrc} controls />
//           </VideoContainer>
//         ))}
//       </VideoGrid>

//       <Heading>Photos</Heading>
//       <SliderContainer {...sliderSettings}>
//         {photos.map((photoSrc, index) => (
//           <ImageContainer key={index}>
//             <Image
//               src={photoSrc}
//               onClick={() => openFullscreen(photoSrc)}
//               alt={`Photo ${index + 1}`}
//             />
//             <ButtonContainer>
//               <DownloadButton onClick={() => downloadPhoto(photoSrc)}>
//                 Download
//               </DownloadButton>
//             </ButtonContainer>
//           </ImageContainer>
//         ))}
//       </SliderContainer>

//       <FullScreenOverlay show={showFullscreen} onClick={closeFullscreen}>
//         <FullScreenImage src={fullscreenSrc} />
//         <CloseButton onClick={closeFullscreen}>
//           <CloseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
//             <line x1="18" y1="6" x2="6" y2="18"></line>
//             <line x1="6" y1="6" x2="18" y2="18"></line>
//           </CloseIcon>
//         </CloseButton>
//       </FullScreenOverlay>

//       <InstagramButton onClick={redirectToInstagram}>
//         View on Instagram
//       </InstagramButton>
//     </MarginPageContainer>
//   );
// };

// export default About;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// // Import your image assets here
// import CPP07973 from "../assets/CPP07973.JPG";
// import CPP07974 from "../assets/CPP07974.JPG";
// import CPP07975 from "../assets/CPP07975.JPG";
// import CPP07976 from "../assets/CPP07976.JPG";
// import CPP07977 from "../assets/CPP07977.JPG";
// import CPP07978 from "../assets/CPP07978.JPG";
// import CPP07979 from "../assets/CPP07979.JPG";
// import CPP07980 from "../assets/CPP07980.JPG";
// import CPP07981 from "../assets/CPP07981.JPG";
// import CPP07982 from "../assets/CPP07982.JPG";
// import CPP07983 from "../assets/CPP07983.JPG";
// import CPP07984 from "../assets/CPP07984.JPG";
// import CPP07985 from "../assets/CPP07985.JPG";
// import CPP07986 from "../assets/CPP07986.JPG";
// import CPP07987 from "../assets/CPP07987.JPG";
// import CPP07988 from "../assets/CPP07988.JPG";
// import CPP07989 from "../assets/CPP07989.JPG";
// import CPP07990 from "../assets/CPP07990.JPG";
// import CPP07991 from "../assets/CPP07991.JPG";
// import CPP07992 from "../assets/CPP07992.JPG";
// import CPP07993 from "../assets/CPP07993.JPG";
// import CPP07994 from "../assets/CPP07994.JPG";
// import CPP07995 from "../assets/CPP07995.JPG";

// const photos = [
//   CPP07973, CPP07974, CPP07975, CPP07976, CPP07977,
//   CPP07978, CPP07979, CPP07980, CPP07981, CPP07982,
//   CPP07983, CPP07984, CPP07985, CPP07986, CPP07987,
//   CPP07988, CPP07989, CPP07990, CPP07991, CPP07992,
//   CPP07993, CPP07994, CPP07995
// ];

// const MarginPageContainer = styled.div`
//   padding: 20px;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 20px;
// `;

// const PhotoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 10px;
// `;

// const PhotoContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   }
// `;

// const Photo = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   cursor: pointer;
//   border-radius: 10px;
// `;

// const ButtonContainer = styled.div`
//   position: absolute;
//   bottom: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 10px;
// `;

// const DownloadButton = styled.button`
//   background-color: rgba(255, 255, 255, 0.8);
//   color: #405de6;
//   font-size: 0.8rem;
//   padding: 5px 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: rgba(255, 255, 255, 1);
//   }
// `;

// const FullScreenOverlay = styled.div`
//   display: ${({ show }) => (show ? 'flex' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const FullScreenImage = styled.img`
//   max-width: 90%;
//   max-height: 90%;
//   border-radius: 10px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: transparent;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   font-size: 1.5rem;
//   color: white;

//   &:hover {
//     color: #ddd;
//   }
// `;

// const CloseIcon = styled.svg`
//   width: 24px;
//   height: 24px;
// `;

// const About = () => {
//   const [showFullscreen, setShowFullscreen] = useState(false);
//   const [fullscreenSrc, setFullscreenSrc] = useState('');

//   const openFullscreen = (src) => {
//     setFullscreenSrc(src);
//     setShowFullscreen(true);
//   };

//   const closeFullscreen = () => {
//     setShowFullscreen(false);
//   };

//   const downloadPhoto = (src) => {
//     const anchor = document.createElement('a');
//     anchor.href = src;
//     anchor.download = '';
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
//   };

//   return (
//     <MarginPageContainer>
//       <Heading>Photos</Heading>
//       <PhotoGrid>
//         {photos.map((photoSrc, index) => (
//           <PhotoContainer key={index}>
//             <Photo
//               src={photoSrc}
//               onClick={() => openFullscreen(photoSrc)}
//               alt={`Photo ${index + 1}`}
//             />
//             <ButtonContainer>
//               <DownloadButton onClick={() => downloadPhoto(photoSrc)}>
//                 Download
//               </DownloadButton>
//             </ButtonContainer>
//           </PhotoContainer>
//         ))}
//       </PhotoGrid>

//       <FullScreenOverlay show={showFullscreen} onClick={closeFullscreen}>
//         <FullScreenImage src={fullscreenSrc} />
//         <CloseButton onClick={closeFullscreen}>
//           <CloseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
//             <line x1="18" y1="6" x2="6" y2="18"></line>
//             <line x1="6" y1="6" x2="18" y2="18"></line>
//           </CloseIcon>
//         </CloseButton>
//       </FullScreenOverlay>
//     </MarginPageContainer>
//   );
// };

// export default About;



import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import your video assets here
import MN1 from "../assets/MN1.mp4";
import MN2 from "../assets/MN2.mp4";
import MN3 from "../assets/MN3.mp4";

import k1 from "../assets/k1.mp4";
import k2 from "../assets/k2.mp4";
import k3 from "../assets/k3.mp4";
import CPP07988 from "../assets/CPP07988.JPG";
import CPP07989 from "../assets/CPP07989.JPG";
import CPP07990 from "../assets/CPP07990.JPG";
import CPP07991 from "../assets/CPP07991.JPG";
import CPP07992 from "../assets/CPP07992.JPG";


const videos = [MN1, MN2,MN3];
const vd = [k1, k2];
const photos = [
  // CPP07973, CPP07974, CPP07975, CPP07976, CPP07977,
  // CPP07978, CPP07979, CPP07980, CPP07981, CPP07982,
  // CPP07983, CPP07984, CPP07985, CPP07986, CPP07987,
  CPP07988, CPP07989, CPP07990
  
  // CPP01465, CPP01477, CPP01483
];

const MarginPageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const VideoContainer = styled.div`
  flex-basis: calc(33.33% - 40px); /* 33.33% for 3 videos per row with some margin */
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-basis: calc(50% - 40px); /* 50% for 2 videos per row with some margin */
  }

  @media (max-width: 480px) {
    flex-basis: calc(100% - 40px); /* 100% for 1 video per row with some margin */
  }

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
`;

const VideoElement = styled.video`
  width: 100%;
  height: 13rem; /* Maintain aspect ratio */
`;

const InstagramButton = styled.button`
  background-color: #405de6;
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

const SliderContainer = styled(Slider)`
  .slick-slide {
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  cursor: pointer;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const DownloadButton = styled(InstagramButton)`
  background-color: rgba(255, 255, 255, 0.8);
  color: #405de6;
  font-size: 0.8rem;
  padding: 5px 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const FullScreenOverlay = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullScreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  &:hover {
    color: #ddd;
  }
`;
const DriveButton = styled.button`
  background-color: #4285F4;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #357AE8;
  }
`;

const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

const About = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/saumic_craft_/', '_blank');
  };

  const [showFullscreen, setShowFullscreen] = useState(false);
  const [fullscreenSrc, setFullscreenSrc] = useState('');

  const openFullscreen = (src) => {
    setFullscreenSrc(src);
    setShowFullscreen(true);
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
    setFullscreenSrc('');
  };

  const downloadImage = (src) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = 'image.jpg';
    link.click();
  };

  const customArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#405de6' }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <customArrow />,
    prevArrow: <customArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MarginPageContainer>
      <Heading>Manufacturing Videos</Heading>
      <VideoGrid>
        {videos.map((video, index) => (
          <VideoContainer key={index}>
            <VideoElement controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoElement>
          </VideoContainer>
        ))}
      </VideoGrid>
      <DriveButton onClick={() => window.open("https://drive.google.com/drive/folders/1LTSmQm7WDvgWkcRCAl_ZzhKOP55UG5gE", "_blank")}>
        View More Videos
      </DriveButton>
      <Heading style={{marginTop:"2rem"}}>4k Videos</Heading>
      <SliderContainer {...settings}>
        {vd.map((video, index) => (
          <VideoContainer key={index}>
            <VideoElement controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoElement>
          </VideoContainer>
        ))}
      </SliderContainer>
      <DriveButton onClick={() => window.open("https://drive.google.com/drive/folders/1kxWpVt0hkqSJcdQEQSBU46uqNt4bKJo2")}>
        View More Videos
      </DriveButton>
      <Heading style={{marginTop:"2rem"}}>Photos</Heading>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry gutter="10px">
          {photos.map((photo, index) => (
            <ImageContainer key={index}>
              <Image src={photo} alt={`Photo ${index + 1}`} onClick={() => openFullscreen(photo)} />
              <ButtonContainer>
                <DownloadButton onClick={() => downloadImage(photo)}>Download</DownloadButton>
              </ButtonContainer>
            </ImageContainer>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <FullScreenOverlay show={showFullscreen} onClick={closeFullscreen}>
        <FullScreenImage src={fullscreenSrc} alt="Full screen" />
        <CloseButton onClick={closeFullscreen}>
          <CloseIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </CloseIcon>
        </CloseButton>
      </FullScreenOverlay>
      
      <DriveButton onClick={() => window.open("https://drive.google.com/drive/folders/1Yho5PBbYZeOjXD02QYT9tqLpiEwI1YJE", "_blank")}>
        View More Photos
        
      </DriveButton>
     
      {/* <button><div style="left: 0; width: 100%; height: 400px; position: relative;"><iframe src="https://drive.google.com/embeddedfolderview?id=1xpLmwyOtoHDrwe4I9KQCrulnxYem_iiq#grid" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div></button> */}
      
    </MarginPageContainer>
  );
};

export default About;


