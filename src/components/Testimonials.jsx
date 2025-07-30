import './components.css';
const testimonials = [
  {
    quote: "Working with SEO Production Limited has consistently elevated the energy and vibrancy of our corporate events. Their ability to curate and deliver high-impact entertainment from dynamic drummers and captivating dancers to awe-inspiring acrobats has left lasting impressions on our guests and stakeholders.The team’s professionalism, punctuality, and attention to cultural detail are exceptional. Each performance is thoughtfully choreographed to reflect our brand values while engaging diverse audiences in a meaningful way. We highly recommend SEO Production Limited for any organization seeking memorable, spirited, and seamless entertainment experiences.",
    name: "Charles Wambugu",
    title: "Head of Events, IMG Kenya",
  },
  {
    quote: "Their choreography added so much energy to our campaign.",
    name: "Brian",
    title: "Creative Director, Unilever",
    image: "./assets/testimonial2.jpg"
  },
  {
    quote: "SPL made our product launch seamless and unforgettable.",
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
