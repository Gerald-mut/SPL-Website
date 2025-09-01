import React, { useState, useRef } from 'react';
import ServiceCard from './ServiceCard.jsx';
import ServiceModal from './ServiceModal.jsx';
import './components.css';
import { Helmet } from 'react-helmet';

export default function Services() {
<Helmet>
  <title>SPL Services | Event Production, Talent & Casting in Nairobi</title>
  <meta name="description" content="Explore SPL’s expert services in Nairobi event management and production, talent management, and casting. We create unforgettable events, represent top-tier creatives, and cast standout talent across Kenya." />
  <meta name="keywords" content="event services Nairobi, talent agency Kenya, casting services, event production, SPL Kenya, creative agency Nairobi" />
</Helmet>
    const servicesData = [
        {
            id: 'corporate-events',
            title: 'Event Management',
            img: '/assets/events5.jpg',
            description: (
              <>
  <p>SPL doesn’t just plan events we engineer unforgettable moments that move people and elevate brands. Our event management and production services in Nairobi and across East Africa are built for precision, creativity, and flawless execution.</p>

  <p>What We Offer:</p>
  <ul>
    <li>End-to-End Planning: From ideation to execution—logistics, budgeting, vendors, staffing, and more.</li>
    <li>Diverse Event Types: Launches, conferences, medical camps, team buildings, award shows—customized for impact.</li>
    <li>Venue Selection: We scout and visit venues in advance to ensure smooth logistics and brand fit.</li>
    <li>Creative Production: Staging, AV, lighting, and design that immerse your audience.</li>
    <li>Tech Setup: Our team brings pro-level lighting, sound, visuals, and live streaming to every event.</li>
    <li>Post-Event Analysis: We gather feedback, analyze outcomes, and improve your next experience.</li>
  </ul>

  <p>Events aren’t just gatherings they’re brand moments. We help you turn an idea into a bold, visual, unforgettable experience.</p>
</>

            )
    },  
        {
            id: 'talent-management',
            title: 'Talent Management',
            img: '/assets/audiovisual.webp',
            description: 
            (
    <>
      <p>At SPL, we believe talent thrives with strategy. Our talent management services in Kenya offer creatives the tools, partnerships, and support to grow sustainable careers.</p>

      <p>What We Offer:</p>
      <ul>
        <li>Representation: We guide careers with smart booking, brand positioning, and contract negotiation.</li>
        <li>Career Growth: Coaching, training, and access to meaningful creative opportunities.</li>
        <li>Brand Building: We connect talent with high-visibility collaborations, endorsements, and projects.</li>
        <li>Local Meets Global: Navigating Kenya’s market while staying open to international opportunities.</li>
      </ul>

      <p>We don’t just manage talent we nurture icons. Whether you’re a brand or a performer, SPL helps you grow through intention and impact.</p>
    </>
            )
    }, 
        {
          id: 'casting',
          title: 'Casting',
          img: '/assets/choreography6.webp',
          description: (
              <>
                <p>SPL’s casting agency in Nairobi sources standout talent to bring your vision to life whether you’re planning a shoot, an event, or a creative campaign.</p>
    
                <p>What We Offer:</p>
                <ul>
                  <li>Talent Sourcing: Models, actors, dancers, ushers we’ve got the faces and energy to elevate your project.</li>
                  <li>Auditions & Screen Tests: We run casting sessions that find talent with authenticity, skill, and stage presence.</li>
                  <li>Diverse Profiles: From fresh faces to seasoned pros, we bring a wide spectrum of Kenyan talent to your brief.</li>
                  <li>Multi-Media Casting: For film, TV, music videos, live shows, fashion campaigns, and more.</li>
                  <li>Creative Collaboration: We work directly with your team and directors for alignment and creative flow.</li>
                </ul>
    
                <p>Great projects start with the right people. Let SPL deliver the casting precision your production deserves.</p>
              </>

            )
    }, 
    ]
  const [openService, setOpenService] = useState(null)
  const containerRef = useRef()

  return (
    <section id="services" className="services-section">
      <h1 className='services-header'>What We Offer</h1>
      <div className="carousel-wrapper">
        <div className="carousel" ref={containerRef}>
          {servicesData.map(s => (
            <ServiceCard key={s.id} service={s} onOpen={setOpenService} />
          ))}
        </div>
      </div>
      <ServiceModal service={openService} onClose={() => setOpenService(null)} />
    </section>
  )
}
