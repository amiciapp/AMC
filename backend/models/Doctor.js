const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: String },
    phone: { type: String },
    imgUrl: { type: String, default: 'https://images.unsplash.com/photo-1594824432258-fe2e22c0daec?auto=format&fit=crop&w=400&q=80' },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
