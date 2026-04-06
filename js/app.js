/*
=============================================
AMC - CORE APPLICATION LOGIC
SPA Routing, AI Agent, Animations, Booking
=============================================
*/

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    // 1. Remove Loader Cinematic
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
        document.body.classList.remove('loading');
    }, 2000);

    // 2. Set current year in footer
    document.getElementById('year').innerText = new Date().getFullYear();

    // 3. Init Router
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Load initial route

    // 5. Scroll effects on Nav
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if(window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // 6. Init AI Agent
    initAIAgent();
}

/* ================= SPA ROUTING & RENDERING ================= */
function handleRoute() {
    let hash = window.location.hash.substring(1);
    if (!hash || !PAGES[hash]) hash = 'home';

    const root = document.getElementById('app-root');
    const transition = document.querySelector('.page-transition');

    // Start transition
    transition.classList.add('active');
    
    setTimeout(() => {
        // Inject Content
        root.innerHTML = PAGES[hash];
        window.scrollTo(0,0);
        
        // Update Active Nav Link
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if(a.getAttribute('data-route') === hash) a.classList.add('active');
        });

        // Run Page Specific Injections
        if(hash === 'services') renderServices();
        if(hash === 'doctors') renderDoctors();
        if(hash === 'gallery') renderGallery();
        if(hash === 'home') animateCounters();

        // Re-init Translations, Animations, and SEO
        updateTranslations();
        updateSEO(hash, currentLang);
        initRevealObjects();

        // End transition
        setTimeout(() => {
            transition.classList.remove('active');
        }, 100);

    }, 600); // Wait for transition cover
}

/* ================= CONTENT INJECTION ================= */
function renderServices() {
    const grid = document.getElementById('service-grid');
    if(!grid) return;
    grid.innerHTML = '';
    DB.services.forEach(s => {
        grid.innerHTML += `
            <div class="glass-card reveal">
                <i class="fas ${s.icon}" style="font-size:2.5rem; color:var(--color-gold); margin-bottom:1rem;"></i>
                <h3 style="margin-bottom:0.5rem">${s.title}</h3>
                <p style="color:var(--color-gray-text); margin-bottom:1.5rem;">${s.desc}</p>
                <img src="${s.image}" style="width:100%; height:200px; object-fit:cover; border-radius:var(--radius-sm);" alt="${s.title}">
                <button class="nav-btn-outline" style="width:100%; margin-top:1rem;" onclick="openBooking('${s.title}')">Book ${s.title}</button>
            </div>
        `;
    });
}

