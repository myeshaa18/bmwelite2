// auth.js - Authentication Functionality


const API_BASE_URL = '/api';

// Initialization
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes('login.html')) {
        initLoginPage();
    } else if (currentPage.includes('signup.html')) {
        initSignupPage();
    }

    initGoogleSignIn();
});

// LOGIN PAGE
function initLoginPage() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Validation
    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        return;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        return;
    }


    clearErrors();

    
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;

    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Storing token
            if (rememberMe) {
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
            } else {
                sessionStorage.setItem('authToken', data.token);
                sessionStorage.setItem('user', JSON.stringify(data.user));
            }

            showAlert('success', 'Login successful! Redirecting...');

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        } else {
            showAlert('error', data.message || 'Login failed. Please try again.');
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
        }
    } catch (error) {
        console.error('Login error:', error);
        showAlert('error', 'Connection error. Please try again.');
        loginBtn.classList.remove('loading');
        loginBtn.disabled = false;
    }
}

// SIGNUP PAGE
function initSignupPage() {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }
}

async function handleSignup(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsAccepted = document.getElementById('terms').checked;

    // Validation
    let isValid = true;

    if (firstName.length < 2) {
        showError('firstNameError', 'First name must be at least 2 characters');
        isValid = false;
    }

    if (lastName.length < 2) {
        showError('lastNameError', 'Last name must be at least 2 characters');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (!validatePhone(phone)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }

    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (!termsAccepted) {
        showError('termsError', 'You must accept the terms and conditions');
        isValid = false;
    }

    if (!isValid) return;

    
    clearErrors();

   
    const signupBtn = document.getElementById('signupBtn');
    signupBtn.classList.add('loading');
    signupBtn.disabled = true;

    try {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            showAlert('success', 'Account created successfully! Redirecting to login...');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            showAlert('error', data.message || 'Signup failed. Please try again.');
            signupBtn.classList.remove('loading');
            signupBtn.disabled = false;
        }
    } catch (error) {
        console.error('Signup error:', error);
        showAlert('error', 'Connection error. Please try again.');
        signupBtn.classList.remove('loading');
        signupBtn.disabled = false;
    }
}

// PASSWORD STRENGTH CHECKER
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    if (!strengthFill || !strengthText) return;

    let strength = 0;

    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;

    // Character variety checks
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    // Updating UI
    strengthFill.className = 'strength-fill';

    if (strength <= 2) {
        strengthFill.classList.add('weak');
        strengthText.textContent = 'Weak password';
        strengthText.style.color = '#dc3545';
    } else if (strength <= 4) {
        strengthFill.classList.add('medium');
        strengthText.textContent = 'Medium password';
        strengthText.style.color = '#ffc107';
    } else {
        strengthFill.classList.add('strong');
        strengthText.textContent = 'Strong password';
        strengthText.style.color = '#28a745';
    }
}

// TOGGLE PASSWORD VISIBILITY
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function toggleConfirmPassword() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const toggleIcon = document.getElementById('toggleConfirmIcon');

    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        confirmPasswordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// GOOGLE SIGN IN
function initGoogleSignIn() {
    const googleSignInBtn = document.getElementById('googleSignIn');

    if (googleSignInBtn) {
        googleSignInBtn.addEventListener('click', handleGoogleSignIn);
    }
}

async function handleGoogleSignIn() {
    try {
       
        showAlert('error', 'Google Sign-In will be implemented with Google API integration');

       
    } catch (error) {
        console.error('Google Sign-In error:', error);
        showAlert('error', 'Google Sign-In failed. Please try again.');
    }
}

// VALIDATION HELPERS
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// ERROR HANDLING
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('active');

        
        const input = errorElement.previousElementSibling;
        if (input && input.tagName === 'INPUT') {
            input.classList.add('error');
        } else if (input && input.classList.contains('password-input')) {
            input.querySelector('input').classList.add('error');
        }
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.classList.remove('active');
        error.textContent = '';
    });

    const errorInputs = document.querySelectorAll('input.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
}

// ALERT MESSAGES
function showAlert(type, message) {
    const alertBox = document.getElementById('alertBox');
    if (!alertBox) return;

    alertBox.className = `alert ${type}`;
    alertBox.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    alertBox.style.display = 'flex';

    
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
}

// CHECKING IF USER IS LOGGED IN
function isLoggedIn() {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    return !!token;
}

// GETTING CURRENT USER
function getCurrentUser() {
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// LOGOUT
function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    window.location.href = 'login.html';
}

// Export functions for use in other scripts
window.authFunctions = {
    isLoggedIn,
    getCurrentUser,
    logout
};
