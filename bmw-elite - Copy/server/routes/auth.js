// server/routes/auth.js - Authentication Routes

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// JWT Secret (should be in .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';
const JWT_EXPIRE = '7d';

// Generate JWT Token
function generateToken(userId) {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
}

// ==================== SIGNUP ROUTE ====================
router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Check if user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered. Please login instead.'
            });
        }

        // Create new user
        const user = new User({
            firstName,
            lastName,
            email,
            phone,
            password
        });

        await user.save();

        // Generate token
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'Account created successfully',
            token,
            user: user.toJSON()
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating account. Please try again.',
            error: error.message
        });
    }
});

// ==================== LOGIN ROUTE ====================
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password'
            });
        }

        // Find user
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Check password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Generate token
        const token = generateToken(user._id);

        res.json({
            success: true,
            message: 'Login successful',
            token,
            user: user.toJSON()
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Error logging in. Please try again.',
            error: error.message
        });
    }
});

// ==================== GOOGLE SIGN-IN ROUTE ====================
router.post('/google', async (req, res) => {
    try {
        const { token, email, firstName, lastName, picture } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        // Check if user exists
        let user = await User.findByEmail(email);

        if (user) {
            // User exists, update Google ID if not set
            if (!user.googleId && token) {
                // Extract Google ID from token (simplified)
                const googleId = email; // In production, extract from JWT
                user.googleId = googleId;
                if (picture) user.profilePicture = picture;
                await user.save();
            }
        } else {
            // Create new user
            const googleId = email; // In production, extract from JWT
            user = new User({
                firstName: firstName || 'User',
                lastName: lastName || '',
                email,
                phone: '+971000000000', // Placeholder
                googleId,
                profilePicture: picture,
                isVerified: true // Auto-verify Google users
            });

            await user.save();
        }

        // Generate JWT token
        const authToken = generateToken(user._id);

        res.json({
            success: true,
            message: 'Google Sign-In successful',
            token: authToken,
            user: user.toJSON()
        });

    } catch (error) {
        console.error('Google Sign-In error:', error);
        res.status(500).json({
            success: false,
            message: 'Error with Google Sign-In. Please try again.',
            error: error.message
        });
    }
});

// ==================== GET USER PROFILE ====================
router.get('/profile', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            user: user.toJSON()
        });

    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching profile',
            error: error.message
        });
    }
});

// ==================== UPDATE USER PROFILE ====================
router.put('/profile', verifyToken, async (req, res) => {
    try {
        const { firstName, lastName, phone } = req.body;

        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Update fields
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (phone) user.phone = phone;

        await user.save();

        res.json({
            success: true,
            message: 'Profile updated successfully',
            user: user.toJSON()
        });

    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating profile',
            error: error.message
        });
    }
});

// ==================== VERIFY TOKEN MIDDLEWARE ====================
function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'No token provided'
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
}

module.exports = router;