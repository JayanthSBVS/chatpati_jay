import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="group cursor-pointer border-b border-[#F5EFEB]/5 pb-8" onClick={onClick}>
      <h3 className={`font-serif text-xl md:text-3xl transition-colors duration-700 ${isOpen ? 'text-[#CBAA6A]' : 'text-[#F5EFEB]/50 group-hover:text-[#F5EFEB]/90'}`}>
        {question}
      </h3>
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
        <p className="font-sans text-xs md:text-sm text-[#F5EFEB]/40 leading-relaxed max-w-xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function Scene11_FAQ_Footer() {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqs = [
    { q: "Do you cater weddings?", a: "From intimate family ceremonies to massive royal scale banquets, we bring the heart of Delhi to any sized wedding. Every detail is crafted to evoke luxury and authentic celebration." },
    { q: "Can menus be customized?", a: "Every celebration is unique. Our chefs craft completely bespoke menus tailored to your exact emotional and dietary requirements, ensuring a flawless pairing of luxury and tradition." },
    { q: "Are vegetarian menus available?", a: "Chatpati features an extensive, world-class vegetarian and vegan offering that sacrifices absolutely nothing in luxury, depth, or authentic flavor." }
  ];

  return (
    <section className="relative w-full bg-[#030202] flex flex-col">
      
      {/* QUIET CONVERSATION (FAQ) */}
      <div className="relative w-full py-48 px-8 flex flex-col items-center justify-center">
        {/* Quiet Editorial Heading */}
        <div className="absolute top-[10%] z-20 text-center w-full">
          <span className="font-sans text-[9px] tracking-[0.4em] text-[#CBAA6A]/60 uppercase">Before The Celebration Begins</span>
        </div>

        {/* Firelight glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(226,160,96,0.05)_0%,_transparent_70%)]" />
        
        <div className="relative z-10 w-full max-w-2xl flex flex-col gap-8">
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
      <footer className="relative w-full h-[70vh] md:h-screen flex flex-col items-center justify-end pb-12 overflow-hidden bg-black">
        {/* Fading palace silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black via-black to-transparent z-10" />
        
        <div className="absolute inset-0 z-0 flex items-end justify-center opacity-40 md:opacity-30">
          <img src="/assets/restaurants_outside_image.webp" alt="Farewell" className="w-full h-full object-cover object-bottom" />
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block relative z-20 text-center w-full px-8 mb-32">
          <h2 className="font-serif text-7xl text-[#F5EFEB]/80 tracking-tighter leading-[0.9]">
            Crafting Delhi Memories<br/>In America.
          </h2>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden relative z-20 text-center w-full px-6 mb-24 flex-col items-center">
          <h2 className="font-serif text-4xl text-[#F5EFEB]/90 tracking-widest leading-tight">
            Crafting Delhi Memories
          </h2>
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#CBAA6A]/60 mt-6">In America.</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex relative z-20 flex-row items-center justify-between w-full max-w-6xl px-8 font-sans text-[9px] tracking-[0.2em] text-[#CBAA6A]/40 uppercase">
          <span>© {new Date().getFullYear()} Chatpati Delhi</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#CBAA6A] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#CBAA6A] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#CBAA6A] transition-colors">Location</a>
          </div>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex md:hidden relative z-20 flex-col items-center justify-center w-full px-6 font-sans text-[10px] tracking-[0.2em] text-[#CBAA6A]/50 uppercase gap-6">
          <div className="flex gap-8 border-b border-[#CBAA6A]/20 pb-6">
            <a href="#" className="hover:text-[#CBAA6A] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#CBAA6A] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#CBAA6A] transition-colors">Location</a>
          </div>
          <span className="opacity-50">© {new Date().getFullYear()} Chatpati Delhi</span>
        </div>
      </footer>

    </section>
  );
}
