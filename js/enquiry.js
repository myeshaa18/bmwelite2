// enquiry.js - Enquiry Form Functionality
// Add this to a new file: js/enquiry.js

const API_BASE_URL = 'http://localhost:3000/api';




function handleHomePageRent(carId) {
    const car = carsData[carId];
    if (!car) return;
    
    // Close the car details modal first
    closeCarDetails();
    
    // Open enquiry form
    setTimeout(() => {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'rent',
            price: car.price
        });
    }, 300);
}

function handleHomePageBuy(carId) {
    const car = carsData[carId];
    if (!car) return;
    
    // Close the car details modal first
    closeCarDetails();
    
    // Open enquiry form
    setTimeout(() => {
        openEnquiryForm({
            id: car.id,
            model: car.model,
            type: 'buy',
            price: car.price
        });
    }, 300);
}

// Global variables to store current car details
let currentCarDetails = null;

// Check if user is logged in
function isUserLoggedIn() {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    return !!(token && user);
}

// Get current user
function getCurrentUser() {
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// Get auth token
function getAuthToken() {
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
}

// Open enquiry form (called from rent/buy buttons)
function openEnquiryForm(carDetails) {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
        showLoginRequired();
        return;
    }

    currentCarDetails = carDetails;
    const user = getCurrentUser();

    // Populate car info
    const carInfoSummary = document.getElementById('carInfoSummary');
    carInfoSummary.innerHTML = `
        <h3>${carDetails.model}</h3>
        <p><strong>Type:</strong> ${carDetails.type === 'rent' ? 'For Rent' : 'For Sale'}</p>
        <p><strong>Price:</strong> ${carDetails.price}</p>
    `;

    // Populate user info
    document.getElementById('enquiryName').value = `${user.firstName} ${user.lastName}`;
    document.getElementById('enquiryEmail').value = user.email;
    document.getElementById('enquiryPhone').value = user.phone || '';

    // Show/hide rental-specific fields
    const rentalFields = document.getElementById('rentalFields');
    const dateInput = document.getElementById('enquiryDate');
    const durationInput = document.getElementById('enquiryDuration');

    if (carDetails.type === 'rent') {
        rentalFields.style.display = 'block';
        dateInput.required = true;
        durationInput.required = true;
        
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    } else {
        rentalFields.style.display = 'none';
        dateInput.required = false;
        durationInput.required = false;
    }

    // Show modal
    const modal = document.getElementById('enquiryModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close enquiry form
function closeEnquiryForm() {
    const modal = document.getElementById('enquiryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('enquiryForm').reset();
}

// Show login required modal
function showLoginRequired() {
    const modal = document.getElementById('loginRequiredModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close login required modal
function closeLoginRequired() {
    const modal = document.getElementById('loginRequiredModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show alert message
function showAlert(type, message) {
    const alert = document.getElementById('alertMessage');
    alert.className = `alert-message ${type} active`;
    alert.querySelector('.alert-message-text').textContent = message;
    
    // Change icon based on type
    const icon = alert.querySelector('i');
    if (type === 'success') {
        icon.className = 'fas fa-check-circle';
    } else if (type === 'error') {
        icon.className = 'fas fa-exclamation-circle';
    } else {
        icon.className = 'fas fa-info-circle';
    }
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        alert.classList.remove('active');
    }, 5000);
}

// Handle enquiry form submission
document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('enquiryForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (!currentCarDetails) {
                showAlert('error', 'Car details not found');
                return;
            }
            
            const submitBtn = e.target.querySelector('.btn-submit-enquiry');
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            
            try {
                const formData = {
                    carId: currentCarDetails.id,
                    carModel: currentCarDetails.model,
                    carType: currentCarDetails.type,
                    carPrice: currentCarDetails.price,
                    phoneNumber: document.getElementById('enquiryPhone').value.trim(),
                    message: document.getElementById('enquiryMessage').value.trim()
                };
                
                // Add rental-specific fields if applicable
                if (currentCarDetails.type === 'rent') {
                    formData.preferredDate = document.getElementById('enquiryDate').value;
                    formData.duration = parseInt(document.getElementById('enquiryDuration').value);
                }
                
                const token = getAuthToken();
                
                const response = await fetch(`${API_BASE_URL}/enquiries/create`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    showAlert('success', 'Enquiry submitted successfully! We will contact you soon.');
                    closeEnquiryForm();
                    
                    // Reset form
                    enquiryForm.reset();
                    currentCarDetails = null;
                } else {
                    showAlert('error', data.message || 'Failed to submit enquiry. Please try again.');
                }
            } catch (error) {
                console.error('Enquiry submission error:', error);
                showAlert('error', 'Connection error. Please check your internet and try again.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }
        });
    }
});

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const enquiryModal = document.getElementById('enquiryModal');
    const loginModal = document.getElementById('loginRequiredModal');
    
    if (e.target === enquiryModal) {
        closeEnquiryForm();
    }
    
    if (e.target === loginModal) {
        closeLoginRequired();
    }
});