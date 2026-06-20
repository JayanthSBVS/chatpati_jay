import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    functionType: '',
    guests: '',
    requests: '',
    sampleTest: false
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp Formatting
    const message = `*New Food Tasting / Event Inquiry* 🍽️
    
*Name:* ${formData.name}
*Contact:* ${formData.phone}
*Event Date:* ${formData.date}
*Function Type:* ${formData.functionType}
*Estimated Guests:* ${formData.guests}
*Special Requests:* ${formData.requests || 'None'}
*Sample Tasting Requested:* ${formData.sampleTest ? 'Yes, please arrange a tasting' : 'No'}

Please let me know the availability and next steps for the tasting.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/17325168407?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-surface-base text-content-primary pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center pt-24 overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/restaurant_image.webp" 
            alt="Chatpati Delhi Atmosphere" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent-gold mb-6 block"
          >
            Exclusive Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-content-primary"
          >
            Curate Your <span className="text-accent-gold italic">Event Menu</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto"
          >
            Design a bespoke culinary journey for your next event. Provide us with your details, and our chefs will curate a customized menu tasting experience tailored specifically to your vision.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-6 mt-12 relative z-20">
        <div className="bg-surface-card border border-border-subtle p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Event Inquiry</h2>
            <p className="font-sans text-sm text-content-secondary uppercase tracking-widest">
              Our culinary team will contact you within <span className="text-accent-gold font-medium">24 hours</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-widest uppercase text-content-secondary">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold transition-colors min-h-[48px]" 
                  placeholder="John Doe"
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-widest uppercase text-content-secondary">WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold transition-colors min-h-[48px]" 
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              {/* Event Date */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-widest uppercase text-content-secondary">Event Date</label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold transition-colors min-h-[48px] w-full" 
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-widest uppercase text-content-secondary">Estimated Guests</label>
                <input 
                  type="number" 
                  name="guests"
                  required
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold transition-colors min-h-[48px]" 
                  placeholder="e.g. 150"
                />
              </div>

              {/* Function Type */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-sans text-[10px] tracking-widest uppercase text-content-secondary">Type of Function</label>
                <div className="relative" ref={dropdownRef}>
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold transition-colors min-h-[48px] cursor-pointer flex items-center justify-between"
                  >
                    <span className={formData.functionType ? 'text-content-primary' : 'text-content-secondary'}>
                      {formData.functionType || 'Select event type...'}
                    </span>
                    <span className={`text-accent-gold text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-surface-base border border-border-subtle shadow-xl z-50 max-h-60 overflow-y-auto">
                      {['Wedding', 'Corporate Event', 'Birthday Party', 'Baby Shower', 'Private Gathering', 'Other'].map((type) => (
                        <div 
                          key={type}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, functionType: type }));
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-3 font-sans text-sm text-content-primary hover:bg-accent-gold/10 hover:text-accent-gold cursor-pointer transition-colors"
                        >
                          {type === 'Wedding' ? 'Wedding / Pre-Wedding' : type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-sans text-[10px] tracking-widest uppercase text-content-secondary">Special Requests & Details</label>
                <textarea 
                  name="requests"
                  rows="4"
                  value={formData.requests}
                  onChange={handleChange}
                  className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  placeholder="Dietary requirements, specific dishes you'd like to try, venue details, etc."
                ></textarea>
              </div>
            </div>

            {/* Sample Test Checkbox */}
            <div 
              className="flex items-center gap-4 mt-2 mb-2 p-5 border border-border-subtle bg-surface-base hover:border-accent-gold/50 transition-colors cursor-pointer group" 
              onClick={() => setFormData(prev => ({ ...prev, sampleTest: !prev.sampleTest }))}
            >
              <div className={`w-5 h-5 flex shrink-0 items-center justify-center border transition-colors ${formData.sampleTest ? 'bg-accent-gold border-accent-gold' : 'border-content-secondary group-hover:border-accent-gold'}`}>
                {formData.sampleTest && <span className="text-surface-base text-xs font-bold leading-none">✓</span>}
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-sm md:text-base text-content-primary cursor-pointer select-none">
                  Request a Sample Food Tasting
                </label>
                <span className="font-sans text-[10px] text-content-secondary uppercase tracking-widest mt-1">Experience our menu before you finalize</span>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-accent-gold text-surface-base font-sans text-xs tracking-widest uppercase py-5 mt-4 hover:bg-content-primary transition-all duration-300 active:scale-[0.98]"
            >
              Send Inquiry via WhatsApp
            </button>
            
            <p className="text-center font-sans text-xs text-content-secondary mt-6">
              By submitting this form, you will be redirected to WhatsApp to send your inquiry directly to our management team. We will review your requirements and respond within <span className="text-accent-gold">24 hours</span>.
            </p>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="flex flex-col text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-accent-gold mb-4 block"
            >
              Visit Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-content-primary mb-8"
            >
              Our Flagship <span className="text-accent-gold italic">Location</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-content-secondary font-sans font-light"
            >
              <div>
                <h3 className="text-content-primary font-medium tracking-widest uppercase text-xs mb-2">Address</h3>
                <p className="leading-relaxed">
                  Chatpati Delhi<br />
                  1636 NJ-27<br />
                  Edison, NJ 0881
                </p>
              </div>

              <div>
                <h3 className="text-content-primary font-medium tracking-widest uppercase text-xs mb-2">Takeout Orders</h3>
                <p>Phone: (732) 354-3045</p>
                <p className="text-sm mt-1 text-content-secondary/70">Tuesday - Sunday: 11:00 AM - 9:30 PM</p>
              </div>

              <div>
                <h3 className="text-content-primary font-medium tracking-widest uppercase text-xs mb-2">Catering Orders</h3>
                <p>Live Stations (Abhijit): (732) 516-8407</p>
                <p>Tray Orders (Jimmy): (732) 986-0129</p>
                <p className="text-sm mt-1 text-content-secondary/70">Office Hours: Monday - Friday 11:00 AM - 6:00 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video bg-surface-base border border-border-subtle shadow-2xl p-2"
          >
            <iframe 
              src="https://maps.google.com/maps?q=1636%20NJ-27,%20Edison,%20NJ%2008817&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Chatpati Delhi Location"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
