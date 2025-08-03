import { Helmet } from 'react-helmet';
import './Pages.css';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About SPL | Leading Creative & Events Agency in Kenya</title>
        <meta
          name="description"
          content="SPL is a Nairobi-based creative powerhouse offering event production, casting, and talent management."
        />
        <meta
          name="keywords"
          content="about SPL Kenya, event agency Nairobi, creative agency Kenya"
        />
      </Helmet>

      <section className="about">
                  <div className="bg-blue-500 text-white p-4">
  Tailwind is working!
</div>
        <div className="bg-image">
        <div className="about-overlay">
          <h2 className="about-header">Who We Are</h2>
          <p className="about-title">Crafting Moments That Resonate.</p>
          <p className="about-description">
            SPL is Kenya’s creative production powerhouse. From cultural showcases to corporate
            spectacles, we blend bold ideas with flawless execution. For over 5 decades,
            we’ve built moments that move people through dance, sound, stage, and screen.
          </p>
          <p className="about-title">Our Mission.</p>
          <p className='about-description'>Igniting stories that celebrate diversity, spark inspiration and radiate creative brilliance</p>
        </div>
        </div>
      </section>
    </>
  );
}
