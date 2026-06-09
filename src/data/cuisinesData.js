// cuisinesData.js
// All dishes mapped directly from menuData.js — no invented items.

export const cuisinesData = [
  {
    id: 'delhi-street-food',
    title: 'Delhi Street Food',
    atmosphere: {
      heroImage: '/assets/delhi_palace_night_opt.webp',
      story: 'The energy of Chandni Chowk. The aroma of live chaat stations. The flavor of old Delhi traditions.',
      visualMotifs: ['Chandni Chowk', 'Chaat Stalls', 'Street Lights', 'Spice Markets']
    },
    storyParagraph: 'Old Delhi is not just a place — it is a culinary institution. From the narrow lanes of Chandni Chowk to the aroma of sizzling jalebis at dawn, Delhi street food carries centuries of recipe memory. Our catering brings this vibrant, unfiltered energy to your event: live chaat stations, hand-crafted kachoris, and the unmistakable tang of tamarind that defines this ancient city.',
    signatureExperiences: [
      {
        id: 'raj-kachori',
        name: 'Raj Kachori',
        diet: 'veg',
        image: '/assets/menu_street_opt.webp',
        story: 'Known as the King of Kachoris — a giant, crispy semolina shell filled with spiced lentils, sweet yogurt, vibrant tamarind chutney, and pomegranate arils.',
        ingredients: ['Semolina Shell', 'Spiced Moong Dal', 'Sweet Yogurt', 'Tamarind Chutney', 'Pomegranate'],
        occasion: 'The interactive appetizer that starts every celebration right.',
        eventPairing: 'A guaranteed crowd-pleaser at Mehndi celebrations and corporate mixers.'
      },
      {
        id: 'chole-bhature',
        name: 'Chole Bhature',
        diet: 'veg',
        image: '/assets/menu_chole_opt.webp',
        story: 'Fluffy, golden-fried breads paired with slow-cooked, deeply spiced chickpeas. An Old Delhi classic served at our live counter.',
        ingredients: ['Fermented Dough Bhatura', 'Slow-cooked Chickpeas', 'Whole Spices', 'Green Chilies', 'Pickled Onions'],
        occasion: 'The ultimate comforting brunch centerpiece.',
        eventPairing: 'Ideal for morning family gatherings and Haldi ceremonies.'
      }
    ],
    quickFacts: {
      totalDishes: 17,
      vegCount: 14,
      nonVegCount: 3,
      liveStations: ['Raj Kachori', 'Chole Bhature', 'Jalebi'],
      bestFor: ['Mehndi', 'Birthday Party', 'Corporate Event']
    },
    recommendedEvents: [
      { type: 'mehndi', label: 'Mehndi & Sangeet', image: '/assets/event_mehndi_opt.webp', reason: 'The vibrant, fast-paced energy of chaat stations perfectly matches the festive spirit of a Mehndi evening.' },
      { type: 'corporate', label: 'Corporate Event', image: '/assets/event_corporate_opt.webp', reason: 'Street food live counters break the ice and encourage mingling at corporate gatherings.' },
      { type: 'birthday', label: 'Birthday Party', image: '/assets/event_family_opt.webp', reason: 'Golgappe stations and chaat counters are universally loved across all age groups.' }
    ],
    dishes: [
      { id: 'dsf-1', name: 'Aloo Papri Chaat', diet: 'veg', description: 'Crispy papri with spiced potatoes, yogurt, and tangy chutneys.' },
      { id: 'dsf-2', name: 'Sev Puri', diet: 'veg', description: 'Thin puris topped with potatoes, onions, and crunchy sev.' },
      { id: 'dsf-3', name: 'Dahi Puri', diet: 'veg', description: 'Hollow puris filled with spiced potatoes and sweet yogurt.' },
      { id: 'dsf-4', name: 'Aloo Tikki Chaat', diet: 'veg', description: 'Crispy potato patties topped with chutneys and yogurt.' },
      { id: 'dsf-5', name: 'Kurkuri Tokri', diet: 'veg', description: 'Crispy potato baskets filled with seasoned chaat ingredients.' },
      { id: 'dsf-6', name: 'Chandni Chowk Ke Bhalle', diet: 'veg', description: 'Soft lentil dumplings soaked in yogurt with chutneys — an Old Delhi staple.' },
      { id: 'dsf-7', name: 'Churmuri Bhel', diet: 'veg', description: 'Puffed rice tossed with tangy tamarind, onions, and sev.' },
      { id: 'dsf-8', name: 'Golgappe', diet: 'veg', description: 'Crispy hollow balls served with spiced tamarind and mint water.' },
      { id: 'dsf-9', name: 'Bedmi Aloo Puri', diet: 'veg', description: 'Deep-fried lentil-stuffed puri served with spiced potato curry.' },
      { id: 'dsf-10', name: 'Jaypuri Pyaz Kachori', diet: 'veg', description: 'Flaky pastry stuffed with spiced onion filling, Rajasthani style.' },
      { id: 'dsf-11', name: 'Jaypuri Moongdaal Kachori', diet: 'veg', description: 'Flaky kachori filled with seasoned moong dal.' },
      { id: 'dsf-12', name: 'Harabara Kabab', diet: 'veg', description: 'Green pea and spinach patties spiced with cumin and coriander.' },
      { id: 'dsf-13', name: 'Samosas', diet: 'veg', description: 'Golden triangular pastries filled with spiced potatoes and peas.' },
      { id: 'dsf-14', name: 'Beetroot Tikki', diet: 'veg', description: 'Vibrant beetroot and potato patties with a crisp exterior.' },
      { id: 'dsf-15', name: 'Pindi Chole', diet: 'veg', description: 'Slow-cooked chickpeas with a dark, robust Old Delhi masala.' },
      { id: 'dsf-16', name: 'Daal Makhanwala', diet: 'veg', description: 'Black lentils slow-cooked overnight with butter and cream.' },
      { id: 'dsf-17', name: 'Purani Delhi Jahangiri Chicken', diet: 'non-veg', description: 'A rich Mughal-era preparation slow-cooked with whole spices.' },
    ]
  },
  {
    id: 'north-indian-classics',
    title: 'North Indian Classics',
    atmosphere: {
      heroImage: '/assets/footer_palace_opt.webp',
      story: 'Royal courts. Rich gravies. The art of slow cooking over coal.',
      visualMotifs: ['Mughal Arches', 'Copper Handis', 'Tandoor Fires', 'Velvet Textures']
    },
    storyParagraph: 'North Indian cuisine is the grand tradition of the subcontinent — a legacy of Mughal emperors, Punjabi farmhouses, and the art of patience. Slow-cooked dals, tandoor-fired kebabs, and rich creamy gravies define a feast that feels both royal and deeply comforting. Every dish carries the weight of centuries of refinement.',
    signatureExperiences: [
      {
        id: 'dal-makhani',
        name: 'Dal Makhani',
        diet: 'veg',
        image: '/assets/menu_paneer_opt.webp',
        story: 'Simmered slowly over low embers for 24 hours. A rich, velvety blend of whole black lentils, fresh cream, and smoked butter that defines North Indian indulgence.',
        ingredients: ['Whole Black Lentils', 'Kidney Beans', 'Fresh Cream', 'White Butter', 'Kasuri Methi'],
        occasion: 'The heart and soul of any premium Indian feast.',
        eventPairing: 'A mandatory inclusion for grand wedding receptions and luxurious family dinners.'
      },
      {
        id: 'butter-chicken',
        name: 'Murgh Makhani',
        diet: 'non-veg',
        image: '/assets/menu_feast_opt.webp',
        story: 'Tender tandoori chicken simmered in a luscious, slightly sweet tomato gravy. A global icon, perfected with our house-smoked spices.',
        ingredients: ['Tandoori Chicken', 'Tomato Gravy', 'Cashew Paste', 'Honey', 'Garam Masala'],
        occasion: 'A universally loved masterpiece that guarantees satisfaction.',
        eventPairing: 'The crown jewel of a corporate gala or large-scale wedding.'
      }
    ],
    quickFacts: {
      totalDishes: 29,
      vegCount: 17,
      nonVegCount: 12,
      liveStations: [],
      bestFor: ['Grand Weddings', 'Family Receptions', 'Corporate Galas']
    },
    recommendedEvents: [
      { type: 'wedding', label: 'Grand Wedding', image: '/assets/event_wedding_opt.webp', reason: 'The cornerstone of every traditional Indian wedding feast — rich, universally loved, and deeply satisfying.' },
      { type: 'family', label: 'Family Celebration', image: '/assets/event_family_opt.webp', reason: 'Hearty, comforting classics that encourage sharing and conversation across generations.' },
      { type: 'corporate', label: 'Corporate Gala', image: '/assets/event_corporate_opt.webp', reason: 'Sophisticated gravies and tandoori highlights for a formal, impressive dining experience.' }
    ],
    dishes: [
      { id: 'nic-1', name: 'Paneer Tikka', diet: 'veg', description: 'Marinated cottage cheese cubes grilled in a clay oven to smoky perfection.' },
      { id: 'nic-2', name: 'Hariyali Paneer Tandoori', diet: 'veg', description: 'Paneer marinated in fresh mint and coriander, tandoor-fired.' },
      { id: 'nic-3', name: 'Malai Soya Chaap', diet: 'veg', description: 'Soya chaap marinated in a rich cream and cashew paste.' },
      { id: 'nic-4', name: 'Paneer Makhanwala', diet: 'veg', description: 'Soft cottage cheese in a rich tomato and butter gravy.' },
      { id: 'nic-5', name: 'Malai Kofta', diet: 'veg', description: 'Fried cottage cheese and potato dumplings in a creamy gravy.' },
      { id: 'nic-6', name: 'Kadai Paneer', diet: 'veg', description: 'Paneer and bell peppers cooked in a spiced tomato base.' },
      { id: 'nic-7', name: 'Saag Paneer', diet: 'veg', description: 'Fresh spinach puree with garlic and soft paneer.' },
      { id: 'nic-8', name: 'Matar Paneer', diet: 'veg', description: 'Green peas and cottage cheese in a fragrant tomato gravy.' },
      { id: 'nic-9', name: 'Veg Korma', diet: 'veg', description: 'Mixed vegetables in a rich, aromatic cashew-based gravy.' },
      { id: 'nic-10', name: 'Navratana Korma', diet: 'veg', description: 'Nine-vegetable royal korma with dried fruits and cream.' },
      { id: 'nic-11', name: 'Saag Chana', diet: 'veg', description: 'Chickpeas cooked with fresh mustard greens and spices.' },
      { id: 'nic-12', name: 'Sarso Ka Saag', diet: 'veg', description: 'Slow-cooked mustard greens — the pride of Punjab.' },
      { id: 'nic-13', name: 'Yellow Daal Tadka', diet: 'veg', description: 'Split yellow lentils finished with a spiced butter tempering.' },
      { id: 'nic-14', name: 'Veg Biryani', diet: 'veg', description: 'Fragrant basmati layered with spiced vegetables and saffron.' },
      { id: 'nic-15', name: 'Paneer Biryani', diet: 'veg', description: 'Aromatic basmati layered with marinated paneer and whole spices.' },
      { id: 'nic-16', name: 'Kathal Biryani', diet: 'veg', description: 'Tender jackfruit cooked with aged basmati in a sealed pot.' },
      { id: 'nic-17', name: 'Jeera Rice', diet: 'veg', description: 'Long-grain basmati perfumed with whole cumin.' },
      { id: 'nic-18', name: 'Kashmiri Pulao', diet: 'veg', description: 'Saffron rice with dried fruits and nuts.' },
      { id: 'nic-19', name: 'Butter Naan', diet: 'veg', description: 'Soft leavened bread finished with butter.' },
      { id: 'nic-20', name: 'Garlic Naan', diet: 'veg', description: 'Tandoor-baked naan topped with roasted garlic.' },
      { id: 'nic-21', name: 'Lachcha Paratha', diet: 'veg', description: 'Layered whole wheat bread, flaky and crisp.' },
      { id: 'nic-22', name: 'Sutli Chicken', diet: 'non-veg', description: 'Thread-tied chicken kebabs marinated and grilled over charcoal.' },
      { id: 'nic-23', name: 'Barrah Chicken', diet: 'non-veg', description: 'Full chicken leg pieces marinated overnight and slow-roasted.' },
      { id: 'nic-24', name: 'Malai Chicken', diet: 'non-veg', description: 'Chicken marinated in cream, cheese, and aromatic spices.' },
      { id: 'nic-25', name: 'Lamb Seekh Kebab', diet: 'non-veg', description: 'Minced lamb mixed with herbs, shaped on skewers and grilled.' },
      { id: 'nic-26', name: 'Lamb Chops', diet: 'non-veg', description: 'Tender rack of lamb marinated and charcoal-grilled.' },
      { id: 'nic-27', name: 'Butter Chicken', diet: 'non-veg', description: 'Tandoori chicken in a luscious tomato and cream gravy.' },
      { id: 'nic-28', name: 'Lamb Rogan Josh', diet: 'non-veg', description: 'Tender boneless lamb in a Kashmiri chili and aromatic spice gravy.' },
      { id: 'nic-29', name: 'Purani Delhi Chicken Biryani', diet: 'non-veg', description: 'Old Delhi-style dum biryani with whole spices and saffron.' },
    ]
  },
  {
    id: 'mumbai-specialties',
    title: 'Mumbai Specialties',
    atmosphere: {
      heroImage: '/assets/human_wall_opt.webp',
      story: 'Coastal influences. Local street food culture. Fast urban energy.',
      visualMotifs: ['Chowpatty Beach', 'Marine Drive', 'Irani Cafes', 'Bustling Markets']
    },
    storyParagraph: 'Mumbai is a city that never stops eating. From the iconic Vada Pav at rush hour to the slow ritual of a coastal fish curry on a Sunday afternoon, Mumbai food carries the energy of India\'s most relentless city. Coastal spices, street-side counters, and Irani cafe nostalgia — all brought to your event.',
    signatureExperiences: [
      {
        id: 'vada-pav',
        name: 'Bombay Vada Pav',
        diet: 'veg',
        image: '/assets/menu-1_opt.webp',
        story: 'The heartbeat of Mumbai. A spiced potato dumpling in a crispy besan shell, nestled in a soft pav with our signature dry garlic chutney.',
        ingredients: ['Spiced Potato Mash', 'Besan Batter', 'Soft Ladi Pav', 'Dry Garlic Chutney', 'Fried Green Chili'],
        occasion: 'A quick, deeply satisfying burst of Mumbai flavor.',
        eventPairing: 'Excellent for high-energy corporate events and informal networking.'
      },
      {
        id: 'missal-pao',
        name: 'Missal Pao',
        diet: 'veg',
        image: '/assets/menu_feast_opt.webp',
        story: 'A Maharashtrian institution. Spicy sprouted moth curry topped with farsan, onions, and lemon — served with soft pav.',
        ingredients: ['Sprouted Moth Beans', 'Spicy Kat Gravy', 'Farsan', 'Onions', 'Lemon'],
        occasion: 'Fiery, comforting, and unmistakably Mumbaikar.',
        eventPairing: 'A unique, memorable addition to any Maharashtrian celebration.'
      }
    ],
    quickFacts: {
      totalDishes: 18,
      vegCount: 10,
      nonVegCount: 8,
      liveStations: [],
      bestFor: ['Casual Celebrations', 'Birthday Parties', 'Cocktail Parties']
    },
    recommendedEvents: [
      { type: 'birthday', label: 'Birthday Party', image: '/assets/event_family_opt.webp', reason: 'Fun, universally loved street food classics that bring nostalgia and energy to any celebration.' },
      { type: 'corporate', label: 'Corporate Mixer', image: '/assets/event_corporate_opt.webp', reason: 'Fast, bold flavors encourage mingling without requiring formal seating.' },
      { type: 'mehndi', label: 'Mehndi Evening', image: '/assets/event_mehndi_opt.webp', reason: 'The casual, street-food vibe of Mumbai specialties keeps the energy high at festive evenings.' }
    ],
    dishes: [
      { id: 'ms-1', name: 'Bun Samosa', diet: 'veg', description: 'Crispy samosa tucked inside a soft bun with chutneys.' },
      { id: 'ms-2', name: 'Karjat Wada Pao', diet: 'veg', description: 'The classic Mumbai street snack — spiced potato dumpling in a pav.' },
      { id: 'ms-3', name: 'Kachi Dabeli', diet: 'veg', description: 'Spiced potato filling in a bun with peanuts, pomegranate and chutneys.' },
      { id: 'ms-4', name: 'Garlic Cheese Wada Pao', diet: 'veg', description: 'Elevated wada pao with melted cheese and roasted garlic.' },
      { id: 'ms-5', name: 'Kadak Pao Bhaji', diet: 'veg', description: 'Mashed vegetable medley on a tawa, served with crisp butter-toasted pav.' },
      { id: 'ms-6', name: 'Veg Keema Pao', diet: 'veg', description: 'Spiced minced vegetables cooked with onions, served with pav.' },
      { id: 'ms-7', name: 'Batata Wada', diet: 'veg', description: 'Classic spiced potato dumpling in crispy besan batter.' },
      { id: 'ms-8', name: 'Sabudana Wada', diet: 'veg', description: 'Crispy tapioca and potato patties with peanuts.' },
      { id: 'ms-9', name: 'Missal Pao', diet: 'veg', description: 'Spicy sprouted moth curry with farsan, served with soft pav.' },
      { id: 'ms-10', name: 'Rasmalai', diet: 'veg', description: 'Soft cottage cheese discs soaked in saffron-flavored milk.' },
      { id: 'ms-11', name: 'Chicken Keema Pao', diet: 'non-veg', description: 'Slow-cooked spiced minced chicken served with buttered pav.' },
      { id: 'ms-12', name: 'Fish Amritsari', diet: 'non-veg', description: 'Crispy fried fish fillet marinated in spiced besan batter.' },
      { id: 'ms-13', name: 'Tandoori Shrimp', diet: 'non-veg', description: 'Jumbo shrimps marinated and charcoal-grilled in the tandoor.' },
      { id: 'ms-14', name: 'Malwani Chicken', diet: 'non-veg', description: 'Coastal chicken curry with freshly ground Malwani masala.' },
      { id: 'ms-15', name: 'Chicken Kolapuri', diet: 'non-veg', description: 'Fiery chicken curry from the Kolhapur tradition.' },
      { id: 'ms-16', name: 'Malwani Mutton', diet: 'non-veg', description: 'Slow-cooked mutton in a rich coastal spice base.' },
      { id: 'ms-17', name: 'Malwani Shrimp Curry', diet: 'non-veg', description: 'Shrimp in a tangy coconut-based Malwani gravy.' },
      { id: 'ms-18', name: 'Goan Shrimp Curry', diet: 'non-veg', description: 'Shrimp in a tangy Goan-style coconut and kokum curry.' },
    ]
  },
  {
    id: 'indo-chinese',
    title: 'Indo-Chinese',
    atmosphere: {
      heroImage: '/assets/cover_peacock_body_opt.webp',
      story: 'Fiery woks. Sizzling sauces. The perfect marriage of two ancient culinary worlds.',
      visualMotifs: ['Wok Flames', 'Dark Soy Glazes', 'Vibrant Red Chilies', 'Steaming Bowls']
    },
    storyParagraph: 'Indo-Chinese cuisine is a uniquely Indian invention — born in the Hakka Chinese settlements of Kolkata and perfected in the street food stalls of every Indian city. It takes the fundamentals of Chinese wok cooking and charges them with Indian heat, spice, and personality. The result is unlike anything else in the world.',
    signatureExperiences: [
      {
        id: 'gobi-manchurian',
        name: 'Gobi Manchurian',
        diet: 'veg',
        image: '/assets/menu_fire_opt.webp',
        story: 'Crispy cauliflower florets tossed in a sticky, sweet, and fiery Manchurian sauce. The dish that made Indo-Chinese a national obsession.',
        ingredients: ['Cauliflower', 'Dark Soy Sauce', 'Garlic', 'Green Chilies', 'Spring Onions'],
        occasion: 'An addictive starter that sets a playful, energetic tone.',
        eventPairing: 'Perfect for birthday parties and casual evening gatherings.'
      },
      {
        id: 'chilli-chicken',
        name: 'Hakka Chilli Chicken',
        diet: 'non-veg',
        image: '/assets/menu-2_opt.webp',
        story: 'Wok-tossed chicken in a fiery blend of soy, green chilies, and bell peppers. The defining non-veg Indo-Chinese dish.',
        ingredients: ['Diced Chicken', 'Bell Peppers', 'Fresh Ginger', 'Soy Sauce', 'Green Chilies'],
        occasion: 'Bold, spicy, and deeply satisfying.',
        eventPairing: 'A crowd-favorite at cocktail parties and Mehndi events.'
      }
    ],
    quickFacts: {
      totalDishes: 27,
      vegCount: 14,
      nonVegCount: 13,
      liveStations: [],
      bestFor: ['Birthday Parties', 'Mehndi Evenings', 'Cocktail Parties']
    },
    recommendedEvents: [
      { type: 'birthday', label: 'Birthday Party', image: '/assets/event_family_opt.webp', reason: 'Universally loved by all age groups — the ultimate crowd-pleaser.' },
      { type: 'mehndi', label: 'Mehndi & Cocktail', image: '/assets/event_mehndi_opt.webp', reason: 'Spicy, addictive starters pair perfectly with evening drinks and celebrations.' },
      { type: 'corporate', label: 'Corporate Event', image: '/assets/event_corporate_opt.webp', reason: 'Fast, interactive wok counters create energy and movement at corporate gatherings.' }
    ],
    dishes: [
      { id: 'ic-1', name: 'Chili Paneer', diet: 'veg', description: 'Crispy paneer cubes tossed in soy, chilies, and bell peppers.' },
      { id: 'ic-2', name: 'Veg Manchurian', diet: 'veg', description: 'Mixed vegetable dumplings in a sweet and spicy Manchurian sauce.' },
      { id: 'ic-3', name: 'Gobi Manchurian', diet: 'veg', description: 'Crispy cauliflower florets in Manchurian sauce.' },
      { id: 'ic-4', name: 'Chili Potato', diet: 'veg', description: 'Crispy potato fingers tossed in a spiced soy sauce.' },
      { id: 'ic-5', name: 'Baby Corn Chilly', diet: 'veg', description: 'Tender baby corn in a fiery chili sauce.' },
      { id: 'ic-6', name: 'Chili Tofu', diet: 'veg', description: 'Silken tofu with bell peppers in spiced soy sauce.' },
      { id: 'ic-7', name: 'Mix Veg Chilly', diet: 'veg', description: 'Seasonal vegetables wok-tossed in a chili-garlic sauce.' },
      { id: 'ic-8', name: 'Veg Hakka Noodles', diet: 'veg', description: 'Wok-tossed noodles with julienned vegetables and light soy.' },
      { id: 'ic-9', name: 'Szewan Noodles', diet: 'veg', description: 'Fiery Schezwan sauce noodles with vegetables.' },
      { id: 'ic-10', name: 'Veg Fried Rice', diet: 'veg', description: 'Classic wok-fried rice with vegetables, egg optional.' },
      { id: 'ic-11', name: 'Egg Fried Rice', diet: 'veg', description: 'Wok-fried basmati with scrambled egg and spring onions.' },
      { id: 'ic-12', name: 'Shezwan Fried Rice', diet: 'veg', description: 'Spicy Schezwan sauce fried rice with vegetables.' },
      { id: 'ic-13', name: 'Veg Thai Green Curry', diet: 'veg', description: 'Vegetables in a fragrant, lemongrass-based Thai green curry.' },
      { id: 'ic-14', name: 'Veg Thai Red Curry', diet: 'veg', description: 'Vegetables in a rich, spiced Thai red curry coconut sauce.' },
      { id: 'ic-15', name: 'Chili Chicken', diet: 'non-veg', description: 'Wok-tossed chicken with green chilies and bell peppers.' },
      { id: 'ic-16', name: 'Chicken Lollypop', diet: 'non-veg', description: 'Crispy fried chicken drumettes in a spiced batter.' },
      { id: 'ic-17', name: 'Chicken Manchurian', diet: 'non-veg', description: 'Crispy chicken in a sticky sweet-spicy Manchurian sauce.' },
      { id: 'ic-18', name: 'Black Pepper Chicken', diet: 'non-veg', description: 'Wok-tossed chicken with bold black pepper sauce.' },
      { id: 'ic-19', name: 'Black Bean Chicken', diet: 'non-veg', description: 'Chicken stir-fried with fermented black bean sauce.' },
      { id: 'ic-20', name: 'Shrimp Chilli', diet: 'non-veg', description: 'Juicy shrimp tossed in a fiery chili sauce.' },
      { id: 'ic-21', name: 'Chili Fish', diet: 'non-veg', description: 'Crispy fried fish fillet in a spiced chili sauce.' },
      { id: 'ic-22', name: 'Chicken Hakka Noodles', diet: 'non-veg', description: 'Wok-tossed noodles with chicken and vegetables.' },
      { id: 'ic-23', name: 'Chicken Shezwan Noodles', diet: 'non-veg', description: 'Fiery Schezwan noodles with chicken.' },
      { id: 'ic-24', name: 'Chicken Fried Rice', diet: 'non-veg', description: 'Classic wok-fried rice with diced chicken.' },
      { id: 'ic-25', name: 'Shezwan Chicken Fried Rice', diet: 'non-veg', description: 'Spicy Schezwan fried rice with chicken.' },
      { id: 'ic-26', name: 'Thai Chicken Green Curry', diet: 'non-veg', description: 'Chicken in a fragrant Thai green curry.' },
      { id: 'ic-27', name: 'Thai Chicken Red Curry', diet: 'non-veg', description: 'Chicken in a rich, spiced Thai red curry.' },
    ]
  },
  {
    id: 'south-indian-traditions',
    title: 'South Indian Traditions',
    atmosphere: {
      heroImage: '/assets/cover_botanical_opt.webp',
      story: 'The rhythm of temple bells. The scent of roasted curry leaves. The mastery of coastal spices.',
      visualMotifs: ['Temple Architecture', 'Banana Leaf Dining', 'Curry Leaves', 'Brass Vessels']
    },
    storyParagraph: 'South Indian cuisine is built on discipline, fermentation, and the patience to let flavors develop over hours. A perfect dosa is a meditation — the batter fermented overnight, the griddle heated to a precise temperature, the fold executed at exactly the right moment. We bring this precision and tradition to your event through live dosa counters and classic South Indian accompaniments.',
    signatureExperiences: [
      {
        id: 'dosa',
        name: 'Ghee Roast Dosa',
        diet: 'veg',
        image: '/assets/menu_minimal_opt.webp',
        story: 'Wafer-thin, crisp, and folded with precision. Accompanied by our signature trio of hand-ground chutneys — coconut, tomato-onion, and coriander.',
        ingredients: ['Fermented Rice & Lentil Batter', 'Pure Desi Ghee', 'Coconut Chutney', 'Tomato Chutney', 'Sambar'],
        occasion: 'A delicate yet robust experience for breakfast or light dinner.',
        eventPairing: 'Ideal for morning wedding rituals and premium corporate breakfasts.'
      },
      {
        id: 'medu-vada',
        name: 'Medu Vada',
        diet: 'veg',
        image: '/assets/menu_paneer_opt.webp',
        story: 'Crispy lentil doughnuts with a light, airy interior. Served fresh and hot with sambar and coconut chutney.',
        ingredients: ['Urad Dal Batter', 'Curry Leaves', 'Green Chilies', 'Coconut Chutney', 'Sambar'],
        occasion: 'A comforting South Indian classic that bridges morning and evening.',
        eventPairing: 'A crowd-pleasing vegetarian addition to any multi-cuisine spread.'
      }
    ],
    quickFacts: {
      totalDishes: 3,
      vegCount: 3,
      nonVegCount: 0,
      liveStations: ['Dosa Station'],
      bestFor: ['Morning Ceremonies', 'Corporate Breakfasts', 'Vegetarian Events']
    },
    recommendedEvents: [
      { type: 'wedding', label: 'Morning Wedding', image: '/assets/event_wedding_opt.webp', reason: 'Elegant and deeply traditional — ideal for pre-wedding rituals and morning ceremonies.' },
      { type: 'corporate', label: 'Corporate Breakfast', image: '/assets/event_corporate_opt.webp', reason: 'A refined and light start to a day of intense meetings and presentations.' },
      { type: 'family', label: 'Family Brunch', image: '/assets/event_family_opt.webp', reason: 'A wholesome, universally beloved spread that every generation enjoys.' }
    ],
    dishes: [
      { id: 'si-1', name: 'Medu Wada', diet: 'veg', description: 'Crispy lentil doughnuts served with coconut chutney and sambar.' },
      { id: 'si-2', name: 'Idli Sambar', diet: 'veg', description: 'Steamed rice cakes with piping hot sambar and chutneys.' },
      { id: 'si-3', name: 'Dosa (Live Station)', diet: 'veg', description: 'Paper-thin crispy crepes made fresh at the live counter.' },
    ]
  },
  {
    id: 'signature-refreshments',
    title: 'Signature Refreshments',
    atmosphere: {
      heroImage: '/assets/cover_arch_frame_opt.webp',
      story: 'Crafted to refresh, complement, and linger. Indian beverages as an art form.',
      visualMotifs: ['Clay Matkas', 'Saffron Strands', 'Fresh Mint', 'Rose Petals']
    },
    storyParagraph: 'In Indian culinary tradition, the beverage is never an afterthought. A perfectly made Mango Lassi balances the heat of a biryani. A cold Thandai cleanses the palate between courses. Aam Ka Panna is a summer ritual older than any recipe. We craft each drink with fresh ingredients and the understanding that the right beverage completes the feast.',
    signatureExperiences: [
      {
        id: 'mango-lassi',
        name: 'Mango Lassi',
        diet: 'veg',
        image: '/assets/mango_lassi_1780917929199_opt.webp',
        story: 'Thick, sweet, and deeply satisfying. Made with ripe Alphonso mangoes blended with fresh yogurt, cardamom, and topped with crushed pistachios.',
        ingredients: ['Alphonso Mango Pulp', 'Fresh Yogurt', 'Cardamom', 'Honey', 'Crushed Pistachios'],
        occasion: 'The quintessential Indian summer drink that belongs at every celebration.',
        eventPairing: 'The perfect welcome drink for daytime events and weddings.'
      },
      {
        id: 'thandai',
        name: 'Thandai',
        diet: 'veg',
        image: '/assets/thandai_1780918002624_opt.webp',
        story: 'A royal, festive cooler steeped in tradition. Made with almonds, fennel seeds, rose petals, and saffron — traditionally served during Holi and festive celebrations.',
        ingredients: ['Almonds', 'Fennel Seeds', 'Rose Petals', 'Saffron', 'Whole Milk'],
        occasion: 'A luxurious, fragrant drink with deep cultural roots.',
        eventPairing: 'Beautifully suited for Holi, Diwali, and formal wedding receptions.'
      }
    ],
    quickFacts: {
      totalDishes: 5,
      vegCount: 5,
      nonVegCount: 0,
      liveStations: [],
      bestFor: ['All Events', 'Welcome Drinks', 'Festive Occasions']
    },
    recommendedEvents: [
      { type: 'wedding', label: 'Wedding Reception', image: '/assets/event_wedding_opt.webp', reason: 'Signature drinks serve as elegant welcome refreshments for arriving guests.' },
      { type: 'mehndi', label: 'Mehndi Evening', image: '/assets/event_mehndi_opt.webp', reason: 'Festive, colorful beverages that match the energy of a Mehndi celebration.' },
      { type: 'corporate', label: 'Corporate Brunch', image: '/assets/event_corporate_opt.webp', reason: 'Sophisticated, non-alcoholic options for professional daytime gatherings.' }
    ],
    dishes: [
      { id: 'sr-1', name: 'Mango Lassi', diet: 'veg', description: 'Thick, sweet Alphonso mango lassi with cardamom and pistachios.', image: '/assets/mango_lassi_1780917929199_opt.webp' },
      { id: 'sr-2', name: 'Sweet Lassi', diet: 'veg', description: 'Creamy yogurt drink topped with a layer of fresh malai.', image: '/assets/sweet_lassi_1780917946995_opt.webp' },
      { id: 'sr-3', name: 'Salt Lassi', diet: 'veg', description: 'Frothy, savory lassi with roasted cumin and black salt.', image: '/assets/salt_lassi_1780917969166_opt.webp' },
      { id: 'sr-4', name: 'Aam Ka Panna', diet: 'veg', description: 'Tangy raw mango cooler with cumin, black salt, and mint.', image: '/assets/aam_ka_panna_1780917981215_opt.webp' },
      { id: 'sr-5', name: 'Thandai', diet: 'veg', description: 'Royal almond and saffron cooler with rose petals and fennel.', image: '/assets/thandai_1780918002624_opt.webp' },
    ]
  }
];

