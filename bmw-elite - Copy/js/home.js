// home.js - Homepage Functionality

// Car Data
const carsData = {
    1: {
        id: 1,
        model: "BMW X7 M50i",
        year: 2022,
        mileage: "5,000 km",
        transmission: "Automatic",
        type: "rent",
        price: "AED 2,500/day",
        description: "The BMW X7 combines luxury with power, featuring a twin-turbo V8 engine delivering 523 horsepower. This flagship SUV offers three rows of seating, advanced technology, and a commanding road presence. Perfect for families or executive travel.",
        image: "images/cars/car1.jpg",
        specs: {
            engine: "4.4L V8 Twin-Turbo",
            power: "523 HP",
            seats: "7 Seats",
            fuel: "Premium"
        }
    },
    2: {
        id: 2,
        model: "BMW M4 Competition",
        year: 2024,
        mileage: "12,000 km",
        transmission: "Automatic",
        type: "sale",
        price: "AED 385,000",
        description: "Pure performance with a 3.0L twin-turbo inline-six engine, delivering 503 horsepower. The M4 Competition features aggressive styling, track-ready performance, and luxurious interior appointments. A true driver's car.",
        image: "images/cars/car2.jpg",
        specs: {
            engine: "3.0L I6 Twin-Turbo",
            power: "503 HP",
            seats: "4 Seats",
            fuel: "Premium"
        }
    },
    3: {
        id: 3,
        model: "BMW i8 Roadster",
        year: 2017,
        mileage: "3,500 km",
        transmission: "Hybrid",
        type: "rent",
        price: "AED 3,200/day",
        description: "Futuristic hybrid sports car combining electric efficiency with combustion power. Features stunning design, butterfly doors, and advanced hybrid technology. Experience the future of performance driving.",
        image: "images/cars/car3.jpg",
        specs: {
            engine: "1.5L I3 + Electric",
            power: "369 HP",
            seats: "2 Seats",
            fuel: "Hybrid"
        }
    },
    4: {
        id: 4,
        model: "BMW 7 Series 750Li",
        year: 2022,
        mileage: "8,000 km",
        transmission: "Automatic",
        type: "sale",
        price: "AED 425,000",
        description: "Executive luxury sedan with cutting-edge technology and supreme comfort. Features include massage seats, gesture control, and a powerful V8 engine. The ultimate business sedan.",
        image: "images/cars/car4.jpg",
        specs: {
            engine: "4.4L V8 Twin-Turbo",
            power: "523 HP",
            seats: "5 Seats",
            fuel: "Premium"
        }
    },
    5: {
        id: 5,
        model: "BMW X5 M Competition",
        year: 2024,
        mileage: "6,200 km",
        transmission: "Automatic",
        type: "rent",
        price: "AED 2,800/day",
        description: "High-performance SUV with 617 horsepower, combining versatility with sports car dynamics. Features M-specific enhancements, adaptive suspension, and luxurious interior. Perfect for any occasion.",
        image: "images/cars/car5.jpg",
        specs: {
            engine: "4.4L V8 Twin-Turbo",
            power: "617 HP",
            seats: "5 Seats",
            fuel: "Premium"
        }
    },
    6: {
        id: 6,
        model: "BMW M8 Gran Coupe",
        year: 2021,
        mileage: "4,500 km",
        transmission: "Automatic",
        type: "sale",
        price: "AED 675,000",
        description: "Ultimate luxury gran coupe with 617 horsepower and breathtaking performance. Combines four-door practicality with supercar performance. The pinnacle of BMW engineering.",
        image: "images/cars/car6.jpg",
        specs: {
            engine: "4.4L V8 Twin-Turbo",
            power: "617 HP",
            seats: "4 Seats",
            fuel: "Premium"
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initCarousel();
    initSearch();
    initMenuToggle();
    initWishlist();
    loadYouTubeVideos();
    checkUserLogin();
});

// Mobile Menu Toggle
function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
}

// Carousel Functionality
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const cards = track.querySelectorAll('.car-card');
    const totalCards = cards.length;
    let cardsToShow = 3;

    // Responsive cards to show
    function updateCardsToShow() {
        if (window.innerWidth <= 768) {
            cardsToShow = 1;
        } else if (window.innerWidth <= 1200) {
            cardsToShow = 2;
        } else {
            cardsToShow = 3;
        }
    }

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    // Auto-scroll
    let autoScroll = setInterval(nextSlide, 5000);

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 30;
        const offset = -(currentIndex * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        if (currentIndex < totalCards - cardsToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - cardsToShow;
        }
        updateCarousel();
    }

    nextBtn.addEventListener('click', function () {
        nextSlide();
        clearInterval(autoScroll);
        autoScroll = setInterval(nextSlide, 5000);
    });

    prevBtn.addEventListener('click', function () {
        prevSlide();
        clearInterval(autoScroll);
        autoScroll = setInterval(nextSlide, 5000);
    });

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoScroll));
    track.addEventListener('mouseleave', () => {
        autoScroll = setInterval(nextSlide, 5000);
    });
}

