import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#222] text-[#ccc] font-sans leading-relaxed">
      {/* Top Section */}
      <div className="py-20 border-b border-[#444]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-start relative max-md:flex-col max-md:gap-10">
            <div className="flex flex-col gap-4 md:flex-row md:gap-12 flex-1 text-left max-md:items-center">
              <h3 className="text-sm font-semibold uppercase tracking-wide min-w-[140px]">Location</h3>
              <p className="text-sm leading-[2.2]">Lansing, Delta Township 6334 W.<br />Saginaw, Suite D</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-px bg-[#444]" />

            <div className="flex flex-col gap-4 md:flex-row md:gap-12 flex-1 text-right max-md:items-center max-md:text-left md:pl-16">
              <h3 className="text-sm font-semibold uppercase tracking-wide min-w-[140px]">Working Hours</h3>
              <p className="text-sm leading-[2.2]">Mon – Thu, 9:30 AM – 6:00 PM EST<br />Fri, 9:30 AM – 3:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="py-20 border-b border-[#444]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-28 mt-8">
            {/* Newsletter */}
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed">
                Sign up for our newsletter to receive special offers, news and great sales notifications.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="flex-1 px-6 py-4 bg-[#333] text-[#ccc] text-sm placeholder-[#999] outline-none"
                />
                <button
                  type="submit"
                  className="px-9 py-4 bg-white text-[#222] text-xs font-semibold uppercase tracking-wider hover:bg-gray-200 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-6">Links</h3>
                <ul className="space-y-3 text-sm uppercase tracking-wide">
                  <li><a href="#" className="hover:text-white">Home</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Shop</a></li>
                  <li><a href="#" className="hover:text-white">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-6">Info</h3>
                <ul className="space-y-3 text-sm uppercase tracking-wide">
                  <li><a href="#" className="hover:text-white">Team</a></li>
                  <li><a href="#" className="hover:text-white">Our Mission</a></li>
                  <li><a href="#" className="hover:text-white">Our History</a></li>
                  <li><a href="#" className="hover:text-white">Contacts</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-6">Socials</h3>
                <ul className="space-y-3 text-sm uppercase tracking-wide">
                  <li><a href="#" className="hover:text-white">Instagram</a></li>
                  <li><a href="#" className="hover:text-white">Pinterest</a></li>
                  <li><a href="#" className="hover:text-white">Facebook</a></li>
                  <li><a href="#" className="hover:text-white">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-12 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs text-[#999] m-0">AxiomThemes © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
