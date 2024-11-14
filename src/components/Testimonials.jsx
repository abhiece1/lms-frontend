import React, { useState, useEffect } from 'react';
import { studentTestimonials } from './data';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Rotate testimonials with animation handling
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonialIndex(prevIndex => 
          (prevIndex + 1) % studentTestimonials.length
        );
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 4000); // Total time for each testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <section className='testimonials'>
        <div className="testimonials-container">
          <div className="testimonial-background">
            <div className={`testimonial-content ${isAnimating ? 'slide-out' : 'slide-in'}`}>
              <div className="testimonial-card">
                <div className="avatar">
                  {studentTestimonials[currentTestimonialIndex].name[0]}
                </div>
                <div className="quote-icon">❝</div>
                <h1 className="student-name">
                  {studentTestimonials[currentTestimonialIndex].name}
                </h1>
                <p className="achievement">
                  {studentTestimonials[currentTestimonialIndex].message}
                </p>
                <p className="institute">
                  {studentTestimonials[currentTestimonialIndex].branch}
                </p>
                <div className="quote-icon bottom-quote">❞</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;