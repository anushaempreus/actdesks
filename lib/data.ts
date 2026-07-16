// Central content data captured from actdecks.com.au

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  image: string;
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "decking-canberra",
    title: "Decks",
    navTitle: "Decks",
    image: "/images/main-deck-photo.jpg",
    blurb:
      "ACT Decks sets the standard for outdoor decks in Canberra. We build quality decks from hardwood, composite timber (Trex, AZEK), recycled timber, and aluminium. Whether you desire an attached deck or a wraparound deck, ACT Decks has you covered for decks in the Canberra region.",
  },
  {
    slug: "pergolas-canberra",
    title: "Pergolas",
    navTitle: "Pergolas",
    image: "/images/pergola-main-photo.jpg",
    blurb:
      "Pergolas are a great way to add value and liveability to your home. ACT Decks builds pergolas in Canberra out of hardwood, steel, and aluminium. Pergolas can be covered and/or enclosed with panels made from various timbers, aluminium, polycarbonate, and corrugated iron.",
  },
  {
    slug: "handrails-stairs-canberra",
    title: "Handrails & Stairs",
    navTitle: "Handrails & Stairs",
    image: "/images/main-photo.jpg",
    blurb:
      "Stairs and handrails are an integral part of most decking solutions. ACT Decks constructs stylish outdoor stairs and handrails from durable hardwood, composite timber, glass, powder-coated aluminium, and stainless steel. Our stairs are renowned for their structural integrity.",
  },
  {
    slug: "pool-fencing-and-privacy-screens-canberra",
    title: "Pool Fencing & Privacy Screens",
    navTitle: "Pool Fencing & Privacy Screens",
    image: "/images/main-photo-.jpg",
    blurb:
      "ACT Decks supplies and installs pool fences and privacy screens in the Canberra region. We offer a range of materials, finishes, and styles to suit every home design and budget. Pool fences and privacy screens are great for safety, security, and privacy — not to mention your property value.",
  },
  {
    slug: "windows-and-doors-canberra",
    title: "Windows & Doors",
    navTitle: "Windows & Doors",
    image: "/images/windows-and-doors-main-photo-1.jpg",
    blurb:
      "As part of its deck and pergola projects, ACT Decks installs quality windows and doors in the Canberra region. We source from leading manufacturers such as Trend Windows & Doors and Monaro Windows, and can customise windows and doors to suit any outdoor living space.",
  },
];

export type Project = {
  slug: string;
  name: string;
  categories: string;
  image: string;
  description: string;
};

