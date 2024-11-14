import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Slider from 'react-slick';
import './Home.css';
import Testimonials from './Testimonials';
import PosterSection from './PosterSection';


const Home = () => {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const totalCards = 3;
    
    useEffect(() => {
        const cardInterval = setInterval(() => {
          setCurrentCardIndex(prevIndex => (prevIndex + 1) % totalCards);
        }, 3000);
    
        return () => clearInterval(cardInterval);
    }, []);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Master Your Exams with Comprehensive Mock Test</h1>
                        <p>
                            Our expertly crafted mock test help you improve your preparation, track progress, and succeed.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                            <Link to="/login" className="btn btn-secondary">Login</Link>
                        </div>
                    </div>
                </div>
            </header>
            





            {/* Featured Mock Tests Section */}
            <section className="featured-tests-section">
                <h2 className="section-title text-center">Buy Mock Tests</h2>
                <div className="featured-tests">


                {/* <div className="flashcards-wrapper" style={{ transform: `translateX(-${currentCardIndex * 10}%)`  }}> */}
                <div className="flashcards-wrapper" id="cards" >

                    <div className="test-card">
                        <img src="./../../img/maths.jpg" alt="Math Test" className="test-image" />
                        <div className="test-content">
                            <h3>MATHEMATICS</h3>
                            <p>Previous year questions covering Algebra, Geometry, and more.</p>
                            <Link to="/math_pyqs" className="btn btn-outline">Maths PYQs</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../img/physics.jpg" alt="Physics Test" className="test-image" />
                        <div className="test-content">
                            <h3>PHYSICS</h3>
                            <p>Improve your score in every topic of Physics through these previous year questions</p>
                            <Link to="/physics_pyqs" className="btn btn-outline">Physics PYQs</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../img/chemistry_icon.jpg" alt="Chemistry Test" className="test-image" />
                        <div className="test-content">
                            <h3>CHEMISTRY</h3>
                            <p>Contains previous year questions on physical, organic as well as inorganic chemistry</p>
                            <Link to="/chemistry_pyqs" className="btn btn-outline">Chemistry PYQs</Link>
                        </div>
                    </div>
                   </div>
                </div>
            </section>




            {/* <SimpleSlider/> */}
            <section>
                <PosterSection/>
            </section>
            <section>
            <h2 className="section-title text-center">Student Testimonials</h2>
                <Testimonials/>
            </section>

        </div>
    );
};

export default Home;