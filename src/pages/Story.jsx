import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Assets
// Static Asset Paths
const ownersImg = '/assets/owners.jpg';
const press1 = '/assets/press_1.jpg';
const press2 = '/assets/press_2.jpg';
const press3 = '/assets/press_3.jpg';
const restaurantImg = '/assets/restaurant_image.webp';
const kitchenImg = '/assets/restaurant_image2.jpg';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Story() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-surface-base text-content-primary min-h-screen selection:bg-accent-gold/30">
      
      {/* Hero Section (Parallax) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={restaurantImg} 
            alt="Chatpati Delhi Exterior" 
            className="w-full h-full object-cover brightness-[0.3]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent" />
        </motion.div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 text-primary-ivory drop-shadow-2xl"
          >
            Our <span className="text-accent-gold italic font-light">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-sm md:text-lg tracking-widest uppercase text-primary-ivory/80"
          >
            A legacy of authentic Indian street food
          </motion.p>
        </div>
      </section>

      {/* The Timeline Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-40">
        
        {/* Progress Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-border-subtle hidden md:block">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-accent-gold origin-top"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />
        </div>

        {/* Section 1: The Founders */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32 lg:mb-48 items-center">
          <div className="md:text-right md:pr-12">
            <FadeIn>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-4 block">The Vision</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-snug">
                A Unified <br className="hidden md:block"/> Dream
              </h2>
              <div className="font-sans text-content-secondary leading-relaxed space-y-6">
                <p>
                  Chatpati Delhi was born from a shared vision between <strong>Jimmy, Hema Singh, Pradeep Singh, and Abhijit Pingle</strong>. We united over a profound love for the unapologetic flavors of our heritage.
                </p>
                <p>
                  We refused to adapt our recipes. We wanted to recreate the exact vibrant, bustling experience of Delhi's streets—where every bite is a perfect balance of spice, tang, and warmth.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm group">
            <FadeIn className="w-full h-full">
              <div className="absolute inset-0 bg-accent-gold/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img 
                src={ownersImg} 
                alt="Founders of Chatpati Delhi" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </FadeIn>
          </div>
        </div>

        {/* Section 2: The Journey */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32 lg:mb-48 items-center">
          <div className="order-2 md:order-1 relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm group">
            <FadeIn className="w-full h-full">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              <video 
                src="/assets/cover/story_mobile_video.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </FadeIn>
          </div>
          <div className="order-1 md:order-2 md:pl-12">
            <FadeIn>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-4 block">The Craft</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-snug">
                From Delhi to <br className="hidden md:block"/> New Jersey
              </h2>
              <div className="font-sans text-content-secondary leading-relaxed space-y-6">
                <p>
                  What started as a passion project blossomed into a beloved destination at <strong>1636 NJ-27, Edison, NJ 0881</strong>. 
                </p>
                <p>
                  Led by <strong>Chef Hema Singh</strong>, our 14-person kitchen team transforms a modest storefront into an extraordinary South Asian culinary experience. We meticulously roast and grind our own spices daily to release their essential oils, preserving the true soul of Indian cuisine.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Section 2.5: The Driving Force */}
        <div className="relative mb-32 lg:mb-48">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="group relative bg-surface-card border border-border-subtle p-8 md:p-12 lg:p-16 hover:border-accent-gold/50 transition-all duration-700 shadow-xl overflow-hidden cursor-default hover:shadow-[0_0_40px_rgba(226,160,96,0.15)] transform hover:-translate-y-2">
              {/* Interactive background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-6 block relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">The Driving Force</span>
              <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-snug relative z-10 text-primary-ivory group-hover:text-accent-gold transition-colors duration-500">
                Abhijit <span className="italic text-white group-hover:text-primary-ivory transition-colors duration-500">Pingle</span>
              </h2>
              
              <div className="font-sans text-content-secondary leading-relaxed space-y-6 relative z-10 text-sm md:text-base text-left md:text-center max-w-3xl mx-auto">
                <p className="group-hover:text-content-primary transition-colors duration-500">
                  As the Founder of Chatpati Delhi, Abhijit is the driving force behind our catering success. With over 18 years of experience in the hospitality and catering industry, he has built a reputation for delivering exceptional culinary experiences with professionalism and attention to detail.
                </p>
                <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  Having successfully managed and catered more than 1,000 events—ranging from intimate family gatherings to large-scale weddings, corporate functions, and community celebrations—he brings a wealth of expertise to every occasion.
                </p>
                <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  His passion for authentic Indian cuisine, commitment to quality, and dedication to customer satisfaction have helped establish Chatpati Delhi as a trusted name in catering, creating memorable experiences for clients across the region.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Section 3: Press & Recognition */}
        <div className="relative pt-24 mb-24">
          <FadeIn className="text-center mb-16 lg:mb-24">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-4 block">Recognition</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Word on the <span className="italic text-accent-gold">Street</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="group relative overflow-hidden bg-surface-paper border border-border-subtle aspect-[3/4] flex flex-col justify-end p-8 hover:border-accent-gold/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-black">
                  <img src={press1} alt="Press Feature 1" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-paper via-surface-paper/80 to-transparent" />
                </div>
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-accent-gold mb-2">The Peasant Wife</h3>
                  <p className="font-sans text-sm text-content-secondary leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Recognized for bringing a genuine, unapologetic slice of Indian culture to the local culinary landscape.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group relative overflow-hidden bg-surface-paper border border-border-subtle aspect-[3/4] flex flex-col justify-end p-8 hover:border-accent-gold/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-black">
                  <img src={press2} alt="Press Feature 2" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-paper via-surface-paper/80 to-transparent" />
                </div>
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-accent-gold mb-2">NY Times Best</h3>
                  <p className="font-sans text-sm text-content-secondary leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Earning a spot on the 2025 Best Restaurants List for our dedication to authentic Chole Bhature.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group relative overflow-hidden bg-surface-paper border border-border-subtle aspect-[3/4] flex flex-col justify-end p-8 hover:border-accent-gold/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-black">
                  <img src={press3} alt="Press Feature 3" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-paper via-surface-paper/80 to-transparent" />
                </div>
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-accent-gold mb-2">Local Acclaim</h3>
                  <p className="font-sans text-sm text-content-secondary leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Continuously celebrated by the community as the premier destination for true Delhi street food.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </div>
  );
}
