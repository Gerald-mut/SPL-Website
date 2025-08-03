// Home.jsx
import React from 'react';
import Hero from '../components/hero';
import Navbar from '../components/Navbar';
import About from './About';
import Contact from './Contact';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="about"><About /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
