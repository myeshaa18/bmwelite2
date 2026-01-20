// buy.js - Buy Page Functionality with Different Models & Prices

// BMW Cars Database for Sale
const saleCarsDatabase = {
    "x-series": [
        {
            id: 1001,
            model: "BMW X7 xDrive40i",
            year: 2023,
            mileage: "18,500 km",
            transmission: "Automatic",
            price: 385000,
            engine: "3.0L I6 Turbo",
            power: "335 HP",
            seats: 7,
            fuel: "Premium",
            condition: "Excellent",
            description: "This certified pre-owned BMW X7 xDrive40i represents the pinnacle of three-row luxury SUVs, offering commanding presence combined with meticulous German engineering. The spacious cabin accommodates seven passengers in supreme comfort with premium Vernasca leather upholstery, heated and ventilated front seats, and second-row captain chairs that rival first-class airline seats. The powerful inline-six turbocharged engine delivers smooth, effortless acceleration while maintaining impressive fuel efficiency for its class. Equipped with BMW intelligent xDrive all-wheel drive system, this flagship SUV provides confident handling in all weather conditions. The panoramic sky lounge LED roof creates an airy, open atmosphere, while the four-zone automatic climate control ensures every passenger enjoys their preferred temperature. Advanced driver assistance features including active cruise control, lane keeping assist, and parking assistant plus make every journey safer and more relaxing. The Harman Kardon surround sound system transforms the cabin into a concert hall, while wireless charging and multiple USB ports keep everyone connected. With a comprehensive maintenance history and remaining factory warranty coverage, this X7 is ready to serve your family for years to come. Perfect for executives, large families, or anyone who refuses to compromise between space, luxury, and prestige."
        },
        {
            id: 1002,
            model: "BMW X5 xDrive45e",
            year: 2024,
            mileage: "8,200 km",
            transmission: "Automatic",
            price: 425000,
            engine: "3.0L I6 + Electric",
            power: "389 HP",
            seats: 5,
            fuel: "Plug-in Hybrid",
            condition: "Like New",
            description: "This nearly new BMW X5 xDrive45e represents the perfect marriage of performance, efficiency, and luxury in a plug-in hybrid package. With barely broken-in mileage of just 8,200 km, this vehicle is essentially showroom fresh with years of worry-free driving ahead. The innovative plug-in hybrid powertrain combines a turbocharged inline-six engine with a powerful electric motor, delivering a combined 389 horsepower while achieving remarkable fuel efficiency. Drive up to 50 km on pure electric power for your daily commute with zero emissions, then seamlessly transition to hybrid mode for longer journeys. The M Sport package adds aggressive styling with aerodynamic body kit, 20-inch M light alloy wheels, and sport-tuned suspension that sharpens handling without compromising the legendary BMW ride quality. Inside, the cabin showcases Vernasca leather sport seats with lumbar support, ambient lighting with multiple color options, and BMW latest iDrive 8 infotainment system featuring curved displays and intuitive touchscreen control. The Harman Kardon premium sound system with 16 speakers delivers concert-quality audio, while the panoramic moonroof floods the interior with natural light. Advanced safety features include 360-degree cameras, adaptive LED headlights, and BMW comprehensive driver assistance package. Factory warranty coverage remains in effect, providing complete peace of mind. This is sustainable luxury without compromise, perfect for environmentally conscious buyers who refuse to sacrifice performance or prestige."
        },
        {
            id: 1003,
            model: "BMW X6 M50i",
            year: 2022,
            mileage: "28,400 km",
            transmission: "Automatic",
            price: 340000,
            engine: "4.4L V8 Twin-Turbo",
            power: "523 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Excellent",
            description: "The BMW X6 M50i is the original Sports Activity Coupe that continues to turn heads with its bold, distinctive design and devastating performance. This particular example has been meticulously maintained with complete service records documenting every oil change and inspection at authorized BMW service centers. The heart of this beast is a twin-turbocharged 4.4-liter V8 engine producing an exhilarating 523 horsepower, propelling this muscular SUV from 0-100 km/h in just 4.3 seconds. The adaptive M suspension provides the best of both worlds - comfortable cruising for daily driving and firm, controlled handling when you unleash the V8 full potential on winding roads. The aggressive exterior styling features BMW signature kidney grilles in high-gloss black, LED headlights with adaptive functionality, and quad exhaust outlets that announce this vehicle performance credentials. The coupe-like roofline not only creates a striking silhouette but also improves aerodynamics at high speeds. Inside, you will find sport seats wrapped in premium Merino leather with contrast stitching, carbon fiber trim accents, and the M leather steering wheel with multifunction controls. The BMW Live Cockpit Professional features dual 12.3-inch displays providing all information at a glance, while gesture control allows you to manage functions with simple hand movements. The premium audio system, ambient lighting, and four-zone climate control create a first-class environment. With xDrive intelligent all-wheel drive, this X6 M50i provides confident handling year-round while maintaining its sporting character. This is the SUV for drivers who demand attention, performance, and luxury in equal measure."
        },
        {
            id: 1004,
            model: "BMW X3 M40i",
            year: 2023,
            mileage: "15,800 km",
            transmission: "Automatic",
            price: 265000,
            engine: "3.0L I6 Turbo",
            power: "382 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Excellent",
            description: "This one-owner BMW X3 M40i represents the sweet spot in the compact luxury SUV segment, offering M Performance character in a perfectly sized package for both urban environments and highway cruising. The single-owner history with complete maintenance records provides exceptional peace of mind, showing this vehicle has been cherished and properly cared for since day one. The turbocharged 3.0-liter inline-six engine delivers 382 horsepower with that distinctive BMW straight-six smoothness and sound that enthusiasts crave. The M Sport differential and adaptive M suspension transform this compact SUV into a genuinely engaging driver car, while xDrive all-wheel drive ensures confident handling in all conditions. The exterior showcases M Sport styling with aerodynamic body kit, 20-inch M light alloy wheels, and Cerium Grey mirror caps that hint at this vehicle performance intentions. The panoramic moonroof extends over both rows of seating, creating an open, airy cabin atmosphere while the hands-free tailgate makes loading cargo effortless. Inside, the SensaTec upholstery with contrast stitching provides both luxury and durability, while heated front seats ensure comfort year-round. BMW iDrive 7.0 system with navigation, wireless Apple CarPlay and Android Auto keeps you connected and on route. The comprehensive suite of advanced safety features includes forward collision warning, automatic emergency braking, blind spot detection, and rear cross-traffic alert. With generous cargo space, split-folding rear seats, and roof rails for additional storage options, this X3 M40i is as practical as it is thrilling. Perfect for professionals seeking a vehicle that excels at both daily commutes and weekend adventures, all while making a sophisticated statement."
        },
        {
            id: 1005,
            model: "BMW X4 xDrive30i",
            year: 2019,
            mileage: "35,600 km",
            transmission: "Automatic",
            price: 215000,
            engine: "2.0L I4 Turbo",
            power: "248 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Very Good",
            description: "This 2019 BMW X4 xDrive30i offers an accessible entry into the distinctive Sports Activity Coupe segment with proven reliability and attractive pricing. The elegant coupe-like roofline creates a sleek, athletic silhouette that stands out from conventional SUVs, while the elevated driving position provides excellent visibility and a commanding road presence. The efficient 2.0-liter turbocharged four-cylinder engine delivers 248 horsepower with smooth power delivery and impressive fuel economy, making it ideal for both city driving and highway touring. The xDrive intelligent all-wheel drive system continuously monitors road conditions and distributes power between front and rear axles for optimal traction and stability. Inside, the premium leather upholstery shows minimal wear thanks to careful ownership, while ambient lighting in multiple colors creates the perfect mood for any journey. The power-adjustable front seats with memory function ensure you can find your perfect driving position every time. BMW intuitive iDrive controller makes navigating the infotainment system effortless, while the premium sound system provides excellent audio quality for your favorite music and podcasts. The dual-zone automatic climate control maintains your preferred temperature, and the auto-dimming mirrors reduce glare from trailing vehicles at night. This X4 comes with a certified pre-owned warranty available, providing extended coverage and roadside assistance for complete confidence. The well-maintained condition with service records demonstrates responsible ownership, while the attractive price point makes this an excellent value proposition. Perfect for individuals or couples seeking distinctive styling, premium quality, and engaging driving dynamics without the premium associated with newer models. This X4 proves that sophisticated German engineering and luxury remain accessible and rewarding."
        },
        {
            id: 1006,
            model: "BMW X2 M35i",
            year: 2022,
            mileage: "22,100 km",
            transmission: "Automatic",
            price: 185000,
            engine: "2.0L I4 Turbo",
            power: "302 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Excellent",
            description: "The BMW X2 M35i is the rebellious young athlete of the BMW crossover family, combining distinctive styling with genuine M Performance credentials in a compact, urban-friendly package. This particular example showcases the bold design language that sets the X2 apart, featuring the unique reverse-angle C-pillars, aggressive front fascia with large air intakes, and M-specific exterior details including Cerium Grey accents and 19-inch bi-color M wheels. The turbocharged 2.0-liter four-cylinder engine has been tuned by M Performance engineers to deliver an impressive 302 horsepower, making this the most powerful four-cylinder BMW crossover. Launch control enables exhilarating 0-100 km/h acceleration in just 4.9 seconds, while the sport-tuned exhaust produces an engaging soundtrack that belies the four-cylinder configuration. The M Sport suspension lowers the ride height and firms up damping for improved handling response and reduced body roll through corners. Inside, the M sport seats with Alcantara and leather combination provide excellent support during spirited driving, while the M leather steering wheel puts all controls at your fingertips. The digital instrument cluster and central touchscreen display create a modern, driver-focused cockpit environment. Modern connectivity features include wireless smartphone charging, BMW Connected app integration, and a premium sound system. The spacious cargo area with split-folding rear seats provides surprising practicality for such a sporty vehicle, while the compact exterior dimensions make parking in tight urban spaces effortless. This X2 M35i represents the perfect choice for younger buyers or anyone seeking a distinctive, performance-oriented crossover that does not follow the conventional SUV playbook. With low mileage and excellent condition, this vehicle offers years of exciting, practical ownership ahead."
        }
    ],
    "m-series": [
        {
            id: 2001,
            model: "BMW M3 Competition xDrive",
            year: 2023,
            mileage: "12,300 km",
            transmission: "Automatic",
            price: 495000,
            engine: "3.0L I6 Twin-Turbo",
            power: "503 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Like New",
            description: "This 2023 BMW M3 Competition xDrive represents the latest evolution of the legendary sports sedan that has defined the segment for decades. With barely 12,300 km on the odometer, this M3 is essentially new-car fresh with the entire ownership experience still ahead. The Competition package elevates an already exceptional car with additional power tuning, adaptive M suspension enhancements, and exclusive styling details. The twin-turbocharged 3.0-liter inline-six engine produces a formidable 503 horsepower, propelling this sedan to 100 km/h in just 3.5 seconds with the M xDrive all-wheel drive system providing maximum traction off the line. Unlike previous rear-drive-only M3s, this xDrive variant offers selectable drive modes including a pure rear-wheel drive 2WD mode for experienced drivers seeking traditional M car dynamics. The carbon fiber roof panel lowers the center of gravity for improved handling, while the M carbon ceramic brakes provide fade-free stopping power during aggressive driving. The aggressive exterior styling features the controversial yet distinctive large kidney grilles, carbon fiber mirror caps, quad exhaust outlets, and subtle M badging that signals this car pedigree to those in the know. Inside, the M carbon bucket seats provide race-car levels of support with all-day comfort, wrapped in extended Merino leather with contrast stitching. The curved display housing both the instrument cluster and infotainment screen represents BMW latest user interface, while the M-specific displays show everything from G-forces to tire temperatures. Factory warranty coverage remains in effect with years of coverage still available, plus BMW comprehensive maintenance program. This is a daily-drivable supercar alternative that offers genuine practicality with four doors and a usable trunk, yet delivers performance that rivals dedicated sports cars costing significantly more. Track-ready on weekends, refined enough for business meetings during the week - the M3 Competition xDrive truly does it all."
        },
        {
            id: 2002,
            model: "BMW M4 Convertible",
            year: 2022,
            mileage: "19,700 km",
            transmission: "Automatic",
            price: 465000,
            engine: "3.0L I6 Twin-Turbo",
            power: "473 HP",
            seats: 4,
            fuel: "Premium",
            condition: "Excellent",
            description: "The BMW M4 Convertible delivers the ultimate open-air driving experience with genuine M Division performance that does not compromise when the top is down. This 2022 example combines the thrilling acceleration and precise handling of the M4 Coupe with the emotional appeal of top-down motoring. The retractable hardtop operates in just 18 seconds at speeds up to 50 km/h, seamlessly transforming from coupe-like refinement to exhilarating roadster freedom. Unlike traditional soft-top convertibles, the power-folding hardtop provides excellent security, superior insulation for year-round comfort, and maintains the M4 sleek roofline when closed. The twin-turbocharged 3.0-liter inline-six engine produces 473 horsepower with that distinctive M Division soundtrack amplified when driving with the top down. The 8-speed M Steptronic transmission with Drivelogic offers lightning-fast shifts in automatic mode or engaging manual control via the steering wheel-mounted paddle shifters. Adaptive M suspension with electronically controlled dampers provides three distinct modes - Comfort for relaxed cruising, Sport for spirited driving, and Sport Plus for maximum performance. The premium Merino leather interior showcases meticulous craftsmanship with hand-stitched details, M sport seats with integrated headrests, and carbon fiber trim accents throughout. Wind deflector and neck-level heating ensure comfortable top-down driving even in cooler weather, extending your open-air season. The comprehensive technology package includes head-up display projecting key information onto the windshield, parking assistant with surround view cameras, and the premium Harman Kardon sound system optimized for open-top acoustics. This M4 Convertible has been garage-kept and meticulously maintained with complete service records from authorized BMW centers. Perfect for enthusiasts who want M car performance with the added dimension of open-air thrills - whether carving canyon roads on Sunday mornings or arriving at social events in style with the top down."
        },
        {
            id: 2003,
            model: "BMW M8 Competition Gran Coupe",
            year: 2021,
            mileage: "24,500 km",
            transmission: "Automatic",
            price: 580000,
            engine: "4.4L V8 Twin-Turbo",
            power: "617 HP",
            seats: 4,
            fuel: "Premium",
            condition: "Excellent",
            description: "The BMW M8 Competition Gran Coupe represents the absolute pinnacle of BMW M Division, a flagship performance machine that combines supercar acceleration with luxury sedan refinement and gran tourer versatility. This meticulously maintained example showcases the full carbon fiber package, an expensive option that adds distinctive visual elements while reducing weight for improved performance. The hand-built twin-turbocharged 4.4-liter V8 engine produces a staggering 617 horsepower and 750 Nm of torque, launching this elegant four-door coupe to 100 km/h in just 3.2 seconds with a visceral soundtrack that rivals exotic supercars. The M xDrive all-wheel drive system with rear-biased power distribution ensures maximum traction while maintaining the engaging rear-wheel-drive character M cars are famous for. Active M differential, adaptive M suspension, and integrated braking system work in concert to deliver handling precision that belies this vehicle size and luxury appointments. The exterior design is simply stunning - the long hood, sweeping roofline, and muscular haunches create a silhouette that is both elegant and aggressive. Carbon fiber components including front splitter, mirror caps, rear diffuser, and decklid spoiler add visual drama and functional aerodynamics. Inside, this M8 Gran Coupe is optioned to the absolute maximum with every available luxury and technology feature. Individual rear seats provide surprising comfort and space, making this a genuine four-passenger grand tourer. Extended Merino leather covers virtually every surface, complemented by carbon fiber trim, ambient lighting, and the finest materials BMW can source. The Bowers and Wilkins Diamond Surround Sound System with 16 speakers and 1,400 watts delivers concert hall acoustics. BMW Live Cockpit Professional with curved display, head-up display, and gesture control represents the cutting edge of automotive technology. This M8 Competition Gran Coupe has been maintained to concours standards with showroom-level presentation throughout. Every service performed at authorized BMW M centers, detailed regularly, and always garage-kept. This is a collector-grade example of BMW most exclusive and powerful sedan, perfect for discerning enthusiasts who demand the ultimate in performance, luxury, and presence."
        },
        {
            id: 2004,
            model: "BMW M2 CS",
            year: 2020,
            mileage: "31,200 km",
            transmission: "Manual",
            price: 395000,
            engine: "3.0L I6 Twin-Turbo",
            power: "444 HP",
            seats: 4,
            fuel: "Premium",
            condition: "Very Good",
            description: "The BMW M2 CS is one of the most significant M cars of the modern era - a limited production special edition that purists and collectors recognize as the spiritual successor to the legendary E46 M3 CSL. With production numbers strictly limited worldwide, this represents a rare opportunity to own what many consider the ultimate modern driver car. The CS (Competition Sport) designation signifies extensive lightweight construction with carbon fiber reinforced plastic roof and hood, saving crucial kilograms and lowering the center of gravity. Additional carbon fiber components include the front splitter, rear diffuser, mirror caps, and interior trim pieces. The hand-built inline-six engine produces 444 horsepower - 40 more than the standard M2 Competition - with a rev-happy character and intoxicating exhaust note that rewards high-rpm driving. This particular example features the six-speed manual transmission, an increasingly rare option that provides the ultimate in driver engagement and connection to the machine. The perfectly weighted shifter, precise clutch pedal, and rev-matching function make every gear change a tactile pleasure. The adaptive M suspension has been retuned specifically for the CS with firmer springs and dampers, while Michelin Pilot Sport Cup 2 tires provide race-car levels of grip. The aggressive exterior showcases exclusive CS badging, unique front and rear fascias, and Gold Bronze metallic accents on the wheels and kidney grilles. Inside, red Alcantara covers the steering wheel and gear selector, while the lightweight M Carbon bucket seats (a significant option) provide incredible support with minimal weight. The rear seats and sound insulation have been removed in true lightweight special tradition, though this only enhances the car focused, purposeful character. With values of limited-production M cars historically appreciating, the M2 CS represents not just an incredible driving experience but a sound investment. Enthusiast-owned with complete service history, this CS has been driven and enjoyed as BMW M intended, yet remains in very good condition. This is a future classic available today, perfect for the serious collector or driving enthusiast who understands the significance of this special machine."
        },
        {
            id: 2005,
            model: "BMW M5 Competition",
            year: 2023,
            mileage: "15,900 km",
            transmission: "Automatic",
            price: 525000,
            engine: "4.4L V8 Twin-Turbo",
            power: "617 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Like New",
            description: "The 2023 BMW M5 Competition represents the ultimate super sedan, a vehicle that can transport your family in supreme luxury one moment and embarrass dedicated sports cars the next. With barely 15,900 km showing, this M5 is essentially brand new with comprehensive factory warranty coverage still in effect, providing years of worry-free performance ahead. The Competition package enhances an already extraordinary car with additional power tuning, firmer suspension calibration, and exclusive visual details that distinguish it from the standard M5. The hand-assembled twin-turbocharged 4.4-liter V8 engine produces a staggering 617 horsepower and 750 Nm of torque, catapulting this executive sedan to 100 km/h in just 3.3 seconds. The M xDrive intelligent all-wheel drive system with rear-biased 4WD Sport mode and pure rear-wheel drive 2WD mode allows you to tailor the driving experience from maximum traction to tail-out sideways antics. The active M differential, adaptive M suspension with electronically controlled dampers, and variable ratio steering work together to deliver handling precision that defies this sedan substantial size and luxury appointments. Carbon ceramic M compound brakes provide incredible, fade-free stopping power even during track day abuse. The exterior design is restrained elegance with subtle performance cues - quad exhaust outlets, aggressive front fascia, and discreet M badging. This sleeper appearance allows the M5 to blend into executive parking lots, then dominate at track days. Inside, the cabin represents the perfect marriage of motorsport inspiration and executive luxury. M multifunction seats offer exceptional support with heating, cooling, and massage functions for long-distance comfort. Extended Merino leather, carbon fiber trim, and Alcantara headliner create a premium environment. The rear seats provide genuine adult-sized space with dedicated climate controls, making this a true five-passenger vehicle. The massive trunk with split-folding rear seats offers surprising practicality for a car with supercar performance. BMW latest iDrive 8 with curved display housing both instrument cluster and infotainment creates an intuitive, modern interface. The Bowers and Wilkins Diamond Sound System with 1,400 watts and 16 speakers delivers audiophile-quality sound reproduction. This M5 Competition has been meticulously maintained with all services performed at authorized M centers. Nearly new condition inside and out, with paint protection film preserving the exterior finish. Perfect for the executive who demands both practicality and performance, or the enthusiast who refuses to choose between family sedan and weekend track toy. This is the only car many enthusiasts would ever need."
        },
        {
            id: 2006,
            model: "BMW M240i xDrive Coupe",
            year: 2022,
            mileage: "26,800 km",
            transmission: "Automatic",
            price: 285000,
            engine: "3.0L I6 Turbo",
            power: "382 HP",
            seats: 4,
            fuel: "Premium",
            condition: "Excellent",
            description: "The BMW M240i xDrive Coupe offers genuine M Performance character at an accessible price point, making it the perfect entry into enthusiast-grade BMW ownership. This compact coupe delivers the classic BMW recipe - turbocharged inline-six engine, rear-biased all-wheel drive, and near-perfect 50/50 weight distribution - in a manageable, everyday-usable package. The 3.0-liter turbocharged straight-six produces 382 horsepower with that distinctive BMW inline-six smoothness and sound that enthusiasts crave. Power delivery is linear and responsive, with strong acceleration from any rpm and a satisfying crescendo toward redline. The intelligent xDrive all-wheel drive system provides confident handling year-round, while maintaining the rear-wheel-drive character that defines BMW sporting identity. The M Sport differential further enhances cornering dynamics by actively distributing power between rear wheels. The adaptive M Sport suspension with electronically controlled dampers offers adjustable firmness, allowing you to dial in the perfect balance between comfort and handling precision for any road or mood. Variable sport steering provides quick response and excellent feedback. The sleek two-door coupe design creates an athletic, purposeful stance with the long hood and short rear deck proportions that define classic sports cars. M Sport styling adds aggressive front fascia, side skirts, rear diffuser, and 19-inch M light alloy wheels. Inside, the driver-focused cockpit features M sport seats with excellent lateral support, an M leather steering wheel, and aluminum pedals. The latest BMW Operating System 8 with curved display integrates instrument cluster and infotainment in one sweeping screen. Wireless Apple CarPlay and Android Auto keep you connected, while the Harman Kardon premium sound system provides excellent audio quality. Despite the performance focus, the M240i remains practical with usable rear seats for occasional passengers and a decent trunk for weekend getaways. The frameless windows add visual appeal when you lower them, creating that classic coupe aesthetic. This 2022 example shows excellent condition throughout with service records documenting proper maintenance. Perfect for enthusiasts seeking engaging driving dynamics without the expense and complexity of full M cars, or as a weekend toy that can handle daily driving duties. The M240i represents tremendous value - genuine BMW performance and quality at a price point that makes premium driving pleasure accessible."
        }
    ],
    "number-series": [
        {
            id: 3001,
            model: "BMW 740Li xDrive",
            year: 2022,
            mileage: "21,400 km",
            transmission: "Automatic",
            price: 410000,
            engine: "3.0L I6 Turbo",
            power: "335 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Excellent",
            description: "The BMW 7 Series 740Li xDrive represents the pinnacle of executive transportation. The Li designation signifies the long wheelbase variant with an additional 14 centimeters of rear legroom. This particular example showcases optional executive lounge seating with individually adjustable rear seats featuring ottoman-style footrests, multi-contour adjustment, heating, cooling, and massage functions that rival first-class airline accommodations. The turbocharged 3.0-liter inline-six engine provides smooth, refined power delivery with the effortless acceleration expected of a luxury flagship, while the xDrive all-wheel drive system ensures confident handling in all weather conditions. The air suspension provides a magic carpet ride quality. Inside, extended Merino leather covers every touchpoint, genuine wood trim with high-gloss finish, and folding tables emerge from the front seatbacks for mobile office functionality. The executive lounge seating package includes dual 10-inch touchscreen displays providing rear passengers with independent climate control and entertainment options. Four-zone automatic climate control ensures everyone comfort. The panoramic sky lounge LED roof creates a unique ambient lighting experience. BMW gesture control and voice control respond to natural language commands. The Bowers and Wilkins Diamond Surround Sound System with 16 speakers and 1,400 watts creates concert hall acoustics. Advanced driver assistance systems include extended traffic jam assistant, parking assistant plus, and active cruise control. Perfect for business executives or anyone seeking the ultimate in automotive comfort and prestige."
        },
        {
            id: 3002,
            model: "BMW 530i M Sport",
            year: 2023,
            mileage: "14,200 km",
            transmission: "Automatic",
            price: 315000,
            engine: "2.0L I4 + Electric",
            power: "288 HP",
            seats: 5,
            fuel: "Plug-in Hybrid",
            condition: "Like New",
            description: "This 2023 BMW 530i M Sport represents the intelligent choice for executives seeking BMW refinement with environmental responsibility. The plug-in hybrid powertrain combines a turbocharged 2.0-liter four-cylinder engine with an electric motor for combined output of 288 horsepower. Drive up to 50 kilometers on pure electric power for your daily commute with zero emissions. The M Sport package elevates this 5 Series with aggressive aerodynamic body kit, 19-inch M light alloy wheels, and sport-tuned suspension. Inside, the SensaTec upholstery provides the look and feel of leather, while the M sport seats offer excellent support. BMW Live Cockpit Professional features dual 12.3-inch displays. Wireless Apple CarPlay and Android Auto ensure seamless smartphone integration. With barely 14,200 km showing, this 530i is essentially new-car fresh with comprehensive factory warranty coverage. Perfect for environmentally conscious executives who refuse to compromise on premium quality."
        },
        {
            id: 3003,
            model: "BMW 330i M Sport",
            year: 2023,
            mileage: "19,300 km",
            transmission: "Automatic",
            price: 245000,
            engine: "2.0L I4 Turbo",
            power: "255 HP",
            seats: 5,
            fuel: "Premium",
            condition: "Excellent",
            description: "The BMW 3 Series 330i M Sport is the heart and soul of the BMW brand. This 2023 example represents the latest generation with cutting-edge technology. The turbocharged 2.0-liter four-cylinder engine produces 255 horsepower with smooth power delivery and impressive fuel efficiency. The 50/50 weight distribution and precisely tuned chassis deliver balanced handling. The M Sport package enhances the 3 Series with aggressive styling, sport-tuned suspension, and 19-inch M wheels. Inside, the sport seats provide excellent support. BMW latest Operating System 8 with curved display creates a modern interface. Advanced safety features include forward collision warning, lane departure warning, and blind spot detection. Perfect for professionals seeking the iconic sports sedan experience."
        },
        {
            id: 3004,
            model: "BMW 840i Gran Coupe",
            year: 2021,
            mileage: "29,800 km",
            transmission: "Automatic",
            price: 445000,
            engine: "3.0L I6 Turbo",
            power: "335 HP",
            seats: 4,
            fuel: "Premium",
            condition: "Very Good",
            description: "The BMW 8 Series Gran Coupe represents modern luxury grand touring at its finest. The flowing roofline and frameless windows create an elegant silhouette. The turbocharged 3.0-liter inline-six engine delivers 335 horsepower. The adaptive suspension reads the road ahead using camera technology. Inside, extended Merino leather covers every surface, genuine wood trim, and crystal glass controls. Individual rear seats create a four-passenger layout with surprising space. The panoramic glass roof floods the cabin with natural light. Four-zone climate control ensures every passenger comfort. BMW Live Cockpit Professional with fully digital displays provides all information elegantly. Perfect for those who appreciate elegant design and long-distance comfort."
        },
        {
            id: 3005,
            model: 'BMW 430i Convertible',
            year: 2022,
            mileage: '16,700 km',
            transmission: 'Automatic',
            price: 295000,
            engine: '2.0L I4 Turbo',
            power: '255 HP',
            seats: 4,
            fuel: 'Premium',
            condition: 'Excellent',
            description: 'The BMW 4 Series 430i Convertible delivers the perfect combination of style, performance, and open-air motoring pleasure in a beautifully crafted package. The power-retractable hardtop transforms this elegant coupe into an exhilarating roadster in just 20 seconds, even while driving at low speeds up to 50 km/h. Unlike traditional soft-top convertibles, the rigid hardtop provides excellent security, superior insulation for year-round comfort, and maintains sleek coupe styling when closed. The turbocharged 2.0-liter four-cylinder engine produces 255 horsepower with responsive power delivery and impressive fuel efficiency, while the 8-speed automatic transmission provides smooth, quick shifts. The sport-tuned suspension delivers engaging handling without compromising ride comfort - perfect for enjoying twisty coastal roads with the top down. The frameless windows drop completely away when you lower them, creating that classic convertible aesthetic. Inside, the premium leather upholstery and quality materials create an upscale environment, while the sport seats provide excellent support. The neck-level heating and wind deflector extend your top-down season into cooler months, making open-air driving comfortable in a wider range of weather. BMW\'s intuitive iDrive system with navigation, wireless smartphone integration, and premium audio system keep you connected and entertained. The modern technology package includes LED headlights, parking sensors, rearview camera, and advanced driver assistance features. With low mileage and excellent condition showing careful ownership, this 430i Convertible is ready for countless sunny day adventures. Perfect for couples or individuals seeking style and driving pleasure, weekend escapes along scenic routes, or simply enjoying the emotional appeal of top-down motoring. This is premium open-air luxury at an attractive price point.'
        },
        {
            id: 3006,
            model: 'BMW 640i GT',
            year: 2020,
            mileage: '38,200 km',
            transmission: 'Automatic',
            price: 275000,
            engine: '3.0L I6 Turbo',
            power: '335 HP',
            seats: 5,
            fuel: 'Premium',
            condition: 'Very Good',
            description: 'The BMW 6 Series Gran Turismo is a unique proposition in the luxury sedan market - combining the sleek styling of a coupe, the comfort of a sedan, and the versatility of a hatchback in one elegant package. The fastback roofline creates a distinctive silhouette that stands apart from conventional sedans, while the frameless windows and flowing design create visual sophistication. The massive hatchback opening provides incredible cargo flexibility rarely found in premium sedans, with split-folding rear seats that expand capacity for weekend trips or shopping excursions. The turbocharged 3.0-liter inline-six engine delivers 335 horsepower with that characteristic BMW smoothness and linear power delivery, providing effortless acceleration for highway merging and confident passing capability. The adaptive air suspension provides exceptional ride comfort with the ability to raise ride height for rough roads or lower for improved aerodynamics at highway speeds. Inside, passengers enjoy a reclined seating position and generous headroom even in the rear, creating a lounge-like atmosphere perfect for long journeys. Multi-contour seats with massage function help reduce fatigue during extended driving, while four-zone climate control ensures everyone\'s comfort. The panoramic glass roof creates an open, airy cabin feel, while ambient lighting in multiple colors sets the perfect mood. BMW\'s gesture control and iDrive controller provide intuitive operation of all vehicle functions. The comprehensive technology package includes navigation with real-time traffic, premium sound system, wireless charging, and advanced driver assistance features including active cruise control and lane keeping assistant. With proper maintenance records and very good condition, this 6 Series GT offers exceptional value - flagship comfort and features at mid-range pricing. Perfect for those who prioritize comfort and versatility, road trip enthusiasts needing cargo capacity without compromising luxury, or anyone seeking something distinctive in the premium sedan segment.'
        }
    ],
    'z-series': [
        {
            id: 4001,
            model: 'BMW Z4 M40i',
            year: 2021,
            mileage: '16,800 km',
            transmission: 'Automatic',
            price: 335000,
            engine: '3.0L I6 Turbo',
            power: '382 HP',
            seats: 2,
            fuel: 'Premium',
            condition: 'Excellent',
            description: 'The BMW Z4 M40i is the purest expression of roadster motoring from BMW - a focused, driver-centric sports car that prioritizes driving pleasure above all else. This 2021 example combines low mileage with excellent condition, suggesting careful ownership by an enthusiast who appreciated this special machine. The turbocharged 3.0-liter inline-six engine produces 382 horsepower with that distinctive BMW straight-six sound amplified by the sport exhaust - a mechanical symphony that rewards high-rpm driving. The power-folding soft top operates in just 10 seconds at speeds up to 50 km/h, allowing you to transform from enclosed coupe to open roadster at a stoplight. The lightweight fabric roof also reduces weight compared to a retractable hardtop, benefiting handling and acceleration. The adaptive M suspension with electronically controlled dampers allows you to adjust between comfort and sport settings, while the variable sport steering provides quick response and excellent feedback. The 50/50 weight distribution and rear-wheel drive layout create beautifully balanced handling that rewards skilled drivers. The compact dimensions make the Z4 agile and easy to place precisely on winding roads. Inside, the driver-focused cockpit features M sport seats with integrated headrests providing excellent support, while the M leather steering wheel puts all controls within easy reach. The digital instrument cluster and central touchscreen provide modern functionality without overwhelming the classic roadster experience. Despite the performance focus, the Z4 M40i includes practical considerations like run-flat tires for peace of mind, a surprisingly usable trunk for weekend getaways, and advanced safety features including forward collision warning. The premium audio system sounds excellent with the top up or down. With garage-kept storage, complete service records, and pristine condition throughout, this Z4 M40i is ready for its next enthusiast owner. Perfect for those seeking pure driving pleasure, weekend escape vehicle, or simply the emotional satisfaction of open-air sports car ownership. This is a weekend toy that brings joy to every drive.'
        },
        {
            id: 4002,
            model: 'BMW Z4 sDrive30i',
            year: 2022,
            mileage: '12,400 km',
            transmission: 'Automatic',
            price: 285000,
            engine: '2.0L I4 Turbo',
            power: '255 HP',
            seats: 2,
            fuel: 'Premium',
            condition: 'Like New',
            description: 'This 2022 BMW Z4 sDrive30i offers accessible roadster thrills with low mileage and like-new condition that makes it essentially a new car purchase at attractive pre-owned pricing. The turbocharged 2.0-liter four-cylinder engine produces 255 horsepower with smooth power delivery and impressive fuel efficiency for extended driving pleasure without frequent fuel stops. The perfectly weighted chassis and responsive steering create an engaging driving experience that rewards driver skill without being intimidating. The power-folding soft top with fully insulated construction operates quickly and quietly, transforming the Z4 from weather-protected coupe to exhilarating open roadster. The modern LED headlights and taillights create distinctive lighting signatures, while the long hood and short rear deck evoke classic roadster proportions. Inside, the premium leather upholstery shows virtually no wear thanks to careful ownership and low mileage. The sport seats provide good support, while the digital displays create a contemporary interface. Modern technology includes wireless Apple CarPlay, navigation, premium sound system, and advanced safety features. The head-up display projects key information onto the windshield, keeping your eyes on the road. With remaining factory warranty coverage providing complete peace of mind, this Z4 sDrive30i represents excellent value - nearly new roadster luxury at significant savings compared to new vehicle pricing. Perfect for couples seeking weekend adventure, individuals wanting an engaging sports car for sunny day drives, or anyone drawn to the emotional appeal of open-air motoring. This is affordable premium roadster ownership with BMW quality and refinement.'
        },
        {
            id: 4003,
            model: 'BMW Z4 35is',
            year: 2020,
            mileage: '24,600 km',
            transmission: 'Automatic',
            price: 245000,
            engine: '3.0L I6 Twin-Turbo',
            power: '335 HP',
            seats: 2,
            fuel: 'Premium',
            condition: 'Very Good',
            description: 'The BMW Z4 35is represents a special edition roadster from the previous generation, offering classic hardtop convertible versatility with enhanced performance credentials. The "is" designation signifies this is the sportiest variant with additional power tuning, sport-calibrated suspension, and exclusive styling details. The twin-turbocharged 3.0-liter inline-six engine produces 335 horsepower with strong low-end torque and a satisfying power delivery that rewards spirited driving. The retractable hardtop provides superior security and insulation compared to soft-top roadsters, while transforming from coupe to convertible in under 20 seconds. The rigid roof structure also enhances chassis stiffness for improved handling precision. The sport-tuned suspension, variable sport steering, and rear-wheel drive layout create engaging dynamics that put a smile on your face with every drive. Inside, the sport seats with leather upholstery provide good support, while the premium audio system delivers excellent sound quality whether the top is up or down. The well-maintained condition with service records demonstrates responsible ownership, while the attractive pricing makes premium roadster ownership accessible. Perfect for enthusiasts seeking classic BMW roadster character, weekend driving enjoyment, or an engaging second vehicle for sunny day adventures. This Z4 35is offers proven reliability and timeless style at excellent value.'
        }
    ],
    'i-series': [
        {
            id: 5001,
            model: 'BMW i8 Coupe',
            year: 2019,
            mileage: '14,200 km',
            transmission: 'Hybrid',
            price: 475000,
            engine: '1.5L I3 + Electric',
            power: '369 HP',
            seats: 2,
            fuel: 'Plug-in Hybrid',
            condition: 'Excellent',
            description: 'The BMW i8 Coupe is an automotive icon - a futuristic plug-in hybrid sports car that looks like it belongs in a science fiction movie yet delivers real-world performance and efficiency. This 2019 example with low mileage represents a rare opportunity to own BMW\'s most visually stunning creation. The dramatic butterfly doors open upward and outward, creating an entrance that never fails to impress. The flowing aerodynamic bodywork with distinctive layered design channels air for maximum efficiency while creating unmistakable presence. LED headlights and laser light technology create otherworldly lighting signatures. The innovative plug-in hybrid powertrain combines a turbocharged three-cylinder engine driving the rear wheels with electric motors powering the front, creating intelligent all-wheel drive with supercar acceleration. Combined output of 369 horsepower propels the i8 to 100 km/h in just 4.4 seconds, while the ability to drive up to 35 km on pure electric power enables zero-emission urban commuting. The carbon fiber reinforced plastic passenger cell ensures lightweight construction for maximum performance and efficiency. Inside, the futuristic cockpit features floating displays, premium materials, and sustainable construction that showcases BMW\'s commitment to environmental responsibility without compromising luxury. The low seating position and minimalist interior create a focused, driver-centric environment. With comprehensive service records and excellent condition, this i8 Coupe represents both an incredible driving experience and a sound investment - production has ended, making these increasingly collectible. Perfect for those who appreciate groundbreaking design, innovative technology, and the ability to make a dramatic entrance anywhere you go. This is automotive art that you can drive and enjoy.'
        },
        {
            id: 5002,
            model: 'BMW i4 m50',
            year: 2022,
            mileage: '9,800 km',
            transmission: 'Electric',
            price: 365000,
            engine: 'Electric Motor',
            power: '335 HP',
            seats: 5,
            fuel: 'Electric',
            condition: 'Like New',
            description: 'The BMW i4 M50 proves that electric vehicles can be genuinely exciting, combining instant electric torque with M Performance character in a stunning four-door gran coupe package. With barely 9,800 km showing, this i4 is essentially brand new with comprehensive warranty coverage still in effect. The dual electric motors produce a combined 536 horsepower with instantaneous power delivery that launches you to 100 km/h in just 3.9 seconds - acceleration that rivals dedicated sports cars. The low-mounted battery pack creates a low center of gravity and near-perfect weight distribution for exceptional handling dynamics. M-specific chassis tuning with adaptive suspension and variable sport steering delivers precise, engaging handling that makes you forget you\'re driving an electric vehicle. The extended range of over 500 km eliminates range anxiety, while fast-charging capability adds 150 km of range in just 10 minutes at DC fast chargers. The elegant gran coupe design with frameless windows and flowing roofline creates sophisticated style, while the closed-off kidney grilles and aerodynamic details signal this is an electric vehicle. Inside, the curved display seamlessly integrating instrument cluster and infotainment creates BMW\'s latest user interface, while M sport seats provide excellent support. Sustainable materials and vegan leather options showcase environmental responsibility without compromising luxury. Advanced driver assistance systems approach autonomous capabilities, while the premium sound system delivers excellent audio quality. With complete charging equipment included and virtually new condition throughout, this i4 M50 represents the future of performance - thrilling acceleration, zero emissions, and minimal operating costs. Perfect for environmentally conscious enthusiasts who refuse to compromise on driving pleasure, or anyone seeking cutting-edge electric performance with BMW quality and refinement.'
        },
        {
            id: 5003,
            model: 'BMW iX m60',
            year: 2023,
            mileage: '11,500 km',
            transmission: 'Electric',
            price: 485000,
            engine: 'Dual Electric Motors',
            power: '516 HP',
            seats: 5,
            fuel: 'Electric',
            condition: 'Like New',
            description: 'The BMW iX M60 represents the cutting edge of luxury electric SUVs - combining stunning design, advanced technology, and M Performance character in a zero-emission package. This 2023 example with minimal mileage is essentially showroom fresh with years of warranty coverage ahead. The distinctive exterior design features a bold interpretation of BMW\'s kidney grille now serving as an intelligent sensor panel, while the sleek roofline and aerodynamic details create a futuristic yet elegant appearance. The dual electric motors produce a combined 516 horsepower with instantaneous torque delivery that propels this substantial SUV to 100 km/h in just 3.8 seconds. The intelligent all-wheel drive system distributes power for maximum traction and efficiency. Extended range exceeding 600 km eliminates range anxiety, while 200 kW fast-charging adds 150 km in just 10 minutes. Inside, the minimalist lounge-like environment showcases sustainable materials including recycled components and FSC-certified wood trim. The floating curved display integrates seamlessly into the dashboard, while the hexagonal steering wheel adds distinctive style. Individual rear seats provide exceptional comfort with heating, ventilation, and massage functions. The panoramic glass sky lounge roof with integrated LED lighting creates an ambient atmosphere mimicking natural sky conditions. Bowers & Wilkins Diamond Sound System with 30 speakers delivers audiophile-quality sound reproduction. Advanced autonomous driving features make highway cruising relaxing, while the air suspension provides magic carpet ride quality. With virtually new condition, complete charging equipment, and comprehensive warranty coverage, this iX M60 represents sustainable luxury at its finest. Perfect for those seeking the ultimate in electric SUV technology, environmentally conscious luxury buyers, or anyone wanting cutting-edge innovation with BMW prestige.'
        },
        {
            id: 5004,
            model: 'BMW i7 m70',
            year: 2024,
            mileage: '5,200 km',
            transmission: 'Electric',
            price: 625000,
            engine: 'Dual Electric Motors',
            power: '536 HP',
            seats: 5,
            fuel: 'Electric',
            condition: 'As New',
            description: 'The BMW i7 M70 is the electric flagship sedan representing the absolute pinnacle of automotive luxury, technology, and environmental responsibility. With only 5,200 km on the odometer, this i7 is virtually brand new - likely a demo vehicle or executive car - available at substantial savings compared to new vehicle pricing while maintaining essentially new-car condition and full warranty coverage. The dual electric motors produce a combined 536 horsepower delivering supercar acceleration in whisper-quiet electric serenity - 0-100 km/h in just 3.7 seconds with no engine noise, only the subtle whir of electric motors. The extended range exceeding 600 km makes this practical for long-distance executive travel, while fast-charging capability ensures minimal downtime. The exterior design is contemporary elegance with illuminated kidney grilles, sophisticated lighting signatures, and aerodynamic details that enhance efficiency. Inside, this i7 showcases every available luxury feature BMW can offer. The executive lounge rear seating includes individual reclining seats with ottoman footrests, heating, cooling, and massage functions. The theater screen drops from the ceiling providing up to 31-inch display for rear passengers to watch movies, presentations, or video calls. Extended Merino leather, genuine wood trim, crystal controls, and ambient lighting create an environment rivaling private jet cabins. The Bowers & Wilkins Diamond Surround Sound System delivers extraordinary audio quality. Four-zone climate control with air filtration ensures perfect atmosphere. Advanced driver assistance systems including extended traffic jam assistant make every journey relaxing. BMW\'s latest iDrive with curved display, gesture control, and voice command provides intuitive operation. The air suspension with active roll compensation delivers exceptional ride comfort. With virtually brand-new condition, complete warranty coverage, and chauffeur-ready luxury, this i7 M70 represents the future of executive transportation - zero emissions without compromising comfort, performance, or prestige. Perfect for business executives, luxury car enthusiasts embracing electric future, or anyone seeking the absolute best in automotive luxury and technology.'
        },
        {
            id: 5005,
            model: 'BMW iX3',
            year: 2022,
            mileage: '18,900 km',
            transmission: 'Electric',
            price: 295000,
            engine: 'Electric Motor',
            power: '286 HP',
            seats: 5,
            fuel: 'Electric',
            condition: 'Excellent',
            description: 'The BMW iX3 makes electric vehicle ownership accessible and practical without compromising premium quality or driving pleasure. Built on the proven X3 platform, the iX3 offers familiar BMW handling dynamics with the benefits of electric propulsion - instant torque, quiet operation, and zero emissions. The single electric motor produces 286 horsepower with smooth, linear acceleration and the engaging rear-wheel drive character BMW is famous for. The extended range of over 460 km eliminates range anxiety for daily driving and weekend trips, while fast-charging capability adds 100 km of range in just 10 minutes at DC fast chargers. The exterior design maintains the X3\'s attractive proportions with subtle electric vehicle details including aerodynamic wheels, closed-off kidney grilles, and blue accent details. Inside, the spacious cabin offers seating for five with generous cargo space and split-folding rear seats for maximum versatility. Premium materials, ambient lighting, and quality construction maintain BMW\'s luxury standards. BMW\'s iDrive system with navigation, wireless smartphone integration, and premium audio keeps you connected. Advanced safety features including forward collision warning, lane departure warning, and parking sensors provide peace of mind. With excellent condition, complete service records, and attractive pricing, this iX3 represents smart electric vehicle ownership. Complete charging equipment including home charger and mobile connector included. Perfect for families transitioning to electric vehicles, environmentally conscious buyers seeking proven quality, or anyone wanting practical electric SUV with BMW refinement. The combination of familiar usability with electric efficiency makes this ideal first electric vehicle.'
        },
        {
            id: 5006,
            model: 'BMW i3s Range Extender',
            year: 2021,
            mileage: '22,400 km',
            transmission: 'Electric',
            price: 165000,
            engine: 'Electric + Range Extender',
            power: '184 HP',
            seats: 4,
            fuel: 'Electric/Hybrid',
            condition: 'Very Good',
            description: 'The BMW i3s Range Extender is the pioneering electric city car that started BMW\'s electric journey, offering unique design and practical range-extended capability. The distinctive styling with carbon fiber reinforced plastic body, suicide doors, and elevated seating position creates unmistakable presence and excellent visibility. The electric motor produces 184 horsepower with instant torque delivery that makes the i3s surprisingly quick and fun to drive in urban environments - 0-60 km/h acceleration is genuinely exhilarating. The rear-wheel drive layout and tight turning circle make parking and maneuvering effortless. The range extender feature sets this i3s apart from pure electric versions - a small gasoline engine functions as a generator to maintain battery charge when depleted, effectively eliminating range anxiety. Drive approximately 200 km on pure electric power for daily commuting with zero emissions, then rely on the range extender for extended trips or when charging isn\'t available. Inside, the innovative interior uses sustainable materials including recycled components, eucalyptus wood trim, and optional wool fabric - showcasing BMW\'s environmental commitment. The minimalist dashboard, floating center console, and completely flat floor create surprising spaciousness. The suicide doors provide wide, easy access to both front and rear seats despite the compact exterior. Modern technology includes navigation, BMW Connected app integration, and comprehensive safety features. With proper maintenance records and very good condition, this i3s Range Extender offers affordable electric vehicle ownership with the peace of mind of extended range capability. Perfect for urban dwellers seeking unique style and sustainable transportation, first-time electric vehicle buyers wanting backup range, or anyone drawn to innovative design and environmental responsibility at accessible pricing. Complete charging equipment included.'
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
        'x-series': { title: 'X Series', subtitle: 'Certified Pre-Owned Luxury SUVs' },
        'm-series': { title: 'M Series', subtitle: 'Performance Vehicles for Sale' },
        'number-series': { title: '3, 5, 7 Series', subtitle: 'Premium Sedans & Coupes' },
        'z-series': { title: 'Z Series', subtitle: 'Roadsters & Sports Cars' },
        'i-series': { title: 'i Series', subtitle: 'Electric & Hybrid Vehicles' }
    };

    Object.keys(saleCarsDatabase).forEach(series => {
        const cars = saleCarsDatabase[series].slice(0, 3);
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
    const cars = saleCarsDatabase[series];

    const seriesConfig = {
        'x-series': { title: 'X Series Collection', subtitle: 'Certified Pre-Owned Luxury SUVs' },
        'm-series': { title: 'M Series Collection', subtitle: 'Performance Vehicles for Sale' },
        'number-series': { title: '3, 5, 7 Series Collection', subtitle: 'Premium Sedans & Coupes' },
        'z-series': { title: 'Z Series Collection', subtitle: 'Roadsters & Sports Cars' },
        'i-series': { title: 'i Series Collection', subtitle: 'Electric & Hybrid Vehicles' }
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
                <img src="images/cars/buy/car${car.id}.jpg" alt="${car.model}" onerror="this.src='images/cars/placeholder.jpg'">
                <button class="wishlist-btn" onclick="toggleWishlist(${car.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="car-info">
                <h3 class="car-model">${car.model}</h3>
                <div class="car-year-price">
                    <span class="car-year"><i class="fas fa-calendar"></i> ${car.year}</span>
                    <div class="car-price">
                        <span class="price">AED ${car.price.toLocaleString()}</span>
                    </div>
                </div>
                <button class="btn-details" onclick="openSaleCarDetails(${car.id})">
                    View Details
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
    Object.keys(saleCarsDatabase).forEach(series => {
        if (!modelFilter || series === modelFilter) {
            allCars = allCars.concat(saleCarsDatabase[series]);
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

// Open sale car details with new modal design
function openSaleCarDetails(carId) {
    let car = null;

    Object.values(saleCarsDatabase).forEach(series => {
        const found = series.find(c => c.id === carId);
        if (found) car = found;
    });

    if (!car) return;

    // Create array of 4 images for the carousel 
    modalImages = [
        `images/cars/buy/car${car.id}.jpg`,
        `images/cars/buy/car${car.id}-2.jpg`,
        `images/cars/buy/car${car.id}-3.jpg`,
        `images/cars/buy/car${car.id}-4.jpg`
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
                <i class="fas fa-check-circle"></i>
                <div class="spec-label">Condition</div>
                <div class="spec-value">${car.condition}</div>
            </div>
        </div>
        
        <p class="modal-car-description">${car.description}</p>
        
        <div class="modal-car-price">AED ${car.price.toLocaleString()}</div>
        
        <div class="modal-actions">
            <button class="btn-buy" onclick="buyCar(${car.id})">Inquire to Buy</button>
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

function buyCar(carId) {
    let car = null;
    Object.values(saleCarsDatabase).forEach(series => {
        const found = series.find(c => c.id === carId);
        if (found) car = found;
    });
    
    if (car) {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'buy',
            price: `AED ${car.price.toLocaleString()}`
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

// WhatsApp contact
function contactWhatsApp(carModel) {
    const phoneNumber = '971XXXXXXXXX';
    const message = encodeURIComponent(`Hi, I'm interested in Buying th s${carModel}. Can you provide more information?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}