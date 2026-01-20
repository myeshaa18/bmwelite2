// server/models/Contact.js - Contact Schema for MongoDB

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    // User information
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },

    // Contact details
    reason: {
        type: String,
        required: true,
        enum: [
            'car-enquiry',
            'rental-enquiry',
            'purchase-enquiry',
            'job-enquiry',
            'complaint',
            'feedback',
            'general-inquiry',
            'other'
        ]
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },

    // Status tracking
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'resolved', 'closed'],
        default: 'pending'
    },

    // Admin notes (optional)
    adminNotes: {
        type: String,
        default: ''
    },

    // Response tracking
    respondedAt: {
        type: Date
    },
    respondedBy: {
        type: String
    },

    // Timestamps
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index for faster queries
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ reason: 1, createdAt: -1 });

// Virtual for checking if contact is new (less than 24 hours old)
contactSchema.virtual('isNew').get(function () {
    const dayInMs = 24 * 60 * 60 * 1000;
    return (Date.now() - this.createdAt) < dayInMs;
});

// Method to update status
contactSchema.methods.updateStatus = function (newStatus, adminName = null) {
    this.status = newStatus;
    if (newStatus === 'resolved' || newStatus === 'closed') {
        this.respondedAt = new Date();
        this.respondedBy = adminName;
    }
    return this.save();
};

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;