// Open Car Details Modal
function openCarDetails(carId) {
    const car = carsData[carId];
    if (!car) return;

    const modal = document.getElementById('carModal');
    const modalBody = document.getElementById('modalBody');

    const modalContent = `
        <img src="${car.image}" alt="${car.model}" class="modal-car-image">
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
                <div class="spec-value">${car.specs.fuel}</div>
            </div>
        </div>
        
        <div class="modal-car-specs">
            <div class="spec-item">
                <i class="fas fa-engine"></i>
                <div class="spec-label">Engine</div>
                <div class="spec-value">${car.specs.engine}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-bolt"></i>
                <div class="spec-label">Power</div>
                <div class="spec-value">${car.specs.power}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-users"></i>
                <div class="spec-label">Seats</div>
                <div class="spec-value">${car.specs.seats}</div>
            </div>
            <div class="spec-item">
                <i class="fas fa-tag"></i>
                <div class="spec-label">Type</div>
                <div class="spec-value">${car.type === 'rent' ? 'For Rent' : 'For Sale'}</div>
            </div>
        </div>
        
        <p class="modal-car-description">${car.description}</p>
        
        <div class="modal-car-price">${car.price}</div>
        
        <div class="modal-actions">
            ${car.type === 'rent'
            ? '<button class="btn-rent" onclick="rentCar(' + carId + ')">Rent Now</button>'
            : '<button class="btn-buy" onclick="buyCar(' + carId + ')">Buy Now</button>'}
            <button class="btn-whatsapp" onclick="contactWhatsApp('${car.model}')">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </button>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeCarDetails() {
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


function rentCar(carId) {
    const car = carsData[carId];
    if (!car) return;
    

    closeCarDetails();
    
    // Small delay for smooth transition
    setTimeout(() => {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'rent',
            price: car.price
        });
    }, 300);
}

function buyCar(carId) {
    const car = carsData[carId];
    if (!car) return;
    
    // Close the car details modal first
    closeCarDetails();
    
    // Small delay for smooth transition
    setTimeout(() => {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'buy',
            price: car.price
        });
    }, 300);
}


// WhatsApp Contact
function contactWhatsApp(carModel) {
    const phoneNumber = '971XXXXXXXXX'; // Replace with actual number
    const message = encodeURIComponent(`Hi, I'm interested in the ${carModel}. Can you provide more information?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Wishlist Functionality
function initWishlist() {
    updateWishlistCount();
}

function toggleWishlist(carId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishlist.indexOf(carId);

    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(carId);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI(carId, index === -1);
    updateWishlistCount();
}

function updateWishlistUI(carId, isAdded) {
    const card = document.querySelector(`[data-car-id="${carId}"]`);
    if (card) {
        const btn = card.querySelector('.wishlist-btn');
        const icon = btn.querySelector('i');

        if (isAdded) {
            btn.classList.add('active');
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            btn.classList.remove('active');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const countElement = document.querySelector('.wishlist-count');
    if (countElement) {
        countElement.textContent = wishlist.length;
    }

    // Update all wishlist buttons
    wishlist.forEach(carId => {
        updateWishlistUI(carId, true);
    });
}

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

// Smooth Scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Load YouTube Videos )
function loadYouTubeVideos() {
 
    console.log('YouTube videos loading...');
}

// USER PROFILE & AUTHENTICATION

// Check if user is logged in
function checkUserLogin() {
    console.log('🔍 Checking user login status...');

    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');

    console.log('Token exists:', !!token);
    console.log('User data exists:', !!userStr);

    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const userProfile = document.getElementById('userProfile');

    if (token && userStr) {
        try {
            // User is logged in
            const user = JSON.parse(userStr);

            console.log('✅ User logged in:', user.email);

            // Hide login/signup buttons
            if (loginBtn) {
                loginBtn.style.display = 'none';
                console.log('✅ Login button hidden');
            }
            if (signupBtn) {
                signupBtn.style.display = 'none';
                console.log('✅ Signup button hidden');
            }

            // Show user profile
            if (userProfile) {
                userProfile.classList.add('active');
                userProfile.style.display = 'block';
                console.log('✅ User profile shown');

                // Set user info
                const userAvatar = document.getElementById('userAvatar');
                const userName = document.getElementById('userName');
                const userEmail = document.getElementById('userEmail');

                if (userAvatar) {
                    const initials = getInitials(user.firstName, user.lastName);
                    userAvatar.textContent = initials;
                    console.log('✅ Avatar set:', initials);
                }

                if (userName) {
                    userName.textContent = `${user.firstName} ${user.lastName}`;
                    console.log('✅ Name set:', userName.textContent);
                }

                if (userEmail) {
                    userEmail.textContent = user.email;
                    console.log('✅ Email set:', user.email);
                }
            } else {
                console.error('❌ User profile element not found');
            }
        } catch (error) {
            console.error('❌ Error parsing user data:', error);
            // Clear invalid data
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
        }
    } else {
        console.log('ℹ️ User not logged in');

        // User is not logged in
        if (loginBtn) loginBtn.style.display = 'block';
        if (signupBtn) signupBtn.style.display = 'block';
        if (userProfile) {
            userProfile.classList.remove('active');
            userProfile.style.display = 'none';
        }
    }
}

// Get user initials
function getInitials(firstName, lastName) {
    const first = firstName ? firstName.charAt(0).toUpperCase() : '';
    const last = lastName ? lastName.charAt(0).toUpperCase() : '';
    return first + last;
}

// Toggle user dropdown
function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    const userProfile = document.getElementById('userProfile');
    const dropdown = document.getElementById('userDropdown');

    if (userProfile && dropdown && !userProfile.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Logout user
function logoutUser() {
    // Clear storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');

    // Show alert
    alert('Logged out successfully!');

    // Reload page
    window.location.reload();
}