import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xeqdq6r', 'template_o9r1vkg', form.current, 'NLEJz270c-r-b0oQI')
            .then(() => {
                setSent(true);
                e.target.reset();
                setTimeout(() => setSent(false), 5000); // hides message after 5s
            })
            .catch((err) => {
                console.error('Email send error:', err);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>joelmounts@gmail.com</h5>
                        <a href="mailto:joelmounts@gmail.com" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                    {sent && <p className='confirmation-message'>Message sent successfully!</p>}
                </form>
            </div>
        </section>
    )
}

export default Contact