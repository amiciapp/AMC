// Comprehensive i18n implementation for 20 languages
const translations = {
    en: {
        nav_home: "Home", nav_about: "About Us", nav_services: "Services", nav_doctors: "Doctors", nav_gallery: "Gallery", nav_map: "Hospital Plan", nav_blog: "Blog", nav_contact: "Contact", nav_login: "Dashboard", nav_book: "Book Appointment",
        hero_title: "Pioneering Luxury Healthcare", hero_desc: "Experience world-class medical excellence delivered in a 5-star hotel environment. Your health is our masterpiece.",
        btn_book: "Book Appointment", btn_services: "Our Services", btn_emergency: "Emergency 24/7",
        home_about_title: "The AMC Standard", home_about_desc: "Where cutting-edge technology meets unparalleled hospitality.", book_title: "Reserve Your Consultation", footer_desc: "Redefining luxury healthcare in Egypt.", footer_quick: "Quick Links", footer_contact: "Contact Us", footer_health: "Health Insights"
    },
    ar: {
        nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "الخدمات", nav_doctors: "الأطباء", nav_gallery: "معرض الصور", nav_map: "خريطة المستشفى", nav_blog: "المدونة", nav_contact: "اتصل بنا", nav_login: "لوحة القيادة", nav_book: "احجز موعداً",
        hero_title: "رُواد الرعاية الصحية الفاخرة", hero_desc: "اختبر التميز الطبي العالمي المُقدم في بيئة فندقية 5 نجوم. صحتك هي تحفتنا الفنية.",
        btn_book: "احجز موعداً", btn_services: "خدماتنا", btn_emergency: "طوارئ 24/7",
        home_about_title: "معيار أصيل", home_about_desc: "حيث تلتقي التكنولوجيا المتطورة بالضيافة التي لا مثيل لها.", book_title: "احجز استشارتك", footer_desc: "إعادة تعريف الرعاية الصحية الفاخرة في مصر.", footer_quick: "روابط سريعة", footer_contact: "اتصل بنا", footer_health: "رؤى صحية"
    },
    fr: {
        nav_home: "Accueil", nav_about: "À Propos", nav_services: "Services", nav_doctors: "Médecins", nav_gallery: "Galerie", nav_map: "Plan", nav_blog: "Blog", nav_contact: "Contact", nav_login: "Tableau de bord", nav_book: "Prendre Rendez-vous",
        hero_title: "Soins de Santé de Luxe Pionniers", hero_desc: "Découvrez l'excellence médicale mondiale dans un environnement de la qualité d'un hôtel 5 étoiles.",
        btn_book: "Prendre Rendez-vous", btn_services: "Nos Services", btn_emergency: "Urgence 24/7",
        home_about_title: "Le Standard AMC", home_about_desc: "Où la technologie de pointe rencontre une hospitalité inégalée.", book_title: "Réservez Votre Consultation", footer_desc: "Redéfinir les soins de santé de luxe en Égypte.", footer_quick: "Liens Rapides", footer_contact: "Contactez-nous", footer_health: "Conseils de Santé"
    },
    de: {
        nav_home: "Startseite", nav_about: "Über Uns", nav_services: "Leistungen", nav_doctors: "Ärzte", nav_gallery: "Galerie", nav_map: "Krankenhausplan", nav_blog: "Blog", nav_contact: "Kontakt", nav_login: "Dashboard", nav_book: "Termin Buchen",
        hero_title: "Wegweisende Luxus-Gesundheitsversorgung", hero_desc: "Erleben Sie weltklasse medizinische Exzellenz in einem 5-Sterne-Hotelumfeld.",
        btn_book: "Termin Buchen", btn_services: "Unsere Leistungen", btn_emergency: "Notfall 24/7",
        home_about_title: "Der AMC Standard", home_about_desc: "Wo modernste Technologie auf unvergleichliche Gastfreundschaft trifft.", book_title: "Reservieren Sie Ihre Konsultation", footer_desc: "Luxus-Gesundheitsversorgung in Ägypten neu definieren.", footer_quick: "Schnelllinks", footer_contact: "Kontaktiere uns", footer_health: "Gesundheits-Insights"
    },
    es: {
        nav_home: "Inicio", nav_about: "Nosotros", nav_services: "Servicios", nav_doctors: "Médicos", nav_gallery: "Galería", nav_map: "Plano", nav_blog: "Blog", nav_contact: "Contacto", nav_login: "Panel", nav_book: "Reservar Cita",
        hero_title: "Atención Médica de Lujo Pionera", hero_desc: "Experimente la excelencia médica de clase mundial en un entorno de hotel de 5 estrellas.",
        btn_book: "Reservar Cita", btn_services: "Nuestros Servicios", btn_emergency: "Emergencia 24/7",
        home_about_title: "El Estándar AMC", home_about_desc: "Donde la tecnología de vanguardia se une a una hospitalidad incomparable.", book_title: "Reserve su Consulta", footer_desc: "Redefiniendo la atención médica de lujo en Egipto.", footer_quick: "Enlaces Rápidos", footer_contact: "Contáctenos", footer_health: "Consejos de Salud"
    },
    it: {
        nav_home: "Home", nav_about: "Chi Siamo", nav_services: "Servizi", nav_doctors: "Medici", nav_gallery: "Galleria", nav_map: "Mappa", nav_blog: "Blog", nav_contact: "Contatti", nav_login: "Dashboard", nav_book: "Prenota Appuntamento",
        hero_title: "Assistenza Sanitaria di Lusso", hero_desc: "Sperimenta l'eccellenza medica mondiale in un ambiente alberghiero a 5 stelle.",
        btn_book: "Prenota", btn_services: "I Nostri Servizi", btn_emergency: "Emergenza 24/7",
        home_about_title: "Lo Standard AMC", home_about_desc: "Dove la tecnologia all'avanguardia incontra un'ospitalità senza pari.", book_title: "Prenota la tua Consultazione", footer_desc: "Ridefinire l'assistenza sanitaria di lusso in Egitto.", footer_quick: "Link Rapidi", footer_contact: "Contattaci", footer_health: "Consigli Sanitari"
    },
    ru: {
        nav_home: "Главная", nav_about: "О Нас", nav_services: "Услуги", nav_doctors: "Врачи", nav_gallery: "Галерея", nav_map: "План", nav_blog: "Блог", nav_contact: "Контакты", nav_login: "Панель", nav_book: "Записаться на прием",
        hero_title: "Передовое Элитное Здравоохранение", hero_desc: "Медицинское превосходство мирового класса в условиях 5-звездочного отеля.",
        btn_book: "Записаться", btn_services: "Наши Услуги", btn_emergency: "Скорая 24/7",
        home_about_title: "Стандарт AMC", home_about_desc: "Где передовые технологии встречаются с непревзойденным гостеприимством.", book_title: "Забронировать Консультацию", footer_desc: "Новый взгляд на элитное здравоохранение в Египте.", footer_quick: "Быстрые Ссылки", footer_contact: "Связаться с нами", footer_health: "Новости Здоровья"
    },
    zh: {
        nav_home: "首页", nav_about: "关于我们", nav_services: "服务", nav_doctors: "医生", nav_gallery: "画廊", nav_map: "医院平面图", nav_blog: "博客", nav_contact: "联系", nav_login: "仪表盘", nav_book: "预约",
        hero_title: "开创性的豪华医疗", hero_desc: "在 5 星级酒店环境中体验世界一流的医疗卓越服务。",
        btn_book: "预约", btn_services: "我们的服务", btn_emergency: "24/7 紧急情况",
        home_about_title: "AMC 标准", home_about_desc: "尖端科技与无与伦比的款待相遇。", book_title: "预约咨询", footer_desc: "重新定义埃及的豪华医疗保健。", footer_quick: "快速链接", footer_contact: "联系我们", footer_health: "健康见解"
    },
    ja: {
        nav_home: "ホーム", nav_about: "私たちについて", nav_services: "サービス", nav_doctors: "医師", nav_gallery: "ギャラリー", nav_map: "病院の地図", nav_blog: "ブログ", nav_contact: "連絡先", nav_login: "ダッシュボード", nav_book: "予約する",
        hero_title: "先駆的なラグジュアリー医療", hero_desc: "5つ星ホテル環境で世界クラスの医療の卓越性を体験してください。",
        btn_book: "予約する", btn_services: "当社のサービス", btn_emergency: "24時間緊急",
        home_about_title: "AMC標準", home_about_desc: "最先端の技術と比類のないおもてなしが出会う場所。", book_title: "相談を予約する", footer_desc: "エジプトの高級ヘルスケアを再定義する。", footer_quick: "クイックリンク", footer_contact: "お問い合わせ", footer_health: "健康の洞察"
    },
    ko: {
        nav_home: "홈", nav_about: "회사 소개", nav_services: "서비스", nav_doctors: "의사", nav_gallery: "갤러리", nav_map: "병원 계획", nav_blog: "블로그", nav_contact: "연락처", nav_login: "대시보드", nav_book: "예약하기",
        hero_title: "선구적인 럭셔리 헬스케어", hero_desc: "5성급 호텔 환경에서 세계적 수준의 의료 우수성을 경험하십시오.",
        btn_book: "예약하기", btn_services: "우리의 서비스", btn_emergency: "24/7 응급",
        home_about_title: "AMC 표준", home_about_desc: "첨단 기술과 비교할 수 없는 환대가 만나는 곳.", book_title: "상담 예약", footer_desc: "이집트의 럭셔리 헬스케어 재정의.", footer_quick: "빠른 링크", footer_contact: "문의하기", footer_health: "건강 통찰력"
    },
    tr: {
        nav_home: "Ana Sayfa", nav_about: "Hakkımızda", nav_services: "Hizmetler", nav_doctors: "Doktorlar", nav_gallery: "Galeri", nav_map: "Harita", nav_blog: "Blog", nav_contact: "İletişim", nav_login: "Panel", nav_book: "Randevu Al",
        hero_title: "Öncü Lüks Sağlık Hizmeti", hero_desc: "5 yıldızlı otel ortamında birinci sınıf tıbbi mükemmelliği yaşayın.",
        btn_book: "Randevu Al", btn_services: "Hizmetlerimiz", btn_emergency: "Acil 24/7",
        home_about_title: "AMC Standardı", home_about_desc: "En son teknolojinin benzersiz konukseverlikle buluştuğu yer.", book_title: "Konsültasyon Rezervasyonu Yapın", footer_desc: "Mısır'da lüks sağlık hizmetlerini yeniden tanımlıyoruz.", footer_quick: "Hızlı Bağlantılar", footer_contact: "Bize Ulaşın", footer_health: "Sağlık Analizleri"
    },
    pt: {
        nav_home: "Início", nav_about: "Sobre", nav_services: "Serviços", nav_doctors: "Médicos", nav_gallery: "Galeria", nav_map: "Mapa", nav_blog: "Blog", nav_contact: "Contato", nav_login: "Painel", nav_book: "Agendar",
        hero_title: "Saúde de Luxo Pioneira", hero_desc: "Experimente a excelência médica global num ambiente de hotel 5 estrelas.",
        btn_book: "Agendar", btn_services: "Nossos Serviços", btn_emergency: "Emergência 24/7",
        home_about_title: "O Padrão AMC", home_about_desc: "Onde tecnologia de ponta encontra hospitalidade inigualável.", book_title: "Reserve sua Consulta", footer_desc: "Redefinindo serviços de saúde de luxo no Egito.", footer_quick: "Links Rápidos", footer_contact: "Contate-nos", footer_health: "Ideias de Saúde"
    },
    nl: {
        nav_home: "Home", nav_about: "Over Ons", nav_services: "Diensten", nav_doctors: "Artsen", nav_gallery: "Galerie", nav_map: "Plattegrond", nav_blog: "Blog", nav_contact: "Contact", nav_login: "Dashboard", nav_book: "Afspraak Maken",
        hero_title: "Baanbrekende Luxe Gezondheidszorg", hero_desc: "Ervaar medische excellentie van wereldklasse in een 5-sterrenhotelomgeving.",
        btn_book: "Afspraak Maken", btn_services: "Onze Diensten", btn_emergency: "Noodgeval 24/7",
        home_about_title: "De AMC Standaard", home_about_desc: "Waar geavanceerde technologie en ongeëvenaarde gastvrijheid samenkomen.", book_title: "Reserveer uw Consultatie", footer_desc: "Luxe gezondheidszorg in Egypte herdefiniëren.", footer_quick: "Snelle Links", footer_contact: "Neem contact op", footer_health: "Gezondheidsinzichten"
    },
    hi: {
        nav_home: "होम", nav_about: "हमारे बारे में", nav_services: "सेवाएं", nav_doctors: "डॉक्टर", nav_gallery: "गैलरी", nav_map: "नक्शा", nav_blog: "ब्लॉग", nav_contact: "संपर्क", nav_login: "डैशबोर्ड", nav_book: "अपॉइंटमेंट बुक करें",
        hero_title: "अग्रणी लक्जरी स्वास्थ्य सेवा", hero_desc: "एक 5-सितारा होटल के माहौल में विश्व स्तरीय चिकित्सा उत्कृष्टता का अनुभव करें।",
        btn_book: "बुक करें", btn_services: "हमारी सेवाएं", btn_emergency: "आपातकालीन 24/7",
        home_about_title: "AMC मानक", home_about_desc: "जहां अत्याधुनिक तकनीक बेजोड़ आतिथ्य से मिलती है।", book_title: "परामर्श आरक्षित करें", footer_desc: "मिस्र में लक्जरी स्वास्थ्य सेवा को फिर से परिभाषित करना।", footer_quick: "त्वरित लिंक", footer_contact: "हमसे संपर्क करें", footer_health: "स्वास्थ्य अंतर्दृष्टि"
    },
    ur: {
        nav_home: "ہوم", nav_about: "ہمارے بارے میں", nav_services: "خدمات", nav_doctors: "ڈاکٹرز", nav_gallery: "گیلری", nav_map: "نقشہ", nav_blog: "بلاگ", nav_contact: "رابطہ", nav_login: "ڈیش بورڈ", nav_book: "وقت بک کریں",
        hero_title: "پریمیم لگژری ہیلتھ کیئر", hero_desc: "5 اسٹار ہوٹل کے ماحول میں عالمی معیار کی طبی فضیلت کا تجربہ کریں۔",
        btn_book: "وقت بک کریں", btn_services: "ہماری خدمات", btn_emergency: "ایمرجنسی 24/7",
        home_about_title: "اے ایم سی معیار", home_about_desc: "جہاں جدید ٹیکنالوجی بے مثال مہمان نوازی سے ملتی ہے۔", book_title: "مشاورت بک کریں", footer_desc: "مصر میں لگژری ہیلتھ کیئر کی نئی تعریف۔", footer_quick: "فوری لنکس", footer_contact: "ہم سے رابطہ کریں", footer_health: "صحت کی معلومات"
    },
    sv: {
        nav_home: "Hem", nav_about: "Om oss", nav_services: "Tjänster", nav_doctors: "Läkare", nav_gallery: "Galleri", nav_map: "Plan", nav_blog: "Blogg", nav_contact: "Kontakt", nav_login: "Panel", nav_book: "Boka",
        hero_title: "Pionjärer inom Lyxsjukvård", hero_desc: "Upplev medicinsk spetskompetens i en 5-stjärnig hotellmiljö.",
        btn_book: "Boka tid", btn_services: "Våra Tjänster", btn_emergency: "Nödfall 24/7",
        home_about_title: "AMC Standarden", home_about_desc: "Där spjutspetsteknik möter oöverträffad gästfrihet.", book_title: "Boka din konsultation", footer_desc: "Omdefinierar lyxsjukvård i Egypten.", footer_quick: "Snabblänkar", footer_contact: "Kontakta oss", footer_health: "Hälsoinsikter"
    },
    el: {
        nav_home: "Αρχική", nav_about: "Σχετικά", nav_services: "Υπηρεσίες", nav_doctors: "Γιατροί", nav_gallery: "Γκαλερί", nav_map: "Χάρτης", nav_blog: "Ιστολόγιο", nav_contact: "Επικοινωνία", nav_login: "Πίνακας", nav_book: "Ραντεβού",
        hero_title: "Πρωτοποριακή Πολυτελής Υγεία", hero_desc: "Ζήστε την παγκόσμια ιατρική αριστεία σε περιβάλλον ξενοδοχείου 5 αστέρων.",
        btn_book: "Ραντεβού", btn_services: "Οι Υπηρεσίες Μας", btn_emergency: "Επείγον 24/7",
        home_about_title: "Το Πρότυπο AMC", home_about_desc: "Όπου η τεχνολογία αιχμής συναντά την απαράμιλλη φιλοξενία.", book_title: "Κλείστε Συμβουλευτική", footer_desc: "Επαναπροσδιορίζοντας την πολυτελή υγειονομική περίθαλψη στην Αίγυπτο.", footer_quick: "Γρήγοροι Σύνδεσμοι", footer_contact: "Επικοινωνήστε μαζί μας", footer_health: "Πληροφορίες Υγείας"
    },
    pl: {
        nav_home: "Główna", nav_about: "O nas", nav_services: "Usługi", nav_doctors: "Lekarze", nav_gallery: "Galeria", nav_map: "Plan", nav_blog: "Blog", nav_contact: "Kontakt", nav_login: "Panel", nav_book: "Rezerwuj",
        hero_title: "Pionierska Luksusowa Opieka Zdrowotna", hero_desc: "Doświadcz światowej klasy medycznej doskonałości w środowisku 5-gwiazdkowego hotelu.",
        btn_book: "Zarezerwuj Wizytę", btn_services: "Nasze Usługi", btn_emergency: "Na Ratunek 24/7",
        home_about_title: "Standard AMC", home_about_desc: "Gdzie najnowsza technologia spotyka się z niespotykaną gościnnością.", book_title: "Zarezerwuj Konsultację", footer_desc: "Redefinicja luksusowej opieki zdrowotnej w Egipcie.", footer_quick: "Szybkie Linki", footer_contact: "Skontaktuj się z nami", footer_health: "Porady Zdrowotne"
    },
    th: {
        nav_home: "หน้าแรก", nav_about: "เกี่ยวกับเรา", nav_services: "บริการ", nav_doctors: "แพทย์", nav_gallery: "แกลลอรี่", nav_map: "แผนที่", nav_blog: "บล็อก", nav_contact: "ติดต่อ", nav_login: "แดชบอร์ด", nav_book: "จอง",
        hero_title: "การแพทย์หรูหราแถวหน้า", hero_desc: "สัมผัสความเป็นเลิศทางการแพทย์ระดับโลกในบรรยากาศโรงแรม 5 ดาว",
        btn_book: "จองนัด", btn_services: "บริการของเรา", btn_emergency: "ฉุกเฉิน 24/7",
        home_about_title: "มาตรฐาน AMC", home_about_desc: "ที่ซึ่งเทคโนโลยีล้ำสมัยมาบรรจบกับการต้อนรับที่ไม่มีใครเทียบได้", book_title: "จองคำปรึกษาของคุณ", footer_desc: "สร้างมาตรฐานใหม่ด้านสุขภาพที่หรูหราในอียิปต์", footer_quick: "ลิงค์ด่วน", footer_contact: "ติดต่อเรา", footer_health: "ข้อมูลเชิงลึกด้านสุขภาพ"
    },
    id: {
        nav_home: "Beranda", nav_about: "Tentang", nav_services: "Layanan", nav_doctors: "Dokter", nav_gallery: "Galeri", nav_map: "Peta", nav_blog: "Blog", nav_contact: "Kontak", nav_login: "Dasbor", nav_book: "Buat Janji",
        hero_title: "Pelopor Perawatan Kesehatan Mewah", hero_desc: "Rasakan keunggulan medis kelas dunia di lingkungan hotel bintang 5.",
        btn_book: "Buat Janji", btn_services: "Layanan Kami", btn_emergency: "Darurat 24/7",
        home_about_title: "Standar AMC", home_about_desc: "Di mana teknologi mutakhir bertemu keramahan yang tak tertandingi.", book_title: "Pesan Konsultasi Anda", footer_desc: "Mendefinisikan ulang layanan kesehatan mewah di Mesir.", footer_quick: "Tautan Cepat", footer_contact: "Hubungi Kami", footer_health: "Wawasan Kesehatan"
    }
};