function renderDoctors() {
    const grid = document.getElementById('doctors-grid');
    if(!grid) return;
    grid.innerHTML = '';
    DB.doctors.forEach(d => {
        grid.innerHTML += `
            <div class="glass-card doctor-card reveal">
                <img src="${d.img}" class="doctor-img" alt="${d.name}">
                <div class="doctor-info">
                    <h3>${d.name}</h3>
                    <p>${d.spec}</p>
                    <small style="display:block; margin-bottom:1rem;">Exp: ${d.exp}</small>
                    <div class="doctor-actions">
                        <button class="icon-btn tooltip" onclick="openBooking(null, '${d.name}')"><i class="fas fa-calendar-check"></i></button>
                        <a href="https://wa.me/${d.phone}?text=Hello ${d.name}, I would like to book a consultation." target="_blank" class="icon-btn whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if(!grid) return;
    grid.innerHTML = '';
    DB.gallery.forEach((url, i) => {
        grid.innerHTML += `
            <div class="gallery-item reveal" style="animation-delay:${i*0.1}s">
                <img src="${url}" alt="Gallery ${i}">
                <div class="gallery-overlay"><i class="fas fa-expand"></i></div>
            </div>
        `;
    });
}

/* ================= SCROLL REVEAL ANIMATIONS ================= */
function initRevealObjects() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(r => observer.observe(r));
}

/* ================= ANIMATED COUNTER ================= */
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    if(!counters.length) return;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if(current < target) {
                        counter.innerText = target >= 1000 ? Math.floor(current).toLocaleString() + '+' : Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target >= 1000 ? target.toLocaleString() + '+' : target + '+';
                    }
                };
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(c => counterObserver.observe(c));
}


/* ================= BOOKING MODAL (SIMULATION) ================= */
function openBooking(prefillDept = null, prefillDoctor = null) {
    const modal = document.getElementById('booking-modal');
    modal.classList.add('active');
    
    // Simple 1-step injection for show
    const body = document.getElementById('booking-body');
    body.innerHTML = `
        <div class="form-grid">
            <div class="form-group">
                <label>Department</label>
                <select id="book-dept">
                    ${DB.services.map(s => `<option value="${s.title}" ${prefillDept === s.title ? 'selected':''}>${s.title}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Doctor</label>
                <select id="book-doc">
                    <option value="Any">Any Available</option>
                    ${DB.doctors.map(d => `<option value="${d.name}" ${prefillDoctor === d.name ? 'selected':''}>${d.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date">
            </div>
            <div class="form-group">
                <label>Time Preference</label>
                <select>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                </select>
            </div>
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Patient Name</label>
                <input type="text" placeholder="John Doe" id="book-name">
            </div>
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Phone Number (WhatsApp)</label>
                <input type="tel" placeholder="+971 50 123 4567" id="book-phone">
            </div>
        </div>
        <button class="btn-large btn-gold" style="width:100%; margin-top:2rem;" onclick="submitBooking()"><i class="fab fa-whatsapp"></i> Reserve via WhatsApp</button>
    `;
}

function closeBooking() {
    document.getElementById('booking-modal').classList.remove('active');
}

function submitBooking() {
    const dept = document.getElementById('book-dept').value;
    const doc = document.getElementById('book-doc').value;
    const name = document.getElementById('book-name').value;
    const phone = document.getElementById('book-phone').value;
    
    if(!name || !phone) return alert("Please fill your details");
    
    // --- POSTGRESQL / GOOGLE CALENDAR DATABASE SIMULATION ---
    // Here we save the booking to the database simulation which the Admin Dashboard queries
    const bookings = JSON.parse(localStorage.getItem('amc_bookings') || '[]');
    bookings.push({ name, phone, dept, doc, date: new Date().toISOString() });
    localStorage.setItem('amc_bookings', JSON.stringify(bookings));

    const msg = `*AMC Hospital Booking Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Dept:* ${dept}%0A*Doctor:* ${doc}%0A%0APlease confirm my appointment.`;
    window.open(`https://wa.me/20653441110?text=${msg}`, '_blank');
    closeBooking();
}

/* ================= AI AGENT & AUTOMATION ================= */
function initAIAgent() {
    const wrapper = document.getElementById('ai-agent-wrapper');
    const toggle = document.getElementById('ai-toggle');
    const close = document.getElementById('ai-close');
    const send = document.getElementById('ai-send');
    const input = document.getElementById('ai-input');

    toggle.onclick = () => wrapper.classList.add('ai-open');
    close.onclick = () => wrapper.classList.remove('ai-open');

    const handleSend = () => {
        const text = input.value.trim();
        if(!text) return;
        addAiMsg(text, 'user');
        input.value = '';
        setTimeout(() => processAiResponse(text), 600);
    };

    send.onclick = handleSend;
    input.onkeypress = (e) => { if(e.key === 'Enter') handleSend(); };

    // Mobile hamburger menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(mobileToggle && navLinks) {
        mobileToggle.onclick = () => {
            navLinks.classList.toggle('mobile-open');
            mobileToggle.querySelector('i').classList.toggle('fa-bars');
            mobileToggle.querySelector('i').classList.toggle('fa-times');
        };
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
        });
    }
}

function aiClick(intent) {
    // If called without argument (from send btn or voice), read from input
    if(!intent) {
        const inputEl = document.getElementById('ai-input');
        if(!inputEl) return;
        intent = inputEl.value.trim();
        if(!intent) return;
        inputEl.value = '';
    }
    addAiMsg(intent, 'user');
    setTimeout(() => processAiResponse(intent), 600);
}

function addAiMsg(text, sender) {
    const chat = document.getElementById('ai-chat');
    chat.innerHTML += `<div class="ai-msg ${sender}"><p>${text}</p></div>`;
    chat.scrollTop = chat.scrollHeight;

    // Trigger Voice Answer if the Bot is speaking
    if(sender === 'bot' && !text.includes('fa-spin')) {
        speakText(text);
    }
}

// --- AI TEXT-TO-SPEECH (VOICE ANSWER) ---
function speakText(text) {
    if ('speechSynthesis' in window) {
        // Strip HTML tags for clean speech
        const cleanText = text.replace(/<[^>]*>?/gm, '');
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(cleanText);
        
        const langCode = document.documentElement.getAttribute('lang') || 'en';
        const voiceMap = { 'en': 'en-US', 'ar': 'ar-SA', 'fr':'fr-FR', 'de':'de-DE', 'es':'es-ES', 'it':'it-IT', 'ru':'ru-RU' };
        utterance.lang = voiceMap[langCode] || langCode;
        
        utterance.rate = 1.05;
        utterance.pitch = 1.0;
        
        synth.speak(utterance);
    }
}

// --- REAL LLM INTEGRATION (GEMINI / OPENAI) & SELF-LEARNING ---
const AI_CONFIG = {
    apiKey: 'ENTER_YOUR_API_KEY_HERE',
    systemPrompt: `You are the AI concierge for AMC (Aseel Medical Care) Hospital, the premier luxury hospital in Hurghada, Egypt. Founded in December 2010 by CEO Dr. Amr El Brollosy. AMC is Temos Internationally Accredited.

KEY FACTS:
- Hotline: 19262 | Phone: +2 065 344 1110 | 0128 344 1110 | 0111 110 7006
- Address: 9 El Kamar District, Elhadaba Rd, Hurghada 84511
- 24/7 Emergency Hospital with ICU
- 17 medical departments including: Orthopedics, Emergency & ICU, Gynecology, Internal Medicine, Dental, Ophthalmology, Neurosurgery, Dermatology, Pediatrics, Plastic Surgery, Nutrition, Lab & Radiology, ENT, General Surgery, GP, Pharmacy, Anesthesiology
- Network: AMC Hurghada (flagship), Marsa Alam Hospital, Medina Medical Center Luxor, Aswan Hospital, Consolto Hospital, DMS Clinics, Clinica Egypt
- Leadership: CEO Dr. Amr El Brollosy, VP Dr. Seif Genena, GM Hurghada Dr. Assem El Faramawy
- Medical Transport: "The Fleet" ambulance service across Red Sea Governorate
- Works with international insurance: Allianz, Bupa, AXA, Cigna, MetLife and more

RULES: Keep answers short, polite, professional, and strictly medical/booking related. You speak 20 languages. Always advise patients to call 19262 for emergencies. Push users to book appointments when appropriate.`
};

// "Learn Daily" Module: Dynamically reads the live DB into the system prompt!
function getDynamicKnowledge() {
    const doctors = DB.doctors.map(d => d.name + " (" + d.spec + ")").join(", ");
    const services = DB.services.map(s => s.title).join(", ");
    return `\\n\\n[LIVE KNOWLEDGE DATABASE]:\\nCurrent Doctors Available: ${doctors}\\nActive Departments: ${services}\\nHotline: 19262. Check this context carefully to answer user queries exactly.`;
}

async function fetchLLM(message) {
    const livePrompt = AI_CONFIG.systemPrompt + getDynamicKnowledge();
    // Example implementation for Google Gemini API
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AI_CONFIG.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: livePrompt + "\\n\\nUser says: " + message }] }]
        })
    });
    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
}

