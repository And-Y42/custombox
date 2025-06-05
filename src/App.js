import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';      // Your improved form
import MyPdf from './MyPdf';        // Your improved PDF template
import { PDFViewer } from '@react-pdf/renderer';  // For in-browser PDF preview

function App() {
  // This state tracks all form fields
  const [pdfData, setPdfData] = useState({
    orderNo: '',
    weight: '',
    dimension: '6x6x6',
    material: 'White',
  });

  return (
    <div className="App">
      <header className="App-header packaging-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>InkWise Packaging Solutions</h1>
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
          <div className="pdf-form-preview-container" style={{ display: 'flex', gap: '2rem' }}>
            <div>
              <MyForm onUpdate={setPdfData} />
            </div>
            <div style={{ minWidth: 400 }}>
              {/* Modern Dynamic PDF Preview */}
              <PDFViewer width={1200} height={600}>
                <MyPdf {...pdfData} />
              </PDFViewer>
            </div>
          </div>
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
          <h2>About InkWise</h2>
          <p>
            Description
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
            <p>Email: info@inkwise.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>123 Package Ave, Box City, USA</p>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>© {new Date().getFullYear()} InkWise Packaging Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
