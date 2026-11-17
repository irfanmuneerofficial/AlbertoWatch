/* Sample data store (JSON format). Prices are in Pakistani rupees (PKR). Edit prices, text and the store here. */
const SITE_DATA = {
 "categories": [
  {
   "id": "men",
   "label": "Men",
   "tagline": "Considered strength",
   "blurb": "Divers, chronographs and field watches with presence on the wrist."
  },
  {
   "id": "women",
   "label": "Women",
   "tagline": "Quiet radiance",
   "blurb": "Mother-of-pearl, pavé crystal and rose gold in refined proportions."
  },
  {
   "id": "unisex",
   "label": "Unisex",
   "tagline": "Worn by anyone",
   "blurb": "Mid-size and slim dress pieces that belong to whoever wears them."
  }
 ],
 "lineups": [
  {
   "id": "luxury",
   "label": "Luxury",
   "brand": "Rolex",
   "blurb": "Oyster steel, in-house automatic movements and a reputation that outlasts generations."
  },
  {
   "id": "vintage",
   "label": "Vintage",
   "brand": "Bulova",
   "blurb": "American heritage design - from lunar-mission chronographs to open-heart automatics."
  },
  {
   "id": "eco-drive",
   "label": "Eco-Drive",
   "brand": "Citizen",
   "blurb": "Powered by light. Never needs a battery change, always ready on the wrist."
  },
  {
   "id": "designer",
   "label": "Designer",
   "brand": "Michael Kors",
   "blurb": "Fashion-forward cases, crystal bezels and polished metals for the evening."
  }
 ],
 "technologies": [
  {
   "id": "automatic",
   "label": "Automatic Movement",
   "short": "Self-winding mechanical",
   "text": "An automatic movement winds itself from the motion of your wrist. A weighted rotor spins with every gesture and tensions the mainspring, so the watch keeps running without a battery. It is the heart of fine mechanical watchmaking - assembled, regulated and adjusted by hand."
  },
  {
   "id": "quartz",
   "label": "Quartz",
   "short": "Precision by crystal",
   "text": "A battery sends current through a tiny quartz crystal that vibrates at a precise frequency. Quartz is accurate, durable and low-maintenance. High-performance quartz, as used in some Bulova archive pieces, vibrates at a far higher frequency for sweeping, smooth seconds."
  },
  {
   "id": "ecodrive",
   "label": "Eco-Drive Solar",
   "short": "Powered by any light",
   "text": "Citizen's Eco-Drive turns any light, natural or artificial, into energy and stores it in a rechargeable cell. Fully charged, a watch can run for months in the dark. There are no batteries to replace and nothing to wind."
  },
  {
   "id": "chronograph",
   "label": "Chronograph",
   "short": "Stopwatch on the wrist",
   "text": "A chronograph adds start, stop and reset pushers and extra sub-dials, so you can time events to a fraction of a second while the main watch keeps telling the time. The tachymeter scale on some bezels converts elapsed time into speed."
  },
  {
   "id": "dive",
   "label": "Dive & Water Resistance",
   "short": "Built for the deep",
   "text": "Screw-down crowns, gaskets and thick crystals keep water out. A true dive watch adds a unidirectional rotating bezel, luminous markers and resistance tested to hundreds of metres - equally at home in the ocean or the boardroom."
  }
 ],
 "products": [
  {
   "id": "rolex-submariner",
   "name": "Rolex Submariner Date",
   "brand": "Rolex",
   "lineup": "luxury",
   "category": "men",
   "price": 2870000,
   "short": "The benchmark dive watch in Oystersteel with a black Cerachrom bezel.",
   "description": "Introduced as a tool for professional divers, the Submariner has become the most recognised sports watch in the world. Black dial, scratch-resistant ceramic bezel and a rugged Oyster bracelet with a folding extension for wearing over a wetsuit.",
   "tech": [
    "automatic",
    "dive"
   ],
   "specs": {
    "Case": "41 mm Oystersteel",
    "Movement": "Automatic, self-winding",
    "Bezel": "Unidirectional, black Cerachrom",
    "Water resistance": "300 m / 1,000 ft",
    "Bracelet": "Oyster, three-link"
   },
   "featured": true,
   "images": [
    "assets/watches/rolex-submariner/rolex-submariner.jpg",
    "assets/watches/rolex-submariner/rolex-submariner-side-view.jpg",
    "assets/watches/rolex-submariner/rolex-submariner-strap.jpg"
   ]
  },
  {
   "id": "rolex-datejust-41",
   "name": "Rolex Datejust 41",
   "brand": "Rolex",
   "lineup": "luxury",
   "category": "men",
   "price": 3472000,
   "short": "Bright blue dial, fluted bezel and the signature Jubilee bracelet.",
   "description": "The classic watch, refined. A fluted white-gold bezel frames a sunray blue dial with the instantly recognisable cyclops date window. Paired with the five-piece Jubilee bracelet for a dressier, more fluid drape.",
   "tech": [
    "automatic"
   ],
   "specs": {
    "Case": "41 mm Oystersteel",
    "Movement": "Automatic, self-winding",
    "Bezel": "Fluted, white gold",
    "Water resistance": "100 m / 330 ft",
    "Bracelet": "Jubilee, five-piece"
   },
   "featured": true,
   "images": [
    "assets/watches/rolex-datejust/rolex-datejust.jpg",
    "assets/watches/rolex-datejust/rolex-datejust-side.jpg",
    "assets/watches/rolex-datejust/rolex-datejust-clasp.jpg"
   ]
  },
  {
   "id": "bulova-lunar-pilot",
   "name": "Bulova Lunar Pilot Chronograph",
   "brand": "Bulova",
   "lineup": "vintage",
   "category": "men",
   "price": 222500,
   "short": "Archive-series chronograph inspired by the watch worn on the Moon.",
   "description": "A faithful modern take on the chronograph worn during the Apollo 15 mission. Black dial with tachymeter scale, three sub-dials and a sturdy steel bracelet - heritage you can wear every day.",
   "tech": [
    "quartz",
    "chronograph"
   ],
   "specs": {
    "Case": "43 mm stainless steel",
    "Movement": "High-performance quartz",
    "Function": "Chronograph, tachymeter",
    "Dial": "Black, three sub-dials",
    "Bracelet": "Stainless steel"
   },
   "featured": true,
   "images": [
    "assets/watches/bulova/bulova.jpg",
    "assets/watches/bulova/bulova-strap.jpg",
    "assets/watches/bulova/bulova-side-view.jpg"
   ]
  },
  {
   "id": "mk-lexington-chrono",
   "name": "Michael Kors Lexington Chronograph",
   "brand": "Michael Kors",
   "lineup": "designer",
   "category": "men",
   "price": 82500,
   "short": "Fluted bezel, roman numerals and a bold chronograph in silver or black.",
   "description": "A statement chronograph with a sculpted fluted bezel and layered dial. Available in a polished silver-tone finish or an all-black ion-plated finish.",
   "tech": [
    "quartz",
    "chronograph"
   ],
   "specs": {
    "Case": "Stainless steel, 44 mm class",
    "Movement": "Quartz",
    "Function": "Chronograph with date",
    "Water resistance": "5 ATM / 50 m",
    "Bracelet": "Link bracelet"
   },
   "featured": false,
   "images": [
    "assets/watches/michael-kors-lexington/michael-kors-lexington-silver.jpg",
    "assets/watches/michael-kors-lexington/mk-l-side-view.jpg",
    "assets/watches/michael-kors-lexington/mk-l-strap-silver.jpg"
   ],
   "variants": [
    {
     "label": "Silver",
     "color": "#c9ccd2",
     "images": [
      "assets/watches/michael-kors-lexington/michael-kors-lexington-silver.jpg",
      "assets/watches/michael-kors-lexington/mk-l-side-view.jpg",
      "assets/watches/michael-kors-lexington/mk-l-strap-silver.jpg"
     ]
    },
    {
     "label": "Black",
     "color": "#26262a",
     "images": [
      "assets/watches/michael-kors-lexington/michael-kors-lexington.jpg",
      "assets/watches/michael-kors-lexington/mk-l-side-view-black.jpg",
      "assets/watches/michael-kors-lexington/mk-l-strap-black.jpg"
     ]
    }
   ]
  },
  {
   "id": "citizen-promaster-diver",
   "name": "Citizen Promaster Diver Eco-Drive",
   "brand": "Citizen",
   "lineup": "eco-drive",
   "category": "men",
   "price": 110500,
   "short": "A 200 m solar-powered diver on a flexible polyurethane strap.",
   "description": "Light-powered and ready for the water. A rotating bezel, luminous hands and a crisp date window make this a dependable companion on land or at sea.",
   "tech": [
    "ecodrive",
    "dive"
   ],
   "specs": {
    "Case": "Stainless steel, 44 mm class",
    "Movement": "Eco-Drive solar quartz",
    "Bezel": "Unidirectional rotating",
    "Water resistance": "200 m",
    "Strap": "Polyurethane"
   },
   "featured": false,
   "images": [
    "assets/watches/citizen-eco-drive/ced.jpg",
    "assets/watches/citizen-eco-drive/ced-side.jpg",
    "assets/watches/citizen-eco-drive/ced-strap.jpg"
   ]
  },
  {
   "id": "citizen-garrison",
   "name": "Citizen Garrison Eco-Drive",
   "brand": "Citizen",
   "lineup": "eco-drive",
   "category": "men",
   "price": 82500,
   "short": "Field-watch legibility with olive nylon and day-date display.",
   "description": "Inspired by military field watches - large Arabic numerals, a clean dial and a durable nylon strap. Powered by light, so it is always ready for the next adventure.",
   "tech": [
    "ecodrive"
   ],
   "specs": {
    "Case": "Stainless steel, 42 mm class",
    "Movement": "Eco-Drive solar quartz",
    "Display": "Day and date",
    "Water resistance": "100 m",
    "Strap": "Olive nylon"
   },
   "featured": false,
   "images": [
    "assets/watches/citizen-garrison/closeup.jpg",
    "assets/watches/citizen-garrison/dial.jpg",
    "assets/watches/citizen-garrison/front.jpg"
   ]
  },
  {
   "id": "rolex-lady-datejust-28",
   "name": "Rolex Lady-Datejust 28",
   "brand": "Rolex",
   "lineup": "luxury",
   "category": "women",
   "price": 3990000,
   "short": "Pink dial, diamond-set bezel and a fine Jubilee bracelet.",
   "description": "Elegance in Oystersteel and diamonds. A soft pink dial with diamond hour markers, a brilliant-cut bezel and a supple Jubilee bracelet make the Lady-Datejust a perennial favourite for milestone occasions.",
   "tech": [
    "automatic"
   ],
   "specs": {
    "Case": "28 mm Oystersteel",
    "Movement": "Automatic, self-winding",
    "Bezel": "Diamond-set",
    "Water resistance": "100 m / 330 ft",
    "Bracelet": "Jubilee"
   },
   "featured": true,
   "images": [
    "assets/watches/rolex-lady-datejust-28/rolex-lady-datejust.jpg",
    "assets/watches/rolex-lady-datejust-28/rolex-lady-dj-jj.jpg",
    "assets/watches/rolex-lady-datejust-28/rolex-ladyjust-closeup.jpg"
   ]
  },
  {
   "id": "rolex-oyster-perpetual-28-turquoise",
   "name": "Rolex Oyster Perpetual 28 Turquoise",
   "brand": "Rolex",
   "lineup": "luxury",
   "category": "women",
   "price": 1792000,
   "short": "A vivid turquoise dial in the purest Oyster case.",
   "description": "Simple, bright and unmistakably Rolex. The lacquered turquoise dial, domed bezel and polished baton markers make this one of the most photographed dials of recent years.",
   "tech": [
    "automatic"
   ],
   "specs": {
    "Case": "28 mm Oystersteel",
    "Movement": "Automatic, self-winding",
    "Dial": "Turquoise",
    "Water resistance": "100 m / 330 ft",
    "Bracelet": "Oyster"
   },
   "featured": true,
   "images": [
    "assets/watches/rolex-oyster-perpetual-28-turquoise-dial/front.jpg",
    "assets/watches/rolex-oyster-perpetual-28-turquoise-dial/closeup.jpg",
    "assets/watches/rolex-oyster-perpetual-28-turquoise-dial/side.jpg"
   ]
  },
  {
   "id": "mk-darci-rose-gold",
   "name": "Michael Kors Darci Pavé Rose Gold",
   "brand": "Michael Kors",
   "lineup": "designer",
   "category": "women",
   "price": 82500,
   "short": "Rose gold-tone bracelet watch with a double pavé crystal bezel.",
   "description": "A warm rose gold-tone finish, a sunray dial and two rows of sparkling crystals around the bezel. Slender enough for every day, dressy enough for the evening.",
   "tech": [
    "quartz"
   ],
   "specs": {
    "Case": "Rose gold-tone stainless steel",
    "Movement": "Quartz",
    "Bezel": "Pavé crystal",
    "Water resistance": "3 ATM / 30 m",
    "Bracelet": "Rose gold-tone link"
   },
   "featured": false,
   "images": [
    "assets/watches/michael-kors-darci-pave-rose-gold/front.jpg",
    "assets/watches/michael-kors-darci-pave-rose-gold/closeup.jpg",
    "assets/watches/michael-kors-darci-pave-rose-gold/sideview.jpg"
   ]
  },
  {
   "id": "mk-lexington-pave",
   "name": "Michael Kors Lexington Pavé Silver",
   "brand": "Michael Kors",
   "lineup": "designer",
   "category": "women",
   "price": 77000,
   "short": "A compact silver-tone Lexington with crystal-set bezel and roman numerals.",
   "description": "The Lexington silhouette scaled for a smaller wrist. A crystal-set bezel, roman-numeral hour markers and subtle sub-dials on a polished silver-tone bracelet.",
   "tech": [
    "quartz"
   ],
   "specs": {
    "Case": "Silver-tone stainless steel",
    "Movement": "Quartz",
    "Bezel": "Crystal-set",
    "Water resistance": "5 ATM / 50 m",
    "Bracelet": "Silver-tone link"
   },
   "featured": false,
   "images": [
    "assets/watches/michael-kors-lexington-three-hand/front.jpg",
    "assets/watches/michael-kors-lexington-three-hand/side.jpg"
   ]
  },
  {
   "id": "bulova-sutton-diamond",
   "name": "Bulova Sutton Diamond Rectangle",
   "brand": "Bulova",
   "lineup": "vintage",
   "category": "women",
   "price": 119000,
   "short": "Art-deco rectangle with a mother-of-pearl dial and diamond accents.",
   "description": "A slender rectangular case recalls the cocktail watches of the 1930s. The mother-of-pearl dial carries genuine diamond accents and sits on a fine stainless steel bracelet.",
   "tech": [
    "quartz"
   ],
   "specs": {
    "Case": "Rectangular, stainless steel",
    "Movement": "Quartz",
    "Dial": "Mother-of-pearl, diamond accents",
    "Crystal": "Mineral",
    "Bracelet": "Stainless steel"
   },
   "featured": false,
   "images": [
    "assets/watches/bulova-sutton-womens-diamond-watch/front.jpg",
    "assets/watches/bulova-sutton-womens-diamond-watch/closeup.jpg"
   ]
  },
  {
   "id": "bulova-classic-surveyor",
   "name": "Bulova Classic Surveyor Mother-of-Pearl",
   "brand": "Bulova",
   "lineup": "vintage",
   "category": "women",
   "price": 110500,
   "short": "Two-tone steel and rose gold-tone with diamond-set mother-of-pearl dial.",
   "description": "A contemporary reading of a classic: polished two-tone bracelet, rose gold-tone bezel and a lustrous mother-of-pearl dial with diamond hour markers.",
   "tech": [
    "quartz"
   ],
   "specs": {
    "Case": "Two-tone stainless steel",
    "Movement": "Quartz",
    "Dial": "Mother-of-pearl, diamond markers",
    "Water resistance": "30 m",
    "Bracelet": "Two-tone link"
   },
   "featured": false,
   "images": [
    "assets/watches/bulovaclassic-surveyor-mother-of-pearl/front.jpg",
    "assets/watches/bulovaclassic-surveyor-mother-of-pearl/side.jpg",
    "assets/watches/bulovaclassic-surveyor-mother-of-pearl/very-side.jpg"
   ]
  },
  {
   "id": "citizen-silhouette-crystal",
   "name": "Citizen Silhouette Crystal Eco-Drive",
   "brand": "Citizen",
   "lineup": "eco-drive",
   "category": "women",
   "price": 119000,
   "short": "Solar-powered two-tone watch with a crystal bezel and pearl dial.",
   "description": "Light-powered luxury. A ring of crystals circles a mother-of-pearl dial on a two-tone bracelet - a watch that sparkles and never asks for a battery.",
   "tech": [
    "ecodrive"
   ],
   "specs": {
    "Case": "Two-tone stainless steel",
    "Movement": "Eco-Drive solar quartz",
    "Bezel": "Crystal-set",
    "Dial": "Mother-of-pearl",
    "Bracelet": "Two-tone link"
   },
   "featured": false,
   "images": [
    "assets/watches/citizen-eco-drive-silhouette-crystal/front.jpg",
    "assets/watches/citizen-eco-drive-silhouette-crystal/closeup.jpg"
   ]
  },
  {
   "id": "bulova-sutton-automatic",
   "name": "Bulova Sutton Automatic Open-Heart",
   "brand": "Bulova",
   "lineup": "vintage",
   "category": "women",
   "price": 278500,
   "short": "Pearl dial with an open-heart aperture revealing the automatic movement.",
   "description": "A round mother-of-pearl dial with diamond markers and a small window onto the balance wheel. Flip it over for a see-through caseback and watch the movement at work.",
   "tech": [
    "automatic"
   ],
   "specs": {
    "Case": "Round, stainless steel",
    "Movement": "Automatic",
    "Dial": "Mother-of-pearl, open-heart",
    "Caseback": "Exhibition",
    "Bracelet": "Stainless steel"
   },
   "featured": false,
   "images": [
    "assets/watches/bulova-sutton/bulova-sutton-front.jpg",
    "assets/watches/bulova-sutton/bulova-sutton.jpg",
    "assets/watches/bulova-sutton/bulova-suton-strap.jpg"
   ]
  },
  {
   "id": "rolex-datejust-31",
   "name": "Rolex Datejust 31",
   "brand": "Rolex",
   "lineup": "luxury",
   "category": "unisex",
   "price": 2072000,
   "short": "Mid-size Oyster steel with a silver dial and domed bezel.",
   "description": "A mid-size case that suits any wrist. The silver sunray dial, polished baton hands and domed bezel are timeless, and the Oyster bracelet is built for daily wear.",
   "tech": [
    "automatic"
   ],
   "specs": {
    "Case": "31 mm Oystersteel",
    "Movement": "Automatic, self-winding",
    "Dial": "Silver",
    "Water resistance": "100 m / 330 ft",
    "Bracelet": "Oyster"
   },
   "featured": true,
   "images": [
    "assets/watches/rolex-datejust-31/front.jpg",
    "assets/watches/rolex-datejust-31/lowk-side.jpg"
   ]
  },
  {
   "id": "rolex-oyster-perpetual-31",
   "name": "Rolex Oyster Perpetual 31",
   "brand": "Rolex",
   "lineup": "luxury",
   "category": "unisex",
   "price": 1652000,
   "short": "The essence of Rolex: a clean dial in a mid-size Oyster case.",
   "description": "No date, no fuss. The Oyster Perpetual 31 is Rolex distilled to its essentials - a simple dial, a smooth bezel and a self-winding movement in a case that is waterproof by design.",
   "tech": [
    "automatic"
   ],
   "specs": {
    "Case": "31 mm Oystersteel",
    "Movement": "Automatic, self-winding",
    "Dial": "Silver",
    "Water resistance": "100 m / 330 ft",
    "Bracelet": "Oyster"
   },
   "featured": false,
   "images": [
    "assets/watches/rolex-oyster-31/closeup.jpg",
    "assets/watches/rolex-oyster-31/ffront.jpg",
    "assets/watches/rolex-oyster-31/front.jpg"
   ]
  },
  {
   "id": "citizen-stiletto",
   "name": "Citizen Eco-Drive Stiletto",
   "brand": "Citizen",
   "lineup": "eco-drive",
   "category": "unisex",
   "price": 91000,
   "short": "Ultra-slim dress watch with a white dial and light-powered movement.",
   "description": "A slim case that slides under any cuff, a crisp white dial with Arabic numerals and a bracelet of finely brushed links. Solar-powered, so there is nothing to wind or replace.",
   "tech": [
    "ecodrive"
   ],
   "specs": {
    "Case": "Slim stainless steel",
    "Movement": "Eco-Drive solar quartz",
    "Dial": "White, Arabic numerals",
    "Water resistance": "30 m",
    "Bracelet": "Stainless steel"
   },
   "featured": false,
   "images": [
    "assets/watches/citizen-eco-stiletto/front.jpg",
    "assets/watches/citizen-eco-stiletto/tilted.jpg",
    "assets/watches/citizen-eco-stiletto/closeup.jpg"
   ]
  },
  {
   "id": "bulova-aerojet",
   "name": "Bulova Aerojet Automatic",
   "brand": "Bulova",
   "lineup": "vintage",
   "category": "unisex",
   "price": 278500,
   "short": "Silver-dial automatic with an open-heart window and slim baton markers.",
   "description": "Clean, modern and mechanical. A silver dial with slim luminous batons and a small aperture reveals the automatic movement beating beneath.",
   "tech": [
    "automatic"
   ],
   "specs": {
    "Case": "Stainless steel",
    "Movement": "Automatic",
    "Dial": "Silver, open-heart aperture",
    "Water resistance": "30 m",
    "Bracelet": "Stainless steel"
   },
   "featured": false,
   "images": [
    "assets/watches/bulova-aerojet/front.jpg",
    "assets/watches/bulova-aerojet/closeup.jpg"
   ]
  }
 ],
 "stores": [
  {
   "id": "karachi",
   "flagship": true,
   "name": "Alberto Watches - DHA Boutique",
   "city": "Karachi",
   "country": "Pakistan",
   "address": "DHA, Karachi, Pakistan",
   "phone": "+923007656609",
   "email": "Jamahi@gmail.com",
   "lat": 24.8,
   "lng": 67.06,
   "services": "Retail, Repair workshop, Appraisal",
   "hours": [
    [
     "Monday - Saturday",
     "11:00 - 20:00"
    ],
    [
     "Sunday",
     "Closed"
    ]
   ]
  }
 ]
};
