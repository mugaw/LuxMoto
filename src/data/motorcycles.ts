export interface Motorcycle {
  id: string;
  name: string;
  year: number;
  category: string;
  engine: string;
  power: string;
  weight: string;
  topSpeed?: string;
  description: string;
  image: string;
  isLegendary?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  founded: number;
  country: string;
  description: string;
  logo: string;
  image: string;
  motorcycles: Motorcycle[];
}

export const brands: Brand[] = [
  {
    id: "yamaha",
    name: "Yamaha",
    founded: 1955,
    country: "Japan",
    description: "Yamaha Motor Company has been crafting exceptional motorcycles since 1955. Known for their innovative engineering and racing heritage, Yamaha has produced some of the most iconic bikes in motorcycling history, from the legendary RD350 to the modern MT series.",
    logo: "https://images.unsplash.com/photo-1614165936126-2ed18e471b10?w=200&q=80",
    image: "images/brands/yamaha-hero.jpg",
    motorcycles: [
      {
        id: "yamaha-rd350",
        name: "RD350",
        year: 1973,
        category: "Sport",
        engine: "347cc Two-Stroke Twin",
        power: "39 hp",
        weight: "155 kg",
        description: "The RD350 is a true highlight from the two-stroke era. Its twin-cylinder two-stroke engine made 39 horsepower of blue smoke, excelling on curves with near-perfect handling and reed valve architecture.",
        image: "images/motorcycles/yamaha-rd350.jpg",
        isLegendary: true
      },
      {
        id: "yamaha-xt500",
        name: "XT500",
        year: 1976,
        category: "Enduro",
        engine: "499cc Single-Cylinder",
        power: "32 hp",
        weight: "170 kg",
        description: "The XT500 was the street-legal variant of the enduro racer TT500. Cyril Neveu won the first two Paris-Dakar Rally events in 1978 and 1979 with this legendary machine.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "yamaha-yz250",
        name: "YZ250",
        year: 1974,
        category: "Motocross",
        engine: "250cc Two-Stroke",
        power: "48 hp",
        weight: "103 kg",
        description: "Developed by motocross family patriarch Don Jones, the YZ250 has stayed in Yamaha's lineup since the '70s and is the longest-lived dirt bike model in history.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
        isLegendary: true
      },
      {
        id: "yamaha-r1",
        name: "YZF-R1",
        year: 1998,
        category: "Superbike",
        engine: "998cc Inline-Four",
        power: "150 hp",
        weight: "177 kg",
        topSpeed: "270 km/h",
        description: "The YZF-R1 revolutionized the superbike category with its compact design and exceptional power-to-weight ratio, becoming an instant icon.",
        image: "images/motorcycles/yamaha-r1.jpg",
        isLegendary: true
      },
      {
        id: "yamaha-mt09",
        name: "MT-09",
        year: 2014,
        category: "Naked",
        engine: "890cc CP3 Inline-Three",
        power: "119 hp",
        weight: "189 kg",
        description: "The MT-09 features Yamaha's revolutionary CP3 engine with its distinctive inline-three configuration, delivering agile torque and thrilling performance.",
        image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
        isLegendary: false
      },
      {
        id: "yamaha-mt07",
        name: "MT-07",
        year: 2014,
        category: "Naked",
        engine: "689cc CP2 Parallel-Twin",
        power: "75 hp",
        weight: "182 kg",
        description: "The MT-07 offers the perfect balance of power and agility with its CP2 engine, making it one of the most popular middleweight naked bikes.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: false
      }
    ]
  },
  {
    id: "honda",
    name: "Honda",
    founded: 1948,
    country: "Japan",
    description: "Honda is the world's largest motorcycle manufacturer. From the iconic CB750 that defined the superbike era to the legendary Gold Wing, Honda has consistently pushed the boundaries of motorcycle engineering.",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
    image: "images/brands/honda-hero.jpg",
    motorcycles: [
      {
        id: "honda-cb750",
        name: "CB750",
        year: 1969,
        category: "Sport",
        engine: "736cc Inline-Four",
        power: "67 hp",
        weight: "218 kg",
        description: "The CB750 kick-started the superbike era. This four-cylinder motorcycle set new standards for performance and reliability that defined the industry.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "honda-supercub",
        name: "Super Cub",
        year: 1958,
        category: "Scooter",
        engine: "49cc Single-Cylinder",
        power: "4.5 hp",
        weight: "82 kg",
        description: "With over 100 million units sold, the Super Cub is the most popular motorcycle in history, renowned for simplicity, reliability, and affordability.",
        image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80",
        isLegendary: true
      },
      {
        id: "honda-goldwing",
        name: "Gold Wing GL1000",
        year: 1975,
        category: "Touring",
        engine: "999cc Flat-Four",
        power: "80 hp",
        weight: "265 kg",
        description: "The Gold Wing redefined touring motorcycles with its smooth flat-four engine, shaft drive, and unmatched comfort for long-distance riding.",
        image: "images/motorcycles/honda-goldwing.jpg",
        isLegendary: true
      },
      {
        id: "honda-fireblade",
        name: "CBR900RR FireBlade",
        year: 1992,
        category: "Superbike",
        engine: "893cc Inline-Four",
        power: "124 hp",
        weight: "185 kg",
        description: "The FireBlade revolutionized sportbikes with its lightweight design and exceptional handling, setting new standards for the industry.",
        image: "images/motorcycles/honda-fireblade.jpg",
        isLegendary: true
      },
      {
        id: "honda-africatwin",
        name: "Africa Twin",
        year: 1988,
        category: "Adventure",
        engine: "1084cc Parallel-Twin",
        power: "101 hp",
        weight: "226 kg",
        description: "The Africa Twin has been a leading bike in the adventure touring segment, capable of handling any terrain with exceptional reliability.",
        image: "https://images.unsplash.com/photo-1594833230434-213ef2c395bc?w=800&q=80",
        isLegendary: true
      },
      {
        id: "honda-rebel500",
        name: "Rebel 500",
        year: 2017,
        category: "Cruiser",
        engine: "471cc Parallel-Twin",
        power: "46 hp",
        weight: "190 kg",
        description: "The Rebel 500 strikes the perfect balance between power and stability, offering classic cruiser styling with modern reliability.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: false
      }
    ]
  },
  {
    id: "ducati",
    name: "Ducati",
    founded: 1926,
    country: "Italy",
    description: "Ducati represents the pinnacle of Italian motorcycle craftsmanship. From the legendary 916 designed by Massimo Tamburini to the modern Panigale V4, Ducati bikes are works of art that dominate both streets and racetracks.",
    logo: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=200&q=80",
    image: "images/brands/ducati-hero.jpg",
    motorcycles: [
      {
        id: "ducati-750ss",
        name: "750 Super Sport",
        year: 1972,
        category: "Sport",
        engine: "748cc V-Twin",
        power: "80 hp",
        weight: "188 kg",
        description: "The 750 SS put Ducati on the map when Paul Smart won the Imola 200 in 1972, cementing Ducati's racing credibility with its desmodromic valve system.",
        image: "https://images.unsplash.com/photo-1614165936126-2ed18e471b10?w=800&q=80",
        isLegendary: true
      },
      {
        id: "ducati-916",
        name: "916",
        year: 1994,
        category: "Superbike",
        engine: "916cc V-Twin",
        power: "112 hp",
        weight: "198 kg",
        topSpeed: "256 km/h",
        description: "Designed by Massimo Tamburini, the 916 is considered one of the most beautiful motorcycles ever made, dominating World Superbike Championships.",
        image: "images/motorcycles/ducati-916.jpg",
        isLegendary: true
      },
      {
        id: "ducati-monster",
        name: "Monster 900",
        year: 1993,
        category: "Naked",
        engine: "904cc V-Twin",
        power: "73 hp",
        weight: "184 kg",
        description: "The Monster revolutionized the naked bike segment with its stripped-down styling, exposed trellis frame, and raw, minimalist design.",
        image: "images/motorcycles/ducati-monster.jpg",
        isLegendary: true
      },
      {
        id: "ducati-desmosedici",
        name: "Desmosedici RR",
        year: 2007,
        category: "Superbike",
        engine: "989cc V4",
        power: "200 hp",
        weight: "171 kg",
        topSpeed: "300 km/h",
        description: "Limited to just 1,500 units, the Desmosedici RR brought MotoGP technology to the streets with its carbon-fiber construction and racing pedigree.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
        isLegendary: true
      },
      {
        id: "ducati-panigale",
        name: "Panigale V4",
        year: 2018,
        category: "Superbike",
        engine: "1103cc V4",
        power: "214 hp",
        weight: "175 kg",
        topSpeed: "300+ km/h",
        description: "The Panigale V4 marked Ducati's shift to V4 powerplants inspired by MotoGP, delivering 214 horsepower of pure racing technology.",
        image: "https://images.unsplash.com/photo-1594833230434-213ef2c395bc?w=800&q=80",
        isLegendary: false
      },
      {
        id: "ducati-scrambler",
        name: "Scrambler",
        year: 2015,
        category: "Scrambler",
        engine: "803cc V-Twin",
        power: "75 hp",
        weight: "186 kg",
        description: "The Scrambler revival brought a fresh, fun-loving attitude to Ducati's lineup with retro-inspired design and accessible performance.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: false
      }
    ]
  },
  {
    id: "kawasaki",
    name: "Kawasaki",
    founded: 1966,
    country: "Japan",
    description: "Kawasaki has built a reputation for creating powerful, high-performance motorcycles. The Ninja series redefined sportbikes, while the Z series established the naked bike segment with raw power and aggressive styling.",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
    image: "images/brands/kawasaki-hero.jpg",
    motorcycles: [
      {
        id: "kawasaki-z1",
        name: "Z1",
        year: 1972,
        category: "Sport",
        engine: "903cc Inline-Four",
        power: "82 hp",
        weight: "230 kg",
        description: "The Z1 set new standards for the sport bike segment with its powerful inline-four engine and became known as the 'King of the Road'.",
        image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
        isLegendary: true
      },
      {
        id: "kawasaki-ninja900",
        name: "Ninja 900",
        year: 1984,
        category: "Sport",
        engine: "908cc Inline-Four",
        power: "115 hp",
        weight: "223 kg",
        topSpeed: "241 km/h",
        description: "The first generation Ninja redefined the modern sportbike with its liquid-cooled engine, advanced suspension, and iconic lime green color.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
        isLegendary: true
      },
      {
        id: "kawasaki-zx11",
        name: "Ninja ZX-11",
        year: 1990,
        category: "Sport Touring",
        engine: "1052cc Inline-Four",
        power: "160 hp",
        weight: "260 kg",
        topSpeed: "295 km/h",
        description: "The ZX-11 was the first motorcycle with a 1052cc ram-air engine, becoming the world's fastest production motorcycle of its time.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "kawasaki-zx14",
        name: "Ninja ZX-14R",
        year: 2006,
        category: "Hyperbike",
        engine: "1441cc Inline-Four",
        power: "208 hp",
        weight: "250 kg",
        topSpeed: "299 km/h",
        description: "The ZX-14R was designed to be the fastest street-legal motorcycle, with an engine big enough to power a car and top speed exceeding 186 mph.",
        image: "images/motorcycles/kawasaki-zx14.jpg",
        isLegendary: true
      },
      {
        id: "kawasaki-z1000",
        name: "Z1000",
        year: 2003,
        category: "Naked",
        engine: "953cc Inline-Four",
        power: "127 hp",
        weight: "198 kg",
        description: "The Z1000 pioneered the street-fighter segment with aggressive styling and raw power, inspiring a new generation of naked bikes.",
        image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
        isLegendary: true
      },
      {
        id: "kawasaki-ninja400",
        name: "Ninja 400",
        year: 2018,
        category: "Sport",
        engine: "399cc Parallel-Twin",
        power: "49 hp",
        weight: "168 kg",
        description: "The Ninja 400 is the perfect beginner-friendly sportbike, offering manageable power with full fairing styling and confidence-inspiring handling.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
        isLegendary: false
      }
    ]
  },
  {
    id: "bmw",
    name: "BMW Motorrad",
    founded: 1923,
    country: "Germany",
    description: "BMW Motorrad has been crafting premium motorcycles since 1923. Known for their boxer engines, shaft drive, and exceptional build quality, BMW bikes combine German engineering precision with touring comfort.",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
    image: "images/brands/bmw-hero.jpg",
    motorcycles: [
      {
        id: "bmw-r32",
        name: "R32",
        year: 1923,
        category: "Classic",
        engine: "494cc Boxer-Twin",
        power: "8.5 hp",
        weight: "122 kg",
        description: "The R32 was BMW's first motorcycle, establishing the boxer engine configuration and shaft drive that would define the brand for a century.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "bmw-r80gs",
        name: "R 80 G/S",
        year: 1980,
        category: "Adventure",
        engine: "797cc Boxer-Twin",
        power: "50 hp",
        weight: "191 kg",
        description: "The R 80 G/S created the adventure motorcycle segment, winning the Paris-Dakar Rally and establishing BMW's off-road credentials.",
        image: "https://images.unsplash.com/photo-1594833230434-213ef2c395bc?w=800&q=80",
        isLegendary: true
      },
      {
        id: "bmw-k100",
        name: "K100",
        year: 1983,
        category: "Sport Touring",
        engine: "987cc Inline-Four",
        power: "90 hp",
        weight: "239 kg",
        description: "The K100 was BMW's first inline-four motorcycle, featuring a unique longitudinal engine layout and fuel injection.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "bmw-s1000rr",
        name: "S1000RR",
        year: 2009,
        category: "Superbike",
        engine: "999cc Inline-Four",
        power: "193 hp",
        weight: "173 kg",
        topSpeed: "299 km/h",
        description: "The S1000RR revolutionized superbikes with its asymmetric headlights, delivering World Superbike performance with advanced electronics.",
        image: "images/motorcycles/bmw-s1000rr.jpg",
        isLegendary: true
      },
      {
        id: "bmw-r1250gs",
        name: "R 1250 GS",
        year: 2019,
        category: "Adventure",
        engine: "1254cc Boxer-Twin",
        power: "136 hp",
        weight: "249 kg",
        description: "The R 1250 GS is the ultimate adventure motorcycle, featuring BMW's ShiftCam technology and unmatched touring capability.",
        image: "https://images.unsplash.com/photo-1594833230434-213ef2c395bc?w=800&q=80",
        isLegendary: false
      },
      {
        id: "bmw-m1000r",
        name: "M 1000 R",
        year: 2023,
        category: "Naked",
        engine: "999cc Inline-Four",
        power: "210 hp",
        weight: "199 kg",
        description: "The M 1000 R is BMW's most powerful naked bike, bringing M Performance technology to the street with aggressive styling.",
        image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
        isLegendary: false
      }
    ]
  },
  {
    id: "harley-davidson",
    name: "Harley-Davidson",
    founded: 1903,
    country: "USA",
    description: "Harley-Davidson is an American icon, representing freedom and the open road. With their distinctive V-twin engines and cruiser styling, Harley bikes have inspired generations of riders worldwide.",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
    image: "images/brands/harley-hero.jpg",
    motorcycles: [
      {
        id: "harley-knucklehead",
        name: "Knucklehead",
        year: 1936,
        category: "Cruiser",
        engine: "1000cc V-Twin",
        power: "40 hp",
        weight: "240 kg",
        description: "The Knucklehead introduced Harley's overhead valve engine, becoming an instant classic and one of the most collectible Harley models.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "harley-sportster",
        name: "Sportster",
        year: 1957,
        category: "Cruiser",
        engine: "883cc V-Twin",
        power: "50 hp",
        weight: "256 kg",
        description: "The Sportster is Harley's longest-running model, offering a lighter, more agile ride while maintaining classic Harley character.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "harley-electraglide",
        name: "Electra Glide",
        year: 1965,
        category: "Touring",
        engine: "1200cc V-Twin",
        power: "60 hp",
        weight: "320 kg",
        description: "The Electra Glide defined the touring motorcycle segment with its full fairing, hard bags, and long-distance comfort.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "harley-fatboy",
        name: "Fat Boy",
        year: 1990,
        category: "Cruiser",
        engine: "1340cc V-Twin",
        power: "70 hp",
        weight: "290 kg",
        description: "The Fat Boy became an instant icon with its solid disc wheels and muscular styling, appearing in countless films and shows.",
        image: "images/motorcycles/harley-fatboy.jpg",
        isLegendary: true
      },
      {
        id: "harley-vrod",
        name: "V-Rod",
        year: 2001,
        category: "Power Cruiser",
        engine: "1130cc V-Twin",
        power: "115 hp",
        weight: "280 kg",
        description: "The V-Rod was Harley's first liquid-cooled motorcycle, developed with Porsche engineering for unprecedented performance.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: true
      },
      {
        id: "harley-breakout",
        name: "Breakout",
        year: 2023,
        category: "Cruiser",
        engine: "1923cc V-Twin",
        power: "105 hp",
        weight: "305 kg",
        description: "The Breakout combines drag bike styling with modern Milwaukee-Eight power, featuring a wide rear tire and stretched profile.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        isLegendary: false
      }
    ]
  }
];