const projectsRaw: Omit<Project, "slug">[] = [
  {
    name: "Jerrabomberra",
    categories: "Decks · Pergolas · Box Stairs",
    image: "/images/210624_0070.jpeg",
    description:
      "Featuring a large Versiclad pergola with integrated downlights and ceiling fans, offering a spacious outdoor entertaining area. The elevated deck is constructed from Trex Transcend composite decking in the vibrant “Spiced Rum” colour. A sleek glass balustrade surrounds the deck, while stainless steel wire with a Merbau top rail enhances the stairs. Beneath the elevated deck, there’s a luxurious sauna with a custom-designed Blackbutt bench seat.",
  },
  {
    name: "Latham",
    categories: "Decks · Pergolas · Box Stairs",
    image: "/images/010623_022.jpeg",
    description:
      "This impressive outdoor project features a raised deck made with durable composite decking, sheltered by a modern Versiclad insulated pergola complete with downlights and ceiling fans. The design flows across multiple levels, with illuminated deck lights highlighting the stairs. The handrail blends steel posts with a timber top rail, while stainless steel wire provides a sleek and secure finish.",
  },
  {
    name: "Isaacs",
    categories: "Decks · Pergolas · Box Stairs",
    image: "/images/160626_044.jpeg",
    description:
      "An eye-catching outdoor entertaining area featuring a sleek, modern design. The deck has a unique shape, built on a durable white steel subframe that supports stunning Merbau decking. A custom-welded white steel handrail surrounds the deck. To enhance the space, the deck is topped with a Stratco Allure louvred pergola, allowing for adjustable light control.",
  },
  {
    name: "O’Malley",
    categories: "Decking · Pergolas · Box Stairs · Pool Fencing",
    image: "/images/OMalley-3.jpg",
    description:
      "This home in O’Malley transformed completely with multiple areas for entertaining and relaxation. It starts with an outdoor kitchen featuring stunning spotted gum decking and a pergola with downlights, fans, and heater strips. The decking wraps around the side of the house to the pool area, surrounded by sleek glass pool fencing, with box seating areas and a louvered pergola.",
  },
  {
    name: "Theodore",
    categories: "Decks · Pergolas · Box Stairs · Pool Fencing · Under Decking Screening",
    image: "/images/USE-THEODORE-2.jpg",
    description:
      "The Trex decking at this home in Theodore creates a durable, low-maintenance surface, and the glass pool fencing ensures safety while maintaining views of the spa. The flat and gabled insulated pergolas provide shade and shelter, and the downlights add a warm and inviting atmosphere. The under decking screening adds a beautiful touch and helps keep unwanted elements out.",
  },
  {
    name: "O’Connor",
    categories: "Decking · Pergolas · Stairs · Balustrades · Privacy Screening",
    image: "/images/USE-OCONNER-.jpg",
    description:
      "This outdoor living space features a beautiful Trex composite decking, perfect for hosting barbecues. The sleek merbau glass balustrade adds elegance, while the clear Ampelite pergola provides protection from sun and rain while still letting the light in. Underneath the deck, an enclosed storage space has been created with aluminium under decking screening.",
  },
  {
    name: "Garran",
    categories: "Pergola · Pool Fencing · Decking · Stairs",
    image: "/images/USE-GARREN-5.jpg",
    description:
      "The pitched pergola at this home in Garran provides shade and protection during the day, and during the evening hours the downlights add a warm and welcoming environment. The presence of a pool adds a touch of luxury. The Eco Decking used is eco-friendly, made from recycled materials, low maintenance, durable, and long-lasting.",
  },
  {
    name: "Richardson",
    categories: "Decking · Pergolas · Tiling · Polished Concrete",
    image: "/images/Richardson-1.jpg",
    description:
      "This spotted gum living area in Richardson is the perfect place to lounge and unwind, with warm natural wood tones. The insulated pergola keeps you cool in summer and warm in winter with its downlights, heater strips, and fans. The outdoor kitchen lets the client cook and prepare meals outside, spending much of their time in this beautiful space.",
  },
  {
    name: "Latham",
    categories: "Privacy Screening · Pergola · Box Stairs · Decking · Balustrade",
    image: "/images/Latham-2.jpg",
    description:
      "This home in Latham now has a beautiful and functional outdoor living space. The mixed timber screening provides privacy and a warm, natural aesthetic. The Azek composite decking is low-maintenance and durable. Merbau for the balustrade with stainless steel cables offers both strength and style, and the pergola with downlights and heater strips extends use into the evenings and cooler months.",
  },
  {
    name: "Chapman",
    categories: "Pool Fencing · Pergola · Box Stairs · Decking",
    image: "/images/USE-1-CHAPMAN-3.jpg",
    description:
      "This home in Chapman now has a Versiclad pergola with insulated panels, timber posts, and downlights that greatly enhance the outdoor living space. The insulation panels provide shade and protection from the elements, while the downlights add a warm and inviting ambiance during evening hours. The timber posts add a natural touch that matches well with the decking.",
  },
  {
    name: "Gelato Messina",
    categories: "Pergolas",
    image: "/images/Gelato-Messina-5.jpg",
    description:
      "The outdoor space for Gelato Messina now has a pergola equipped with fans, downlights, and heater strips that provide a comfortable and inviting outdoor dining or entertaining area. The fans circulate air and keep guests cool on hot days, the downlights add a warm glow at night, and the heater strips provide warmth on chilly evenings — making the space usable year-round.",
  },
  {
    name: "Farrer",
    categories: "Gable Pergola · Box Stairs · Decking",
    image: "/images/USE-FARRER-1-Front.jpg",
    description:
      "For this home in Farrer the clients chose spotted gum decking, a popular choice for those who want to add natural beauty to their backyard. The natural oils in spotted gum help protect the wood against moisture and decay. They also picked an Ampelite gable roof pergola, providing a shaded area for outdoor relaxation and entertainment.",
  },
  {
    name: "Macgregor",
    categories: "Decking · Pergolas · Stairs · Balustrades",
    image: "/images/USE-MACGREGOR-.jpg",
    description:
      "This elevated deck offers stunning views and an elevated platform for outdoor gatherings. The pergola with downlights and fans creates a comfortable, well-lit area for evening entertaining, while the fans keep the space cool on warm days. The merbau balustrade provides a warm and natural aesthetic while also serving as a safety barrier.",
  },
  {
    name: "Dunlop",
    categories: "Pergola · Decking · Downlights · Fans · Heater Strips",
    image: "/images/181122_004.jpg",
    description:
      "Having an outdoor living space like this has been a great way to elevate the living space and enjoy the outdoors. The Trex decking is a low-maintenance, durable, and long-lasting material perfect for outdoor use. Its unique composition makes it resistant to fading, staining, and rot, ensuring it will look great for years to come.",
  },
  {
    name: "Weetangera",
    categories: "Decking",
    image: "/images/Weetangera-9.jpg",
    description:
      "This fun shaped deck in Weetangera is a perfect addition to the client’s backyard. Made with Azek composite decking, this deck is both durable and stylish. The unique shape adds a playful touch, making it a perfect place for entertaining guests or relaxing with family. The composite decking is resistant to moisture, fading, and staining.",
  },
  {
    name: "Bonner",
    categories: "Pergola · Box Stairs · Decking · Balustrade",
    image: "/images/USE-BONNER-1.jpg",
    description:
      "The combination of features in this home in Bonner provides a comfortable and functional outdoor living space. The insulation of the pergola provides shade and protection from the elements, while the downlights add a warm and inviting ambiance during evening hours. The addition of fans and a heater strip means the space is comfortable all year round.",
  },
  {
    name: "Tennis Club (Barton)",
    categories: "Pergolas",
    image: "/images/Tennis-Club-1.jpg",
    description:
      "This pergola at the Barton tennis court was designed to provide shade and protection from the elements for the club’s guests, while adding style to the outdoor seating area. Our team used high-quality materials and expert craftsmanship to ensure the pergola was both durable and attractive, and it has quickly became a popular spot for guests to relax and socialize.",
  },
];

