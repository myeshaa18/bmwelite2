// about.js - Enhanced About Page Functionality

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initMenuToggle();
    checkUserLogin();
    initReviewsSlider();
    initStatsCounter();
    initScrollAnimations();
    loadYouTubeVideo();
});

// MENU TOGGLE 
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

// USER AUTHENTICATION
function checkUserLogin() {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');

    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const userProfile = document.getElementById('userProfile');

    if (token && userStr) {
        try {
            const user = JSON.parse(userStr);

            if (loginBtn) loginBtn.style.display = 'none';
            if (signupBtn) signupBtn.style.display = 'none';

            if (userProfile) {
                userProfile.classList.add('active');
                userProfile.style.display = 'block';

                const userAvatar = document.getElementById('userAvatar');
                const userName = document.getElementById('userName');
                const userEmail = document.getElementById('userEmail');

                if (userAvatar) {
                    const initials = getInitials(user.firstName, user.lastName);
                    userAvatar.textContent = initials;
                }

                if (userName) {
                    userName.textContent = `${user.firstName} ${user.lastName}`;
                }

                if (userEmail) {
                    userEmail.textContent = user.email;
                }
            }
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (signupBtn) signupBtn.style.display = 'block';
        if (userProfile) {
            userProfile.classList.remove('active');
            userProfile.style.display = 'none';
        }
    }
}

function getInitials(firstName, lastName) {
    const first = firstName ? firstName.charAt(0).toUpperCase() : '';
    const last = lastName ? lastName.charAt(0).toUpperCase() : '';
    return first + last;
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

function logoutUser() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');

    alert('Logged out successfully!');
    window.location.reload();
}

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    const userProfile = document.getElementById('userProfile');
    const dropdown = document.getElementById('userDropdown');

    if (userProfile && dropdown && !userProfile.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// REVIEWS SLIDER 
const reviews = [
    {
        text: "BMW Elite provided an exceptional experience from start to finish. The M4 Competition I rented exceeded all expectations. The team's professionalism and attention to detail made the entire process seamless. Highly recommended!",
        name: "James Davidson",
        initials: "JD",
        date: "2 weeks ago"
    },
    {
        text: "Purchasing my BMW X7 through BMW Elite was a dream come true. Their expertise, transparent pricing, and after-sales support are unmatched. They truly understand luxury automotive excellence.",
        name: "Sophia Williams",
        initials: "SW",
        date: "1 month ago"
    },
    {
        text: "The service at BMW Elite is simply outstanding. From the moment I walked in to the day I drove away in my new M8, every interaction was professional, courteous, and efficient. Five stars all the way!",
        name: "Alexander Pierce",
        initials: "AP",
        date: "3 weeks ago"
    }
];

let currentReview = 0;

function initReviewsSlider() {
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentReview = (currentReview - 1 + reviews.length) % reviews.length;
            showReview(currentReview);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentReview = (currentReview + 1) % reviews.length;
            showReview(currentReview);
        });
    }

    // Auto-rotate reviews every 7 seconds
    setInterval(() => {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }, 7000);
}

function showReview(index) {
    const reviewCard = document.querySelector('.review-card');

    if (!reviewCard) return;

    // Fade out
    reviewCard.style.opacity = '0';
    reviewCard.style.transform = 'translateY(20px)';

    setTimeout(() => {
        // Update content
        const reviewText = reviewCard.querySelector('.review-text');
        const reviewerName = reviewCard.querySelector('.reviewer-details h4');
        const reviewerAvatar = reviewCard.querySelector('.reviewer-avatar');
        const reviewDate = reviewCard.querySelector('.review-date');

        if (reviewText) reviewText.textContent = reviews[index].text;
        if (reviewerName) reviewerName.textContent = reviews[index].name;
        if (reviewerAvatar) reviewerAvatar.textContent = reviews[index].initials;
        if (reviewDate) reviewDate.textContent = reviews[index].date;

        // Fade in
        reviewCard.style.opacity = '1';
        reviewCard.style.transform = 'translateY(0)';
    }, 300);

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// STATS COUNTER
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');

    const animateValue = (element, start, end, duration) => {
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            element.textContent = current + (element.textContent.includes('+') ? '+' : '');

            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.dataset.target);
                if (!isNaN(target)) {
                    animateValue(entry.target, 0, target, 2000);
                    entry.target.classList.add('counted');
                }
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        if (stat.dataset.target) {
            observer.observe(stat);
        }
    });
}

// SCROLL ANIMATIONS 
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll(`
        .story-image-container,
        .story-content,
        .vision-card,
        .stat-card,
        .team-member,
        .timeline-item,
        .review-card
    `);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });
}

//  SMOOTH SCROLL 
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
