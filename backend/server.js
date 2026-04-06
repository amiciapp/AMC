require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

// Import MongoDB Models
const Booking = require('./models/Booking');

const app = express();
app.use(cors());
app.use(express.json());

// 1. DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/amcdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected to AMC Database'))
  .catch(err => console.error(err));

// 2. WHATSAPP CLOUD API CONFIGURATION
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN || 'YOUR_META_API_TOKEN';
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID || 'YOUR_PHONE_ID';

// 3. BOOKING ENDPOINT FROM FRONTEND
app.post('/api/bookings', async (req, res) => {
    try {
        const { name, phone, dept, doctor, date, time } = req.body;
        
        // Save to Database
        const newBooking = new Booking({
            patientName: name,
            phone: phone,
            department: dept,
            doctor: doctor,
            bookingDate: date,
            bookingTime: time,
            status: 'Pending'
        });
        await newBooking.save();

        // Trigger WhatsApp Auto-Message to Patient
        await sendWhatsAppMessage(phone, `Dear ${name}, your booking request for ${dept} with ${doctor} on ${date} has been received. Our concierge will confirm the time shortly. Welcome to AMC Hospital.`);

        // Trigger WhatsApp Admin Alert
        await sendWhatsAppMessage(process.env.ADMIN_PHONE_NUMBER, `🚨 *NEW BOOKING* 🚨\nName: ${name}\nPhone: ${phone}\nDept: ${dept}\nDoctor: ${doctor}\nDate: ${date}`);

        res.status(201).json({ success: true, message: "Booking recorded and WhatsApp sent.", booking: newBooking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
});

// 4. WHATSAPP WEBHOOK ROUTE (Receiving messages from users)
app.post('/webhook', (req, res) => {
    const body = req.body;
    if (body.object) {
        if (body.entry && body.entry[0].changes && body.entry[0].changes[0].value.messages && body.entry[0].changes[0].value.messages[0]) {
            const phoneNumber = body.entry[0].changes[0].value.contacts[0].wa_id;
            const message = body.entry[0].changes[0].value.messages[0].text.body;
            
            console.log(`Received message from ${phoneNumber}: ${message}`);
            // Here you can pipe this message to the AI Agent logic (Gemini)
            // and auto-reply!
            
            res.sendStatus(200);
        } else {
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(404);
    }
});

// Helper Function: Send WhatsApp API Message
async function sendWhatsAppMessage(toPhone, textBody) {
    if(!process.env.WHATSAPP_TOKEN) return console.log("Missing WA Auth. Simulated Send:", textBody);
    
    try {
        await axios.post(`https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`, {
            messaging_product: "whatsapp",
            to: toPhone,
            type: "text",
            text: { body: textBody }
        }, {
            headers: { 'Authorization': `Bearer ${WHATSAPP_TOKEN}` }
        });
    } catch (err) {
        console.error("WhatsApp API Error", err.response?.data || err);
    }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 AMC Backend Server running on port ${PORT}`);
});