const projectSlugs = [
  "jerrabomberra", "latham-deck", "isaacs", "omalley", "theodore", "oconnor",
  "garran", "richardson", "latham-screening", "chapman", "gelato-messina", "farrer",
  "macgregor", "dunlop", "weetangera", "bonner", "tennis-club",
];

export const projects: Project[] = projectsRaw.map((p, i) => ({
  ...p,
  slug: projectSlugs[i],
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectGalleries: Record<string, string[]> = {
  "jerrabomberra": ["/images/portfolio/jerrabomberra/1.jpeg","/images/portfolio/jerrabomberra/2.jpeg","/images/portfolio/jerrabomberra/3.jpeg","/images/portfolio/jerrabomberra/4.jpeg","/images/portfolio/jerrabomberra/5.jpeg","/images/portfolio/jerrabomberra/6.jpeg","/images/portfolio/jerrabomberra/7.jpeg","/images/portfolio/jerrabomberra/8.jpeg","/images/portfolio/jerrabomberra/9.jpeg"],
  "latham-deck": ["/images/portfolio/latham-deck/1.jpeg","/images/portfolio/latham-deck/2.jpeg","/images/portfolio/latham-deck/3.jpeg","/images/portfolio/latham-deck/4.jpeg","/images/portfolio/latham-deck/5.jpeg","/images/portfolio/latham-deck/6.jpeg","/images/portfolio/latham-deck/7.jpeg","/images/portfolio/latham-deck/8.jpeg","/images/portfolio/latham-deck/9.jpeg"],
  "isaacs": ["/images/portfolio/isaacs/1.jpg","/images/portfolio/isaacs/2.jpeg","/images/portfolio/isaacs/3.jpeg","/images/portfolio/isaacs/4.jpeg","/images/portfolio/isaacs/5.jpeg","/images/portfolio/isaacs/6.jpeg","/images/portfolio/isaacs/7.jpeg","/images/portfolio/isaacs/8.jpeg","/images/portfolio/isaacs/9.jpeg","/images/portfolio/isaacs/10.jpeg","/images/portfolio/isaacs/11.jpeg"],
  "omalley": ["/images/portfolio/omalley/1.jpg","/images/portfolio/omalley/2.jpg","/images/portfolio/omalley/3.jpg","/images/portfolio/omalley/4.jpg","/images/portfolio/omalley/5.jpg","/images/portfolio/omalley/6.jpg","/images/portfolio/omalley/7.jpg","/images/portfolio/omalley/8.jpg","/images/portfolio/omalley/9.jpg","/images/portfolio/omalley/10.jpg","/images/portfolio/omalley/11.jpg","/images/portfolio/omalley/12.jpg","/images/portfolio/omalley/13.jpg","/images/portfolio/omalley/14.jpg","/images/portfolio/omalley/15.jpg","/images/portfolio/omalley/16.jpg","/images/portfolio/omalley/17.jpg","/images/portfolio/omalley/18.jpg","/images/portfolio/omalley/19.jpg","/images/portfolio/omalley/20.jpg","/images/portfolio/omalley/21.jpg","/images/portfolio/omalley/22.jpg","/images/portfolio/omalley/23.jpg","/images/portfolio/omalley/24.jpg","/images/portfolio/omalley/25.jpg","/images/portfolio/omalley/26.jpg","/images/portfolio/omalley/27.jpg","/images/portfolio/omalley/28.jpg","/images/portfolio/omalley/29.jpg"],
  "theodore": ["/images/portfolio/theodore/1.jpg","/images/portfolio/theodore/2.jpg","/images/portfolio/theodore/3.jpg","/images/portfolio/theodore/4.jpg","/images/portfolio/theodore/5.jpg"],
  "oconnor": ["/images/portfolio/oconnor/1.jpg","/images/portfolio/oconnor/2.jpg","/images/portfolio/oconnor/3.jpg","/images/portfolio/oconnor/4.jpg","/images/portfolio/oconnor/5.jpg","/images/portfolio/oconnor/6.jpg","/images/portfolio/oconnor/7.jpg","/images/portfolio/oconnor/8.jpg","/images/portfolio/oconnor/9.jpg","/images/portfolio/oconnor/10.jpg","/images/portfolio/oconnor/11.jpg","/images/portfolio/oconnor/12.jpg"],
  "garran": ["/images/portfolio/garran/1.jpg","/images/portfolio/garran/2.jpg","/images/portfolio/garran/3.jpg","/images/portfolio/garran/4.jpg","/images/portfolio/garran/5.jpg","/images/portfolio/garran/6.jpg"],
  "richardson": ["/images/portfolio/richardson/1.jpg","/images/portfolio/richardson/2.jpg","/images/portfolio/richardson/3.jpg","/images/portfolio/richardson/4.jpg","/images/portfolio/richardson/5.jpg","/images/portfolio/richardson/6.jpg"],
  "latham-screening": ["/images/portfolio/latham-screening/1.jpg","/images/portfolio/latham-screening/2.jpg","/images/portfolio/latham-screening/3.jpg","/images/portfolio/latham-screening/4.jpg","/images/portfolio/latham-screening/5.jpg","/images/portfolio/latham-screening/6.jpg","/images/portfolio/latham-screening/7.jpg","/images/portfolio/latham-screening/8.jpg"],
  "chapman": ["/images/portfolio/chapman/1.jpg","/images/portfolio/chapman/2.jpg","/images/portfolio/chapman/3.jpg","/images/portfolio/chapman/4.jpg","/images/portfolio/chapman/5.jpg","/images/portfolio/chapman/6.jpg","/images/portfolio/chapman/7.jpg","/images/portfolio/chapman/8.jpg","/images/portfolio/chapman/9.jpg","/images/portfolio/chapman/10.jpg"],
  "gelato-messina": ["/images/portfolio/gelato-messina/1.jpg","/images/portfolio/gelato-messina/2.jpg","/images/portfolio/gelato-messina/3.jpg","/images/portfolio/gelato-messina/4.jpg","/images/portfolio/gelato-messina/5.jpg"],
  "farrer": ["/images/portfolio/farrer/1.jpg","/images/portfolio/farrer/2.jpg","/images/portfolio/farrer/3.jpg","/images/portfolio/farrer/4.jpg","/images/portfolio/farrer/5.jpg","/images/portfolio/farrer/6.jpg","/images/portfolio/farrer/7.jpg","/images/portfolio/farrer/8.jpg","/images/portfolio/farrer/9.jpg","/images/portfolio/farrer/10.jpg","/images/portfolio/farrer/11.jpeg"],
  "macgregor": ["/images/portfolio/macgregor/1.jpg","/images/portfolio/macgregor/2.jpg","/images/portfolio/macgregor/3.jpg","/images/portfolio/macgregor/4.jpg","/images/portfolio/macgregor/5.jpg","/images/portfolio/macgregor/6.jpg","/images/portfolio/macgregor/7.jpg","/images/portfolio/macgregor/8.jpg","/images/portfolio/macgregor/9.jpg","/images/portfolio/macgregor/10.jpg","/images/portfolio/macgregor/11.jpg"],
  "dunlop": ["/images/portfolio/dunlop/1.jpg","/images/portfolio/dunlop/2.jpg","/images/portfolio/dunlop/3.jpg","/images/portfolio/dunlop/4.jpg","/images/portfolio/dunlop/5.jpg","/images/portfolio/dunlop/6.jpg"],
  "weetangera": ["/images/portfolio/weetangera/1.jpg","/images/portfolio/weetangera/2.jpg","/images/portfolio/weetangera/3.jpg","/images/portfolio/weetangera/4.jpg","/images/portfolio/weetangera/5.jpg","/images/portfolio/weetangera/6.jpg","/images/portfolio/weetangera/7.jpg","/images/portfolio/weetangera/8.jpg","/images/portfolio/weetangera/9.jpg","/images/portfolio/weetangera/10.jpg","/images/portfolio/weetangera/11.jpg"],
  "bonner": ["/images/portfolio/bonner/1.jpg","/images/portfolio/bonner/2.jpg","/images/portfolio/bonner/3.jpg","/images/portfolio/bonner/4.jpg","/images/portfolio/bonner/5.jpg","/images/portfolio/bonner/6.jpg","/images/portfolio/bonner/7.jpg","/images/portfolio/bonner/8.jpg","/images/portfolio/bonner/9.jpg","/images/portfolio/bonner/10.jpg"],
  "tennis-club": ["/images/portfolio/tennis-club/1.jpg","/images/portfolio/tennis-club/2.jpg","/images/portfolio/tennis-club/3.jpg","/images/portfolio/tennis-club/4.jpg","/images/portfolio/tennis-club/5.jpg","/images/portfolio/tennis-club/6.jpg","/images/portfolio/tennis-club/7.jpg","/images/portfolio/tennis-club/8.jpg","/images/portfolio/tennis-club/9.jpg","/images/portfolio/tennis-club/10.jpg","/images/portfolio/tennis-club/11.jpg","/images/portfolio/tennis-club/12.jpg"],
};

export const company = {
  name: "ACT Decks",
  phone: "02 6280 6858",
  phoneHref: "tel:0262806858",
  email: "info@actdecks.com.au",
  address: "Unit 10/157 Gladstone St, Fyshwick ACT 2609",
  licence: "2015624",
};