// Chapter data mapping — slug to menuData key
export const chaptersMap = {
  'appetizers': { title: 'Appetizers', description: 'Hand-crafted starters designed to awaken the palate.', menuKey: 'appetizers', bestFor: ['Weddings', 'Corporate Events', 'All Celebrations'] },
  'chaat-station': { title: 'Chaat Station', description: 'Vibrant, tangy, and unapologetically bold. Street food elevated to an art form.', menuKey: 'chaatStation', bestFor: ['Mehndi', 'Birthday Parties', 'Casual Celebrations'] },
  'mumbai-special': { title: 'Mumbai Special', description: 'Authentic flavors from the streets of Maximum City.', menuKey: 'mumbaiSpecial', bestFor: ['Birthday Parties', 'Casual Gatherings', 'Cocktail Parties'] },
  'snacks-ka-chaska': { title: 'Snacks Ka Chaska', description: 'Irresistible bites combining tradition with a modern twist.', menuKey: 'snacksKaChaska', bestFor: ['Evening Snacks', 'Cocktail Hours', 'Informal Gatherings'] },
  'curries': { title: 'Curries', description: 'Slow-cooked mastery. Rich, layered, and steeped in heritage.', menuKey: 'curries', bestFor: ['Weddings', 'Grand Receptions', 'Family Dinners'] },
  'biryani-rice': { title: 'Biryani & Rice', description: 'Aromatic basmati, perfectly spiced, sealed and steamed to perfection.', menuKey: 'biryani', bestFor: ['Weddings', 'Grand Receptions', 'All Events'] },
  'tandoor-breads': { title: 'Tandoor Breads', description: 'Fresh from the clay oven — the perfect accompaniment to our curries.', menuKey: 'breads', bestFor: ['All Events'] },
  'indo-chinese': { title: 'Indo-Chinese', description: 'The fiery, wok-tossed fusion that defined a culinary generation.', menuKey: 'indoChinese', bestFor: ['Birthday Parties', 'Mehndi', 'Cocktail Parties'] },
  'south-indian': { title: 'South Indian', description: 'Crispy, comforting classics from the southern states.', menuKey: 'southIndian', bestFor: ['Morning Ceremonies', 'Corporate Breakfasts'] },
  'desserts': { title: 'Desserts', description: 'The grand finale. Decadent, sweet, and unforgettable.', menuKey: 'desserts', bestFor: ['All Events'] },
  'drinks': { title: 'Signature Drinks', description: 'Refreshing beverages crafted to complement the bold flavors of our feast.', menuKey: 'drinks', bestFor: ['All Events', 'Welcome Drinks'] },
};
