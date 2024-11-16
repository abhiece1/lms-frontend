import React, { useState, useEffect } from 'react';

import './Postersection.css';

const PosterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const posters = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5828/5828162.png',
      title: 'Boost Confidence',
      description: 'Gain confidence by simulating the exam environment.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2857/2857369.png',
      title: 'Identify Weaknesses',
      description: 'Focus on the areas that need improvement.'
    },
    {
      icon:'https://cdn-icons-png.flaticon.com/512/3094/3094939.png',
      title: 'Time Management',
      description: 'Practice efficient time management in real exam conditions.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/8684/8684801.png',
      title: 'Track Progress',
      description: 'Monitor your progress with detailed reports and analytics.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5828/5828162.png',
      title: 'Boost Confidence',
      description: 'Gain confidence by simulating the exam environment.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2857/2857369.png',
      title: 'Identify Weaknesses',
      description: 'Focus on the areas that need improvement.'
    },
    {
      icon:'https://cdn-icons-png.flaticon.com/512/3094/3094939.png',
      title: 'Time Management',
      description: 'Practice efficient time management in real exam conditions.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/8684/8684801.png',
      title: 'Track Progress',
      description: 'Monitor your progress with detailed reports and analytics.'
    },{
      icon: 'https://cdn-icons-png.flaticon.com/512/5828/5828162.png',
      title: 'Boost Confidence',
      description: 'Gain confidence by simulating the exam environment.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2857/2857369.png',
      title: 'Identify Weaknesses',
      description: 'Focus on the areas that need improvement.'
    },
    {
      icon:'https://cdn-icons-png.flaticon.com/512/3094/3094939.png',
      title: 'Time Management',
      description: 'Practice efficient time management in real exam conditions.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/8684/8684801.png',
      title: 'Track Progress',
      description: 'Monitor your progress with detailed reports and analytics.'
    },{
      icon: 'https://cdn-icons-png.flaticon.com/512/5828/5828162.png',
      title: 'Boost Confidence',
      description: 'Gain confidence by simulating the exam environment.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2857/2857369.png',
      title: 'Identify Weaknesses',
      description: 'Focus on the areas that need improvement.'
    },
    {
      icon:'https://cdn-icons-png.flaticon.com/512/3094/3094939.png',
      title: 'Time Management',
      description: 'Practice efficient time management in real exam conditions.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/8684/8684801.png',
      title: 'Track Progress',
      description: 'Monitor your progress with detailed reports and analytics.'
    }
    
    
  ];

  return (
    <section className="poster-section">
      <div className="poster-container">
        <div
          className="poster-slider"
          style={{ transform: `translateX(-${currentIndex * 28}%)` }}
        >
          {posters.map((poster, index) => (
            <div key={index} className="poster-item">
              <img src={poster.icon} alt={poster.title} className="poster-icon" />
              <h3 className="poster-title">{poster.title}</h3>
              <p className="poster-description">{poster.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
