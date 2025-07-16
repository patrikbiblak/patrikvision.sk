import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollAnimation from "../../hooks/ScrollAnimation";
import "../../styles/contactsection.css";

const ContactSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const ref = useRef(null);
  const formRef = useRef();

  ScrollAnimation(ref);
  ScrollAnimation(leftRef, { customClass: 'left' });
  ScrollAnimation(rightRef, { customClass: 'right' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'contact@patrikvision.sk' },
    { icon: Phone, label: 'Telefon', value: '+421 918 755 276' },
    { icon: MapPin, label: 'Poloha', value: 'Slovensko' },
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-heading" ref={ref}>
          <h2>Ozvite sa mi!</h2>
          <p>Rád by som počul o vašom projekte. Poďme spolu vytvoriť niečo úžasné!</p>
        </div>

        <div className="contact-content">
          <div className="contact-box" ref={leftRef}>
            <h3>Pošli správu</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="name">Meno</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Správa</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Odosielam…' : 'Odoslať'}
              </button>

              {status === 'success' && <p className="success">Správa odoslaná! Ďakujem.</p>}
              {status === 'error'   && <p className="error">Chyba pri odoslaní. Skús neskôr.</p>}
            </form>
          </div>

          <div className="contact-box" ref={rightRef}>
            <h3>Kontaktné údaje</h3>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="contact-info-item">
                  <Icon />
                  <div>
                    <p>{detail.label}</p>
                    <p>{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
    </section>
  );
};

export default ContactSection;