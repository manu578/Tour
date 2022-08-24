import React from 'react';
import Video from "../assets/Rajasthan1.mp4";
function Carousel() {
  return (
<div className ='hero'>
    <div className ='overlay'>
        <video autoPlay loop muted className="video1">
            <source src = {Video} type ='video/mp4'></source>
        </video>
        </div>
    </div>
  );
}

export default Carousel;