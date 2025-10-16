import React from 'react';
import '../styles/HeroBackground.css';

const HeroBackground: React.FC = () => {
  return (
    <div className="hero-bg-container">
      {/* Animated SVG Shapes */}
      <svg className="hero-svg-shapes" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        {/* Large Circle */}
        <circle className="shape shape-circle-1" cx="200" cy="150" r="80" fill="rgba(24, 144, 255, 0.08)" />

        {/* Medium Circles */}
        <circle className="shape shape-circle-2" cx="900" cy="600" r="60" fill="rgba(82, 196, 26, 0.06)" />
        <circle className="shape shape-circle-3" cx="1100" cy="200" r="50" fill="rgba(24, 144, 255, 0.05)" />

        {/* Small Circles */}
        <circle className="shape shape-circle-4" cx="150" cy="650" r="30" fill="rgba(255, 193, 7, 0.08)" />
        <circle className="shape shape-circle-5" cx="700" cy="100" r="25" fill="rgba(82, 196, 26, 0.07)" />

        {/* Triangles */}
        <polygon
          className="shape shape-triangle-1"
          points="500,500 550,580 450,580"
          fill="rgba(24, 144, 255, 0.06)"
        />
        <polygon
          className="shape shape-triangle-2"
          points="300,400 340,460 260,460"
          fill="rgba(82, 196, 26, 0.05)"
        />

        {/* Squares/Rectangles */}
        <rect
          className="shape shape-rect-1"
          x="800"
          y="350"
          width="60"
          height="60"
          fill="none"
          stroke="rgba(24, 144, 255, 0.15)"
          strokeWidth="2"
          transform="rotate(45 830 380)"
        />
        <rect
          className="shape shape-rect-2"
          x="100"
          y="400"
          width="40"
          height="40"
          fill="none"
          stroke="rgba(255, 193, 7, 0.12)"
          strokeWidth="2"
        />

        {/* Lines/Paths */}
        <path
          className="shape shape-line-1"
          d="M 50 300 Q 150 250 250 300"
          fill="none"
          stroke="rgba(24, 144, 255, 0.15)"
          strokeWidth="3"
        />
        <path
          className="shape shape-line-2"
          d="M 950 450 Q 1050 400 1150 450"
          fill="none"
          stroke="rgba(82, 196, 26, 0.12)"
          strokeWidth="2"
        />

        {/* Hexagons */}
        <polygon
          className="shape shape-hex-1"
          points="600,250 640,270 640,310 600,330 560,310 560,270"
          fill="none"
          stroke="rgba(24, 144, 255, 0.2)"
          strokeWidth="2"
        />

        {/* Plus Signs */}
        <g className="shape shape-plus-1" transform="translate(400, 200)">
          <rect x="-2" y="-20" width="4" height="40" fill="rgba(255, 193, 7, 0.15)" />
          <rect x="-20" y="-2" width="40" height="4" fill="rgba(255, 193, 7, 0.15)" />
        </g>

        <g className="shape shape-plus-2" transform="translate(1000, 500)">
          <rect x="-1.5" y="-15" width="3" height="30" fill="rgba(82, 196, 26, 0.12)" />
          <rect x="-15" y="-1.5" width="30" height="3" fill="rgba(82, 196, 26, 0.12)" />
        </g>

        {/* Dots Pattern */}
        <circle className="shape shape-dot-1" cx="350" cy="150" r="5" fill="rgba(24, 144, 255, 0.3)" />
        <circle className="shape shape-dot-2" cx="380" cy="150" r="5" fill="rgba(24, 144, 255, 0.3)" />
        <circle className="shape shape-dot-3" cx="410" cy="150" r="5" fill="rgba(24, 144, 255, 0.3)" />

        {/* Rings */}
        <circle
          className="shape shape-ring-1"
          cx="600"
          cy="650"
          r="40"
          fill="none"
          stroke="rgba(24, 144, 255, 0.15)"
          strokeWidth="2"
        />
        <circle
          className="shape shape-ring-2"
          cx="600"
          cy="650"
          r="30"
          fill="none"
          stroke="rgba(24, 144, 255, 0.1)"
          strokeWidth="2"
        />
      </svg>

      {/* Grid Lines */}
      <div className="hero-grid-lines">
        <div className="grid-line grid-line-1"></div>
        <div className="grid-line grid-line-2"></div>
        <div className="grid-line grid-line-3"></div>
      </div>
    </div>
  );
};

export default HeroBackground;
