// contact.js - Contact Page Functionality

const API_BASE_URL = 'http://localhost:3000/api';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initMenuToggle();
    checkUserLogin();
    prefillUserData();
    initContactForm();
 
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

            // Hide login/signup buttons
            if (loginBtn) loginBtn.style.display = 'none';
            if (signupBtn) signupBtn.style.display = 'none';

            // Show user profile
            if (userProfile) {
                userProfile.classList.add('active');
                userProfile.style.display = 'block';

                // Set user info
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

// PREFILL USER DATA 
function prefillUserData() {
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');

    if (userStr) {
        try {
            const user = JSON.parse(userStr);

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const phoneInput = document.getElementById('contactPhone');

            if (nameInput && user.firstName && user.lastName) {
                nameInput.value = `${user.firstName} ${user.lastName}`;
            }

            if (emailInput && user.email) {
                emailInput.value = user.email;
            }

            if (phoneInput && user.phone) {
                phoneInput.value = user.phone;
            }
        } catch (error) {
            console.error('Error prefilling user data:', error);
        }
    }
}

//  CONTACT FORM 
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

async function handleContactSubmit(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('.btn-submit-contact');
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Get form data
    const formData = {
        name: document.getElementById('contactName').value.trim(),
        email: document.getElementById('contactEmail').value.trim(),
        phone: document.getElementById('contactPhone').value.trim(),
        reason: document.getElementById('contactReason').value,
        subject: document.getElementById('contactSubject').value.trim(),
        message: document.getElementById('contactMessage').value.trim()
    };

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.reason || !formData.subject || !formData.message) {
        showAlert('error', 'Please fill in all required fields');
        return;
    }

    // Email validation
    if (!isValidEmail(formData.email)) {
        showAlert('error', 'Please enter a valid email address');
        return;
    }

    
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    loadingOverlay.classList.add('active');

    try {
        const response = await fetch(`${API_BASE_URL}/contact/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            showAlert('success', 'Thank you for contacting us! We will get back to you soon.');

           
            e.target.reset();

            // Prefill user data again if logged in
            setTimeout(() => {
                prefillUserData();
            }, 100);
        } else {
            showAlert('error', data.message || 'Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        showAlert('error', 'Connection error. Please check your internet and try again.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        loadingOverlay.classList.remove('active');
    }
}

// WHATSAPP CONTACT 
function contactWhatsApp() {
    const phoneNumber = '971XXXXXXXXX'; // Replace with actual number
    const message = encodeURIComponent('Hi BMW Elite! I would like to get in touch with you.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// UTILITY FUNCTIONS 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(type, message) {
    const alert = document.getElementById('alertMessage');
    alert.className = `alert-message ${type} active`;
    alert.querySelector('.alert-message-text').textContent = message;

    const icon = alert.querySelector('i');
    if (type === 'success') {
        icon.className = 'fas fa-check-circle';
    } else if (type === 'error') {
        icon.className = 'fas fa-exclamation-circle';
    } else {
        icon.className = 'fas fa-info-circle';
    }

    setTimeout(() => {
        alert.classList.remove('active');
    }, 5000);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
