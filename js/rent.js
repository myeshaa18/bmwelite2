// rent.js - Rent Page Functionality

// BMW Cars Database for Rental
const rentalCarsDatabase = {
    'x-series': [
        {
            id: 101,
            model: 'BMW X7 M50i',
            year: 2022,
            mileage: '5,000 km',
            transmission: 'Automatic',
            price: 2500,
            engine: '4.4L V8 Twin-Turbo',
            power: '523 HP',
            seats: 7,
            fuel: 'Premium',
            description: 'The BMW X7 M50i represents the pinnacle of luxury SUV design, combining commanding presence with exhilarating performance. This flagship SUV features three rows of sumptuous leather seating, accommodating up to seven passengers in unparalleled comfort. The twin-turbocharged V8 engine delivers a perfect blend of power and refinement, while advanced air suspension ensures a smooth ride over any terrain. Equipped with BMW\'s latest iDrive system, panoramic sky lounge roof, and premium Bowers & Wilkins sound system, every journey becomes an occasion. Ideal for families seeking luxury, business executives requiring space and prestige, or anyone who refuses to compromise between performance and practicality.',
            
        },
        {
            id: 102,
            model: 'BMW X5 M Competition',
            year: 2024,
            mileage: '3,200 km',
            transmission: 'Automatic',
            price: 2200,
            engine: '4.4L V8 Twin-Turbo',
            power: '617 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW X5 M Competition is a masterclass in performance engineering, transforming the luxury SUV segment with race-track capabilities. This beast accelerates from 0-100 km/h in just 3.8 seconds, yet maintains the practicality and comfort expected from a premium SUV. The M-specific chassis tuning, adaptive M suspension, and M Sport differential deliver exceptional handling dynamics. Carbon fiber trim, sport seats with extended Merino leather, and the M-specific cockpit create an environment that\'s both luxurious and purposeful. Advanced driver assistance systems and BMW\'s latest technology ensure safety matches performance.',
            
        },
        {
            id: 103,
            model: 'BMW X6 M50i',
            year: 2022,
            mileage: '8,500 km',
            transmission: 'Automatic',
            price: 2000,
            engine: '4.4L V8 Twin-Turbo',
            power: '523 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW X6 M50i redefines the Sports Activity Coupe concept with its bold, coupe-like silhouette and devastating performance. This distinctive SUV turns heads with its aggressive kidney grilles, muscular haunches, and sweeping roofline. Inside, you\'ll find a driver-focused cockpit with premium materials throughout, heated and ventilated sport seats, and ambient lighting that creates the perfect atmosphere. The twin-turbo V8 delivers relentless power while maintaining surprising efficiency. Perfect for those who want to make a statement without sacrificing performance or luxury.',
            
        },
        {
            id: 104,
            model: 'BMW X3 M40i',
            year: 2021,
            mileage: '4,100 km',
            transmission: 'Automatic',
            price: 1500,
            engine: '3.0L I6 Turbo',
            power: '382 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW X3 M40i strikes the perfect balance between compact dimensions and big performance. This versatile SUV excels in urban environments with easy parking and nimble handling, yet has the power and capability for spirited highway driving and weekend getaways. The silky-smooth inline-six engine provides effortless acceleration, while xDrive all-wheel drive ensures confident handling in all conditions. The interior offers genuine premium quality with Dakota leather, brushed aluminum trim, and an intuitive infotainment system. Exceptional fuel efficiency for its performance class makes it ideal for extended rentals.',
           
        },
        {
            id: 105,
            model: 'BMW X4 M',
            year: 2020,
            mileage: '6,800 km',
            transmission: 'Automatic',
            price: 1900,
            engine: '3.0L I6 Twin-Turbo',
            power: '473 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW X4 M is a full-blooded M Division creation, bringing track-honed performance to the coupe-SUV format. With competition-grade brakes, adaptive M suspension, and an active M differential, this machine delivers precision handling that rivals dedicated sports cars. The aggressive exterior styling, featuring large air intakes, quad exhaust pipes, and M-specific aerodynamics, announces its performance credentials. Inside, M Sport seats with excellent lateral support, carbon fiber accents, and the latest Connected Drive technology create an immersive driving experience. This is for drivers who demand uncompromising performance without sacrificing everyday usability.',
            
        },
        {
            id: 106,
            model: 'BMW X1 sDrive20i',
            year: 2025,
            mileage: '2,500 km',
            transmission: 'Automatic',
            price: 1200,
            engine: '2.0L I4 Turbo',
            power: '192 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW X1 sDrive20i offers an accessible entry point into BMW luxury without compromising on quality or features. This compact SUV is perfect for navigating city streets with its agile handling and compact footprint, while still offering impressive interior space and cargo capacity. The efficient turbocharged engine delivers responsive performance with excellent fuel economy, making it ideal for both daily commutes and longer journeys. Features include LED headlights, a panoramic sunroof, BMW\'s latest iDrive system with wireless smartphone integration, and a comprehensive suite of driver assistance systems. The premium interior showcases BMW\'s attention to detail with quality materials and ergonomic design.',
          
        }
    ],
    'm-series': [
        {
            id: 201,
            model: 'BMW M4 Competition',
            year: 2024,
            mileage: '2,800 km',
            transmission: 'Automatic',
            price: 2800,
            engine: '3.0L I6 Twin-Turbo',
            power: '503 HP',
            seats: 4,
            fuel: 'Premium',
            description: 'The BMW M4 Competition represents the ultimate expression of BMW\'s motorsport heritage in coupe form. Every element of this machine is engineered for performance, from the carbon fiber roof that lowers the center of gravity to the M-specific chassis tuning that delivers razor-sharp handling. The twin-turbocharged inline-six engine produces an intoxicating soundtrack while delivering blistering acceleration. Inside, the driver-focused cockpit features M Sport seats with integrated headrests, carbon fiber trim, and a configurable M-specific display. Track-ready features include launch control, drift analyzer, and M Drive Professional. This is a car that demands respect and rewards skill.',
           
        },
        {
            id: 202,
            model: 'BMW M3 Competition',
            year: 2024,
            mileage: '3,500 km',
            transmission: 'Automatic',
            price: 2600,
            engine: '3.0L I6 Twin-Turbo',
            power: '503 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW M3 Competition is the legendary sports sedan that defined the segment, now in its most advanced form. This four-door masterpiece combines family sedan practicality with supercar performance, featuring four individual rear seats that make it genuinely practical. The M xDrive all-wheel drive system with rear-biased power delivery ensures incredible traction while maintaining the pure driving dynamics M cars are famous for. Advanced M Traction Control with ten settings allows drivers to tailor the driving experience. Carbon ceramic brakes provide fade-free stopping power, while adaptive M suspension reads the road ahead. Perfect for those who refuse to choose between practicality and performance.',
            additionalNotes: 'Performance driving assessment recommended. Ideal for business professionals seeking weekend thrills.'
            
        },
        {
            id: 203,
            model: 'BMW M8 Gran Coupe Competition',
            year: 2021,
            mileage: '5,200 km',
            transmission: 'Automatic',
            price: 3500,
            engine: '4.4L V8 Twin-Turbo',
            power: '617 HP',
            seats: 4,
            fuel: 'Premium',
            description: 'The BMW M8 Gran Coupe Competition is the flagship of BMW\'s performance lineup, a grand tourer that combines exotic car performance with luxury sedan refinement. This four-door coupe showcases BMW\'s most advanced technology, from the intelligent all-wheel drive system to the active roll stabilization that keeps the car flat through corners. The sumptuous interior features individual rear seats, extended Merino leather throughout, and a Bowers & Wilkins Diamond Surround Sound system. Despite its size, the M8 delivers supercar acceleration and handling, yet remains comfortable enough for cross-continental journeys. The perfect choice for those who demand the absolute best in every category.',
            
        },
        {
            id: 204,
            model: 'BMW M2 Competition',
            year: 2025,
            mileage: '7,100 km',
            transmission: 'Manual',
            price: 2000,
            engine: '3.0L I6 Twin-Turbo',
            power: '405 HP',
            seats: 4,
            fuel: 'Premium',
            description: 'The BMW M2 Competition is the purist\'s choice, a compact performance machine that channels the spirit of classic M cars. This manual transmission variant offers an increasingly rare opportunity to experience true driver engagement with three pedals and a perfectly weighted shifter. The short wheelbase and wide track deliver incredibly agile handling, while the powerful inline-six provides more than enough power to excite. Despite its performance focus, the M2 remains surprisingly practical with usable rear seats and a decent trunk. Carbon fiber reinforced plastic roof panels lower the center of gravity, while active M differential ensures power reaches the ground effectively. This is the modern classic that will be treasured by enthusiasts for decades.',
           
        },
        {
            id: 205,
            model: 'BMW M5 Competition',
            year: 2025,
            mileage: '4,300 km',
            transmission: 'Automatic',
            price: 3000,
            engine: '4.4L V8 Twin-Turbo',
            power: '617 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW M5 Competition is the ultimate super sedan, a car that can comfortably transport your family one moment and embarrass supercars the next. The twin-turbocharged V8 engine produces an addictive blend of power and sound, while the M xDrive system with rear-wheel drive mode offers multiple personalities. Advanced chassis technology including active roll stabilization and rear-wheel steering ensures the M5 handles with unexpected agility despite its size. The cabin blends motorsport inspiration with executive luxury, featuring multicontour seats with massage function, gesture control, and ambient lighting. With a spacious trunk and five comfortable seats, this is the only car many enthusiasts would ever need.',
          
        },
        {
            id: 206,
            model: 'BMW M240i xDrive',
            year: 2024,
            mileage: '3,900 km',
            transmission: 'Automatic',
            price: 1800,
            engine: '3.0L I6 Turbo',
            power: '382 HP',
            seats: 4,
            fuel: 'Premium',
            description: 'The BMW M240i xDrive represents M Performance at its most accessible, offering genuine performance credentials in a compact, manageable package. The intelligent xDrive all-wheel drive system ensures confidence in all weather conditions while maintaining BMW\'s renowned rear-wheel drive character. The turbocharged inline-six engine delivers smooth, linear power delivery with that distinctive BMW straight-six sound. M Sport brakes, adaptive suspension, and variable sport steering enhance the driving dynamics. The interior features sport seats, ambient lighting, and BMW\'s latest digital cockpit. Small enough to enjoy on twisty roads yet refined enough for daily use, the M240i is the perfect introduction to M Performance.',
          
        }
    ],
    'number-series': [
        {
            id: 301,
            model: 'BMW 7 Series 750Li',
            year: 2022,
            mileage: '4,200 km',
            transmission: 'Automatic',
            price: 2400,
            engine: '4.4L V8 Twin-Turbo',
            power: '523 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW 7 Series 750Li represents the pinnacle of automotive luxury and technology, designed for those who demand the absolute best. The extended wheelbase provides exceptional rear legroom with executive lounge seating featuring massage, heating, cooling, and adjustment in every direction. The Bowers & Wilkins Diamond Surround Sound system transforms the cabin into a concert hall, while the panoramic sky lounge LED roof creates a unique atmosphere. Advanced driver assistance systems including extended traffic jam assistant and parking assistant plus make every journey effortless. The powerful V8 engine provides serene, effortless performance. Perfect for business executives, special occasions, or anyone seeking the ultimate in automotive luxury.',
         
        },
        {
            id: 302,
            model: 'BMW 5 Series 540i',
            year: 2024,
            mileage: '5,800 km',
            transmission: 'Automatic',
            price: 1800,
            engine: '3.0L I6 Turbo',
            power: '335 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW 5 Series 540i is the quintessential business athlete, perfectly balancing performance, luxury, and practicality. This executive sedan features BMW\'s legendary inline-six engine delivering smooth, powerful acceleration while maintaining impressive efficiency. The Comfort seats with extended functionality provide support for long journeys, while the Live Cockpit Professional with two large displays keeps you connected and informed. Advanced driver assistance systems including active cruise control with stop-and-go functionality make highway driving relaxing. The spacious trunk and split-folding rear seats add practicality. Whether for business meetings or weekend getaways, the 540i handles every task with grace and competence.',
         
        },
        {
            id: 303,
            model: 'BMW 3 Series 330i',
            year: 2025,
            mileage: '6,500 km',
            transmission: 'Automatic',
            price: 1500,
            engine: '2.0L I4 Turbo',
            power: '255 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW 3 Series 330i is the sports sedan that defined a segment and continues to set the benchmark. This latest generation combines BMW\'s renowned 50/50 weight distribution and precise handling with modern efficiency and technology. The turbocharged four-cylinder engine provides spirited performance with excellent fuel economy, while the 8-speed automatic transmission delivers seamless shifts. Inside, the driver-focused cockpit features premium materials, intuitive controls, and the latest BMW Operating System. Sport seats provide excellent support, and ambient lighting creates the perfect atmosphere. Compact enough for urban environments yet refined for highway cruising, the 330i is the perfect all-around sports sedan.',
       
        },
        {
            id: 304,
            model: 'BMW 8 Series M850i',
            year: 2023,
            mileage: '7,200 km',
            transmission: 'Automatic',
            price: 3200,
            engine: '4.4L V8 Twin-Turbo',
            power: '523 HP',
            seats: 4,
            fuel: 'Premium',
            description: 'The BMW 8 Series M850i is a modern grand tourer that combines breathtaking performance with long-distance luxury. This elegant coupe features a sleek, low-slung design that turns heads wherever it goes, while the powerful V8 engine provides effortless high-speed cruising. The interior is a masterpiece of craftsmanship with extended Merino leather, genuine wood trim, and crystal glass controls. Individual rear seats provide surprising comfort and space, while the large trunk can accommodate luggage for extended tours. Advanced suspension with active roll stabilization ensures a smooth ride, and integral active steering makes the large coupe feel nimble. Perfect for romantic getaways, special occasions, or simply enjoying the finest automotive luxury.',
         
        },
        {
            id: 305,
            model: 'BMW 4 Series 430i',
            year: 2025,
            mileage: '4,700 km',
            transmission: 'Automatic',
            price: 1600,
            engine: '2.0L I4 Turbo',
            power: '255 HP',
            seats: 4,
            fuel: 'Premium',
            description: 'The BMW 4 Series 430i offers coupe style and sporting character with everyday usability. This sleek two-door features BMW\'s distinctive kidney grille design, swept-back roofline, and muscular proportions that create an unmistakable presence. The efficient turbocharged engine provides responsive performance with excellent fuel economy, while the sport-tuned suspension delivers engaging handling without compromising comfort. Inside, the driver-focused cockpit features sport seats, quality materials, and BMW\'s latest infotainment technology. The rear seats fold down to expand cargo capacity, and frameless windows add to the premium feel. Perfect for couples or individuals seeking style and driving pleasure without the size and cost of larger vehicles.',
         
        },
        {
            id: 306,
            model: 'BMW 6 Series GT',
            year: 2023,
            mileage: '8,100 km',
            transmission: 'Automatic',
            price: 1900,
            engine: '3.0L I6 Turbo',
            power: '335 HP',
            seats: 5,
            fuel: 'Premium',
            description: 'The BMW 6 Series GT (Gran Turismo) is a unique proposition, blending the elegance of a coupe, the comfort of a sedan, and the versatility of a hatchback. The fastback roofline creates a distinctive silhouette, while the frameless windows and flowing lines add sophistication. Inside, passengers enjoy exceptional space with a reclined seating position and generous headroom even in the rear. The massive hatchback opening and split-folding rear seats provide incredible cargo flexibility. Comfort features include multi-contour seats with massage, four-zone climate control, and active cabin fragrance. The smooth inline-six engine and air suspension deliver a refined, luxurious driving experience perfect for long journeys.',
        
        }
    ],
    'z-series': [
        {
            id: 401,
            model: 'BMW Z4 M40i',
            year: 2019,
            mileage: '2,100 km',
            transmission: 'Automatic',
            price: 2200,
            engine: '3.0L I6 Turbo',
            power: '382 HP',
            seats: 2,
            fuel: 'Premium',
            description: 'The BMW Z4 M40i is the ultimate roadster for those who live for open-air driving thrills. This stunning convertible combines aggressive styling with serious performance credentials, featuring a powerful inline-six engine that delivers exhilarating acceleration and that classic BMW engine note. The power-folding soft top opens in just 10 seconds, even while driving at low speeds, transforming the car from coupe comfort to open-air freedom. Sport seats with integrated headrests hold you firmly during spirited driving, while the driver-focused cockpit puts all controls at your fingertips. Adaptive M suspension and variable sport steering ensure precise handling, making every winding road an adventure. Perfect for weekend escapes, coastal drives, or simply enjoying the finest weather.',
         
        },
        {
            id: 402,
            model: 'BMW Z4 sDrive30i',
            year: 2026,
            mileage: '5,400 km',
            transmission: 'Automatic',
            price: 1700,
            engine: '2.0L I4 Turbo',
            power: '255 HP',
            seats: 2,
            fuel: 'Premium',
            description: 'The BMW Z4 sDrive30i offers accessible roadster thrills with BMW\'s signature quality and refinement. This elegant convertible features a beautifully balanced chassis and responsive turbocharged engine that provides spirited performance with excellent fuel efficiency. The power-retractable soft top is fully insulated, making the Z4 comfortable in all seasons, while LED headlights and taillights create a distinctive presence day or night. The compact dimensions make the Z4 agile and easy to maneuver in urban environments, while the comfortable interior with quality materials ensures long-distance comfort. Modern technology including wireless charging, head-up display, and advanced safety systems complement the classic roadster experience. Perfect for romantic getaways, sunny day adventures, or simply enjoying the wind in your hair.',
      
        },
        {
            id: 403,
            model: 'BMW Z4 M Roadster',
            year: 2007,
            mileage: '6,800 km',
            transmission: 'Manual',
            price: 2500,
            engine: '3.2L I6',
            power: '338 HP',
            seats: 2,
            fuel: 'Premium',
            description: 'The BMW Z4 M Roadster is a modern classic, representing an era when BMW produced some of its most engaging drivers\' cars. This rare model combines the naturally aspirated S54 inline-six engine from the E46 M3 with a nimble roadster chassis, creating an intoxicating driving experience. The six-speed manual transmission with perfectly spaced ratios offers pure driver engagement rarely found in modern cars. The high-revving engine produces a memorable soundtrack and delivers power linearly all the way to redline. Despite its age, this meticulously maintained example drives like new, with tight chassis dynamics and responsive steering. The retractable hardtop provides coupe-like refinement when closed. This is a special car for enthusiasts who appreciate automotive history and pure driving pleasure.',
       
        }
    ],
    'i-series': [
        {
            id: 501,
            model: 'BMW i8 Roadster',
            year: 2017,
            mileage: '1,800 km',
            transmission: 'Hybrid',
            price: 3200,
            engine: '1.5L I3 + Electric',
            power: '369 HP',
            seats: 2,
            fuel: 'Hybrid',
            description: 'The BMW i8 Roadster is an automotive icon, a futuristic plug-in hybrid sports car that looks like it drove straight out of a science fiction movie. The dramatic butterfly doors and flowing aerodynamic bodywork attract attention wherever you go. The innovative plug-in hybrid powertrain combines a turbocharged three-cylinder engine with electric motors, delivering supercar acceleration while achieving remarkable efficiency. Drive in pure electric mode for zero-emission city cruising, or unleash the full hybrid power for thrilling performance. The carbon fiber passenger cell ensures lightweight construction, while laser headlights and LED accents create an otherworldly appearance at night. Inside, the futuristic cockpit features floating displays and premium materials. This is a statement vehicle that showcases BMW\'s technological prowess and environmental commitment without compromising performance or style.',
         
        },
        {
            id: 502,
            model: 'BMW i4 M50',
            year: 2025,
            mileage: '3,200 km',
            transmission: 'Electric',
            price: 2400,
            engine: 'Dual Electric Motors',
            power: '536 HP',
            seats: 5,
            fuel: 'Electric',
            description: 'The BMW i4 M50 represents the future of M Performance, delivering instantaneous electric power with zero emissions. This stunning four-door gran coupe combines elegant styling with devastating acceleration - 0-100 km/h in just 3.9 seconds with the silent fury only electric motors can provide. The dual-motor all-wheel drive system ensures exceptional traction and handling, while M-specific chassis tuning maintains the precise, engaging dynamics BMW is famous for. Inside, the curved display seamlessly integrates driver information and infotainment, while M Sport seats provide excellent support. With over 500 km of range and fast-charging capability, the i4 M50 is practical for daily use and road trips. This is proof that electric vehicles can be thrilling, emotional, and genuinely desirable.',
         
        },
        {
            id: 503,
            model: 'BMW iX xDrive50',
            year: 2024,
            mileage: '2,900 km',
            transmission: 'Electric',
            price: 2800,
            engine: 'Dual Electric Motors',
            power: '516 HP',
            seats: 5,
            fuel: 'Electric',
            description: 'The BMW iX xDrive50 is a revolutionary electric SUV that redefines sustainable luxury. This flagship model showcases BMW\'s vision for the future with a minimalist, lounge-like interior featuring the floating curved display, hexagonal steering wheel, and sustainable materials throughout. The spacious cabin offers panoramic glass roof, Bowers & Wilkins sound system, and unparalleled quietness thanks to electric propulsion. With over 600 km of range, the iX eliminates range anxiety, while 200 kW fast-charging capability adds 150 km in just 10 minutes. Advanced driver assistance systems approach autonomous capabilities, and the intelligent all-wheel drive ensures confident handling in all conditions. The exterior design is both futuristic and elegant, with self-healing paint and iconic illuminated kidney grilles. This is the premium electric SUV that luxury car buyers have been waiting for.',
     
        },
        {
            id: 504,
            model: 'BMW i7 xDrive60',
            year: 2022,
            mileage: '2,100 km',
            transmission: 'Electric',
            price: 3500,
            engine: 'Dual Electric Motors',
            power: '536 HP',
            seats: 5,
            fuel: 'Electric',
            description: 'The BMW i7 xDrive60 is the electric luxury flagship that combines BMW\'s executive sedan heritage with cutting-edge electric technology. This is luxury redefined for the electric age, with a theater screen in the rear that drops from the ceiling, executive lounge seating with massage and reclining functions, and whisper-quiet electric propulsion. The dual-motor all-wheel drive delivers effortless performance with supercar-like acceleration when needed. Range exceeds 600 km, making the i7 practical for long-distance executive travel. The interior showcases the finest materials including Merino leather, genuine wood, and crystal controls. Advanced air suspension with active roll compensation ensures a magic carpet ride, while the latest autonomous driving features make every journey relaxing. This is the ultimate choice for executives, special occasions, or anyone seeking the pinnacle of electric luxury.',
         
        },
        {
            id: 505,
            model: 'BMW iX3',
            year: 2025,
            mileage: '4,500 km',
            transmission: 'Electric',
            price: 2000,
            engine: 'Electric Motor',
            power: '286 HP',
            seats: 5,
            fuel: 'Electric',
            description: 'The BMW iX3 makes electric driving accessible and practical without compromising on premium quality or capability. Built on the proven X3 platform, the iX3 offers familiar BMW driving dynamics with the benefits of electric propulsion. The single rear motor provides rear-wheel drive character with smooth, linear acceleration and excellent efficiency. With over 460 km of range and competitive fast-charging speeds, the iX3 is practical for daily commutes and weekend trips. The interior maintains all the quality and features of the regular X3, including spacious seating for five, generous cargo space, and BMW\'s latest infotainment technology. This is the perfect introduction to electric vehicle ownership for those transitioning from traditional SUVs.',
       
        },
        {
            id: 506,
            model: 'BMW i3',
            year: 2018,
            mileage: '8,200 km',
            transmission: 'Electric',
            price: 1400,
            engine: 'Electric Motor',
            power: '184 HP',
            seats: 4,
            fuel: 'Electric',
            description: 'The BMW i3 is the pioneering urban electric vehicle that started BMW\'s electric revolution. This distinctive city car features unique styling with suicide doors, a carbon fiber reinforced plastic body, and sustainable interior materials made from recycled components. The rear-wheel drive layout and instant electric torque make the i3 surprisingly fun to drive, while the tight turning circle and compact dimensions make parking effortless. The elevated seating position provides excellent visibility, and the minimalist interior maximizes space efficiency. Perfect for city exploration and daily errands, the i3 offers practical range for urban use with quick charging capability. The innovative design includes suicide doors that open wide for easy access, and the completely flat floor creates surprising interior space. This is affordable electric motoring with BMW quality and unique character.',
         
        }
    ]
};

