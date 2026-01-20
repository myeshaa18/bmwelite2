// server/routes/enquiries.js - Enquiry Routes

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Enquiry = require('../models/Enquiry');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';

// Verify Token Middleware
function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'No token provided. Please login first.'
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token. Please login again.'
        });
    }
}

// ==================== CREATE ENQUIRY ====================
router.post('/create', verifyToken, async (req, res) => {
    try {
        const { carId, carModel, carType, carPrice, preferredDate, duration, phoneNumber, message } = req.body;

        // Get user details
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Validation
        if (!carId || !carModel || !carType || !carPrice || !phoneNumber) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        if (carType === 'rent' && (!preferredDate || !duration)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide preferred date and duration for rental'
            });
        }

        // Create enquiry
        const enquiry = new Enquiry({
            user: user._id,
            userEmail: user.email,
            userName: `${user.firstName} ${user.lastName}`,
            carId,
            carModel,
            carType,
            carPrice,
            preferredDate: carType === 'rent' ? preferredDate : undefined,
            duration: carType === 'rent' ? duration : undefined,
            phoneNumber,
            message: message || ''
        });

        await enquiry.save();

        res.status(201).json({
            success: true,
            message: 'Enquiry submitted successfully',
            enquiry
        });

    } catch (error) {
        console.error('Create enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting enquiry. Please try again.',
            error: error.message
        });
    }
});

// ==================== GET USER'S ENQUIRIES ====================
router.get('/my-bookings', verifyToken, async (req, res) => {
    try {
        const enquiries = await Enquiry.find({ user: req.userId })
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            enquiries
        });

    } catch (error) {
        console.error('Get enquiries error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching bookings',
            error: error.message
        });
    }
});

// ==================== GET SINGLE ENQUIRY ====================
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const enquiry = await Enquiry.findOne({
            _id: req.params.id,
            user: req.userId
        });

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }

        res.json({
            success: true,
            enquiry
        });

    } catch (error) {
        console.error('Get enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching enquiry',
            error: error.message
        });
    }
});

// ==================== CANCEL ENQUIRY ====================
router.put('/:id/cancel', verifyToken, async (req, res) => {
    try {
        const enquiry = await Enquiry.findOne({
            _id: req.params.id,
            user: req.userId
        });

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }

        if (enquiry.status === 'cancelled') {
            return res.status(400).json({
                success: false,
                message: 'Enquiry already cancelled'
            });
        }

        enquiry.status = 'cancelled';
        await enquiry.save();

        res.json({
            success: true,
            message: 'Enquiry cancelled successfully',
            enquiry
        });

    } catch (error) {
        console.error('Cancel enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Error cancelling enquiry',
            error: error.message
        });
    }
});

module.exports = router;