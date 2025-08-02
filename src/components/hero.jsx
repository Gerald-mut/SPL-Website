import { Helmet } from 'react-helmet';
import './components.css';
import HeroForm from './HeroForm';
import { Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const images = [
  '/assets/home-img.jpg',
  '/assets/choreography.jpg',
  '/assets/events4.jpg'
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Preload images once on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Helmet>
        <title>SPL - Home</title>
        <meta
          name="description"
          content="SPL is Nairobi’s premier event & talent production agency."
        />
      </Helmet>

      <section className="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {/* Background Images */}
        <div className="hero-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {images.map((src, index) => (
            <Motion.img
              key={index}
              src={src}
              alt={`Hero ${index}`}
              className="background-img"
              initial={false}
              animate={{ opacity: index === bgIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1,
              }}
            />
          ))}
        </div>

        {/* Optional overlay for better text visibility */}
        <div className="hero-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2
        }} />

        {/* Hero Content */}
        <div className="hero-content" style={{ position: 'relative', zIndex: 3 }}>
          <div className="hero-text">
            <h1 className="hero-title">
              Unforgettable Experiences<br />for Every Occasion
            </h1>
            <p className="hero-description">
              At SPL Company we specialise in creating vibrant and memorable events that leave a lasting impression.
            </p>
          </div>
          <div className="hero-action">
            <button className="hero-btn" onClick={showModal}>Get a Quote</button>
            <Modal
              title="Request a Quote"
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null}
            >
              <HeroForm onSuccess={handleCancel} />
            </Modal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