// Current view state
let currentView = 'default';
let currentFilters = { model: '', year: '', price: '' };

// Modal image carousel state
let currentImageIndex = 0;
let imageInterval = null;
let modalImages = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    loadDefaultView();
    initReviewsCarousel();
    loadHeroVideo();

    if (typeof checkUserLogin === 'function') {
        checkUserLogin();
    }
});


// Load default view (3 cars from each series)
function loadDefaultView() {
    currentView = 'default';
    const container = document.getElementById('carsContainer');
    let html = '';

    const seriesConfig = {
        'x-series': { title: 'X Series', subtitle: 'Luxury SUVs for Every Adventure' },
        'm-series': { title: 'M Series', subtitle: 'Pure Performance, Ultimate Thrill' },
        'number-series': { title: '3, 5, 7 Series', subtitle: 'Iconic Sedans & Coupes' },
        'z-series': { title: 'Z Series', subtitle: 'Open-Air Driving Excellence' },
        'i-series': { title: 'i Series', subtitle: 'Electric Luxury & Innovation' }
    };

    Object.keys(rentalCarsDatabase).forEach(series => {
        const cars = rentalCarsDatabase[series].slice(0, 3);
        const config = seriesConfig[series];

        html += `
            <section class="cars-section">
                <div class="container">
                    <div class="section-header-with-btn">
                        <div>
                            <h2>${config.title}</h2>
                            <p>${config.subtitle}</p>
                        </div>
                        <button class="btn-see-more" onclick="loadSeriesView('${series}')">
                            See More <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    <div class="cars-grid">
                        ${cars.map(car => generateCarCard(car)).join('')}
                    </div>
                </div>
            </section>
        `;
    });

    container.innerHTML = html;
}