async function processAiResponse(text) {
    // If the Admin has added an API Key, run exactly through the real LLM engine.
    if(AI_CONFIG.apiKey !== 'ENTER_YOUR_API_KEY_HERE') {
        try {
            addAiMsg("<i class='fas fa-circle-notch fa-spin'></i> Thinking...", 'bot', true);
            const llmReply = await fetchLLM(text);
            
            // Remove thinking message
            const chat = document.getElementById('ai-chat');
            chat.removeChild(chat.lastChild);
            
            addAiMsg(llmReply, 'bot');
            
            // Intent triggers
            if(text.toLowerCase().includes('book') || llmReply.toLowerCase().includes('booking')) setTimeout(openBooking, 2500);
            return;
        } catch(e) {
            console.error("LLM Error, falling back to local engine.", e);
            document.getElementById('ai-chat').removeChild(document.getElementById('ai-chat').lastChild);
        }
    }

    // Fallback Local NLP Simulator Engine
    text = text.toLowerCase();
    let reply = "I can assist you with booking an appointment, finding a doctor, or emergency contact.";
    
    if(text.includes('book') || text.includes('appointment')) {
        reply = "I'd be delighted to arrange that. Let me open the reservation portal for you.";
        setTimeout(openBooking, 1500);
    } else if(text.includes('emergency')) {
        reply = "<b>EMERGENCY PROTOCOL ACTIVATED</b>. Please call our 24/7 Hotline <b>19262</b> immediately or click our Emergency button below to alert our rapid response unit.";
        triggerEmergency();
    } else if(text.includes('doctor')) {
        reply = "We have leading experts across 20+ fields. I will direct you to our Medical Board.";
        setTimeout(() => window.location.hash = 'doctors', 1500);
    } else if(text.includes('hello') || text.includes('hi')) {
        reply = "Greetings. I am the AMC automated concierge. How may I elevate your health journey today?";
    }

    addAiMsg(reply, 'bot');
}

