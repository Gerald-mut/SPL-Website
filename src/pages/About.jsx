import { Helmet } from 'react-helmet';
import './About.css';

<Helmet>
  <title>About SPL | Leading Creative & Events Agency in Kenya</title>
  <meta name="description" content="SPL is a Nairobi-based creative powerhouse offering event production, casting, and talent management. Learn about our mission, impact, and how we’re shaping Kenya’s creative scene one bold experience at a time." />
  <meta name="keywords" content="about SPL Kenya, event agency Nairobi, creative agency Kenya, talent management, event production, casting Nairobi" />
</Helmet>

export default function About () {
    return (
        <section className="about">
          <div className="about-content">
            <div className="about-image">
              <img src="/assets/events6.jpg" alt="SPL dancers" />
            </div>
            <div className="about-text">
              <h2 className="about-header">Who We Are</h2>
              <p className="about-title">We move Africa. Literally.</p>
              <p className="about-description">
                SPL is Kenya’s creative production powerhouse. From cultural showcases to corporate
                spectacles, we blend bold ideas with flawless execution. For over 5 decades,
                we’ve built moments that move people through dance, sound, stage, and screen.
              </p>
            </div>
          </div>
        </section>
    )
}