// Load specific series view (6 cars)
function loadSeriesView(series) {
    currentView = series;
    const container = document.getElementById('carsContainer');
    const cars = rentalCarsDatabase[series];

    const seriesConfig = {
        'x-series': { title: 'X Series Collection', subtitle: 'Luxury SUVs for Every Adventure' },
        'm-series': { title: 'M Series Collection', subtitle: 'Pure Performance, Ultimate Thrill' },
        'number-series': { title: '3, 5, 7 Series Collection', subtitle: 'Iconic Sedans & Coupes' },
        'z-series': { title: 'Z Series Collection', subtitle: 'Open-Air Driving Excellence' },
        'i-series': { title: 'i Series Collection', subtitle: 'Electric Luxury & Innovation' }
    };

    const config = seriesConfig[series];

    const html = `
        <section class="cars-section">
            <div class="container">
                <div class="section-header-with-btn">
                    <div>
                        <h2>${config.title}</h2>
                        <p>${config.subtitle}</p>
                    </div>
                    <button class="btn-see-more" onclick="loadDefaultView()">
                        <i class="fas fa-arrow-left"></i> Back to All
                    </button>
                </div>
                <div class="cars-grid">
                    ${cars.map(car => generateCarCard(car)).join('')}
                </div>
            </div>
        </section>
    `;

    container.innerHTML = html;
    window.scrollTo({ top: 300, behavior: 'smooth' });
}

