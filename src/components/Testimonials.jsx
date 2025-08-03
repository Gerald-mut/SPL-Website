import './components.css';
const testimonials = [
  {
    quote:"Working with SEO Production Limited has consistently brought energy and vibrancy to our corporate events. Their team delivers high-impact entertainment from dynamic drummers and dancers to awe-inspiring acrobats—that leaves lasting impressions on our guests. Professional, punctual, and culturally thoughtful, every performance reflects our brand values while engaging diverse audiences. We highly recommend them for memorable and seamless entertainment experiences.",
    name: "Charles Wambugu",
    title: "Head of Events, IMG Kenya",
  },
  {
    quote: "Working with SEO Production Limited has consistently brought energy and vibrancy to our corporate events. Their team delivers high-impact entertainment from dynamic drummers and dancers to awe-inspiring acrobats—that leaves lasting impressions on our guests. Professional, punctual, and culturally thoughtful, every performance reflects our brand values while engaging diverse audiences. We highly recommend them for memorable and seamless entertainment experiences.",
    name: "Brian",
    title: "Creative Director, Unilever",
    image: "./assets/testimonial2.jpg"
  },
  {
    quote: "Working with SEO Production Limited has consistently brought energy and vibrancy to our corporate events. Their team delivers high-impact entertainment from dynamic drummers and dancers to awe-inspiring acrobats—that leaves lasting impressions on our guests. Professional, punctual, and culturally thoughtful, every performance reflects our brand values while engaging diverse audiences. We highly recommend them for memorable and seamless entertainment experiences.",
    name: "Sharon",
    title: "Marketing Lead, Telkom Kenya",
    image: "./assets/testimonial3.jpg"
  }
];


export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-author">— {t.name}, {t.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
