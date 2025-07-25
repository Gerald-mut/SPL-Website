import { useState } from 'react';
import './Gallery.css'

export default function Gallery () {
    const images = [
            './assets/events6.jpg',
            './assets/events5.jpg',
            './assets/choreography6.jpg',
            './assets/corporate-events2.jpg',
            './assets/events1.jpg',
            './assets/events.jpg',
            './assets/audiovisual2.jpg',
            './assets/audiovisual3.jpg',
            './assets/choreography.jpg',
            './assets/choreography2.jpg',
            './assets/choreography3.jpg',
            './assets/choreography4.jpg',
            './assets/choreography5.jpg',
            './assets/corporate-events.jpg',
            './assets/events.jpg',
            './assets/talent4.jpg',
            './assets/talent5.jpg'
        ];

        const [currentIndex, setCurrentIndex] = useState(0);

        const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        };

        const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };

    return (
        <section className="gallery-carousel" id="gallery">
        <h2 className="section-header">Some of Our Work</h2>
        <div className="carousel-container">
            <button className="arrow left" onClick={handlePrev}>‹</button>
            <img src={images[currentIndex]} alt={`Work ${currentIndex + 1}`} className="carousel-image" />
            <button className="arrow right" onClick={handleNext}>›</button>
        </div>
        </section>
    )
}