// Generate car card HTML with new design
function generateCarCard(car) {
    return `
        <div class="car-card" data-car-id="${car.id}">
            <div class="car-image">
                <img src="images/cars/rent/car${car.id}.jpg" alt="${car.model}" onerror="this.src='images/cars/placeholder.jpg'">
                <button class="wishlist-btn" onclick="toggleWishlist(${car.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="car-info">
                <h3 class="car-model">${car.model}</h3>
                <div class="car-year-price">
                    <span class="car-year"><i class="fas fa-calendar"></i> ${car.year}</span>
                    <div class="car-price">
                        <span class="price">AED ${car.price.toLocaleString()} <small>/day</small></span>
                    </div>
                </div>
                <button class="btn-details" onclick="openRentalCarDetails(${car.id})">
                    View Description
                </button>
            </div>
        </div>
    `;
}

// Apply search filters
function applyFilters() {
    const modelFilter = document.getElementById('modelFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    currentFilters = { model: modelFilter, year: yearFilter, price: priceFilter };

    if (!modelFilter && !yearFilter && !priceFilter) {
        loadDefaultView();
        return;
    }

    let allCars = [];
    Object.keys(rentalCarsDatabase).forEach(series => {
        if (!modelFilter || series === modelFilter) {
            allCars = allCars.concat(rentalCarsDatabase[series]);
        }
    });

    if (yearFilter) {
        allCars = allCars.filter(car => car.year.toString() === yearFilter);
    }

    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(p => parseInt(p) || Infinity);
        allCars = allCars.filter(car => {
            if (priceFilter.includes('+')) {
                return car.price >= min;
            }
            return car.price >= min && car.price <= max;
        });
    }

    displayFilteredResults(allCars);
}

