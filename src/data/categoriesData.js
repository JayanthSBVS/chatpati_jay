export const categoriesData = [
  {
    id: 'delhi-street-food',
    title: 'Delhi Street Food',
    atmosphere: {
      heroImage: '/assets/delhi_palace_night_opt.webp', // We already optimized this
      story: 'The energy of Chandni Chowk. The aroma of live chaat stations. The flavor of old Delhi traditions.',
      visualMotifs: ['Spice markets', 'Chaat stalls', 'Street lights', 'Chandni Chowk architecture']
    },
    signatureExperiences: [
      {
        id: 'raj-kachori',
        name: 'Raj Kachori',
        diet: 'veg',
        image: '/assets/menu_street_opt.webp',
        story: 'Known as the "King of Kachoris," this crisp, golden shell is steeped in history. Served with tamarind glaze and spiced yogurt exactly as it has been for generations in the walled city.',
        ingredients: ['Crispy Semolina Shell', 'Spiced Moong Dal', 'Sweet Yogurt', 'Tamarind Chutney', 'Pomegranate Arils'],
        occasion: 'A vibrant appetizer to kickstart celebrations.',
        eventPairing: 'Perfect as an interactive centerpiece at Mehndi celebrations.'
      },
      {
        id: 'chole-bhature',
        name: 'Amritsari Chole Bhature',
        diet: 'veg',
        image: '/assets/menu_chole_opt.webp',
        story: 'A North Indian masterpiece. Fluffy, cloud-like bhaturas paired with deeply spiced, slow-cooked chickpeas rich in aromatic tea leaves and whole spices.',
        ingredients: ['Slow-cooked Chickpeas', 'Fermented Dough', 'Green Chilies', 'Homemade Spice Blend', 'Pickled Onions'],
        occasion: 'The ultimate comforting brunch or day-time feast.',
        eventPairing: 'Ideal for Haldi ceremonies or morning family gatherings.'
      }
    ],
    dishes: [
      { id: 'd-aloo-tikki', name: 'Aloo Tikki Chaat', diet: 'veg', description: 'Crispy potato patties with sweet yogurt and mint chutney.', price: null },
      { id: 'd-pani-puri', name: 'Pani Puri', diet: 'veg', description: 'Hollow crisp puris filled with tangy, spicy tamarind water.', price: null },
      { id: 'd-chicken-tikka', name: 'Chandni Chowk Chicken Tikka', diet: 'non-veg', description: 'Char-grilled chicken marinated in robust street-style spices.', price: null }
    ],
    events: [
      {
        type: 'mehndi',
        title: 'Mehndi Celebrations',
        description: 'The vibrant, fast-paced nature of Delhi street food makes it the perfect interactive centerpiece for Mehndi celebrations and casual mixers.'
      },
      {
        type: 'wedding',
        title: 'Late Night Wedding Snacks',
        description: 'Keep the energy high during late-night wedding pheras with a live chaat station.'
      }
    ],
    nextJourney: {
      id: 'mumbai-specialties',
      title: 'Mumbai Specialties',
      description: 'Trade the historic alleys of Delhi for the fast urban energy and coastal influences of Mumbai.'
    }
  },
  {
    id: 'mumbai-specialties',
    title: 'Mumbai Specialties',
    atmosphere: {
      heroImage: '/assets/human_wall_opt.webp',
      story: 'Coastal influences. Local street food culture. Fast urban energy.',
      visualMotifs: ['Chowpatty Beach', 'Marine Drive', 'Irani Cafes', 'Bustling markets']
    },
    signatureExperiences: [
      {
        id: 'vada-pav',
        name: 'Bombay Vada Pav',
        diet: 'veg',
        image: '/assets/menu-1_opt.webp',
        story: 'The heartbeat of Mumbai. A spicy, deep-fried potato dumpling nestled inside a soft pav, coated with our signature dry garlic chutney.',
        ingredients: ['Spiced Potato Mash', 'Besan Batter', 'Soft Ladi Pav', 'Dry Garlic Chutney', 'Fried Green Chili'],
        occasion: 'A quick, deeply satisfying burst of flavor.',
        eventPairing: 'Excellent for high-energy corporate events and informal networking.'
      },
      {
        id: 'keema-pav',
        name: 'Irani Keema Pav',
        diet: 'non-veg',
        image: '/assets/menu_feast_opt.webp',
        story: 'A tribute to the iconic Irani cafes of South Bombay. Slow-cooked minced mutton richly spiced, served with buttery, toasted pav.',
        ingredients: ['Minced Mutton', 'Whole Garam Masala', 'Fresh Coriander', 'Buttered Pav', 'Lime'],
        occasion: 'Rich, nostalgic, and incredibly fulfilling.',
        eventPairing: 'A luxurious addition to intimate family dinners or bachelor parties.'
      }
    ],
    dishes: [
      { id: 'm-pav-bhaji', name: 'Chowpatty Pav Bhaji', diet: 'veg', description: 'Mashed vegetable medley cooked on a flat tawa with generous butter.', price: null },
      { id: 'm-bhel-puri', name: 'Bhel Puri', diet: 'veg', description: 'Puffed rice, sev, and onions tossed in tangy tamarind and spicy coriander chutneys.', price: null },
      { id: 'm-bombay-duck', name: 'Bombay Duck Fry', diet: 'non-veg', description: 'Crispy fried Bombay duck fish, a true coastal delicacy.', price: null }
    ],
    events: [
      {
        type: 'corporate',
        title: 'Corporate Mixers',
        description: 'Fast, bold flavors that encourage mingling and conversation without requiring formal seating.'
      },
      {
        type: 'birthday',
        title: 'Birthday Parties',
        description: 'Fun, universally loved street food classics that bring an element of nostalgia to any celebration.'
      }
    ],
    nextJourney: {
      id: 'south-indian',
      title: 'South Indian Traditions',
      description: 'Journey south to explore the mastery of coastal spices and ancient temple recipes.'
    }
  },
  {
    id: 'south-indian',
    title: 'South Indian Traditions',
    atmosphere: {
      heroImage: '/assets/cover_botanical_opt.webp',
      story: 'The rhythm of temple bells. The scent of roasted curry leaves. The mastery of coastal spices.',
      visualMotifs: ['Temple architecture', 'Banana leaf dining', 'Curry leaves', 'Brass serving vessels']
    },
    signatureExperiences: [
      {
        id: 'ghee-roast-dosa',
        name: 'Ghee Roast Dosa',
        diet: 'veg',
        image: '/assets/menu_minimal_opt.webp',
        story: 'Wafer-thin, crisp, and folded with precision. Accompanied by our signature trio of hand-ground chutneys, it is a masterclass in texture and fermentation.',
        ingredients: ['Fermented Rice & Lentil Batter', 'Pure Desi Ghee', 'Coconut Chutney', 'Tomato-Onion Chutney', 'Sambar'],
        occasion: 'A delicate yet robust breakfast or light dinner.',
        eventPairing: 'Ideal for morning wedding rituals and premium corporate breakfasts.'
      },
      {
        id: 'chicken-chettinad',
        name: 'Chicken Chettinad',
        diet: 'non-veg',
        image: '/assets/menu_fire_opt.webp',
        story: 'One of the most aromatic and spiciest dishes from Tamil Nadu. A complex blend of freshly roasted spices, coconut, and curry leaves.',
        ingredients: ['Bone-in Chicken', 'Star Anise', 'Kalpasi (Stone Flower)', 'Dried Red Chilies', 'Fresh Coconut'],
        occasion: 'A fiery, memorable main course that commands attention.',
        eventPairing: 'Perfect for the main dinner spread at a grand wedding reception.'
      }
    ],
    dishes: [
      { id: 's-idli', name: 'Kanchipuram Idli', diet: 'veg', description: 'Steamed rice cakes spiced with black pepper and cumin.', price: null },
      { id: 's-medu-vada', name: 'Medu Vada', diet: 'veg', description: 'Crispy lentil doughnuts served with fresh coconut chutney.', price: null },
      { id: 's-fish-curry', name: 'Malabar Fish Curry', diet: 'non-veg', description: 'Tangy fish curry cooked with kokum and coconut milk.', price: null }
    ],
    events: [
      {
        type: 'wedding',
        title: 'Morning Wedding Rituals',
        description: 'Elegant, sophisticated, and deeply rooted in tradition. Ideal for pre-wedding ceremonies.'
      },
      {
        type: 'corporate',
        title: 'Premium Corporate Breakfasts',
        description: 'A refined and light start to a day of intense meetings.'
      }
    ],
    nextJourney: {
      id: 'north-indian-classics',
      title: 'North Indian Classics',
      description: 'Move from the coastal south to the royal courts and rich gravies of the North.'
    }
  },
  {
    id: 'north-indian-classics',
    title: 'North Indian Classics',
    atmosphere: {
      heroImage: '/assets/footer_palace_opt.webp',
      story: 'Royal courts. Rich gravies. The art of slow cooking over coal.',
      visualMotifs: ['Mughal arches', 'Copper handis', 'Tandoor fires', 'Velvet textures']
    },
    signatureExperiences: [
      {
        id: 'dal-makhani',
        name: 'Dal Makhani',
        diet: 'veg',
        image: '/assets/menu_paneer_opt.webp',
        story: 'Simmered slowly over low embers for 24 hours. A rich, velvety blend of black lentils, fresh cream, and smoked butter that defines North Indian indulgence.',
        ingredients: ['Whole Black Lentils', 'Kidney Beans', 'Fresh Cream', 'White Butter', 'Kasuri Methi'],
        occasion: 'The heart and soul of any premium Indian feast.',
        eventPairing: 'A mandatory inclusion for grand wedding receptions and luxurious family dinners.'
      },
      {
        id: 'butter-chicken',
        name: 'Murgh Makhani (Butter Chicken)',
        diet: 'non-veg',
        image: '/assets/menu_feast_opt.webp',
        story: 'Tender tandoori chicken simmered in a luscious, slightly sweet tomato gravy. A global icon, perfected with our house-smoked spices.',
        ingredients: ['Tandoori Chicken', 'San Marzano Tomatoes', 'Cashew Paste', 'Honey', 'Garam Masala'],
        occasion: 'A universally loved masterpiece that guarantees satisfaction.',
        eventPairing: 'The crown jewel of a corporate gala or large-scale wedding.'
      }
    ],
    dishes: [
      { id: 'n-paneer-butter-masala', name: 'Paneer Butter Masala', diet: 'veg', description: 'Soft cottage cheese cubes in a rich tomato and cashew gravy.', price: null },
      { id: 'n-palak-paneer', name: 'Palak Paneer', diet: 'veg', description: 'Fresh spinach puree with garlic and soft paneer.', price: null },
      { id: 'n-rogan-josh', name: 'Kashmiri Rogan Josh', diet: 'non-veg', description: 'Tender lamb slow-cooked with Kashmiri chilies and aromatic spices.', price: null }
    ],
    events: [
      {
        type: 'wedding',
        title: 'Grand Receptions',
        description: 'The cornerstone of a traditional Indian wedding feast, offering rich and universally appealing flavors.'
      },
      {
        type: 'family',
        title: 'Family Gatherings',
        description: 'Hearty, comforting dishes that encourage sharing and celebration.'
      }
    ],
    nextJourney: {
      id: 'indo-chinese',
      title: 'Indo-Chinese',
      description: 'Experience the fiery, wok-tossed fusion of Indian spices and Chinese cooking techniques.'
    }
  },
  {
    id: 'indo-chinese',
    title: 'Indo-Chinese',
    atmosphere: {
      heroImage: '/assets/cover_peacock_body_opt.webp',
      story: 'Fiery woks. Sizzling sauces. The perfect marriage of two ancient culinary worlds.',
      visualMotifs: ['Wok flames', 'Dark soy glazes', 'Vibrant red chilies', 'Steaming dim sum']
    },
    signatureExperiences: [
      {
        id: 'gobi-manchurian',
        name: 'Gobi Manchurian',
        diet: 'veg',
        image: '/assets/menu_fire_opt.webp',
        story: 'Crispy cauliflower florets tossed in a sticky, sweet, and spicy sauce. The ultimate Indo-Chinese comfort food.',
        ingredients: ['Cauliflower', 'Dark Soy Sauce', 'Garlic', 'Green Chilies', 'Spring Onions'],
        occasion: 'An addictive starter that sets a playful tone.',
        eventPairing: 'Perfect for birthday parties and casual evening gatherings.'
      },
      {
        id: 'chilli-chicken',
        name: 'Hakka Chilli Chicken',
        diet: 'non-veg',
        image: '/assets/menu-2_opt.webp',
        story: 'Wok-tossed chicken in a fiery blend of soy sauce, green chilies, and bell peppers. A staple of the Indian Chinese experience.',
        ingredients: ['Diced Chicken', 'Bell Peppers', 'Fresh Ginger', 'Soy Sauce', 'Green Chilies'],
        occasion: 'Bold, spicy, and deeply satisfying.',
        eventPairing: 'A crowd-favorite at cocktail parties and Mehndi events.'
      }
    ],
    dishes: [
      { id: 'i-veg-hakka-noodles', name: 'Veg Hakka Noodles', diet: 'veg', description: 'Wok-tossed noodles with julienned vegetables and light soy.', price: null },
      { id: 'i-spring-rolls', name: 'Crispy Spring Rolls', diet: 'veg', description: 'Golden fried rolls stuffed with spiced vegetables.', price: null },
      { id: 'i-chicken-fried-rice', name: 'Chicken Fried Rice', diet: 'non-veg', description: 'Classic wok-fried rice with egg, chicken, and spring onions.', price: null }
    ],
    events: [
      {
        type: 'birthday',
        title: 'Birthday Parties',
        description: 'Universally loved, playful flavors that appeal to guests of all ages.'
      },
      {
        type: 'mehndi',
        title: 'Cocktail & Mehndi',
        description: 'Spicy, addictive starters that pair perfectly with evening drinks and celebrations.'
      }
    ],
    nextJourney: {
      id: 'delhi-street-food',
      title: 'Delhi Street Food',
      description: 'Return to the bustling streets and rich heritage of Old Delhi.'
    }
  }
];
