// server/routes/contact.js - Contact Routes

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// ==================== SUBMIT CONTACT FORM ====================
router.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, reason, subject, message } = req.body;

        // Validation
        if (!name || !email || !phone || !reason || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Phone validation (basic)
        if (phone.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid phone number'
            });
        }

        // Validate reason
        const validReasons = [
            'car-enquiry',
            'rental-enquiry',
            'purchase-enquiry',
            'job-enquiry',
            'complaint',
            'feedback',
            'general-inquiry',
            'other'
        ];

        if (!validReasons.includes(reason)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid contact reason'
            });
        }

        // Create contact submission
        const contact = new Contact({
            name,
            email,
            phone,
            reason,
            subject,
            message,
            status: 'pending'
        });

        await contact.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            contact: {
                id: contact._id,
                name: contact.name,
                email: contact.email,
                reason: contact.reason,
                subject: contact.subject,
                status: contact.status,
                createdAt: contact.createdAt
            }
        });

        // Optional: Send email notification to admin (implement later)
        // sendAdminNotification(contact);

    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting contact form. Please try again.',
            error: error.message
        });
    }
});

// ==================== GET ALL CONTACTS (ADMIN) ====================
router.get('/all', async (req, res) => {
    try {
        const { status, reason, page = 1, limit = 20 } = req.query;

        // Build query
        const query = {};
        if (status) query.status = status;
        if (reason) query.reason = reason;

        // Pagination
        const skip = (page - 1) * limit;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip);

        const total = await Contact.countDocuments(query);

        res.json({
            success: true,
            contacts,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts',
            error: error.message
        });
    }
});

// ==================== GET SINGLE CONTACT ====================
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            contact
        });

    } catch (error) {
        console.error('Get contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contact',
            error: error.message
        });
    }
});

// ==================== UPDATE CONTACT STATUS (ADMIN) ====================
router.put('/:id/status', async (req, res) => {
    try {
        const { status, adminNotes, adminName } = req.body;

        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        // Validate status
        const validStatuses = ['pending', 'in-progress', 'resolved', 'closed'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status'
            });
        }

        // Update status
        contact.status = status;

        if (adminNotes) {
            contact.adminNotes = adminNotes;
        }

        if (status === 'resolved' || status === 'closed') {
            contact.respondedAt = new Date();
            contact.respondedBy = adminName || 'Admin';
        }

        await contact.save();

        res.json({
            success: true,
            message: 'Contact status updated successfully',
            contact
        });

    } catch (error) {
        console.error('Update contact status error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating contact status',
            error: error.message
        });
    }
});

// ==================== DELETE CONTACT (ADMIN) ====================
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            message: 'Contact deleted successfully'
        });

    } catch (error) {
        console.error('Delete contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting contact',
            error: error.message
        });
    }
});

// ==================== GET CONTACT STATISTICS (ADMIN) ====================
router.get('/stats/summary', async (req, res) => {
    try {
        const total = await Contact.countDocuments();
        const pending = await Contact.countDocuments({ status: 'pending' });
        const inProgress = await Contact.countDocuments({ status: 'in-progress' });
        const resolved = await Contact.countDocuments({ status: 'resolved' });
        const closed = await Contact.countDocuments({ status: 'closed' });

        // Count by reason
        const reasonStats = await Contact.aggregate([
            {
                $group: {
                    _id: '$reason',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Recent contacts (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentCount = await Contact.countDocuments({
            createdAt: { $gte: sevenDaysAgo }
        });

        res.json({
            success: true,
            stats: {
                total,
                byStatus: {
                    pending,
                    inProgress,
                    resolved,
                    closed
                },
                byReason: reasonStats,
                recentCount
            }
        });

    } catch (error) {
        console.error('Get contact stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contact statistics',
            error: error.message
        });
    }
});

module.exports = router;