// Display filtered results
function displayFilteredResults(cars) {
    const container = document.getElementById('carsContainer');

    if (cars.length === 0) {
        container.innerHTML = `
            <section class="cars-section">
                <div class="container">
                    <div class="section-header" style="text-align: center;">
                        <h2>No Cars Found</h2>
                        <p>Try adjusting your filters to see more results</p>
                        <button class="btn-see-more" onclick="resetFilters()" style="margin-top: 20px;">
                            <i class="fas fa-redo"></i> Reset Filters
                        </button>
                    </div>
                </div>
            </section>
        `;
        return;
    }

    const html = `
        <section class="cars-section">
            <div class="container">
                <div class="section-header-with-btn">
                    <div>
                        <h2>Search Results</h2>
                        <p>Found ${cars.length} car${cars.length > 1 ? 's' : ''} matching your criteria</p>
                    </div>
                    <button class="btn-see-more" onclick="resetFilters()">
                        <i class="fas fa-redo"></i> Clear Filters
                    </button>
                </div>
                <div class="cars-grid">
                    ${cars.map(car => generateCarCard(car)).join('')}
                </div>
            </div>
        </section>
    `;

    container.innerHTML = html;
    window.scrollTo({ top: 300, behavior: 'smooth' });
}

// Reset filters
function resetFilters() {
    document.getElementById('modelFilter').value = '';
    document.getElementById('yearFilter').value = '';
    document.getElementById('priceFilter').value = '';
    currentFilters = { model: '', year: '', price: '' };
    loadDefaultView();
}

