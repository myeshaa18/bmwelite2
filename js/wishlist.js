// wishlist.js - Wishlist Page Functionality

// Combined database for all cars (rental + sale)
// Combined database for all cars (rental + sale + home)
const allCarsDatabase = {
    // Home page cars
    home: {
        1: { id: 1, model: 'BMW X7 M50i', year: 2022, mileage: '5,000 km', transmission: 'Automatic', price: 2500, priceText: 'AED 2,500/day', engine: '4.4L V8 Twin-Turbo', power: '523 HP', seats: 7, fuel: 'Premium', type: 'rent', description: 'The BMW X7 combines luxury with power, featuring a twin-turbo V8 engine delivering 523 horsepower. This flagship SUV offers three rows of seating, advanced technology, and a commanding road presence. Perfect for families or executive travel.', imageFolder: 'home' },
        2: { id: 2, model: 'BMW M4 Competition', year: 2024, mileage: '12,000 km', transmission: 'Automatic', price: 385000, priceText: 'AED 385,000', engine: '3.0L I6 Twin-Turbo', power: '503 HP', seats: 4, fuel: 'Premium', type: 'sale', description: 'Pure performance with a 3.0L twin-turbo inline-six engine, delivering 503 horsepower. The M4 Competition features aggressive styling, track-ready performance, and luxurious interior appointments. A true driver\'s car.', imageFolder: 'home' },
        3: { id: 3, model: 'BMW i8 Roadster', year: 2017, mileage: '3,500 km', transmission: 'Hybrid', price: 3200, priceText: 'AED 3,200/day', engine: '1.5L I3 + Electric', power: '369 HP', seats: 2, fuel: 'Hybrid', type: 'rent', description: 'Futuristic hybrid sports car combining electric efficiency with combustion power. Features stunning design, butterfly doors, and advanced hybrid technology. Experience the future of performance driving.', imageFolder: 'home' },
        4: { id: 4, model: 'BMW 7 Series 750Li', year: 2022, mileage: '8,000 km', transmission: 'Automatic', price: 425000, priceText: 'AED 425,000', engine: '4.4L V8 Twin-Turbo', power: '523 HP', seats: 5, fuel: 'Premium', type: 'sale', description: 'Executive luxury sedan with cutting-edge technology and supreme comfort. Features include massage seats, gesture control, and a powerful V8 engine. The ultimate business sedan.', imageFolder: 'home' },
        5: { id: 5, model: 'BMW X5 M Competition', year: 2024, mileage: '6,200 km', transmission: 'Automatic', price: 2800, priceText: 'AED 2,800/day', engine: '4.4L V8 Twin-Turbo', power: '617 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'High-performance SUV with 617 horsepower, combining versatility with sports car dynamics. Features M-specific enhancements, adaptive suspension, and luxurious interior. Perfect for any occasion.', imageFolder: 'home' },
        6: { id: 6, model: 'BMW M8 Gran Coupe', year: 2021, mileage: '4,500 km', transmission: 'Automatic', price: 675000, priceText: 'AED 675,000', engine: '4.4L V8 Twin-Turbo', power: '617 HP', seats: 4, fuel: 'Premium', type: 'sale', description: 'Ultimate luxury gran coupe with 617 horsepower and breathtaking performance. Combines four-door practicality with supercar performance. The pinnacle of BMW engineering.', imageFolder: 'home' }
    },
    // Rental cars from rent.js
    rental: {
        101: { id: 101, model: 'BMW X7 M50i', year: 2022, mileage: '5,000 km', transmission: 'Automatic', price: 2500, priceText: 'AED 2,500/day', engine: '4.4L V8 Twin-Turbo', power: '523 HP', seats: 7, fuel: 'Premium', type: 'rent', description: 'The ultimate luxury SUV combining space, power, and sophistication. Perfect for families or executive travel with three rows of premium seating.', imageFolder: 'rent' },
        102: { id: 102, model: 'BMW X5 M Competition', year: 2024, mileage: '3,200 km', transmission: 'Automatic', price: 2200, priceText: 'AED 2,200/day', engine: '4.4L V8 Twin-Turbo', power: '617 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'High-performance SUV delivering sports car dynamics with everyday versatility.', imageFolder: 'rent' },
        103: { id: 103, model: 'BMW X6 M50i', year: 2022, mileage: '8,500 km', transmission: 'Automatic', price: 2000, priceText: 'AED 2,000/day', engine: '4.4L V8 Twin-Turbo', power: '523 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Sports Activity Coupe with aggressive styling and powerful performance.', imageFolder: 'rent' },
        104: { id: 104, model: 'BMW X3 M40i', year: 2021, mileage: '4,100 km', transmission: 'Automatic', price: 1500, priceText: 'AED 1,500/day', engine: '3.0L I6 Turbo', power: '382 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Perfect balance between compact dimensions and big performance.', imageFolder: 'rent' },
        105: { id: 105, model: 'BMW X4 M', year: 2020, mileage: '6,800 km', transmission: 'Automatic', price: 1900, priceText: 'AED 1,900/day', engine: '3.0L I6 Twin-Turbo', power: '473 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Full-blooded M Division creation with track-honed performance.', imageFolder: 'rent' },
        106: { id: 106, model: 'BMW X1 sDrive20i', year: 2025, mileage: '2,500 km', transmission: 'Automatic', price: 1200, priceText: 'AED 1,200/day', engine: '2.0L I4 Turbo', power: '192 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Accessible entry into BMW luxury without compromising quality.', imageFolder: 'rent' },
        201: { id: 201, model: 'BMW M4 Competition', year: 2024, mileage: '2,800 km', transmission: 'Automatic', price: 2800, priceText: 'AED 2,800/day', engine: '3.0L I6 Twin-Turbo', power: '503 HP', seats: 4, fuel: 'Premium', type: 'rent', description: 'Pure performance coupe with aggressive styling and track-ready dynamics.', imageFolder: 'rent' },
        202: { id: 202, model: 'BMW M3 Competition', year: 2024, mileage: '3,500 km', transmission: 'Automatic', price: 2600, priceText: 'AED 2,600/day', engine: '3.0L I6 Twin-Turbo', power: '503 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Legendary sports sedan combining family practicality with supercar performance.', imageFolder: 'rent' },
        203: { id: 203, model: 'BMW M8 Gran Coupe Competition', year: 2021, mileage: '5,200 km', transmission: 'Automatic', price: 3500, priceText: 'AED 3,500/day', engine: '4.4L V8 Twin-Turbo', power: '617 HP', seats: 4, fuel: 'Premium', type: 'rent', description: 'Flagship performance grand tourer with exotic car performance.', imageFolder: 'rent' },
        204: { id: 204, model: 'BMW M2 Competition', year: 2025, mileage: '7,100 km', transmission: 'Manual', price: 2000, priceText: 'AED 2,000/day', engine: '3.0L I6 Twin-Turbo', power: '405 HP', seats: 4, fuel: 'Premium', type: 'rent', description: 'Purist\'s choice with manual transmission and incredible agility.', imageFolder: 'rent' },
        205: { id: 205, model: 'BMW M5 Competition', year: 2025, mileage: '4,300 km', transmission: 'Automatic', price: 3000, priceText: 'AED 3,000/day', engine: '4.4L V8 Twin-Turbo', power: '617 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Ultimate super sedan combining family comfort with supercar speed.', imageFolder: 'rent' },
        206: { id: 206, model: 'BMW M240i xDrive', year: 2024, mileage: '3,900 km', transmission: 'Automatic', price: 1800, priceText: 'AED 1,800/day', engine: '3.0L I6 Turbo', power: '382 HP', seats: 4, fuel: 'Premium', type: 'rent', description: 'M Performance at its most accessible in compact package.', imageFolder: 'rent' },
        301: { id: 301, model: 'BMW 7 Series 750Li', year: 2022, mileage: '4,200 km', transmission: 'Automatic', price: 2400, priceText: 'AED 2,400/day', engine: '4.4L V8 Twin-Turbo', power: '523 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Executive luxury flagship with cutting-edge technology and supreme comfort.', imageFolder: 'rent' },
        302: { id: 302, model: 'BMW 5 Series 540i', year: 2024, mileage: '5,800 km', transmission: 'Automatic', price: 1800, priceText: 'AED 1,800/day', engine: '3.0L I6 Turbo', power: '335 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Quintessential business athlete balancing performance and luxury.', imageFolder: 'rent' },
        303: { id: 303, model: 'BMW 3 Series 330i', year: 2025, mileage: '6,500 km', transmission: 'Automatic', price: 1500, priceText: 'AED 1,500/day', engine: '2.0L I4 Turbo', power: '255 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Sports sedan benchmark with perfect handling balance.', imageFolder: 'rent' },
        304: { id: 304, model: 'BMW 8 Series M850i', year: 2023, mileage: '7,200 km', transmission: 'Automatic', price: 3200, priceText: 'AED 3,200/day', engine: '4.4L V8 Twin-Turbo', power: '523 HP', seats: 4, fuel: 'Premium', type: 'rent', description: 'Modern grand tourer combining breathtaking performance with luxury.', imageFolder: 'rent' },
        305: { id: 305, model: 'BMW 4 Series 430i', year: 2025, mileage: '4,700 km', transmission: 'Automatic', price: 1600, priceText: 'AED 1,600/day', engine: '2.0L I4 Turbo', power: '255 HP', seats: 4, fuel: 'Premium', type: 'rent', description: 'Coupe style with sporting character and everyday usability.', imageFolder: 'rent' },
        306: { id: 306, model: 'BMW 6 Series GT', year: 2023, mileage: '8,100 km', transmission: 'Automatic', price: 1900, priceText: 'AED 1,900/day', engine: '3.0L I6 Turbo', power: '335 HP', seats: 5, fuel: 'Premium', type: 'rent', description: 'Unique blend of coupe elegance and hatchback versatility.', imageFolder: 'rent' },
        401: { id: 401, model: 'BMW Z4 M40i', year: 2019, mileage: '2,100 km', transmission: 'Automatic', price: 2200, priceText: 'AED 2,200/day', engine: '3.0L I6 Turbo', power: '382 HP', seats: 2, fuel: 'Premium', type: 'rent', description: 'Open-top roadster delivering pure driving pleasure.', imageFolder: 'rent' },
        402: { id: 402, model: 'BMW Z4 sDrive30i', year: 2026, mileage: '5,400 km', transmission: 'Automatic', price: 1700, priceText: 'AED 1,700/day', engine: '2.0L I4 Turbo', power: '255 HP', seats: 2, fuel: 'Premium', type: 'rent', description: 'Accessible roadster thrills with BMW refinement.', imageFolder: 'rent' },
        403: { id: 403, model: 'BMW Z4 M Roadster', year: 2007, mileage: '6,800 km', transmission: 'Manual', price: 2500, priceText: 'AED 2,500/day', engine: '3.2L I6', power: '338 HP', seats: 2, fuel: 'Premium', type: 'rent', description: 'Modern classic with legendary S54 engine.', imageFolder: 'rent' },
        501: { id: 501, model: 'BMW i8 Roadster', year: 2017, mileage: '1,800 km', transmission: 'Hybrid', price: 3200, priceText: 'AED 3,200/day', engine: '1.5L I3 + Electric', power: '369 HP', seats: 2, fuel: 'Hybrid', type: 'rent', description: 'Futuristic plug-in hybrid sports car with butterfly doors.', imageFolder: 'rent' },
        502: { id: 502, model: 'BMW i4 M50', year: 2025, mileage: '3,200 km', transmission: 'Electric', price: 2400, priceText: 'AED 2,400/day', engine: 'Dual Electric Motors', power: '536 HP', seats: 5, fuel: 'Electric', type: 'rent', description: 'Future of M Performance with instantaneous electric power.', imageFolder: 'rent' },
        503: { id: 503, model: 'BMW iX xDrive50', year: 2024, mileage: '2,900 km', transmission: 'Electric', price: 2800, priceText: 'AED 2,800/day', engine: 'Dual Electric Motors', power: '516 HP', seats: 5, fuel: 'Electric', type: 'rent', description: 'Revolutionary electric SUV redefining sustainable luxury.', imageFolder: 'rent' },
        504: { id: 504, model: 'BMW i7 xDrive60', year: 2022, mileage: '2,100 km', transmission: 'Electric', price: 3500, priceText: 'AED 3,500/day', engine: 'Dual Electric Motors', power: '536 HP', seats: 5, fuel: 'Electric', type: 'rent', description: 'Electric luxury flagship combining heritage with technology.', imageFolder: 'rent' },
        505: { id: 505, model: 'BMW iX3', year: 2025, mileage: '4,500 km', transmission: 'Electric', price: 2000, priceText: 'AED 2,000/day', engine: 'Electric Motor', power: '286 HP', seats: 5, fuel: 'Electric', type: 'rent', description: 'Accessible electric driving with premium quality.', imageFolder: 'rent' },
        506: { id: 506, model: 'BMW i3', year: 2018, mileage: '8,200 km', transmission: 'Electric', price: 1400, priceText: 'AED 1,400/day', engine: 'Electric Motor', power: '184 HP', seats: 4, fuel: 'Electric', type: 'rent', description: 'Pioneering urban electric vehicle with unique character.', imageFolder: 'rent' }
    },
    // Sale cars from buy.js
    sale: {
        1001: { id: 1001, model: 'BMW X7 xDrive40i', year: 2023, mileage: '18,500 km', transmission: 'Automatic', price: 385000, priceText: 'AED 385,000', engine: '3.0L I6 Turbo', power: '335 HP', seats: 7, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Certified pre-owned BMW X7 in pristine condition. Full-size luxury SUV with three rows of seating.', imageFolder: 'buy' },
        1002: { id: 1002, model: 'BMW X5 xDrive45e', year: 2024, mileage: '8,200 km', transmission: 'Automatic', price: 425000, priceText: 'AED 425,000', engine: '3.0L I6 + Electric', power: '389 HP', seats: 5, fuel: 'Plug-in Hybrid', condition: 'Like New', type: 'sale', description: 'Nearly new plug-in hybrid X5 with exceptional fuel efficiency.', imageFolder: 'buy' },
        1003: { id: 1003, model: 'BMW X6 M50i', year: 2022, mileage: '28,400 km', transmission: 'Automatic', price: 340000, priceText: 'AED 340,000', engine: '4.4L V8 Twin-Turbo', power: '523 HP', seats: 5, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Original Sports Activity Coupe with bold design and devastating performance.', imageFolder: 'buy' },
        1004: { id: 1004, model: 'BMW X3 M40i', year: 2023, mileage: '15,800 km', transmission: 'Automatic', price: 265000, priceText: 'AED 265,000', engine: '3.0L I6 Turbo', power: '382 HP', seats: 5, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Sweet spot in compact luxury SUV segment with M Performance character.', imageFolder: 'buy' },
        1005: { id: 1005, model: 'BMW X4 xDrive30i', year: 2019, mileage: '35,600 km', transmission: 'Automatic', price: 215000, priceText: 'AED 215,000', engine: '2.0L I4 Turbo', power: '248 HP', seats: 5, fuel: 'Premium', condition: 'Very Good', type: 'sale', description: 'Accessible entry into distinctive Sports Activity Coupe segment.', imageFolder: 'buy' },
        1006: { id: 1006, model: 'BMW X2 M35i', year: 2022, mileage: '22,100 km', transmission: 'Automatic', price: 185000, priceText: 'AED 185,000', engine: '2.0L I4 Turbo', power: '302 HP', seats: 5, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Rebellious young athlete with distinctive styling and M Performance credentials.', imageFolder: 'buy' },
        2001: { id: 2001, model: 'BMW M3 Competition xDrive', year: 2023, mileage: '12,300 km', transmission: 'Automatic', price: 495000, priceText: 'AED 495,000', engine: '3.0L I6 Twin-Turbo', power: '503 HP', seats: 5, fuel: 'Premium', condition: 'Like New', type: 'sale', description: 'Ultimate sports sedan with all-wheel drive and competition package.', imageFolder: 'buy' },
        2002: { id: 2002, model: 'BMW M4 Convertible', year: 2022, mileage: '19,700 km', transmission: 'Automatic', price: 465000, priceText: 'AED 465,000', engine: '3.0L I6 Twin-Turbo', power: '473 HP', seats: 4, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Ultimate open-air M4 with retractable hardtop.', imageFolder: 'buy' },
        2003: { id: 2003, model: 'BMW M8 Competition Gran Coupe', year: 2021, mileage: '24,500 km', transmission: 'Automatic', price: 580000, priceText: 'AED 580,000', engine: '4.4L V8 Twin-Turbo', power: '617 HP', seats: 4, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Absolute pinnacle of M Division with full carbon fiber package.', imageFolder: 'buy' },
        2004: { id: 2004, model: 'BMW M2 CS', year: 2020, mileage: '31,200 km', transmission: 'Manual', price: 395000, priceText: 'AED 395,000', engine: '3.0L I6 Twin-Turbo', power: '444 HP', seats: 4, fuel: 'Premium', condition: 'Very Good', type: 'sale', description: 'Limited production special edition - future classic.', imageFolder: 'buy' },
        2005: { id: 2005, model: 'BMW M5 Competition', year: 2023, mileage: '15,900 km', transmission: 'Automatic', price: 525000, priceText: 'AED 525,000', engine: '4.4L V8 Twin-Turbo', power: '617 HP', seats: 5, fuel: 'Premium', condition: 'Like New', type: 'sale', description: 'Ultimate super sedan with 617 horsepower.', imageFolder: 'buy' },
        2006: { id: 2006, model: 'BMW M240i xDrive Coupe', year: 2022, mileage: '26,800 km', transmission: 'Automatic', price: 285000, priceText: 'AED 285,000', engine: '3.0L I6 Turbo', power: '382 HP', seats: 4, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Genuine M Performance character at accessible price.', imageFolder: 'buy' },
        3001: { id: 3001, model: 'BMW 740Li xDrive', year: 2022, mileage: '21,400 km', transmission: 'Automatic', price: 410000, priceText: 'AED 410,000', engine: '3.0L I6 Turbo', power: '335 HP', seats: 5, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Executive flagship sedan with extended wheelbase for ultimate comfort.', imageFolder: 'buy' },
        3002: { id: 3002, model: 'BMW 530i M Sport', year: 2023, mileage: '14,200 km', transmission: 'Automatic', price: 315000, priceText: 'AED 315,000', engine: '2.0L I4 + Electric', power: '288 HP', seats: 5, fuel: 'Plug-in Hybrid', condition: 'Like New', type: 'sale', description: 'Intelligent choice for executives seeking refinement with environmental responsibility.', imageFolder: 'buy' },
        3003: { id: 3003, model: 'BMW 330i M Sport', year: 2023, mileage: '19,300 km', transmission: 'Automatic', price: 245000, priceText: 'AED 245,000', engine: '2.0L I4 Turbo', power: '255 HP', seats: 5, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Heart and soul of BMW brand with latest technology.', imageFolder: 'buy' },
        3004: { id: 3004, model: 'BMW 840i Gran Coupe', year: 2021, mileage: '29,800 km', transmission: 'Automatic', price: 445000, priceText: 'AED 445,000', engine: '3.0L I6 Turbo', power: '335 HP', seats: 4, fuel: 'Premium', condition: 'Very Good', type: 'sale', description: 'Modern luxury grand touring at its finest.', imageFolder: 'buy' },
        3005: { id: 3005, model: 'BMW 430i Convertible', year: 2022, mileage: '16,700 km', transmission: 'Automatic', price: 295000, priceText: 'AED 295,000', engine: '2.0L I4 Turbo', power: '255 HP', seats: 4, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Perfect combination of style and open-air motoring pleasure.', imageFolder: 'buy' },
        3006: { id: 3006, model: 'BMW 640i GT', year: 2020, mileage: '38,200 km', transmission: 'Automatic', price: 275000, priceText: 'AED 275,000', engine: '3.0L I6 Turbo', power: '335 HP', seats: 5, fuel: 'Premium', condition: 'Very Good', type: 'sale', description: 'Unique blend of coupe styling and hatchback versatility.', imageFolder: 'buy' },
        4001: { id: 4001, model: 'BMW Z4 M40i', year: 2021, mileage: '16,800 km', transmission: 'Automatic', price: 335000, priceText: 'AED 335,000', engine: '3.0L I6 Turbo', power: '382 HP', seats: 2, fuel: 'Premium', condition: 'Excellent', type: 'sale', description: 'Pure roadster with powerful inline-six and sharp handling.', imageFolder: 'buy' },
        4002: { id: 4002, model: 'BMW Z4 sDrive30i', year: 2022, mileage: '12,400 km', transmission: 'Automatic', price: 285000, priceText: 'AED 285,000', engine: '2.0L I4 Turbo', power: '255 HP', seats: 2, fuel: 'Premium', condition: 'Like New', type: 'sale', description: 'Accessible roadster thrills with nearly new condition.', imageFolder: 'buy' },
        4003: { id: 4003, model: 'BMW Z4 35is', year: 2020, mileage: '24,600 km', transmission: 'Automatic', price: 245000, priceText: 'AED 245,000', engine: '3.0L I6 Twin-Turbo', power: '335 HP', seats: 2, fuel: 'Premium', condition: 'Very Good', type: 'sale', description: 'Special edition roadster with enhanced performance.', imageFolder: 'buy' },
        5001: { id: 5001, model: 'BMW i8 Coupe', year: 2019, mileage: '14,200 km', transmission: 'Hybrid', price: 475000, priceText: 'AED 475,000', engine: '1.5L I3 + Electric', power: '369 HP', seats: 2, fuel: 'Plug-in Hybrid', condition: 'Excellent', type: 'sale', description: 'Futuristic plug-in hybrid sports car with iconic butterfly doors.', imageFolder: 'buy' },
        5002: { id: 5002, model: 'BMW i4 m50', year: 2022, mileage: '9,800 km', transmission: 'Electric', price: 365000, priceText: 'AED 365,000', engine: 'Electric Motor', power: '335 HP', seats: 5, fuel: 'Electric', condition: 'Like New', type: 'sale', description: 'Electric vehicles can be genuinely exciting with M Performance.', imageFolder: 'buy' },
        5003: { id: 5003, model: 'BMW iX m60', year: 2023, mileage: '11,500 km', transmission: 'Electric', price: 485000, priceText: 'AED 485,000', engine: 'Dual Electric Motors', power: '516 HP', seats: 5, fuel: 'Electric', condition: 'Like New', type: 'sale', description: 'Cutting edge luxury electric SUV with M Performance.', imageFolder: 'buy' },
        5004: { id: 5004, model: 'BMW i7 m70', year: 2024, mileage: '5,200 km', transmission: 'Electric', price: 625000, priceText: 'AED 625,000', engine: 'Dual Electric Motors', power: '536 HP', seats: 5, fuel: 'Electric', condition: 'As New', type: 'sale', description: 'Electric flagship representing pinnacle of luxury and technology.', imageFolder: 'buy' },
        5005: { id: 5005, model: 'BMW iX3', year: 2022, mileage: '18,900 km', transmission: 'Electric', price: 295000, priceText: 'AED 295,000', engine: 'Electric Motor', power: '286 HP', seats: 5, fuel: 'Electric', condition: 'Excellent', type: 'sale', description: 'Accessible electric vehicle ownership with premium quality.', imageFolder: 'buy' },
        5006: { id: 5006, model: 'BMW i3s Range Extender', year: 2021, mileage: '22,400 km', transmission: 'Electric', price: 165000, engine: 'Electric + Range Extender', power: '184 HP', seats: 4, fuel: 'Electric / Hybrid', condition: 'Very Good', type: 'sale', description: 'Pioneering electric city car with range - extended capability.', imageFolder: 'buy' }
} 
};

// Modal image carousel state
let currentImageIndex = 0;
let imageInterval = null;
let modalImages = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadWishlistCars();
    updateWishlistCount();
    
    if (typeof checkUserLogin === 'function') {
        checkUserLogin();
    }
});

// Load wishlist cars
function loadWishlistCars() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistGrid = document.getElementById('wishlistGrid');
    const emptyWishlist = document.getElementById('emptyWishlist');
    const wishlistItemCount = document.getElementById('wishlistItemCount');
    const clearAllBtn = document.getElementById('clearAllBtn');

    if (wishlist.length === 0) {
        // Show empty state
        emptyWishlist.classList.add('active');
        wishlistGrid.style.display = 'none';
        clearAllBtn.style.display = 'none';
        wishlistItemCount.textContent = '0 items in your wishlist';
        return;
    }

    // Hide empty state
    emptyWishlist.classList.remove('active');
    wishlistGrid.style.display = 'grid';
    clearAllBtn.style.display = 'flex';
    wishlistItemCount.textContent = `${wishlist.length} item${wishlist.length > 1 ? 's' : ''} in your wishlist`;

    // Load cars
    let carsHTML = '';
    wishlist.forEach(carId => {
        const car = findCarById(carId);
        if (car) {
            carsHTML += generateWishlistCarCard(car);
        }
    });

    wishlistGrid.innerHTML = carsHTML;
}

// Find car by ID from all databases
function findCarById(carId) {
    // Check rental cars
    if (allCarsDatabase.rental[carId]) {
        return allCarsDatabase.rental[carId];
    }
    // Check sale cars
    if (allCarsDatabase.sale[carId]) {
        return allCarsDatabase.sale[carId];
    }
    return null;
}

// Generate wishlist car card HTML
function generateWishlistCarCard(car) {
    return `
        <div class="car-card" data-car-id="${car.id}">
            <div class="car-image">
                <img src="images/cars/${car.imageFolder}/car${car.id}.jpg" alt="${car.model}" onerror="this.src='images/cars/placeholder.jpg'">
                <div class="car-badge ${car.type === 'sale' ? 'sale' : ''}">${car.type === 'rent' ? 'For Rent' : 'For Sale'}</div>
                <button class="wishlist-btn active" onclick="removeFromWishlist(${car.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="car-info">
                <h3 class="car-model">${car.model}</h3>
                <div class="car-year-price">
                    <span class="car-year"><i class="fas fa-calendar"></i> ${car.year}</span>
                    <div class="car-price">
                        <span class="price">${car.priceText}</span>
                    </div>
                </div>
                <button class="btn-details" onclick="openWishlistCarDetails(${car.id})">
                    View Details
                </button>
            </div>
        </div>
    `;
}

// Open car details modal
function openWishlistCarDetails(carId) {
    const car = findCarById(carId);
    if (!car) return;

    // Create array of 4 images for the carousel
    modalImages = [
        `images/cars/${car.imageFolder}/car${car.id}.jpg`,
        `images/cars/${car.imageFolder}/car${car.id}-2.jpg`,
        `images/cars/${car.imageFolder}/car${car.id}-3.jpg`,
        `images/cars/${car.imageFolder}/car${car.id}-4.jpg`
    ];
    currentImageIndex = 0;

    const modal = document.getElementById('carModal');
    const modalBody = document.getElementById('modalBody');

    const modalContent = `
        <div class="modal-car-images">
            <div class="modal-image-container">
                ${modalImages.map((img, idx) => `
                    <img src="${img}" alt="${car.model}" class="modal-car-image ${idx === 0 ? 'active' : ''}" onerror="this.src='images/cars/placeholder.jpg'">
                `).join('')}
            </div>
            <button class="image-nav prev" onclick="prevImage()">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="image-nav next" onclick="nextImage()">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="image-indicators">
                ${modalImages.map((_, idx) => `
                    <div class="image-indicator ${idx === 0 ? 'active' : ''}" onclick="goToImage(${idx})"></div>
                `).join('')}
            </div>
        </div>
        
        <h2 class="modal-car-title">${car.model}</h2>
        
        <div class="modal-car-specs">
            <div class="spec-item">
                <i class="fas fa-calendar"></i>
                <div class="spec-label">Year</div>
                <div class="spec-value">${car.year}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-tachometer-alt"></i>
                <div class="spec-label">Mileage</div>
                <div class="spec-value">${car.mileage}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-cog"></i>
                <div class="spec-label">Transmission</div>
                <div class="spec-value">${car.transmission}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-gas-pump"></i>
                <div class="spec-label">Fuel</div>
                <div class="spec-value">${car.fuel}</div>
            </div>
        </div>
        
        <div class="modal-car-specs">
            <div class="spec-item">
                <i class="fas fa-engine"></i>
                <div class="spec-label">Engine</div>
                <div class="spec-value">${car.engine}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-bolt"></i>
                <div class="spec-label">Power</div>
                <div class="spec-value">${car.power}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-users"></i>
                <div class="spec-label">Seats</div>
                <div class="spec-value">${car.seats}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-tag"></i>
                <div class="spec-label">Type</div>
                <div class="spec-value">${car.type === 'rent' ? 'For Rent' : 'For Sale'}</div>
            </div>
        </div>
        
        <p class="modal-car-description">${car.description}</p>
        
        <div class="modal-car-price">${car.priceText}</div>
        
        <div class="modal-actions">
            ${car.type === 'rent' 
                ? `<button class="btn-rent" onclick="rentCarFromWishlist(${car.id})">Rent Now</button>` 
                : `<button class="btn-buy" onclick="buyCarFromWishlist(${car.id})">Inquire to Buy</button>`
            }
            <button class="btn-whatsapp" onclick="contactWhatsApp('${car.model}')">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </button>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    startImageCarousel();
}

// Rent car from wishlist
function rentCarFromWishlist(carId) {
    const car = findCarById(carId);
    if (!car) return;
    
    closeCarDetails();
    setTimeout(() => {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'rent',
            price: car.priceText
        });
    }, 300);
}

// Buy car from wishlist
function buyCarFromWishlist(carId) {
    const car = findCarById(carId);
    if (!car) return;
    
    closeCarDetails();
    setTimeout(() => {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'buy',
            price: car.priceText
        });
    }, 300);
}

// Image carousel functions
function startImageCarousel() {
    stopImageCarousel();
    imageInterval = setInterval(() => {
        nextImage();
    }, 4000);
}

function stopImageCarousel() {
    if (imageInterval) {
        clearInterval(imageInterval);
        imageInterval = null;
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % modalImages.length;
    updateModalImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + modalImages.length) % modalImages.length;
    updateModalImage();
    stopImageCarousel();
    startImageCarousel();
}

function goToImage(index) {
    currentImageIndex = index;
    updateModalImage();
    stopImageCarousel();
    startImageCarousel();
}

function updateModalImage() {
    const images = document.querySelectorAll('.modal-car-image');
    const indicators = document.querySelectorAll('.image-indicator');

    images.forEach((img, idx) => {
        img.classList.toggle('active', idx === currentImageIndex);
    });

    indicators.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentImageIndex);
    });
}

// Remove from wishlist
function removeFromWishlist(carId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(id => id !== carId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update UI
    loadWishlistCars();
    updateWishlistCount();
    
    // Show notification
    if (typeof showAlert === 'function') {
        showAlert('success', 'Removed from wishlist');
    }
}

// Clear all wishlist
function clearAllWishlist() {
    if (confirm('Are you sure you want to remove all items from your wishlist?')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
        loadWishlistCars();
        updateWishlistCount();
        
        if (typeof showAlert === 'function') {
            showAlert('success', 'Wishlist cleared');
        }
    }
}

// Update wishlist count in navbar
function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const countElements = document.querySelectorAll('.wishlist-count');
    countElements.forEach(el => {
        el.textContent = wishlist.length;
    });
}

// Close modal
function closeCarDetails() {
    stopImageCarousel();
    const modal = document.getElementById('carModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('carModal');
    if (e.target === modal) {
        closeCarDetails();
    }
});

// WhatsApp contact
function contactWhatsApp(carModel) {
    const phoneNumber = '971XXXXXXXXX';
    const message = encodeURIComponent(`Hi, I'm interested in the ${carModel} from my wishlist. Can you provide more information?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}