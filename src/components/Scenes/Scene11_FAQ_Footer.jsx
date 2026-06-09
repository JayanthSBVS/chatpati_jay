import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="group cursor-pointer border-b border-content-primary/5 pb-8" onClick={onClick}>
      <h3 className={`
        font-serif transition-colors duration-700
        text-lg md:text-2xl lg:text-3xl
        font-medium md:font-normal
        ${isOpen ? 'text-accent-gold' : 'text-content-primary/60 group-hover:text-content-primary/90'}
      `}>
        {question}
      </h3>
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}`}>
        <p className="font-sans text-[11px] md:text-sm text-content-primary/50 leading-relaxed max-w-xl font-normal">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function Scene11_FAQ_Footer() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "Do you cater weddings?", a: "From intimate family ceremonies to massive royal scale banquets, we bring the heart of Delhi to any sized wedding. Every detail is crafted to evoke luxury and authentic celebration." },
    { q: "Can menus be customized?", a: "Every celebration is unique. Our chefs craft completely bespoke menus tailored to your exact emotional and dietary requirements, ensuring a flawless pairing of luxury and tradition." },
    { q: "Are vegetarian menus available?", a: "Chatpati features an extensive, world-class vegetarian and vegan offering that sacrifices absolutely nothing in luxury, depth, or authentic flavor." }
  ];

  return (
    <section className="relative w-full bg-surface-base flex flex-col">
      
      {/* QUIET CONVERSATION (FAQ) */}
      <div className="relative w-full py-24 md:py-36 lg:py-48 px-6 md:px-12 lg:px-8 flex flex-col items-center justify-center">
        <div className="absolute top-[6%] z-20 text-center w-full">
          <span className="font-sans text-[9px] tracking-[0.4em] text-accent-gold uppercase font-medium md:font-normal opacity-80 md:opacity-60">Before The Celebration Begins</span>
        </div>

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(226,160,96,0.05)_0%,_transparent_70%)]" />
        
        <div className="relative z-10 w-full max-w-2xl flex flex-col gap-7 md:gap-8 mt-8">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(idx)} 
            />
          ))}
        </div>
      </div>

      {/* FAREWELL COURTYARD (FOOTER) */}
      <footer className="relative w-full h-[80vh] md:h-[85vh] lg:h-screen flex flex-col items-center justify-end pb-10 md:pb-12 overflow-hidden bg-surface-paper">
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-surface-paper via-surface-paper to-transparent z-10" />
        
        <div className="absolute inset-0 z-0 flex items-end justify-center opacity-40 md:opacity-30">
          <img src="/assets/restaurants_outside_image.webp" alt="Farewell" className="w-full h-full object-cover object-bottom" style={{ mixBlendMode: 'var(--img-blend-multiply)' }} />
        </div>

        {/* Headline — single responsive implementation */}
        <div className="relative z-20 text-center w-full px-6 md:px-8 mb-16 md:mb-24 lg:mb-32">
          <h2 className="
            font-serif tracking-tighter leading-[0.9] text-content-primary/85
            text-3xl font-bold
            sm:text-4xl
            md:text-5xl md:font-semibold
            lg:text-7xl lg:font-normal
          ">
            Crafting Delhi Memories<br/>
            <span className="
              text-2xl tracking-widest font-normal
              sm:text-3xl
              md:text-4xl
              lg:text-6xl
            ">In America.</span>
          </h2>
        </div>

        {/* Footer links — single responsive row that wraps on mobile */}
        <div className="relative z-20 w-full max-w-6xl px-6 md:px-8 font-sans text-[9px] md:text-[9px] tracking-[0.2em] text-accent-gold/50 uppercase">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-5 md:gap-0">
            <span>© {new Date().getFullYear()} Chatpati Delhi</span>
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="hover:text-accent-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent-gold transition-colors">Contact</a>
              <a href="#" className="hover:text-accent-gold transition-colors">Location</a>
            </div>
          </div>
        </div>
      </footer>

    </section>
  );
}