// Open rental car details with new modal design
function openRentalCarDetails(carId) {
    let car = null;

    Object.values(rentalCarsDatabase).forEach(series => {
        const found = series.find(c => c.id === carId);
        if (found) car = found;
    });

    if (!car) return;

    // Create array of 4 images for the carousel (cycling through)
    modalImages = [
        `images/cars/rent/car${car.id}.jpg`,
        `images/cars/rent/car${car.id}-2.jpg`,
        `images/cars/rent/car${car.id}-3.jpg`,
        `images/cars/rent/car${car.id}-4.jpg`
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
                <div class="spec-value">For Rent</div>
            </div>
        </div>
        
        <p class="modal-car-description">${car.description}</p>
        
        <div class="modal-car-price">AED ${car.price.toLocaleString()} <small>/day</small></div>
        
        <div class="modal-actions">
            <button class="btn-rent" onclick="rentCar(${car.id})">Rent Now</button>
            <button class="btn-whatsapp" onclick="contactWhatsApp('${car.model}')">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </button>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Start auto-switching images
    startImageCarousel();
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

function rentCar(carId) {
    let car = null;
    Object.values(rentalCarsDatabase).forEach(series => {
        const found = series.find(c => c.id === carId);
        if (found) car = found;
    });
    
    if (car) {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'rent',
            price: `AED ${car.price}/day`
        });
    }
}

