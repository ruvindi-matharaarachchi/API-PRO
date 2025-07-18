import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission (e.g., send to API)
  };

  return (
    <main className="contactus-container">
      <section className="contactus-form-section">
        <h1 className="contactus-title">Contact Us</h1>
        <form className="contactus-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company Name <span className="optional">(optional)</span></label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>
          <button type="submit" className="contactus-submit">Send Message</button>
          {submitted && <div className="contactus-success">Thank you! We'll be in touch soon.</div>}
        </form>
      </section>
      <aside className="contactus-details-section">
        <h2 className="contactus-details-title">Contact Details</h2>
        <ul className="contactus-details-list">
          <li><strong>Our Office:</strong> 123 Tech Avenue, Innovation City, Connectiville 45678</li>
          <li><strong>Email Us:</strong> <a href="mailto:hello@apipro.com">hello@apipro.com</a></li>
          <li><strong>Call Us:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a></li>
        </ul>
      </aside>
    </main>
  );
};

export default ContactUs;
