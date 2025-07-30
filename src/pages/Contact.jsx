import image1 from '/assets/choreography3.jpg';
import './Pages.css';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const clientPhone = '+254787005003'; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;

    const text = `Hello, I'm ${name}. I'd like a quote for *${service}*.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || 'N/A'}`;
    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/${clientPhone}?text=${encoded}`, '_blank');
  };

  return (
    <section className="contact">
      <Helmet>
        <title>Contact SPL Kenya | Book Event & Talent Services</title>
        <meta name="description" content="Reach out to SPL—Nairobi’s top event & talent production agency. Contact us to plan your next event, casting call, or creative production. Let’s bring your vision to life." />
        <meta name="keywords" content="contact SPL, event planning Nairobi, talent agency Kenya, book SPL, reach SPL Kenya" />
      </Helmet>

      <img className="background-img" src={image1} alt="SPL Contact Background" />
      <div className="contact-overlay"></div>

      <div className="contact-content">
        <div className="contact-text">
          <h1 className="contact-title">Let's Create Something Unforgettable</h1>
          <p className="contact-description">
            Whether you're planning a launch, casting talent, or producing a show we’re ready to make it happen!
          </p>
          <h3>Feel free to reach us out at</h3>
          <p className="contact-info">
            Info@seoproductionske.com <br />
            0722980916
          </p>
        </div>

        <div className="contact-action">
          <form className="booking-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="Event Management & Production">Event Management & Production</option>
              <option value="Talent Management">Talent Management</option>
              <option value="Casting">Casting</option>
            </select>
            <input
              name="message"
              placeholder="Optional Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
            <button type="submit">Get a Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}