export const categories = [
  { id: "sport", name: "Sport", description: "High-performance machines built for speed and agility", image: "images/categories/sport.jpg" },
  { id: "naked", name: "Naked", description: "Raw power with minimal bodywork", image: "images/categories/naked.jpg" },
  { id: "cruiser", name: "Cruiser", description: "Relaxed riding position with classic styling", image: "images/categories/cruiser.jpg" },
  { id: "adventure", name: "Adventure", description: "Go anywhere, do anything versatility", image: "images/categories/adventure.jpg" },
  { id: "touring", name: "Touring", description: "Long-distance comfort and capability", image: "images/categories/touring.jpg" },
  { id: "superbike", name: "Superbike", description: "Track-derived performance for the street", image: "images/categories/superbike.jpg" }
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getMotorcycleById = (brandId: string, motorcycleId: string): Motorcycle | undefined => {
  const brand = getBrandById(brandId);
  return brand?.motorcycles.find(m => m.id === motorcycleId);
};

export const getMotorcyclesByCategory = (category: string): { brand: Brand; motorcycle: Motorcycle }[] => {
  const results: { brand: Brand; motorcycle: Motorcycle }[] = [];
  brands.forEach(brand => {
    brand.motorcycles.forEach(motorcycle => {
      if (motorcycle.category.toLowerCase() === category.toLowerCase()) {
        results.push({ brand, motorcycle });
      }
    });
  });
  return results;
};

export const getLegendaryMotorcycles = (): { brand: Brand; motorcycle: Motorcycle }[] => {
  const results: { brand: Brand; motorcycle: Motorcycle }[] = [];
  brands.forEach(brand => {
    brand.motorcycles.forEach(motorcycle => {
      if (motorcycle.isLegendary) {
        results.push({ brand, motorcycle });
      }
    });
  });
  return results;
};
