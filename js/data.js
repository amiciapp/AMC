// AMC Real Database — v3.0 (All Real Data from amc-redsea.com)
const DB_VERSION = 3;
const DB = {
    services: [
        { id: "s1", icon: "fa-bone", title: "Orthopedics & Spine", desc: "First specialized orthopedic surgery center in the Red Sea since 2010.", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=800&q=80" },
        { id: "s2", icon: "fa-ambulance", title: "Emergency & ICU", desc: "24/7 Casualty department with fully equipped ICU and rapid discharge protocols.", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" },
        { id: "s3", icon: "fa-baby", title: "Gynecology & Obstetrics", desc: "Specialised care for all women-related health concerns with compassionate experts.", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80" },
        { id: "s4", icon: "fa-stethoscope", title: "Internal Medicine", desc: "Highest medical services using the most recent and accurate procedures.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
        { id: "s5", icon: "fa-tooth", title: "Dental Clinic", desc: "Professional diagnoses & treatment of oral diseases by qualified dentists.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
        { id: "s6", icon: "fa-eye", title: "Ophthalmology", desc: "Examination & consultation of eyeball & its orbit by certified ophthalmologists.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
        { id: "s7", icon: "fa-brain", title: "Neurosurgery", desc: "Specialized in spinal disorders, degenerative disease and tumors.", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80" },
        { id: "s8", icon: "fa-user-nurse", title: "Dermatology", desc: "Taking care of your skin, hair & nails with modern techniques.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80" },
        { id: "s9", icon: "fa-child", title: "Pediatrics", desc: "Comprehensive care for your child's health from newborn to adolescence.", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80" },
        { id: "s10", icon: "fa-diagnoses", title: "Plastic Surgery", desc: "We offer the best care and natural-looking results by skilled surgeons.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { id: "s11", icon: "fa-apple-alt", title: "Nutrition", desc: "Personalized dietary and wellness planning by certified nutritionists.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba82a16?auto=format&fit=crop&w=800&q=80" },
        { id: "s12", icon: "fa-flask", title: "Laboratory & Radiology", desc: "Same-day diagnostics: X-Ray, Ultrasound, Echo Doppler, Duplex & Cardiac Catheter Lab.", image: "https://images.unsplash.com/photo-1530497610245-94d3ec5bcea8?auto=format&fit=crop&w=800&q=80" },
        { id: "s13", icon: "fa-head-side-mask", title: "ENT (Ear, Nose & Throat)", desc: "Specialized diagnosis and treatment of ear, nose and throat conditions.", image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80" },
        { id: "s14", icon: "fa-briefcase-medical", title: "General Surgery", desc: "Expert general surgeons performing minor to major surgical procedures.", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80" },
        { id: "s15", icon: "fa-user-md", title: "General Practitioner (GP)", desc: "First point of medical contact for diagnosis, referral and ongoing care.", image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80" },
        { id: "s16", icon: "fa-prescription-bottle-alt", title: "Pharmacy", desc: "Full-service 24/7 pharmacy stocked with the latest medications.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80" },
        { id: "s17", icon: "fa-lungs", title: "Anesthesiology", desc: "Board-certified anesthesiologists ensuring patient comfort during all procedures.", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" }
    ],

    doctors: [
        { id: "d1", name: "Dr. Amr El Brollosy", spec: "CEO of AMC Group", exp: "Founder & Chief Executive", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80", phone: "+20653441110" },
        { id: "d2", name: "Dr. Seif Genena", spec: "VP of AMC Group", exp: "Vice President", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80", phone: "+20653441110" },
        { id: "d3", name: "Dr. Assem El Faramawy", spec: "GM AMC Hurghada", exp: "General Manager", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80", phone: "+20653441110" },
        { id: "d4", name: "Dr. Ayman Osman", spec: "GM Medina Medical Center Luxor", exp: "General Manager", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80", phone: "+20653441110" },
        { id: "d5", name: "Dr. Amr Hussein", spec: "GM Marsa Alam Hospital", exp: "General Manager", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=500&q=80", phone: "+20653441110" },
        { id: "d6", name: "Eng. Hesham El Brollosy", spec: "GM Consolto Hospital", exp: "General Manager", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80", phone: "+20653441110" },
        { id: "d7", name: "Mr. Moh. Samhout", spec: "CFO AMC Group", exp: "Chief Financial Officer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80", phone: "+20653441110" }
    ],

    gallery: [
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80", // Hospital exterior
        "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?auto=format&fit=crop&w=800&q=80", // Lobby
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", // Surgery
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", // Room
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", // Labs
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"  // Cafe
    ],

    languages: [
        { code: "en", name: "English" }, { code: "ar", name: "العربية", dir: "rtl" },
        { code: "fr", name: "Français" }, { code: "de", name: "Deutsch" },
        { code: "es", name: "Español" }, { code: "it", name: "Italiano" },
        { code: "ru", name: "Русский" }, { code: "zh", name: "中文" },
        { code: "ja", name: "日本語" }, { code: "ko", name: "한국어" },
        { code: "tr", name: "Türkçe" }, { code: "pt", name: "Português" },
        { code: "nl", name: "Nederlands" }, { code: "hi", name: "हिन्दी" },
        { code: "ur", name: "اردو", dir: "rtl" },
        { code: "sv", name: "Svenska" }, { code: "el", name: "Ελληνικά" },
        { code: "pl", name: "Polski" }, { code: "th", name: "ภาษาไทย" },
        { code: "id", name: "Bahasa Indonesia" }
    ]
};

// Page Definitions for SPA Routing
const PAGES = {
    home: `
        <section class="hero-section">
            <video class="hero-video" autoplay loop muted playsinline>
                <source src="https://cdn.pixabay.com/video/2019/02/26/21639-319528771_large.mp4" type="video/mp4">
            </video>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 data-i18n="hero_title">Pioneering Luxury Healthcare</h1>
                <p data-i18n="hero_desc">Experience world-class medical excellence delivered in a 5-star hotel environment. Your health is our masterpiece.</p>
                <div class="hero-btn-group">
                    <button class="btn-large btn-gold" onclick="openBooking()" data-i18n="btn_book">Book Appointment</button>
                    <a href="#services" class="btn-large btn-glass" data-route="services" data-i18n="btn_services">Our Services</a>
                </div>
            </div>
        </section>

        <section class="section-padding" style="background: var(--color-bg)">
            <div class="section-header reveal">
                <h2 data-i18n="home_about_title">The AMC Standard</h2>
                <p data-i18n="home_about_desc">Where cutting-edge technology meets unparalleled hospitality. Every detail is designed for your vital recovery.</p>
            </div>
            <div class="grid-3 reveal">
                <div class="glass-card text-center">
                    <i class="fas fa-robot" style="font-size:3rem;color:var(--color-gold);margin-bottom:1rem;"></i>
                    <h3>AI-Powered Care</h3>
                    <p>Smart diagnostics and automated patient flows for zero waiting times.</p>
                </div>
                <div class="glass-card text-center">
                    <i class="fas fa-gem" style="font-size:3rem;color:var(--color-gold);margin-bottom:1rem;"></i>
                    <h3>Luxury Suites</h3>
                    <p>Recover in opulent suites matching global 5-star hospitality standards.</p>
                </div>
                <div class="glass-card text-center">
                    <i class="fas fa-globe" style="font-size:3rem;color:var(--color-gold);margin-bottom:1rem;"></i>
                    <h3>Global Experts</h3>
                    <p>A curated board of internationally acclaimed medical professionals.</p>
                </div>
            </div>
        </section>

        <!-- Animated Statistics Counter -->
        <section class="section-padding" style="background: linear-gradient(135deg, var(--color-blue-deep) 0%, #183669 100%); color: var(--color-white); text-align: center;">
            <div class="reveal">
                <h3 style="font-size: 2.2rem; margin-bottom: 3rem; color: var(--color-gold); font-family: var(--font-heading);">AMC in Numbers</h3>
                <div style="display: flex; justify-content: center; gap: 4rem; flex-wrap: wrap;">
                    <div style="min-width:150px;"><div class="counter" data-target="15" style="font-size:3.5rem; font-weight:700; color:var(--color-gold);">0</div><p style="opacity:0.8; margin-top:0.5rem;">Years of Excellence</p></div>
                    <div style="min-width:150px;"><div class="counter" data-target="7" style="font-size:3.5rem; font-weight:700; color:var(--color-gold);">0</div><p style="opacity:0.8; margin-top:0.5rem;">Hospitals & Clinics</p></div>
                    <div style="min-width:150px;"><div class="counter" data-target="17" style="font-size:3.5rem; font-weight:700; color:var(--color-gold);">0</div><p style="opacity:0.8; margin-top:0.5rem;">Medical Departments</p></div>
                    <div style="min-width:150px;"><div class="counter" data-target="50000" style="font-size:3.5rem; font-weight:700; color:var(--color-gold);">0</div><p style="opacity:0.8; margin-top:0.5rem;">Patients Served</p></div>
                </div>
            </div>
        </section>

        <!-- Insurance Partners -->
        <section class="section-padding" style="background: var(--color-bg); text-align: center;">
            <div class="reveal">
                <h3 style="font-size: 2.2rem; margin-bottom: 1rem; color: var(--color-gold); font-family: var(--font-heading);">Trusted by Global Networks</h3>
                <p style="opacity: 0.9; max-width: 600px; margin: 0 auto 3rem;">As a Temos Accredited hospital, AMC works seamlessly with major international insurance networks to ensure our foreign and local patients receive effortless, zero-friction medical care.</p>
                <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; font-size: 1.8rem; font-weight: 700; opacity: 0.7; letter-spacing: 2px;">
                    <span>ALLIANZ</span>
                    <span>BUPA</span>
                    <span>AXA</span>
                    <span>CIGNA</span>
                    <span>METLIFE</span>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="section-padding">
            <div class="section-header reveal">
                <h2 data-i18n="home_reviews_title">Patient Testimonials</h2>
                <p>Don't just take our word for it. Hear directly from our global patients.</p>
            </div>
            <div class="grid-3 reveal">
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"I stayed at AMC hospital for an operation of collarbone and three days of treatment. The operation was fast and very professional. All of the staff at AMC is very very friendly and caring and I received a lot of love and true sympathy."</p>
                    <h4 style="color:var(--color-blue-deep);">— Ben Stefanowitscwitsch</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"I couldn't be more grateful to the staff here. I was in hospital for 4 days after getting an extremely severe case of tonsillitis on holiday. The staff, facilities and quality of care was absolutely wonderful."</p>
                    <h4 style="color:var(--color-blue-deep);">— Tom Hayden</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"This hospital is definitely very clean and well looked after. Staff are extremely caring and efficient. Doctors showed great professionalism by providing us copies of hospital paperwork showing them checking vitals every hour."</p>
                    <h4 style="color:var(--color-blue-deep);">— Suzie Sawicka</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"I had a heart attack while on holiday and all the Doctors and nurses were fantastic."</p>
                    <h4 style="color:var(--color-blue-deep);">— Dave</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"Sending my best wishes from the UK to all the staff who helped me after I broke my ankle. I appreciate all the care I received from you all."</p>
                    <h4 style="color:var(--color-blue-deep);">— Debra</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"I didn't know that we have such a wonderful hospital in Hurghada, thank you for help and efficiency!!!"</p>
                    <h4 style="color:var(--color-blue-deep);">— Amira</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"Doctors and all the staff are friendly, helpful and very competent. I can recommend this hospital from my own experience."</p>
                    <h4 style="color:var(--color-blue-deep);">— Hans</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"Excellent hospital with very good doctors, lovely nurses and insurance team. Highly recommended!!!"</p>
                    <h4 style="color:var(--color-blue-deep);">— An</h4>
                </div>
                <div class="glass-card">
                    <div style="display:flex; color:#FFD700; margin-bottom:1rem; font-size:1.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-style:italic; margin-bottom:1.5rem; opacity:0.8;">"Trustable and fully professional team."</p>
                    <h4 style="color:var(--color-blue-deep);">— Mohamed</h4>
                </div>
            </div>
        </section>
    `,
    services: `
        <section class="hero-section" style="height: 60vh;">
            <video class="hero-video" autoplay loop muted playsinline>
                <source src="https://cdn.pixabay.com/video/2021/08/11/84687-587834575_tiny.mp4" type="video/mp4"> <!-- Tech Video -->
            </video>
            <div class="hero-overlay"></div>
            <div class="hero-content text-center" style="margin:0 auto;text-align:center;">
                <h1 data-i18n="nav_services">Our Services</h1>
            </div>
        </section>
        <section class="section-padding">
            <div class="grid-3" id="service-grid">
                <!-- Injected via JS -->
            </div>
        </section>
    `,
    doctors: `
        <section class="hero-section" style="height: 60vh;">
            <img class="hero-video" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1920&q=80" alt="Doctors">
            <div class="hero-overlay"></div>
            <div class="hero-content text-center" style="margin:0 auto;text-align:center;">
                <h1 data-i18n="nav_doctors">Medical Board</h1>
            </div>
        </section>
        <section class="section-padding">
            <div class="grid-4" id="doctors-grid">
                <!-- Injected via JS -->
            </div>
        </section>
    `,
    gallery: `
        <section class="section-padding">
            <div class="section-header">
                <h2>Cinematic Gallery</h2>
                <p>A visual tour of the most luxurious medical facility in Egypt.</p>
            </div>
            <div class="gallery-grid" id="gallery-grid">
                <!-- Injected via JS -->
            </div>
        </section>
    `,
    map: `
        <section class="section-padding">
            <div class="section-header">
                <h2>Interactive Hospital Plan</h2>
                <p>Navigate our exquisite facilities virtually.</p>
            </div>
            <div class="map-container">
                <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1200&q=80" class="map-bg" alt="Map">
                <div class="map-pin" style="top:30%;left:40%;">
                    <div class="map-tooltip">Private Suites<br><small>Level 3</small></div>
                </div>
                <div class="map-pin" style="top:50%;left:20%;">
                    <div class="map-tooltip">Surgical Wing<br><small>Level 2</small></div>
                </div>
                <div class="map-pin" style="top:60%;left:60%;">
                    <div class="map-tooltip">Lobby & Cafe<br><small>Ground Floor</small></div>
                </div>
            </div>
        </section>
    `,
    about: `
        <section class="hero-section" style="height: 60vh;">
            <img class="hero-video" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80" alt="About Us">
            <div class="hero-overlay"></div>
            <div class="hero-content text-center" style="margin:0 auto;text-align:center;">
                <h1 data-i18n="nav_about">About Us</h1>
            </div>
        </section>
        <section class="section-padding" style="max-width:900px; margin:0 auto; text-align:center;">
            <h2 data-i18n="home_about_title" style="margin-bottom:1rem; font-size:2.5rem;">The AMC Standard</h2>
            <p data-i18n="home_about_desc" style="font-size:1.2rem; color:var(--color-gray-text); line-height:1.8;">Where cutting-edge technology meets unparalleled hospitality.</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin:3rem 0; text-align:left;">
                <div class="glass-card">
                    <h3 style="color:var(--color-gold);"><i class="fas fa-eye"></i> Our Vision</h3>
                    <p>To be the premier destination for trauma care, continually setting new standards in healthcare excellence through innovation, research, and collaboration, while striving for a world where trauma-related suffering is minimized and lives are saved.</p>
                </div>
                <div class="glass-card">
                    <h3 style="color:var(--color-gold);"><i class="fas fa-bullseye"></i> Our Mission</h3>
                    <p>To provide compassionate and comprehensive trauma care, utilizing advanced medical technologies and a dedicated team of healthcare professionals, ensuring the highest level of patient-centered services, 24/7.</p>
                </div>
            </div>

            <div class="glass-card" style="text-align:left; margin:3rem 0; border-left:4px solid var(--color-gold);">
                <h3 style="color:var(--color-gold); margin-bottom:1rem;"><i class="fas fa-quote-left"></i> A Message From Our CEO</h3>
                <p style="line-height:1.9; opacity:0.85;">At Aseel Medical Care Group, our journey is fueled by a passion for excellence, innovation, and a steadfast commitment to our mission. I am honored to lead this exceptional team as we continue to reshape the medical service in Egypt to be at an international high standard. Our company was founded on the belief that we could make a difference. We set out to challenge the status quo, and today, we are proud to be a driving force amongst the medical service providers for tourists and locals.</p>
                <p style="margin-top:1rem; font-weight:600; color:var(--color-blue-deep);">— Dr. Amr El Brollosy, CEO of AMC Group</p>
            </div>

            <h3 style="margin-top:3rem; font-size:1.8rem; color:var(--color-gold);">Our History</h3>
            <p style="margin-top:1rem; font-size:1.1rem; color:var(--color-blue-deep); line-height:1.8;">Aseel Medical Care Hospital was established in <strong>December 2010</strong> as the first specialized orthopedic surgery center in the Red Sea. In <strong>2012</strong>, due to fantastic expansion, we began building our new hospital. AMC opened on <strong>19th August 2015</strong> as a full 24/7 emergency hospital, providing a wider range of specialties with the same medical excellence and friendly service.</p>
            <p style="margin-top:1rem; font-size:1.1rem; color:var(--color-blue-deep);">Operating under the prestigious <strong>Temos International Accreditation</strong> for "Quality in Medical Care", we ensure an unyielding commitment to safe, international-standard, patient-centered healthcare.</p>
            
            <h3 style="margin-top:3rem; font-size:1.8rem; color:var(--color-gold);">Our National Healthcare Network</h3>
            <p style="margin-top:1rem; font-size:1.1rem; color:var(--color-blue-deep); line-height:1.8;">We are the flagship facility of a massive healthcare ecosystem spanning Egypt:</p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.5rem; margin:2rem 0; text-align:center;">
                <div class="glass-card"><i class="fas fa-hospital" style="color:var(--color-gold); font-size:2rem; margin-bottom:0.5rem;"></i><h4>AMC Hurghada</h4><small>Flagship Hospital</small></div>
                <div class="glass-card"><i class="fas fa-hospital" style="color:var(--color-gold); font-size:2rem; margin-bottom:0.5rem;"></i><h4>Marsa Alam Hospital</h4><small>Southern Red Sea</small></div>
                <div class="glass-card"><i class="fas fa-hospital" style="color:var(--color-gold); font-size:2rem; margin-bottom:0.5rem;"></i><h4>Medina Medical Center</h4><small>Luxor</small></div>
                <div class="glass-card"><i class="fas fa-hospital" style="color:var(--color-gold); font-size:2rem; margin-bottom:0.5rem;"></i><h4>Aswan Hospital</h4><small>Upper Egypt</small></div>
                <div class="glass-card"><i class="fas fa-hospital" style="color:var(--color-gold); font-size:2rem; margin-bottom:0.5rem;"></i><h4>Consolto Hospital</h4><small>Specialist Centre</small></div>
                <div class="glass-card"><i class="fas fa-clinic-medical" style="color:var(--color-gold); font-size:2rem; margin-bottom:0.5rem;"></i><h4>DMS Clinics</h4><small>Outpatient Network</small></div>
                <div class="glass-card"><i class="fas fa-clinic-medical" style="color:var(--color-gold); font-size:2rem; margin-bottom:0.5rem;"></i><h4>Clinica Egypt</h4><small>National Clinics</small></div>
            </div>
            <p style="margin-top:1rem; font-size:1.1rem; color:var(--color-blue-deep); line-height:1.8;">To support our patients in transit, we manage <strong>The Fleet</strong> — a premium service for specialized medical transportation committed to delivering exceptional reliability, compassion, and efficiency across the Red Sea Governorate.</p>
        </section>
    `,
    blog: `
        <section class="hero-section" style="height: 60vh;">
            <img class="hero-video" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80" alt="Blog">
            <div class="hero-overlay"></div>
            <div class="hero-content text-center" style="margin:0 auto;text-align:center;">
                <h1 data-i18n="nav_blog">Medical Insights & Blog</h1>
            </div>
        </section>
        <section class="section-padding">
            <div class="grid-3">
                <div class="glass-card">
                    <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80" style="width:100%; border-radius:var(--radius-sm); margin-bottom:1rem;" alt="Blog 1">
                    <h3 style="margin-bottom:0.5rem;">The Future of Robotic Surgery</h3>
                    <p style="opacity:0.8; margin-bottom:1rem;">Discover how AI and robotics are minimizing recovery times in complex procedures.</p>
                    <a href="#" style="color:var(--color-gold); font-weight:600;">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="glass-card">
                    <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=600&q=80" style="width:100%; border-radius:var(--radius-sm); margin-bottom:1rem;" alt="Blog 2">
                    <h3 style="margin-bottom:0.5rem;">Cardiovascular Health in 2026</h3>
                    <p style="opacity:0.8; margin-bottom:1rem;">New preventative heart care measures tailored by our team of specialist physicians.</p>
                    <a href="#" style="color:var(--color-gold); font-weight:600;">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="glass-card">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" style="width:100%; border-radius:var(--radius-sm); margin-bottom:1rem;" alt="Blog 3">
                    <h3 style="margin-bottom:0.5rem;">Luxury Maternity Care</h3>
                    <p style="opacity:0.8; margin-bottom:1rem;">A look inside our premium birthing suites built for ultimate mother and baby comfort.</p>
                    <a href="#" style="color:var(--color-gold); font-weight:600;">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    `,
    contact: `
        <section class="hero-section" style="height: 60vh;">
            <img class="hero-video" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80" alt="Contact Us">
            <div class="hero-overlay"></div>
            <div class="hero-content text-center" style="margin:0 auto;text-align:center;">
                <h1 data-i18n="nav_contact">Contact Us</h1>
            </div>
        </section>
        <section class="section-padding">
            <div class="grid-3" style="margin-bottom:3rem;">
                <div class="glass-card text-center">
                    <i class="fas fa-phone-alt" style="font-size:3rem; color:var(--color-gold); margin-bottom:1rem;"></i>
                    <h3>Call Us</h3>
                    <p>Hotline: <strong>19262</strong><br>+2 065 344 1110<br>0128 344 1110<br>0111 110 7006</p>
                </div>
                <div class="glass-card text-center">
                    <i class="fas fa-envelope" style="font-size:3rem; color:var(--color-gold); margin-bottom:1rem;"></i>
                    <h3>Email</h3>
                    <p>info@asselmedical.com<br>reservations@asselmedical.com</p>
                </div>
                <div class="glass-card text-center">
                    <i class="fas fa-map-marked-alt" style="font-size:3rem; color:var(--color-gold); margin-bottom:1rem;"></i>
                    <h3>Location</h3>
                    <p>9 El Kamar District<br>Elhadaba Rd, Hurghada 84511</p>
                </div>
            </div>
            
            <div style="max-width:1200px; margin:0 auto; text-align:center;">
                <h3>Find Assel Medical Center</h3>
                <iframe src="https://maps.google.com/maps?q=9%20El%20Kamar%20District,%20Elhadaba%20Rd,%20Hurghada,%20Egypt&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0; border-radius:16px; margin-top:1.5rem; box-shadow:0 10px 30px rgba(0,0,0,0.1);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    `
};

// Initialize CMS with version-based cache invalidation
const savedVersion = parseInt(localStorage.getItem('amc_db_version') || '0');
if(savedVersion < DB_VERSION) {
    // Force refresh: new real data replaces old cache
    localStorage.setItem('amc_db', JSON.stringify(DB));
    localStorage.setItem('amc_db_version', DB_VERSION.toString());
} else {
    const savedDB = localStorage.getItem('amc_db');
    if(savedDB) Object.assign(DB, JSON.parse(savedDB));
}
