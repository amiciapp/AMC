const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    doctor: { type: String, required: true },
    bookingDate: { type: String },
    bookingTime: { type: String },
    status: { 
        type: String, 
        enum: ['Pending', 'Confirmed', 'Cancelled'], 
        default: 'Pending' 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
