// server/models/Enquiry.js - Enquiry Schema for MongoDB

const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    carId: {
        type: Number,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    carType: {
        type: String,
        enum: ['rent', 'buy'],
        required: true
    },
    carPrice: {
        type: String,
        required: true
    },
    // Enquiry details
    preferredDate: {
        type: Date,
        required: function() {
            return this.carType === 'rent';
        }
    },
    duration: {
        type: Number, // in days
        required: function() {
            return this.carType === 'rent';
        }
    },
    phoneNumber: {
        type: String,
        required: true
    },
    message: {
        type: String,
        default: ''
    },
    // Status tracking
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index for faster queries
enquirySchema.index({ user: 1, createdAt: -1 });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;