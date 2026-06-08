import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "The Grand Wedding",
    experience: "Royal Buffet Setup",
    station: "Live Chaat & Dosa Counters",
    dishes: "Purani Delhi Jahangiri Chicken, Dum Aloo",
    image: "/assets/event_wedding.png"
  },
  {
    title: "Mehndi & Sangeet",
    experience: "Vibrant Street Food Vibe",
    station: "Raj Kachori & Jalebi Station",
    dishes: "Aloo Tikki, Malai Soya Chaap",
    image: "/assets/event_mehndi.png"
  },
  {
    title: "Corporate Gala",
    experience: "Sophisticated Plated or Buffet",
    station: "Paneer Taco Live Grill",
    dishes: "Lamb Chops, Malai Kofta",
    image: "/assets/event_corporate.png"
  },
  {
    title: "Family Celebration",
    experience: "Fun & Interactive Dining",
    station: "Chole Bhature Stand",
    dishes: "Veg Hakka Noodles, Chicken Lollypop",
    image: "/assets/event_family.png"
  },
  {
    title: "Holiday Party",
    experience: "Warm Winter Feast",
    station: "Tawa Kathal Sukkha",
    dishes: "Sarso Ka Saag, Butter Chicken",
    image: "/assets/menu_feast.png"
  }
];

export default function EventsWeCater() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const wrapper = wrapperRef.current;
      // We calculate the total scrollable width
      const totalWidth = wrapper.scrollWidth - window.innerWidth;

      gsap.to(wrapper, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:h-screen w-full bg-[#050403] relative flex flex-col justify-center overflow-hidden py-24 md:py-0 border-t border-[#CBAA6A]/10">
      <div className="absolute top-12 left-6 md:left-12 z-10 pointer-events-none">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold/70 block mb-2">
          Tailored Experiences
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-primary-cream">
          Events We Cater
        </h2>
      </div>

      <div 
        ref={wrapperRef} 
        className="flex gap-6 md:gap-8 px-6 md:px-32 items-center h-[70vh] md:h-full pt-16 md:pt-20 pb-10 w-full overflow-x-auto snap-x snap-mandatory md:overflow-x-visible md:snap-none hide-scrollbar"
      >
        {events.map((ev, i) => (
          <div 
            key={i} 
            className="w-[85vw] md:w-[400px] lg:w-[500px] shrink-0 h-full rounded-2xl border border-primary-cream/10 bg-[#0a0908] p-8 md:p-12 flex flex-col justify-between group hover:border-primary-gold/30 transition-colors duration-500 relative overflow-hidden snap-center"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src={ev.image} 
                alt="" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="font-serif text-6xl md:text-8xl text-primary-cream/20 absolute -top-4 -right-4 pointer-events-none transition-transform duration-700 group-hover:-translate-y-2">
                0{i + 1}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-primary-gold mb-8">
                {ev.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-[9px] tracking-widest uppercase text-primary-cream/50 mb-1">Recommended Experience</h4>
                  <p className="font-serif text-lg text-primary-cream">{ev.experience}</p>
                </div>
                
                <div className="w-8 h-[1px] bg-primary-gold/30" />

                <div>
                  <h4 className="font-sans text-[9px] tracking-widest uppercase text-primary-cream/50 mb-1">Live Station Focus</h4>
                  <p className="font-serif text-lg text-primary-cream">{ev.station}</p>
                </div>

                <div className="w-8 h-[1px] bg-primary-gold/30" />

                <div>
                  <h4 className="font-sans text-[9px] tracking-widest uppercase text-primary-cream/50 mb-1">Signature Highlights</h4>
                  <p className="font-serif text-lg text-primary-cream">{ev.dishes}</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <button className="font-sans text-xs md:text-sm tracking-widest uppercase text-primary-cream hover:text-primary-gold transition-colors flex items-center gap-4 py-4 w-full md:w-auto">
                Inquire <div className="w-8 h-[1px] bg-current" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