// Language State — auto-detected from browser
function detectLanguage() {
    // 1. Returning visitor: respect saved preference
    const saved = localStorage.getItem('amc_lang');
    if (saved) return saved;

    // 2. Build list of supported codes
    const supported = DB.languages.map(l => l.code);

    // 3. Walk browser's ordered preference list
    const preferred = (navigator.languages && navigator.languages.length)
        ? [...navigator.languages]
        : [navigator.language || 'en'];

    for (const lang of preferred) {
        const code = lang.split('-')[0].toLowerCase(); // "ar-EG" → "ar"
        if (supported.includes(code)) return code;
    }

    return 'en'; // ultimate fallback
}

let currentLang = detectLanguage();

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});

function setLanguage(langCode) {
    if(!translations[langCode]) langCode = 'en';
    currentLang = langCode;
    localStorage.setItem('amc_lang', langCode);
    
    // Check if RTL
    const langObj = DB.languages.find(l => l.code === langCode);
    if(langObj && langObj.dir === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Update Meta Language
    document.documentElement.setAttribute('lang', langCode);

    // Update UI Elements
    if(document.getElementById('current-lang')) {
        document.getElementById('current-lang').innerText = langCode.toUpperCase();
    }
    
    // Apply translations
    updateTranslations();

    // Trigger dynamic SEO logic
    if(typeof updateSEO === 'function') updateSEO(window.location.hash.substring(1), langCode);

}

function updateTranslations() {
    const texts = translations[currentLang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(texts[key]) {
            if(el.tagName === 'INPUT' && el.type === 'placeholder') {
                el.placeholder = texts[key];
            } else {
                el.innerHTML = texts[key];
            }
        }
    });

    // Re-trigger scroll animations incase height changes
    setTimeout(() => { if(typeof initRevealObjects === 'function') initRevealObjects(); }, 100);
}
