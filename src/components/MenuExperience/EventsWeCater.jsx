import React, { useState } from 'react';
import { assets } from '../../data/assetMap';
import { useNavigate } from 'react-router-dom';

const EVENT_LIST = [
  { name: "Wedding", image: '/assets/event_wedding.png' },
  { name: "Baby Shower", image: '/assets/event_baby_shower.png' },
  { name: "Mehndi Function", image: '/assets/event_mehndi.png' },
  { name: "Haldi Function", image: '/assets/event_haldi.png' },
  { name: "Birthday Parties", image: '/assets/event_birthday.png' },
  { name: "Graduation Parties", image: '/assets/event_graduation.png' },
  { name: "Retirement Parties", image: '/assets/event_retirement.png' },
  { name: "Family Dinners", image: '/assets/event_family.png' },
  { name: "Engagement Celebrations", image: '/assets/event_engagement.png' },
  { name: "Corporate Events", image: '/assets/event_corporate.png' },
  { name: "Holiday Parties", image: '/assets/event_holiday.png' },
  { name: "Get Together", image: '/assets/event_get_together.png' },
  { name: "Kitty Parties", image: '/assets/event_kitty_party.png' },
];

export default function EventsWeCater() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="py-32 w-full bg-surface-base relative border-t border-border-subtle overflow-hidden min-h-screen flex items-center">
      
      {/* Dynamic Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {EVENT_LIST.map((ev, index) => (
          <div 
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={ev.image || assets.menu.feast} 
              alt="" 
              className="w-full h-full object-cover brightness-[0.25] scale-105"
            />
          </div>
        ))}
        {/* Default background when nothing is hovered */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${hoveredIndex === null ? 'opacity-100' : 'opacity-0'}`}>
           <div className="w-full h-full bg-surface-accent" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        <div className="mb-16 md:mb-24">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold/70 block mb-4 transition-colors duration-500">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-content-primary transition-colors duration-500">
            Events We Cater
          </h2>
        </div>

        {/* Kinetic Typography List */}
        <div className="flex flex-col border-t border-border-subtle/50">
          {EVENT_LIST.map((ev, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setHoveredIndex(index);
                } else {
                  navigate('/contact');
                }
              }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-8 border-b border-border-subtle/50 cursor-pointer transition-colors duration-500"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="font-sans text-xs md:text-sm tracking-widest text-content-secondary group-hover:text-accent-gold transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-content-secondary group-hover:text-primary-ivory transition-colors duration-500 transform origin-left group-hover:translate-x-4">
                  {ev.name}
                </h3>
              </div>
              
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500">
                <span className="font-sans text-[10px] tracking-widest uppercase text-accent-gold border border-accent-gold/30 px-6 py-3 rounded-full backdrop-blur-md">
                  Inquire Now
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:text-left z-20 relative">
           <button onClick={() => navigate('/contact')} className="md:hidden font-sans text-xs tracking-widest uppercase text-accent-gold border border-accent-gold/30 px-8 py-4 rounded-full backdrop-blur-md bg-surface-base/50">
              Inquire Now
           </button>
        </div>
      </div>
    </section>
  );
}
