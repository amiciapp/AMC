// Admin logic for AMC Command Center
document.addEventListener("DOMContentLoaded", () => {
    if(sessionStorage.getItem('amc_admin_logged_in') === 'true') {
        showDashboard();
    }
});

function attemptLogin() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    
    if(u === 'admin' && p === '1123581321Aa') {
        sessionStorage.setItem('amc_admin_logged_in', 'true');
        showDashboard();
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function logout() {
    sessionStorage.removeItem('amc_admin_logged_in');
    document.getElementById('dashboard-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
}

function showDashboard() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('dashboard-screen').style.display = 'block';
    loadData();
}

function loadData() {
    // Sync with DB from data.js which wraps localStorage
    const docs = DB.doctors;
    const srvs = DB.services;
    const bookings = JSON.parse(localStorage.getItem('amc_bookings') || '[]');

    document.getElementById('stat-doctors').innerText = docs.length;
    document.getElementById('stat-services').innerText = srvs.length;
    document.getElementById('stat-bookings').innerText = bookings.length;

    // Render Bookings
    const bTable = document.getElementById('bookings-table');
    bTable.innerHTML = '<tr><th>Patient</th><th>Phone</th><th>Department</th><th>Doctor</th></tr>';
    bookings.forEach(b => {
        bTable.innerHTML += `<tr><td>${b.name}</td><td>${b.phone}</td><td>${b.dept}</td><td>${b.doc}</td></tr>`;
    });

    // Render Doctors
    const dTable = document.getElementById('doctors-table');
    dTable.innerHTML = '<tr><th>Name</th><th>Specialty</th><th>Action</th></tr>';
    docs.forEach(d => {
        dTable.innerHTML += `<tr><td>${d.name}</td><td>${d.spec}</td><td><button onclick="removeDoctor('${d.id}')" style="color:red; font-size:1.5rem;"><i class="fas fa-trash"></i></button></td></tr>`;
    });
}

function addDoctor() {
    const name = document.getElementById('doc-name').value;
    const spec = document.getElementById('doc-spec').value;
    const exp = document.getElementById('doc-exp').value;
    const img = document.getElementById('doc-img').value || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80";
    
    if(!name || !spec) return alert("Fill required fields");

    DB.doctors.push({
        id: 'd' + Date.now(),
        name, spec, exp, img, phone: "+20653441110"
    });

    // Save to CMS state
    localStorage.setItem('amc_db', JSON.stringify(DB));
    
    // Clear & reload
    document.getElementById('doc-name').value = '';
    document.getElementById('doc-spec').value = '';
    document.getElementById('doc-exp').value = '';
    
    loadData();
    alert("Doctor Published to Front-End successfully!");
}

function removeDoctor(id) {
    DB.doctors = DB.doctors.filter(d => d.id !== id);
    localStorage.setItem('amc_db', JSON.stringify(DB));
    loadData();
}
