import "./components.css";
const testimonials = [
  {
    quote:
      "Working with SEO Production Limited has consistently brought energy and vibrancy to our corporate events. Their team delivers high-impact entertainment from dynamic drummers and dancers to awe-inspiring acrobats—that leaves lasting impressions on our guests. Professional, punctual, and culturally thoughtful, every performance reflects our brand values while engaging diverse audiences. We highly recommend them for memorable and seamless entertainment experiences.",
    name: "Charles Wambugu",
    title: "Head of Events, IMG Kenya",
  },
  {
    quote:
      "SEO Production Limited delivered outstanding décor and branding solutions that elevated our corporate spaces and visual identity. Their creativity, professionalism, and attention to detail made a lasting impact. We highly recommend them.",
    name: "Lina Bahati",
    title: "Middle East Bank Kenya",
  },
  {
    quote:
      "Working with SEO Production Limited for our casting needs was an outstanding experience from start to finish. They understood our vision and delivered exceptional talent perfectly aligned with our goals. Professional, responsive, and detail oriented, they made the casting process seamless. The talent brought incredible energy and authenticity to the production. We couldn’t be happier with the results and look forward to working together again. Highly recommended for top-tier casting services.",
    name: "Maria Ndegwa",
    title: " Production Coordinator, Core Production K Ltd.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-author">
              — {t.name}, {t.title}
            </p>
          </div>
        ))}
      </div>
      <img src={"/assets/audiovisual3.jpg"} alt="audiovisual" />
    </section>
  );
}
