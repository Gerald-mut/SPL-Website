import { Helmet } from 'react-helmet';
import './components.css';
import HeroForm from './HeroForm';
import { Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const images = [
  '/assets/home-img.jpg',
  '/assets/choreography.jpg',
  '/assets/events4.jpg'
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <meta name="description" content="SPL is Nairobi’s premier event & talent production agency." />
      </Helmet>

      <section className="hero">
        <div className="hero-background">
          <AnimatePresence mode="wait">
            <Motion.img
              key={bgIndex}
              src={images[bgIndex]}
              className="background-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
              alt="Hero Background"
            />
          </AnimatePresence>
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
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
