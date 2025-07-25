import image1 from '/assets/choreography3.jpg';
import './Contact.css';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Contact SPL Kenya | Book Event & Talent Services</title>
  <meta name="description" content="Reach out to SPL—Nairobi’s top event & talent production agency. Contact us to plan your next event, casting call, or creative production. Let’s bring your vision to life." />
  <meta name="keywords" content="contact SPL, event planning Nairobi, talent agency Kenya, book SPL, reach SPL Kenya" />
</Helmet>


export default function Contact () {
    return (
        <section className="contact"> 
        <img className='background-img' src={image1} alt="SPL Contact Background" />
        <div className="contact-overlay"></div>
        <div className="contact-content">
            <div className="contact-text">
                <h1 className="contact-title">
                    Lets Create Something Unforgettable
                </h1>
                <p className="contact-description">
                    Whether you're planning a launch, casting talent, or producing a show we’re ready to make it happen!
                </p>
                <h3>
                    Feel free to reach us out at
                </h3>
                <p className='contact-info'>
                    Info@seoproductionske.com <br></br>
                    0722980916
                </p>
            </div>
            <div className="contact-action">
                <form>
                    <form className="booking-form">
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <select required>
                            <option value="">Select a Service</option>
                            <option value="event">Event Management & Production</option>
                            <option value="talent">Talent Management</option>
                            <option value="casting">Casting</option>
                        </select>
                        <button type="submit">Get a Quote</button>
                    </form>

                </form>
            </div>
        </div>
        </section>
    )
}

