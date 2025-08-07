import React from 'react';
import NavbarServices from "../Components/NavbarServices";
import Footer from './Footer';


const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pt-20">
      <NavbarServices />


      {/* Header Section */}
      <header 
        className="relative w-full h-48 flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl font-bold">Contacts</h1>
        <nav className="relative z-10 flex space-x-2 text-sm mt-2">
          <a href="/" className="hover:text-white">Home</a>
          <span>/</span>
          <span>Contacts</span>
        </nav>
      </header>

      {/* Contact Info and Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 w-full max-w-4xl">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Office Info */}
            <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
              <div className="text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Our Main Office</h3>
                <p>Soho 94 Broadway St</p>
                <p>New York, NY 10001</p>
              </div>
            </div>

            {/* Phone Info */}
            <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
              <div className="text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1.45 0 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Phone Number</h3>
                <p>234-876-5400</p>
                <p>888-0123-4567 Toll Free</p>
              </div>
            </div>

            {/* Fax Info */}
            <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
              <div className="text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 9h-6V4h6v5zm-1 1V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5l4 3.5V6l-4 3.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Fax</h3>
                <p>1-234-567-8900</p>
              </div>
            </div>

            {/* Email Info */}
            <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
              <div className="text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM4 0h16v2H4V0zm0 20h16v2H4v-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p>hello@theme.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-300 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Enter your Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Enter a valid email address" className="w-full p-2 border rounded" />
              <textarea placeholder="Enter your message" className="w-full p-2 border rounded h-24"></textarea>
              <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-96 mt-6">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.520153614387!2d-74.00601568449518!3d40.71993397932695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a0e2a64d%3A0x2a7c8e2e8e8e8e8e!2sSoho%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1691123456!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
    
  );
};

export default Contact;