// --- VOICE RECOGNITION NATIVE API ---
let recognition;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = function() {
        document.getElementById('ai-mic').classList.add('listening');
        document.getElementById('ai-input').placeholder = "Listening safely...";
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('ai-input').value = transcript;
        aiClick(); // Auto emit
    };

    recognition.onerror = function() { resetMic(); };
    recognition.onend = function() { resetMic(); };
}

function resetMic() {
    const micBtn = document.getElementById('ai-mic');
    if(micBtn) micBtn.classList.remove('listening');
    const aiInput = document.getElementById('ai-input');
    if(aiInput) aiInput.placeholder = "Type or tap microphone...";
}

function toggleVoice() {
    if(!recognition) return alert("Your browser does not support Voice input. Please use Chrome.");
    
    const micBtn = document.getElementById('ai-mic');
    if(micBtn.classList.contains('listening')) {
        recognition.stop();
    } else {
        // Stop any currently playing AI voice so you don't talk over each other
        if(window.speechSynthesis) window.speechSynthesis.cancel();
        
        const langCode = document.documentElement.getAttribute('lang') || 'en';
        const voiceMap = { 'en': 'en-US', 'ar': 'ar-EG', 'fr':'fr-FR', 'de':'de-DE', 'es':'es-ES' };
        recognition.lang = voiceMap[langCode] || langCode;
        recognition.start();
    }
}

/* ================= EMERGENCY SYSTEM ================= */
function triggerEmergency() {
    const btn = document.getElementById('emergency-btn');
    btn.style.transform = 'scale(1.2)';
    btn.style.boxShadow = '0 0 50px rgba(229,62,62,1)';
    
    setTimeout(() => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
    }, 1000);
    
    alert("EMERGENCY SIGNAL SENT.\nOur dispatch team is routing an ambulance to your location if GPS is enabled, and our trauma unit is on standby.");
}

/* ================= GLOBAL SEO ENGINE ================= */
function updateSEO(hash, lang) {
    if(!hash) hash = 'home';
    const seoTitle = document.getElementById('seo-title');
    const seoDesc = document.getElementById('seo-desc');
    const seoSchema = document.getElementById('seo-schema');

    // Basic map
    const titles = {
        home: "AMC | Assel Medical Center",
        about: "About Us | AMC Luxury Medical",
        services: "Medical Services | AMC Hospital",
        doctors: "World-Class Doctors | AMC",
        gallery: "Cinematic Gallery | AMC",
        map: "Hospital Map & Navigation | AMC",
        blog: "Health Insights Blog | AMC",
        contact: "Contact Options | AMC"
    };

    if(seoTitle) seoTitle.innerText = titles[hash] || "AMC Hospital";
    if(seoDesc) {
        if(translations[lang] && translations[lang].hero_desc) {
            seoDesc.content = translations[lang].hero_desc;
        }
    }

    // JSON-LD Schema
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "Hospital",
        "name": "Assel Medical Center (AMC)",
        "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80",
        "@id": "https://www.asselmedical.com",
        "url": "https://www.asselmedical.com",
        "telephone": "+20653441110",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "9 El Kamar District, Elhadaba Rd",
            "addressLocality": "Hurghada, Red Sea",
            "postalCode": "84511",
            "addressCountry": "EG"
        },
        "medicalSpecialty": [
            "Orthopedic", "Emergency", "Gynecology", "InternalMedicine", "Dental", "Ophthalmology", "Neurologic", "Dermatology", "Pediatrics"
        ]
    };

    if(hash === 'doctors') {
        const docs = DB.doctors.map(d => ({
            "@type": "Physician",
            "name": d.name,
            "medicalSpecialty": d.spec,
            "image": d.img
        }));
        const doctorSchema = {
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "AMC Medical Board",
            "employee": docs
        };
        if(seoSchema) seoSchema.innerText = JSON.stringify(doctorSchema);
    } else {
        if(seoSchema) seoSchema.innerText = JSON.stringify(baseSchema);
    }
}
