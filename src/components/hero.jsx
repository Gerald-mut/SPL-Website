import image from '/assets/home-img.jpg';
import './hero.css';
import { Helmet } from 'react-helmet';
import HeroForm from './HeroForm';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

<Helmet>
    <title>SPL - Home</title>
    <meta title='SPL Kenya | Corporate Events, AV Production & Talent' />
    <meta name="description" content="SPL is Nairobi’s premier event & talent production agency. From corporate galas to viral music videos, we deliver creativity, precision, and scale all under one roof. SPL delivers end‑to‑end event management, AV production, choreography & casting in Nairobi. One idea, flawless execution—get your quote today." />
    <meta name="keywords" content="event production, talent agency, Nairobi, corporate events, music videos, creative agency" />
</Helmet>

const Hero = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
    return (
        <section className="hero"> 
        <img className='background-img' src={image} alt="SPL Hero Background" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <div className="hero-text">
                <h1 className="hero-title">
                    Unforgettable Experiences<br />for Every Occasion
                </h1>
                <p className="hero-description">
                    At SPL Company we specialise in creating vibrant and memorable events that leave a lasting impression.. At SPL Company we specialise in creating vibrant and memorable events that leave a lasting impression.
                </p>
            </div>
            <div className="hero-action">
                <button className="hero-btn"
                onClick={ showModal }
                >
                    Get a Quote</button>
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
    )
}

export default Hero