// Reviews Carousel
let currentReview = 0;
const totalReviews = 4;

function initReviewsCarousel() {
    const dotsContainer = document.getElementById('reviewDots');
    for (let i = 0; i < totalReviews; i++) {
        const dot = document.createElement('div');
        dot.className = `review-dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => goToReview(i);
        dotsContainer.appendChild(dot);
    }

    setInterval(nextReview, 6000);
}

function nextReview() {
    currentReview = (currentReview + 1) % totalReviews;
    updateReview();
}

function previousReview() {
    currentReview = (currentReview - 1 + totalReviews) % totalReviews;
    updateReview();
}

function goToReview(index) {
    currentReview = index;
    updateReview();
}

function updateReview() {
    document.querySelectorAll('.review-card').forEach(card => {
        card.classList.remove('active');
    });

    document.getElementById(`review${currentReview + 1}`).classList.add('active');

    document.querySelectorAll('.review-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentReview);
    });
}
function toggleWishlist(carId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistData = JSON.parse(localStorage.getItem('wishlistData')) || {};

    const index = wishlist.indexOf(carId);

    if (index > -1) {
        // Remove from wishlist
        wishlist.splice(index, 1);
        delete wishlistData[carId];

        // Update UI
        const btn = document.querySelector(`[data-car-id="${carId}"] .wishlist-btn`);
        if (btn) {
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    } else {
        // Add to wishlist
        let car = null;
        Object.values(rentalCarsDatabase).forEach(series => {
            const found = series.find(c => c.id === carId);
            if (found) car = found;
        });

        if (car) {
            wishlist.push(carId);
            wishlistData[carId] = {
                id: car.id,
                model: car.model,
                year: car.year,
                mileage: car.mileage,
                transmission: car.transmission,
                type: 'rent',
                price: `AED ${car.price.toLocaleString()}/day`,
                description: car.description,
                image: `images/cars/rent/car${car.id}.jpg`,
                specs: {
                    engine: car.engine,
                    power: car.power,
                    seats: car.seats,
                    fuel: car.fuel
                }
            };

            // Update UI
            const btn = document.querySelector(`[data-car-id="${carId}"] .wishlist-btn`);
            if (btn) {
                btn.classList.add('active');
                const icon = btn.querySelector('i');
                icon.classList.remove('far');
                icon.classList.add('fas');
            }
        }
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('wishlistData', JSON.stringify(wishlistData));
    updateWishlistCount();
}


// Close modal
function closeCarDetails() {
    stopImageCarousel();
    const modal = document.getElementById('carModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.addEventListener('click', function (e) {
    const modal = document.getElementById('carModal');
    if (e.target === modal) {
        closeCarDetails();
    }
});
// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('footerSearch');
    const searchDropdown = document.getElementById('searchDropdown');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    if (!searchInput) return;

    // Show dropdown on focus
    searchInput.addEventListener('focus', function () {
        searchDropdown.classList.add('active');
    });

    // Hide dropdown on blur (with delay)
    searchInput.addEventListener('blur', function () {
        setTimeout(() => {
            searchDropdown.classList.remove('active');
        }, 200);
    });

    // Filter selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            const filter = this.dataset.filter;
            searchInput.placeholder = `Search ${this.textContent}...`;
            searchInput.dataset.filter = filter;
            searchDropdown.classList.remove('active');
        });
    });

    // Search input
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const filter = this.dataset.filter || 'all';

        if (query.length < 2) {
            searchSuggestions.classList.remove('active');
            return;
        }

        const results = Object.values(carsData).filter(car => {
            const matchesQuery = car.model.toLowerCase().includes(query) ||
                car.year.toString().includes(query);
            const matchesFilter = filter === 'all' ||
                car.type === filter ||
                (filter === 'suv' && car.model.includes('X')) ||
                (filter === 'sedan' && car.model.includes('7')) ||
                (filter === 'sports' && (car.model.includes('M') || car.model.includes('i8')));

            return matchesQuery && matchesFilter;
        });

        displaySuggestions(results, query);
    });
}

function displaySuggestions(results, query) {
    const searchSuggestions = document.getElementById('searchSuggestions');

    if (results.length === 0) {
        searchSuggestions.innerHTML = '<div class="suggestion-item">No results found</div>';
        searchSuggestions.classList.add('active');
        return;
    }

    const suggestionsHTML = results.map(car => {
        const highlightedModel = car.model.replace(
            new RegExp(query, 'gi'),
            match => `<strong>${match}</strong>`
        );

        return `
            <div class="suggestion-item" onclick="openCarDetails(${car.id})">
                ${highlightedModel} - ${car.year}
                <div style="font-size: 0.85rem; color: #666; margin-top: 3px;">
                    ${car.type === 'rent' ? 'For Rent' : 'For Sale'} - ${car.price}
                </div>
            </div>
        `;
    }).join('');

    searchSuggestions.innerHTML = suggestionsHTML;
    searchSuggestions.classList.add('active');
}

// WhatsApp contact
function contactWhatsApp(carModel) {
    const phoneNumber = '971XXXXXXXXX';
    const message = encodeURIComponent(`Hi, I'm interested in renting the ${carModel}. Can you provide more information?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}