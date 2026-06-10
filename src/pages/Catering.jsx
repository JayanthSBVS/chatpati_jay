import React, { useEffect } from 'react';

export default function Catering() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const cateringSegments = [
    {
      id: 'weddings',
      title: 'Weddings & Pre-Wedding',
      subtitle: 'Grandeur in every bite',
      description: 'Elevate your special day with our signature Live Chaat counters, aromatic Tandoor stations, and traditional dessert bars. We bring the vibrant energy of Delhi to your celebration.',
      image: '/assets/event_wedding.png',
      features: ['Live Chaat Counters', 'Tandoor Stations', 'Dessert Bars'],
      cuisines: ['Chatpati Chaat', 'Tandoori Daawat', 'Meethe Me'],
      gallery: ['/assets/event_mehndi.png', '/assets/floral-arch.jpeg']
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      subtitle: 'Refined executive catering',
      description: 'Impress clients and reward your team with our premium lunch services and executive menus. We ensure a seamless, high-quality dining experience tailored for the professional environment.',
      image: '/assets/event_corporate.png',
      features: ['Executive Menus', 'Lunch Service', 'Gala Dinners'],
      cuisines: ['Tadka Marke', 'Biryani ki Kahani', 'Old School Paranthas'],
      gallery: ['/assets/restaurant_image.webp', '/assets/human_wall.png']
    },
    {
      id: 'private',
      title: 'Private Celebrations',
      subtitle: 'Intimate dining experiences',
      description: 'Whether it is a birthday, an anniversary, or a house party, our custom catering packages bring the luxury of Chatpati Delhi directly to your home or chosen venue.',
      image: '/assets/event_family.png',
      features: ['Birthdays', 'Anniversaries', 'House Parties'],
      cuisines: ['Roll Baby Roll', 'Snacks ka Chaska', 'Curry Main Kya Hai'],
      gallery: ['/assets/restaurant_image2.jpg', '/assets/menu_feast.png']
    },
    {
      id: 'festivals',
      title: 'Festivals & Community',
      subtitle: 'Joyous communal feasts',
      description: 'Celebrate Diwali, Holi, and other community events with large-scale catering that honors tradition. We specialize in handling large crowds without compromising on authentic flavor or presentation.',
      image: '/assets/delhi_palace_night.png',
      features: ['Diwali Parties', 'Holi Celebrations', 'Community Events'],
      cuisines: ['What’s Sizzling', 'Mumbai Local', 'Kya Piyoge'],
      gallery: ['/assets/chole_bhature.jpg', '/assets/menu_fire.png']
    }
  ];

  return (
    <div className="bg-surface-base text-content-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center pt-24 overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/floral-arch.jpeg" 
            alt="Catering by Chatpati Delhi" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent-gold mb-6 block">Premium Catering Services</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-content-primary">
            Extraordinary Events, <br/> <span className="text-accent-gold italic">Unforgettable Food</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            From intimate private dinners to lavish weddings, bring the authentic taste and luxury hospitality of Chatpati Delhi to your next celebration.
          </p>
          <a 
            href="#inquiry" 
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-surface-base font-sans text-xs tracking-widest uppercase hover:bg-content-primary transition-colors min-h-[48px]"
          >
            Inquire Now
          </a>
        </div>
      </section>

      {/* Segments */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col gap-32">
        {cateringSegments.map((segment, index) => (
          <section 
            key={segment.id} 
            id={segment.id}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            style={index > 0 ? { contentVisibility: 'auto', containIntrinsicSize: '800px' } : {}}
          >
            {/* Image / Gallery */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="relative h-[400px] lg:h-[500px] w-full border border-border-subtle bg-surface-paper">
                <img 
                  src={segment.image} 
                  alt={segment.title} 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {segment.gallery.map((img, i) => (
                  <div key={i} className="relative h-[200px] border border-border-subtle bg-surface-paper">
                    <img 
                      src={img} 
                      alt={`${segment.title} setup ${i+1}`} 
                      className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent-gold mb-4 block">
                {segment.subtitle}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-content-primary">
                {segment.title}
              </h2>
              <p className="font-sans text-base text-content-secondary leading-relaxed mb-8">
                {segment.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="font-serif text-xl text-accent-gold mb-4">Sample Setup</h3>
                  <ul className="space-y-2">
                    {segment.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-sans text-sm text-content-secondary">
                        <span className="w-1 h-1 bg-accent-gold rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-accent-gold mb-4">Recommended</h3>
                  <ul className="space-y-2">
                    {segment.cuisines.map((cuisine, i) => (
                      <li key={i} className="flex items-center gap-2 font-sans text-sm text-content-secondary">
                        <span className="w-1 h-1 bg-accent-gold rounded-full shrink-0" />
                        {cuisine}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <a 
                  href="#inquiry" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-surface-base transition-colors duration-300 font-sans text-xs tracking-widest uppercase min-h-[48px]"
                >
                  Request Proposal
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Inquiry Form CTA */}
      <section id="inquiry" className="py-24 bg-surface-paper border-t border-border-subtle scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-accent-gold mb-6">Plan Your Event</h2>
          <p className="font-sans text-content-secondary mb-10">
            Provide us with the details of your upcoming event, and our catering specialists will craft a bespoke proposal tailored to your vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input type="text" placeholder="Full Name" className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold min-h-[48px]" />
            <input type="email" placeholder="Email Address" className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold min-h-[48px]" />
            <select className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold min-h-[48px] appearance-none">
              <option value="">Event Type</option>
              <option value="wedding">Wedding / Pre-Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="private">Private Celebration</option>
              <option value="festival">Festival / Community</option>
            </select>
            <input type="text" placeholder="Estimated Guests" className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold min-h-[48px]" />
            <textarea placeholder="Event Details & Requirements" rows="4" className="bg-surface-base border border-border-subtle px-4 py-3 font-sans text-sm text-content-primary focus:outline-none focus:border-accent-gold md:col-span-2 resize-none"></textarea>
            <button className="md:col-span-2 bg-accent-gold text-surface-base font-sans text-xs tracking-widest uppercase py-4 hover:bg-content-primary transition-colors min-h-[48px]">
              Submit Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
