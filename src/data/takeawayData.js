export const takeawayData = [
  {
    id: 'roll-baby-roll',
    title: 'Roll Baby Roll',
    tagline: 'Street-style wraps inspired by Delhi evenings.',
    heroImage: '/assets/menu_street.png',
    bestsellers: ['Chatpata Aloo Roll', 'Chicken Keema Roll', 'Double Egg Roll'],
    items: [
      { id: 'r1', name: 'Chatpata Aloo Roll', description: 'Spicy mashed potato wrapped in a flaky paratha.', price: '$11.95', isVeg: true, spice: '🔥 Medium', popular: true },
      { id: 'r2', name: 'Chicken Keema Roll', description: 'Minced chicken cooked with street spices.', price: '$14.95', isVeg: false, spice: '🔥🔥 Spicy', popular: true },
      { id: 'r3', name: 'Double Egg Roll', description: 'Two eggs whisked and pan-fried on a crispy paratha.', price: '$12.95', isVeg: false, spice: 'Mild' },
      { id: 'r4', name: 'Paneer Tikka Roll', description: 'Tandoori paneer cubes with mint chutney.', price: '$12.95', isVeg: true, spice: '🔥 Medium' },
    ]
  },
  {
    id: 'tandoori-daawat',
    title: 'Tandoori Daawat',
    tagline: 'Clay-oven masterpieces roasted to perfection.',
    heroImage: '/assets/tandoori_chicken_1781072592860.png',
    bestsellers: ['Tandoori Chicken', 'Afghani Murgh'],
    items: [
      { id: 't1', name: "Tandoori Chicken", image: "/assets/tandoori_chicken_1781072592860.png", description: 'Classic bone-in chicken marinated in yogurt and traditional spices.', price: '$16.95', isVeg: false, spice: '🔥 Medium', popular: true },
      { id: 't2', name: "Afghani Murgh", image: "/assets/afghani_murgh_1781072604669.png", description: 'Creamy and mild chicken roast with cashew paste.', price: '$16.95', isVeg: false, spice: 'Mild' },
      { id: 't3', name: "Mutton Seekh Kebab", image: "/assets/mutton_seekh_kebab_1781072615927.png", description: 'Minced lamb skewers flavored with fresh coriander.', price: '$18.95', isVeg: false, spice: '🔥🔥 Spicy' },
    ]
  },
  {
    id: 'meethe-me',
    title: 'Meethe Me',
    tagline: 'Sweet endings, the traditional way.',
    heroImage: '/assets/meethe_me_sweets.png',
    bestsellers: ['Gulab Jamun', 'Rasmalai'],
    items: [
      { id: 'm1', name: 'Gulab Jamun', description: 'Warm khoya dumplings dipped in saffron syrup.', price: '$5.95', isVeg: true, popular: true },
      { id: 'm2', name: 'Rasmalai', description: 'Soft cottage cheese discs in thickened sweetened milk.', price: '$6.95', isVeg: true },
      { id: 'm3', name: 'Moong Dal Halwa', description: 'Rich lentil dessert cooked in pure ghee.', price: '$6.95', isVeg: true, popular: true },
    ]
  },
  {
    id: 'chatpati-chaat',
    title: 'Chatpati Chaat',
    tagline: 'Tangy, spicy, and irresistible street staples.',
    heroImage: '/assets/aloo_tikki_chaat_1781072638930.png',
    bestsellers: ['Aloo Tikki Chaat', 'Pani Puri'],
    items: [
      { id: 'c1', name: "Aloo Tikki Chaat", image: "/assets/aloo_tikki_chaat_1781072638930.png", description: 'Crispy potato patties topped with sweet and spicy chutneys.', price: '$8.95', isVeg: true, spice: '🔥 Medium', popular: true },
      { id: 'c2', name: 'Dahi Bhalla', description: 'Soft lentil dumplings soaked in chilled yogurt.', price: '$8.95', isVeg: true },
      { id: 'c3', name: 'Pani Puri', description: 'Crispy hollow puris served with tangy mint water.', price: '$6.95', isVeg: true, spice: '🔥🔥 Spicy', popular: true },
    ]
  },
  {
    id: 'tadka-marke',
    title: 'Tadka Marke',
    tagline: 'Lentils tempered with pure ghee and rustic spices.',
    heroImage: '/assets/dal_makhani_1781072651711.png',
    bestsellers: ['Dal Makhani', 'Yellow Dal Tadka'],
    items: [
      { id: 'td1', name: "Dal Makhani", image: "/assets/dal_makhani_1781072651711.png", description: 'Black lentils slow-cooked overnight with tomatoes and cream.', price: '$13.95', isVeg: true, popular: true },
      { id: 'td2', name: 'Yellow Dal Tadka', description: 'Yellow lentils tempered with garlic and cumin.', price: '$12.95', isVeg: true, spice: '🔥 Medium' },
    ]
  },
  {
    id: 'whats-sizzling',
    title: 'What’s Sizzling',
    tagline: 'Hot platters straight from the iron plate.',
    heroImage: '/assets/vegetable_sizzler_1781072665614.png',
    bestsellers: ['Vegetable Sizzler', 'Chicken Tikka Sizzler'],
    items: [
      { id: 's1', name: "Vegetable Sizzler", image: "/assets/vegetable_sizzler_1781072665614.png", description: 'Assorted grilled vegetables served with a smoky sauce.', price: '$11.95', isVeg: true },
      { id: 's2', name: 'Chicken Tikka Sizzler', description: 'Spicy chicken tikka served on a hot iron plate.', price: '$18.95', isVeg: false, spice: '🔥🔥 Spicy', popular: true },
    ]
  },
  {
    id: 'the-tikkawala',
    title: 'The Tikkawala',
    tagline: 'Juicy, charred, and perfectly spiced tikkas.',
    heroImage: '/assets/paneer_tikka_1781072685218.png',
    bestsellers: ['Paneer Tikka', 'Malai Chicken Tikka'],
    items: [
      { id: 'tw1', name: "Paneer Tikka", image: "/assets/paneer_tikka_1781072685218.png", description: 'Cottage cheese cubes marinated in spiced yogurt.', price: '$14.95', isVeg: true, spice: '🔥 Medium', popular: true },
      { id: 'tw2', name: 'Malai Chicken Tikka', description: 'Chicken infused with cream and cheese, cooked in tandoor.', price: '$16.95', isVeg: false, popular: true },
    ]
  },
  {
    id: 'snacks-ka-chaska',
    title: 'Snacks ka Chaska',
    tagline: 'Crispy, crunchy bites for any time of the day.',
    heroImage: '/assets/punjabi_samosa_1781072696197.png',
    bestsellers: ['Samosa', 'Onion Bhaji'],
    items: [
      { id: 'sc1', name: "Punjabi Samosa", image: "/assets/punjabi_samosa_1781072696197.png", description: 'Crispy pastry filled with spiced potatoes.', price: '$4.00', isVeg: true, popular: true },
      { id: 'sc2', name: 'Onion Bhaji', description: 'Crispy onion fritters served with mint chutney.', price: '$8.95', isVeg: true },
    ]
  },
  {
    id: 'biryani-ki-kahani',
    title: 'Biryani ki Kahani',
    tagline: 'Fragrant basmati rice layered with rich spices and meat.',
    heroImage: '/assets/chicken_dum_biryani_1781072708280.png',
    bestsellers: ['Chicken Dum Biryani', 'Mutton Biryani'],
    items: [
      { id: 'bk1', name: "Chicken Dum Biryani", image: "/assets/chicken_dum_biryani_1781072708280.png", description: 'Aromatic basmati rice cooked with chicken and saffron.', price: '$16.95', isVeg: false, spice: '🔥 Medium', popular: true },
      { id: 'bk2', name: 'Mutton Biryani', description: 'Slow-cooked lamb with fragrant spices and rice.', price: '$21.95', isVeg: false, spice: '🔥🔥 Spicy' },
    ]
  },
  {
    id: 'curry-main-kya-hai',
    title: 'Curry Main Kya Hai',
    tagline: 'Hearty gravies that feel like a warm hug.',
    heroImage: '/assets/menu_paneer.png',
    bestsellers: ['Butter Chicken', 'Kadai Paneer'],
    items: [
      { id: 'cm1', name: 'Butter Chicken', description: 'Rich tomato gravy finished with butter and cream.', price: '$16.95', isVeg: false, spice: 'Mild', popular: true },
      { id: 'cm2', name: 'Kadai Paneer', description: 'Cottage cheese tossed with bell peppers and whole spices.', price: '$14.95', isVeg: true, spice: '🔥 Medium', popular: true },
    ]
  },
  {
    id: 'mumbai-local',
    title: 'Mumbai Local',
    tagline: 'Iconic street flavors straight from Bombay.',
    heroImage: '/assets/vadapav.jpg',
    bestsellers: ['Vada Pav', 'Pav Bhaji'],
    items: [
      { id: 'ml1', name: "Vada Pav", image: "/assets/vadapav.jpg", description: 'Spicy potato fritter inside a soft bun.', price: '$9.95', isVeg: true, spice: '🔥🔥 Spicy', popular: true },
      { id: 'ml2', name: 'Pav Bhaji', description: 'Mashed vegetable curry served with buttered buns.', price: '$12.95', isVeg: true, spice: '🔥 Medium', popular: true },
    ]
  },
  {
    id: 'old-school-paranthas',
    title: 'Old School Paranthas',
    tagline: 'Stuffed Indian flatbreads, served with a dollop of butter.',
    heroImage: '/assets/old_school_paranthas.png',
    bestsellers: ['Aloo Parantha', 'Paneer Parantha'],
    items: [
      { id: 'op1', name: 'Aloo Parantha', description: 'Whole wheat bread stuffed with spiced potatoes.', price: '$11.95', isVeg: true, popular: true },
      { id: 'op2', name: 'Paneer Parantha', description: 'Stuffed with grated cottage cheese and herbs.', price: '$12.95', isVeg: true },
    ]
  },
  {
    id: 'kya-piyoge',
    title: 'Kya Piyoge',
    tagline: 'Refreshing sips to cool down your palate.',
    heroImage: '/assets/mango_lassi_1780917929199.png',
    bestsellers: ['Mango Lassi', 'Masala Shikanji'],
    items: [
      { id: 'kp1', name: "Mango Lassi", image: "/assets/mango_lassi_1780917929199.png", description: 'Thick, sweet yogurt drink blended with mango pulp.', price: '$4.95', isVeg: true, popular: true },
      { id: 'kp2', name: 'Masala Shikanji', description: 'Indian spiced lemonade.', price: '$4.95', isVeg: true },
      { id: 'kp3', name: "Sweet Lassi", image: "/assets/sweet_lassi_1780917946995.png", description: 'Traditional sweetened yogurt drink.', price: '$4.95', isVeg: true },
    ]
  },
  {
    id: 'sides',
    title: 'Sides',
    tagline: 'The perfect accompaniments to your meal.',
    heroImage: '/assets/sides_accompaniments.png',
    bestsellers: ['Garlic Naan', 'Raita'],
    items: [
      { id: 'sd1', name: 'Garlic Naan', description: 'Leavened flatbread topped with garlic and butter.', price: '$4.95', isVeg: true, popular: true },
      { id: 'sd2', name: 'Boondi Raita', description: 'Yogurt with tiny fried chickpea flour balls.', price: '$2.95', isVeg: true },
      { id: 'sd3', name: 'Tandoori Roti', description: 'Whole wheat bread baked in a clay oven.', price: '$3.95', isVeg: true },
    ]
  }
];
