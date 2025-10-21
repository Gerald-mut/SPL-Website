import { Helmet } from "react-helmet";
import "./components.css";
import HeroForm from "./HeroForm";
import Modal from "antd/es/modal";
import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

const images = [
  "/assets/home-img.jpg",
  "/assets/choreography.webp",
  "/assets/audiovisual.webp",
  "/assets/events4.webp",
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const first = new Image();
    first.src = images[0];

    setTimeout(() => {
      images.slice(1).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, 3000);
  }, []);

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
        <link rel="preload" as="image" href={images[0]} fetchpriority="high" />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=YourFontName:wght@400;700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=YourFontName:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </Helmet>

      <section
        className="hero"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <div
          className="hero-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {images.map((src, index) => (
            <Motion.img
              key={index}
              src={src}
              alt={`Hero ${index}`}
              className="background-img"
              initial={false}
              animate={{ opacity: index === bgIndex ? 1 : 0 }}
              transition={{ duration: index === 0 ? 0 : 1 }}
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "low"}
              style={{
                opacity: index === 0 ? 1 : 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
                transition: "opacity 1s ease",
              }}
            />
          ))}
        </div>

        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 2,
          }}
        />

        <div
          className="hero-content"
          style={{ position: "relative", zIndex: 3 }}
        >
          <div className="hero-text">
            <h1 className="hero-title">
              Unforgettable Experiences
              <br />
              for Every Occasion
            </h1>
            <p className="hero-description">
              At SPL Company we specialise in creating vibrant and memorable
              events that leave a lasting impression.
            </p>
          </div>

          <div className="hero-action">
            <button className="hero-btn" onClick={showModal}>
              Get a Quote
            </button>
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
