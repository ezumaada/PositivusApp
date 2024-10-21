import React from 'react';
import dribble from '../../assets/images/dribble-logo.png';
import amazon from '../../assets/images/amazon-logo.png';
import hubspot from '../../assets/images/hubspot-logo.png';
import notion from '../../assets/images/notion-logo.png';
import netflix from '../../assets/images/netflix-logo.png';
import zoom from '../../assets/images/zoom-logo.png';

const Logos = () => {
    return (
        <div className="md:flex mb-12 md:flex-row md:gap-3 md:justify-between grid grid-cols-3 gap-3">
          {/* Amazon */}
          <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
            <img src={amazon} alt="amazon logo" />
          </a>
          
          {/* Dribbble */}
          <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
            <img src={dribble} alt="dribbble logo" />
          </a>
          
          {/* HubSpot */}
          <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">
            <img src={hubspot} alt="hubspot logo" />
          </a>
          
          {/* Notion */}
          <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">
            <img src={notion} alt="notion logo" />
          </a>
          
          {/* Netflix */}
          <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
            <img src={netflix} alt="netflix logo" />
          </a>
          
          {/* Zoom */}
          <a href="https://www.zoom.us" target="_blank" rel="noopener noreferrer">
            <img src={zoom} alt="zoom logo" />
          </a>
        </div>
      )
      
      
}

export default Logos