'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Placeholder
      'YOUR_TEMPLATE_ID', // Placeholder
      e.currentTarget,
      'YOUR_PUBLIC_KEY' // Placeholder
    )
    .then(() => {
        setStatus('Message sent successfully! We will contact you soon.');
    }, (error) => {
        setStatus('Failed to send the message. Please try again.');
        console.error(error);
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <p className={styles.subtitle}>LET'S BUILD TOGETHER</p>
          <h2>YOUR REQUIREMENTS.<br/>OUR EXPERTISE.</h2>
          <p className={styles.description}>
            Tell us your requirements and our team will get in touch with a customized solution. We respond within hours. Or call / WhatsApp us directly for faster replies.
          </p>
        </div>
        
        <div className={styles.formWrapper}>
          <form onSubmit={sendEmail} className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" name="user_name" placeholder="Your Name" required className={styles.input} />
              <input type="text" name="company_name" placeholder="Company Name" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" name="user_phone" placeholder="Mobile Number" required className={styles.input} />
              <input type="email" name="user_email" placeholder="Email Address" required className={styles.input} />
            </div>
            <select name="product_required" required className={styles.select}>
              <option value="" disabled selected>Product Required</option>
              <option value="LDPE Garbage Bags">LDPE Garbage Bags</option>
              <option value="Biohazard Printed Garbage Bags">Biohazard Printed Garbage Bags</option>
              <option value="LDPE Membrane Sheet">LDPE Membrane Sheet for PCC Construction</option>
              <option value="Barricade / Warning Tapes">Barricade / Warning Tapes</option>
              <option value="Cargo Pallet Covers">Cargo Pallet Covers</option>
              <option value="Others">Others</option>
            </select>
            <textarea name="message" placeholder="Your Requirements" rows={4} required className={styles.textarea}></textarea>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Enquiry</button>
            {status && <p className={styles.statusMessage}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
