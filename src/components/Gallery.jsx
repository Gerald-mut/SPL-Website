import { useState } from "react";
import "./components.css";
import Title from "antd/es/skeleton/Title";

export default function Gallery() {
  const items = [
    {
      image: "./assets/choreography6.webp",
      title: "Safaricom Zuri TVC and print",
      description:
        "We provided choreography and cast a professional dancer tailored to the event’s theme.",
    },
    {
      image: "./assets/kcbflexi.webp",
      title: "KCB Flexi Loan Event",
      description:
        "We handled the casting of two skilled contortionists and additional extras to enhance the performance.",
    },
    {
      image: "./assets/choreography4.webp",
      title: "The Kip Keino Continental Classic 2025 at Uhuru Gardens",
      description:
        "We did the opening ceremony. Which had a live act, dancers, drummers and 80kids from different schools in Nairobi supported by Athletics Kenya",
    },
    {
      image: "./assets/choreography5.webp",
      title: "Connect Africa Summit",
      description:
        "We provided choreography and cast professional dancers tailored to the event’s theme.",
    },
    {
      image: "./assets/idevent.webp",
      title: "Eid Mela Festival Stalls",
      description:
        "A vibrant row of stalls at the Eid Mela Festival, filled with visitors exploring food, crafts, and cultural displays under the scenic tree-lined grounds.",
    },
    {
      image: "./assets/idevent3.webp",
      title: "Eid Mela Acrobatic Performance",
      description:
        "A thrilling acrobatic act during the Eid Mela Festival, captivating the crowd with impressive flips and colorful traditional attire.",
    },
    {
      image: "./assets/middleeastbank.webp",
      title: "Middle East Bank Stand",
      description:
        "We did a stand for Middle East Bank Kenya during the Northern Kenya Impact Investment Conference 2024 which took place at the Carnivore Grounds",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const { image, title, description } = items[currentIndex];

  return (
    <section className="gallery-carousel" id="gallery">
      <h2 className="section-header">Some of Our Work</h2>
      <div className="gallery-card">
        <button className="arrow left" onClick={handlePrev}>
          ‹
        </button>
        <div className="gallery-content">
          <img
            src={image}
            alt={title}
            className="gallery-image"
            loading="lazy"
          />
          <div className="gallery-text">
            <h3 className="gallery-title">{title}</h3>
            <p className="gallery-description">{description}</p>
          </div>
        </div>
        <button className="arrow right" onClick={handleNext}>
          ›
        </button>
      </div>
    </section>
  );
}
