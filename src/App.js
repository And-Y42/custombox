//Test, insert logo (in pdf or image format), choose what size box want (with blank options shownas pdf)

import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const pdfRef = useRef();
  const pdfPath = process.env.PUBLIC_URL + "/6x6x4-32ECT_DigitalPreview.pdf";


  return (
    <div className="App">
      <header className="App-header packaging-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>BoxPro Packaging Solutions</h1>
          <p>
            Custom packaging for every product, delivered fast and reliable.
          </p>
          <a href="#pdf-preview" className="App-link hero-link">
            Preview Your Package PDF
          </a>
        </div>
      </header>

      <main>
        <section id="pdf-preview" className="section pdf-section">
          <h2>Packaging Design Preview</h2>
          <div className="pdf-container">
            <iframe
              ref={pdfRef}
              title="Package Design PDF"
              src={process.env.PUBLIC_URL + "/6x6x4-32ECT_DigitalPreview.pdf"}
              className="pdf-iframe"
              width="1100"
              height="900"
            ></iframe>
          </div>
          <button className="download-btn" onClick={() => window.open(pdfPath, '_blank')}>
            Download This PDF
          </button>
        </section>

        <section className="section services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Custom Boxes</h3>
              <p>Tailored box sizes, materials, and branding for every need.</p>
            </div>
            <div className="service-card">
              <h3>Eco-Friendly Options</h3>
              <p>Recycled and sustainable packaging for responsible brands.</p>
            </div>
            <div className="service-card">
              <h3>Prototyping</h3>
              <p>Get physical samples or PDF proofs before you order.</p>
            </div>
            <div className="service-card">
              <h3>Bulk Discounts</h3>
              <p>Great rates for startups and large-scale manufacturing.</p>
            </div>
          </div>
        </section>

        <section className="section about-section">
          <h2>About BoxPro</h2>
          <p>
            BoxPro is trusted by hundreds of businesses for creative, sturdy, and affordable packaging. 
            We help you stand out on the shelf and protect your products with innovative, reliable box solutions.
          </p>
        </section>

        <section className="section contact-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="How can we help you?" required />
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <p>Email: info@boxpro.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>123 Package Ave, Box City, USA</p>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>© {new Date().getFullYear()} BoxPro Packaging Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
