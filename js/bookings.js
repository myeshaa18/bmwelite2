// bookings.js - Bookings Page Functionality

const API_BASE_URL = 'http://localhost:3000/api';

let allBookings = [];
let currentFilter = 'all';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  
    if (typeof checkUserLogin === 'function') {
        checkUserLogin();
    }
    

    if (!isUserLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    
    loadBookings();
});


function isUserLoggedIn() {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    return !!token;
}


function getAuthToken() {
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
}

// Loading bookings from API
async function loadBookings() {
    const loadingState = document.getElementById('loadingState');
    const emptyState = document.getElementById('emptyState');
    const bookingsGrid = document.getElementById('bookingsGrid');
    
    loadingState.style.display = 'block';
    emptyState.style.display = 'none';
    bookingsGrid.style.display = 'none';
    
    try {
        const token = getAuthToken();
        
        const response = await fetch(`${API_BASE_URL}/enquiries/my-bookings`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const data = await response.json();
        
        if (response.ok) {
            allBookings = data.enquiries || [];
            displayBookings();
        } else {
            console.error('Failed to load bookings:', data.message);
            showEmptyState();
        }
    } catch (error) {
        console.error('Error loading bookings:', error);
        showEmptyState();
    } finally {
        loadingState.style.display = 'none';
    }
}


function displayBookings() {
    const emptyState = document.getElementById('emptyState');
    const bookingsGrid = document.getElementById('bookingsGrid');
    
    let filteredBookings = allBookings;
    
    if (currentFilter !== 'all') {
        filteredBookings = allBookings.filter(booking => booking.status === currentFilter);
    }
    
    if (filteredBookings.length === 0) {
        bookingsGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    bookingsGrid.style.display = 'grid';
    
    bookingsGrid.innerHTML = filteredBookings.map(booking => generateBookingCard(booking)).join('');
}


function generateBookingCard(booking) {
    const createdDate = new Date(booking.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    const preferredDate = booking.preferredDate 
        ? new Date(booking.preferredDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
        : null;
    
    const canCancel = booking.status === 'pending' || booking.status === 'confirmed';
    
    
    const imagePath = booking.carType === 'rent' 
        ? `images/cars/rent/car${booking.carId}.jpg`
        : `images/cars/buy/car${booking.carId}.jpg`;
    
    return `
        <div class="booking-card">
            <div class="booking-card-image">
                <img src="${imagePath}" alt="${booking.carModel}">
                <div class="booking-card-overlay">
                    <span class="booking-status ${booking.status}">${booking.status}</span>
                </div>
            </div>
            <div class="booking-card-header">
                <h3 class="booking-card-title">${booking.carModel}</h3>
                <span class="booking-type">${booking.carType === 'rent' ? 'Rental' : 'Purchase'}</span>
            </div>
            
            <div class="booking-card-body">
                <div class="booking-info-row">
                    <i class="fas fa-tag"></i>
                    <span>Price: <strong>${booking.carPrice}</strong></span>
                </div>
                
                <div class="booking-info-row">
                    <i class="fas fa-phone"></i>
                    <span>Phone: <strong>${booking.phoneNumber}</strong></span>
                </div>
                
                ${booking.preferredDate ? `
                    <div class="booking-info-row">
                        <i class="fas fa-calendar"></i>
                        <span>Preferred Date: <strong>${preferredDate}</strong></span>
                    </div>
                ` : ''}
                
                ${booking.duration ? `
                    <div class="booking-info-row">
                        <i class="fas fa-clock"></i>
                        <span>Duration: <strong>${booking.duration} day${booking.duration > 1 ? 's' : ''}</strong></span>
                    </div>
                ` : ''}
                
                ${booking.message ? `
                    <div class="booking-message">
                        <p><i class="fas fa-comment"></i> ${booking.message}</p>
                    </div>
                ` : ''}
            </div>
            
            <div class="booking-card-footer">
                <span class="booking-date">
                    <i class="fas fa-calendar-plus"></i>
                    Submitted: ${createdDate}
                </span>
                ${canCancel ? `
                    <button class="btn-cancel-booking" onclick="cancelBooking('${booking._id}')">
                        Cancel Enquiry
                    </button>
                ` : ''}
            </div>
        </div>
    `;
}


function showEmptyState() {
    const emptyState = document.getElementById('emptyState');
    const bookingsGrid = document.getElementById('bookingsGrid');
    
    emptyState.style.display = 'block';
    bookingsGrid.style.display = 'none';
}

// Filter bookings
function filterBookings(filter) {
    currentFilter = filter;
    
  
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === filter) {
            tab.classList.add('active');
        }
    });
    
    
    displayBookings();
}

// Cancel booking
async function cancelBooking(bookingId) {
    if (!confirm('Are you sure you want to cancel this enquiry?')) {
        return;
    }
    
    try {
        const token = getAuthToken();
        
        const response = await fetch(`${API_BASE_URL}/enquiries/${bookingId}/cancel`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('Enquiry cancelled successfully');
            loadBookings(); 
        } else {
            alert(data.message || 'Failed to cancel enquiry');
        }
    } catch (error) {
        console.error('Error cancelling booking:', error);
        alert('Error cancelling enquiry. Please try again.');
    }
}