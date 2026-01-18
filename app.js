// Service Menu Data
const servicesData = {
    "Massage Treatment": [
        { name: "Swedish", duration: 60 },
        { name: "Thai", duration: 60 },
        { name: "Swe-Thai", duration: 60 },
        { name: "Candle Oil Massage", duration: 60 },
        { name: "Slimming Anti-Cellulite", duration: 60 },
        { name: "Lymphatic Drainage", duration: 60 },
        { name: "Pregnant", duration: 60 },
        { name: "Scalp", duration: 15 },
        { name: "Hands & Feet", duration: 15 },
        { name: "Neck", duration: 15 },
        { name: "Shoulders", duration: 15 },
        { name: "Back Massage", duration: 15 },
        { name: "Feet Massage", duration: 10 },
        { name: "Hand Massage", duration: 10 },
        { name: "Candle Oil Massage (Hands Or Feet)", duration: 15 }
    ],
    "Hands & Feet Care": [
        { name: "Cleaning + filing / hands", duration: 30 },
        { name: "Cleaning + filing / feet", duration: 30 },
        { name: "Shaping", duration: 20 },
        { name: "Polish", duration: 20 },
        { name: "Gel Color Polish", duration: 45 },
        { name: "Gel Color Removal", duration: 30 },
        { name: "Paraffin Hands", duration: 30 },
        { name: "Paraffin Feet", duration: 30 },
        { name: "Kids Mani + Pedi", duration: 40 },
        { name: "Extra Care Time", duration: 30 },
        { name: "Jelly Hands Treatment", duration: 45 },
        { name: "Jelly Feet Treatment", duration: 45 }
    ],
    "Waxing": [
        { name: "Underarms", duration: 15 },
        { name: "Fingers/Toes", duration: 15 },
        { name: "Tummy", duration: 20 },
        { name: "Head to Toe", duration: 120 },
        { name: "Upper Lip", duration: 10 },
        { name: "Bikini", duration: 30 },
        { name: "Chest", duration: 20 },
        { name: "Arms", duration: 30 },
        { name: "Legs", duration: 45 },
        { name: "Full Face", duration: 30 },
        { name: "Back", duration: 30 }
    ],
    "Facial Sessions": [
        { name: "Deep Cleansing", duration: 60 },
        { name: "Hydra Facial", duration: 60 },
        { name: "Exfoliating", duration: 75 },
        { name: "Express Facial", duration: 30 },
        { name: "Glow Facial", duration: 45 },
        { name: "Eyeboost", duration: 30 }
    ],
    "Hair Treatment": [
        { name: "Hair Treatment / Caviar", duration: 60 },
        { name: "Hair Mask", duration: 45 },
        { name: "Hair Dye & Blow Dry", duration: 90 }
    ],
    "Packages": [
        { name: "Graduation Package", duration: 120 },
        { name: "Birthday Package", duration: 150 },
        { name: "Bridal Package", duration: 180 }
    ],
    "Add-Ons": [
        { name: "Flowers", duration: 0 },
        { name: "Cake", duration: 0 },
        { name: "Chocolate", duration: 0 },
        { name: "Balloons", duration: 0 },
        { name: "Candles", duration: 0 },
        { name: "Spa Pedicure Mix", duration: 0 }
    ]
};

// Equipment checklist for different service types
const equipmentChecklists = {
    "Massage Treatment": ["Massage bed/mat", "Towels", "Oils", "Music player", "Aromatherapy"],
    "Hands & Feet Care": ["Nail kit", "Polish collection", "Towels", "Bowl", "Sanitizer"],
    "Waxing": ["Wax warmer", "Wax strips", "Towels", "Pre/post wax products", "Gloves"],
    "Facial Sessions": ["Facial bed", "Steamer", "Products", "Towels", "Headband"],
    "Hair Treatment": ["Hair products", "Towels", "Hair dryer", "Brushes", "Gloves"],
    "Packages": ["All required items per package", "Decorations", "Surprise items"],
    "Add-Ons": ["Decoration items", "Presentation materials"]
};

// Demo Users
const demoUsers = [
    { username: "admin", password: "admin123", role: "admin", name: "Admin User" },
    { username: "sara", password: "staff123", role: "staff", name: "Sara Ahmed", phone: "+974-1234-5678", specialization: "Massage & Facial", active: true },
    { username: "fatima", password: "staff123", role: "staff", name: "Fatima Ali", phone: "+974-2345-6789", specialization: "Nails & Waxing", active: true },
    { username: "aisha", password: "staff123", role: "staff", name: "Aisha Hassan", phone: "+974-3456-7890", specialization: "Hair Treatment", active: true }
];

// Initialize App
function initializeApp() {
    // Initialize users
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(demoUsers));
    }
    
    // Initialize bookings
    if (!localStorage.getItem('bookings')) {
        localStorage.setItem('bookings', JSON.stringify([]));
    }
    
    // Initialize expenses
    if (!localStorage.getItem('expenses')) {
        localStorage.setItem('expenses', JSON.stringify([]));
    }
    
    // Initialize salaries
    if (!localStorage.getItem('salaries')) {
        localStorage.setItem('salaries', JSON.stringify([]));
    }
    
    // Initialize transportation
    if (!localStorage.getItem('transportation')) {
        localStorage.setItem('transportation', JSON.stringify([]));
    }
    
    // Initialize demo bookings
    createDemoBookings();
    
    // Load services
    loadServicesSelect();
    
    // Setup event listeners
    setupEventListeners();

    // Set today's date for transportation
    const today = new Date().toISOString().split('T')[0];
    if (document.getElementById('transportDate')) {
        document.getElementById('transportDate').value = today;
    }
    if (document.getElementById('expenseDate')) {
        document.getElementById('expenseDate').value = today;
    }
}

function createDemoBookings() {
    const bookings = getBookings();
    if (bookings.length === 0) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const demoBookings = [
            {
                id: Date.now() + 1,
                customerName: "Noura Al-Thani",
                customerPhone: "+974-5555-1234",
                customerAddress: "Villa 23, Street 45, Zone 51",
                area: "West Bay",
                locationLink: "https://maps.google.com/?q=25.3548,51.5310",
                date: today.toISOString().split('T')[0],
                time: "10:00",
                service: "Swedish",
                category: "Massage Treatment",
                duration: 60,
                price: 400,
                staff: ["Sara Ahmed"],
                uberTime: 20,
                paymentStatus: "paid",
                paymentMethod: "card",
                isGift: false,
                notes: "Client prefers light pressure",
                completed: false,
                equipmentChecked: false,
                staffPayment: {}
            },
            {
                id: Date.now() + 2,
                customerName: "Maryam Abdullah",
                customerPhone: "+974-5555-5678",
                customerAddress: "Tower B, Apt 1203, The Pearl",
                area: "The Pearl",
                locationLink: "",
                date: today.toISOString().split('T')[0],
                time: "14:00",
                service: "Gel Color Polish",
                category: "Hands & Feet Care",
                duration: 45,
                price: 120,
                staff: ["Fatima Ali"],
                uberTime: 25,
                paymentStatus: "unpaid",
                paymentMethod: "",
                isGift: false,
                notes: "",
                completed: false,
                equipmentChecked: false,
                staffPayment: {}
            }
        ];
        
        localStorage.setItem('bookings', JSON.stringify(demoBookings));
    }
}

function setupEventListeners() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Booking form
    document.getElementById('bookingForm').addEventListener('submit', handleBookingSave);
    
    // Staff form
    document.getElementById('staffForm').addEventListener('submit', handleStaffSave);
    
    // Payment status change
    document.getElementById('paymentStatus').addEventListener('change', togglePaymentMethod);

    // Expense form
    document.getElementById('expenseForm').addEventListener('submit', handleExpenseSave);

    // Salary form
    document.getElementById('salaryForm').addEventListener('submit', handleSalarySave);

    // Transportation form
    document.getElementById('transportationForm').addEventListener('submit', handleTransportationSave);

    // Transportation pictures preview
    document.getElementById('transportPictures').addEventListener('change', previewTransportImages);

    // Staff report change
    document.getElementById('staffReportSelect').addEventListener('change', updateStaffReport);
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showApp();
    } else {
        alert('Invalid credentials!');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    window.location.reload();
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function showApp() {
    const user = getCurrentUser();
    
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('currentUser').textContent = user.name;
    
    // Hide/show elements based on role
    const adminElements = document.querySelectorAll('.admin-only');
    const staffElements = document.querySelectorAll('.staff-only');
    
    if (user.role === 'admin') {
        adminElements.forEach(el => el.classList.remove('hidden'));
        staffElements.forEach(el => el.classList.add('hidden'));
    } else {
        adminElements.forEach(el => el.classList.add('hidden'));
        staffElements.forEach(el => el.classList.remove('hidden'));
    }
    
    loadDashboard();
    showTab('dashboard');
}

// Tab Navigation
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remove active state from all nav buttons
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('border-rose-400', 'text-rose-400');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // Add active state to clicked button
    event.target.closest('button').classList.add('border-rose-400', 'text-rose-400');
    
    // Load data for specific tabs
    switch(tabName) {
        case 'bookings':
            loadBookings();
            loadStaffFilters();
            break;
        case 'schedule':
            loadStaffSchedule();
            break;
        case 'services':
            loadServices();
            break;
        case 'staff':
            loadStaff();
            break;
        case 'expenses':
            loadExpenses();
            break;
        case 'salaries':
            loadSalaries();
            loadStaffSelectForSalary();
            break;
        case 'transportationReports':
            loadTransportationReports();
            break;
        case 'reports':
            loadReports();
            loadStaffSelectForReports();
            break;
        case 'transportation':
            loadTransportation();
            break;
    }
}

// Dashboard Functions
function loadDashboard() {
    const bookings = getBookings();
    const users = getUsers();
    const today = new Date().toISOString().split('T')[0];
    
    // Today's bookings
    const todayBookings = bookings.filter(b => b.date === today);
    document.getElementById('todayBookings').textContent = todayBookings.length;
    
    // Today's revenue
    const todayRevenue = todayBookings
        .filter(b => b.paymentStatus === 'paid' && !b.isGift)
        .reduce((sum, b) => sum + b.price, 0);
    document.getElementById('todayRevenue').textContent = todayRevenue + ' QAR';
    
    // Active staff
    const activeStaff = users.filter(u => u.role === 'staff' && u.active).length;
    document.getElementById('activeStaff').textContent = activeStaff;
    
    // Pending payments
    const pendingPayments = bookings.filter(b => b.paymentStatus === 'unpaid' && !b.isGift).length;
    document.getElementById('pendingPayments').textContent = pendingPayments;
    
    // Today's schedule
    const scheduleHtml = todayBookings.length > 0
        ? todayBookings.map(b => `
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div class="flex-1">
                    <p class="font-medium text-gray-800">${b.time} - ${b.customerName}</p>
                    <p class="text-sm text-gray-600">${b.service} (${b.staff.join(', ')})</p>
                </div>
                <span class="px-2 py-1 text-xs rounded-full ${b.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}">
                    ${b.paymentStatus}
                </span>
            </div>
        `).join('')
        : '<p class="text-gray-500 text-center py-4">No bookings scheduled for today</p>';
    
    document.getElementById('todaySchedule').innerHTML = scheduleHtml;
}

// Data Access Functions
function getBookings() {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
}

function saveBookings(bookings) {
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses') || '[]');
}

function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function getSalaries() {
    return JSON.parse(localStorage.getItem('salaries') || '[]');
}

function saveSalaries(salaries) {
    localStorage.setItem('salaries', JSON.stringify(salaries));
}

function getTransportation() {
    return JSON.parse(localStorage.getItem('transportation') || '[]');
}

function saveTransportation(transportation) {
    localStorage.setItem('transportation', JSON.stringify(transportation));
}

// Service Functions
function loadServicesSelect() {
    const select = document.getElementById('serviceSelect');
    select.innerHTML = '<option value="">Select Service</option>';
    
    Object.keys(servicesData).forEach(category => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;
        
        servicesData[category].forEach(service => {
            const option = document.createElement('option');
            option.value = service.name;
            option.textContent = service.name;
            option.dataset.duration = service.duration;
            option.dataset.category = category;
            optgroup.appendChild(option);
        });
        
        select.appendChild(optgroup);
    });
}

function updateServiceDetails() {
    const select = document.getElementById('serviceSelect');
    const selectedOption = select.options[select.selectedIndex];
    
    if (selectedOption.value) {
        document.getElementById('serviceDuration').value = selectedOption.dataset.duration + ' minutes';
    } else {
        document.getElementById('serviceDuration').value = '';
    }
}

function getServiceCategory(serviceName) {
    for (const [category, services] of Object.entries(servicesData)) {
        if (services.find(s => s.name === serviceName)) {
            return category;
        }
    }
    return '';
}

function getServiceDuration(serviceName) {
    for (const services of Object.values(servicesData)) {
        const service = services.find(s => s.name === serviceName);
        if (service) return service.duration;
    }
    return 0;
}

function loadServices() {
    const servicesHtml = Object.keys(servicesData).map(category => `
        <div class="border rounded-lg p-4">
            <h3 class="text-lg font-bold text-gray-800 mb-3">${category}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                ${servicesData[category].map(service => `
                    <div class="p-3 bg-gray-50 rounded-lg">
                        <p class="font-medium text-gray-800">${service.name}</p>
                        <p class="text-sm text-gray-600">${service.duration} minutes</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    document.getElementById('servicesList').innerHTML = servicesHtml;
}

// Booking Functions
function togglePaymentMethod() {
    const paymentStatus = document.getElementById('paymentStatus').value;
    const paymentMethodDiv = document.getElementById('paymentMethodDiv');
    
    if (paymentStatus === 'paid') {
        paymentMethodDiv.classList.remove('hidden');
    } else {
        paymentMethodDiv.classList.add('hidden');
    }
}

function toggleGiftPrice() {
    const isGift = document.getElementById('isGift').checked;
    const priceInput = document.getElementById('manualPrice');
    
    if (isGift) {
        // Lock the price field and set to 0
        priceInput.value = '0';
        priceInput.readOnly = true;
        priceInput.classList.add('bg-gray-100', 'cursor-not-allowed');
        priceInput.required = false;
    } else {
        // Unlock the price field
        priceInput.value = '';
        priceInput.readOnly = false;
        priceInput.classList.remove('bg-gray-100', 'cursor-not-allowed');
        priceInput.required = true;
    }
}

function loadStaffFilters() {
    const users = getUsers().filter(u => u.role === 'staff' && u.active);
    const filterSelect = document.getElementById('filterStaff');
    const assignSelect = document.getElementById('assignStaff');
    
    // Filter dropdown
    filterSelect.innerHTML = '<option value="">All Staff</option>';
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = user.name;
        filterSelect.appendChild(option);
    });
    
    // Assign dropdown
    assignSelect.innerHTML = '';
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = user.name + ' - ' + (user.specialization || 'General');
        assignSelect.appendChild(option);
    });
}

function loadBookings() {
    let bookings = getBookings();
    const filterDate = document.getElementById('filterDate').value;
    const filterArea = document.getElementById('filterArea').value;
    const filterStaff = document.getElementById('filterStaff').value;
    const filterPayment = document.getElementById('filterPayment').value;
    
    if (filterDate) {
        bookings = bookings.filter(b => b.date === filterDate);
    }
    if (filterArea) {
        bookings = bookings.filter(b => b.area === filterArea);
    }
    if (filterStaff) {
        bookings = bookings.filter(b => b.staff.includes(filterStaff));
    }
    if (filterPayment) {
        bookings = bookings.filter(b => b.paymentStatus === filterPayment);
    }
    
    // Sort by date and time
    bookings.sort((a, b) => {
        const dateCompare = new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time);
        return dateCompare;
    });
    
    const user = getCurrentUser();
    const listHtml = bookings.length > 0
        ? bookings.map(b => `
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-2">
                            <h3 class="font-bold text-lg text-gray-800">${b.customerName}</h3>
                            ${b.isGift ? '<span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">GIFT</span>' : ''}
                            <span class="px-2 py-1 text-xs rounded-full ${b.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}">
                                ${b.paymentStatus}
                            </span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <p><i class="fas fa-calendar mr-2 text-rose-400"></i>${formatDate(b.date)} at ${b.time}</p>
                            <p><i class="fas fa-spa mr-2 text-rose-400"></i>${b.service}</p>
                            <p><i class="fas fa-map-marker-alt mr-2 text-rose-400"></i>${b.area}</p>
                            <p><i class="fas fa-users mr-2 text-rose-400"></i>${b.staff.join(', ')}</p>
                            <p><i class="fas fa-clock mr-2 text-rose-400"></i>${b.duration} min + ${b.uberTime} min Uber</p>
                            ${!b.isGift ? `<p><i class="fas fa-money-bill mr-2 text-rose-400"></i>${b.price} QAR</p>` : '<p class="text-purple-600"><i class="fas fa-gift mr-2"></i>Complimentary</p>'}
                        </div>
                    </div>
                    <div class="flex gap-2">
                        ${user.role === 'admin' ? `
                            <button onclick="editBooking(${b.id})" class="text-blue-500 hover:text-blue-700">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteBooking(${b.id})" class="text-red-500 hover:text-red-700">
                                <i class="fas fa-trash"></i>
                            </button>
                        ` : ''}
                        <button onclick="viewBookingDetails(${b.id})" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('')
        : '<p class="text-gray-500 text-center py-8 bg-white rounded-lg">No bookings found</p>';
    
    document.getElementById('bookingsList').innerHTML = listHtml;
}

function openBookingModal(bookingId = null) {
    document.getElementById('bookingModal').classList.remove('hidden');
    loadStaffFilters();
    
    if (bookingId) {
        // Edit mode
        const bookings = getBookings();
        const booking = bookings.find(b => b.id === bookingId);
        
        document.getElementById('modalTitle').textContent = 'Edit Booking';
        document.getElementById('bookingId').value = booking.id;
        document.getElementById('customerName').value = booking.customerName;
        document.getElementById('customerPhone').value = booking.customerPhone;
        document.getElementById('customerAddress').value = booking.customerAddress;
        document.getElementById('customerArea').value = booking.area;
        document.getElementById('locationLink').value = booking.locationLink || '';
        document.getElementById('bookingDate').value = booking.date;
        document.getElementById('bookingTime').value = booking.time;
        document.getElementById('serviceSelect').value = booking.service;
        updateServiceDetails();
        document.getElementById('manualPrice').value = booking.price;
        
        // Set selected staff
        const staffSelect = document.getElementById('assignStaff');
        Array.from(staffSelect.options).forEach(option => {
            option.selected = booking.staff.includes(option.value);
        });
        
        document.getElementById('uberTime').value = booking.uberTime;
        document.getElementById('paymentStatus').value = booking.paymentStatus;
        document.getElementById('isGift').checked = booking.isGift || false;
        toggleGiftPrice(); // Update price field based on gift status
        
        if (booking.paymentStatus === 'paid') {
            document.getElementById('paymentMethodDiv').classList.remove('hidden');
            document.getElementById('paymentMethod').value = booking.paymentMethod;
        }
        document.getElementById('bookingNotes').value = booking.notes || '';
    } else {
        // New booking mode
        document.getElementById('modalTitle').textContent = 'New Booking';
        document.getElementById('bookingForm').reset();
        document.getElementById('bookingId').value = '';
        document.getElementById('paymentMethodDiv').classList.add('hidden');
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('bookingDate').value = today;
        document.getElementById('uberTime').value = '20';
        
        // Reset price field to editable state
        const priceInput = document.getElementById('manualPrice');
        priceInput.readOnly = false;
        priceInput.classList.remove('bg-gray-100', 'cursor-not-allowed');
        priceInput.required = true;
    }
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.add('hidden');
    document.getElementById('bookingForm').reset();
}

function handleBookingSave(e) {
    e.preventDefault();
    
    const bookingId = document.getElementById('bookingId').value;
    const selectedService = document.getElementById('serviceSelect').value;
    const serviceCategory = getServiceCategory(selectedService);
    const serviceDuration = getServiceDuration(selectedService);
    const manualPrice = parseFloat(document.getElementById('manualPrice').value) || 0;
    const isGift = document.getElementById('isGift').checked;
    
    if (!isGift && (!manualPrice || manualPrice <= 0)) {
        alert('Please enter a valid price!');
        return;
    }
    
    const selectedStaff = Array.from(document.getElementById('assignStaff').selectedOptions)
        .map(option => option.value);
    
    if (selectedStaff.length === 0) {
        alert('Please assign at least one staff member!');
        return;
    }
    
    const bookingData = {
        id: bookingId ? parseInt(bookingId) : Date.now(),
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        customerAddress: document.getElementById('customerAddress').value,
        area: document.getElementById('customerArea').value,
        locationLink: document.getElementById('locationLink').value,
        date: document.getElementById('bookingDate').value,
        time: document.getElementById('bookingTime').value,
        service: selectedService,
        category: serviceCategory,
        duration: serviceDuration,
        price: manualPrice,
        staff: selectedStaff,
        uberTime: parseInt(document.getElementById('uberTime').value),
        paymentStatus: document.getElementById('paymentStatus').value,
        paymentMethod: document.getElementById('paymentStatus').value === 'paid' 
            ? document.getElementById('paymentMethod').value : '',
        isGift: isGift,
        notes: document.getElementById('bookingNotes').value,
        completed: false,
        equipmentChecked: false,
        staffPayment: {}
    };
    
    let bookings = getBookings();
    
    if (bookingId) {
        // Update existing
        const index = bookings.findIndex(b => b.id === parseInt(bookingId));
        // Preserve staff payment data
        if (bookings[index].staffPayment) {
            bookingData.staffPayment = bookings[index].staffPayment;
        }
        bookings[index] = bookingData;
    } else {
        // Add new
        bookings.push(bookingData);
    }
    
    saveBookings(bookings);
    closeBookingModal();
    loadBookings();
    loadDashboard();
    
    alert('Booking saved successfully!');
}

function editBooking(id) {
    openBookingModal(id);
}

function deleteBooking(id) {
    if (confirm('Are you sure you want to delete this booking?')) {
        let bookings = getBookings();
        bookings = bookings.filter(b => b.id !== id);
        saveBookings(bookings);
        loadBookings();
        loadDashboard();
    }
}

function viewBookingDetails(id) {
    const bookings = getBookings();
    const booking = bookings.find(b => b.id === id);
    const user = getCurrentUser();
    
    const equipmentList = equipmentChecklists[booking.category] || [];
    
    let detailsHtml = `
        <div class="space-y-4">
            ${user.role === 'staff' ? `
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-800 mb-2">Equipment Checklist</h4>
                    <div class="space-y-2">
                        ${equipmentList.map(item => `
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="w-4 h-4 text-rose-400 rounded">
                                <span class="text-sm">${item}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-sm text-gray-600">Customer</p>
                    <p class="font-medium">${booking.customerName}</p>
                    <p class="text-sm text-gray-600">${booking.customerPhone}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Service</p>
                    <p class="font-medium">${booking.service}</p>
                    <p class="text-sm text-gray-600">${booking.category}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Date & Time</p>
                    <p class="font-medium">${formatDate(booking.date)} at ${booking.time}</p>
                    <p class="text-sm text-gray-600">Duration: ${booking.duration} min</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Location</p>
                    <p class="font-medium">${booking.area}</p>
                    <p class="text-sm text-gray-600">${booking.customerAddress}</p>
                    ${booking.locationLink ? `<a href="${booking.locationLink}" target="_blank" class="text-blue-500 text-sm hover:underline"><i class="fas fa-map-marker-alt mr-1"></i>Open in Maps</a>` : ''}
                </div>
                <div>
                    <p class="text-sm text-gray-600">Assigned Staff</p>
                    <p class="font-medium">${booking.staff.join(', ')}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Payment</p>
                    ${booking.isGift ? 
                        '<p class="font-medium text-purple-600"><i class="fas fa-gift mr-1"></i>Gift (Complimentary)</p>' :
                        `<p class="font-medium">${booking.price} QAR - ${booking.paymentStatus}</p>
                        ${booking.paymentMethod ? `<p class="text-sm text-gray-600">Method: ${booking.paymentMethod}</p>` : ''}`
                    }
                </div>
            </div>
            
            ${booking.notes ? `
                <div>
                    <p class="text-sm text-gray-600 mb-1">Notes</p>
                    <p class="text-sm bg-gray-50 p-3 rounded">${booking.notes}</p>
                </div>
            ` : ''}
            
            ${user.role === 'staff' && !booking.isGift ? `
                <div class="border-t pt-4">
                    <h4 class="font-semibold text-gray-800 mb-3">Payment Details</h4>
                    ${booking.staffPayment && booking.staffPayment[user.name] ? `
                        <div class="bg-green-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600">Payment Confirmed</p>
                            <p class="font-medium text-green-700">Paid via ${booking.staffPayment[user.name].method}</p>
                            ${booking.staffPayment[user.name].invoice ? 
                                `<button onclick="viewInvoice('${booking.staffPayment[user.name].invoice}')" class="mt-2 text-blue-500 hover:underline text-sm">
                                    <i class="fas fa-file-invoice mr-1"></i>View Invoice
                                </button>` : ''}
                        </div>
                    ` : `
                        <div class="space-y-3">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Payment Method *</label>
                                <select id="staffPaymentMethod" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                    <option value="cash">Cash</option>
                                    <option value="fawran">Fawran</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Upload Invoice</label>
                                <input type="file" id="staffInvoice" class="w-full px-4 py-2 border border-gray-300 rounded-lg" accept="image/*">
                            </div>
                            <button onclick="confirmStaffPayment(${booking.id})" class="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-500 transition">
                                Confirm Payment
                            </button>
                        </div>
                    `}
                </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('bookingDetailsContent').innerHTML = detailsHtml;
    document.getElementById('bookingDetailsModal').classList.remove('hidden');
}

function confirmStaffPayment(bookingId) {
    const user = getCurrentUser();
    const paymentMethod = document.getElementById('staffPaymentMethod').value;
    const invoiceFile = document.getElementById('staffInvoice').files[0];
    
    const bookings = getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking.staffPayment) {
        booking.staffPayment = {};
    }
    
    booking.staffPayment[user.name] = {
        method: paymentMethod,
        confirmedAt: new Date().toISOString()
    };
    
    if (invoiceFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            booking.staffPayment[user.name].invoice = e.target.result;
            saveBookings(bookings);
            alert('Payment confirmed successfully!');
            closeBookingDetailsModal();
            loadStaffSchedule();
        };
        reader.readAsDataURL(invoiceFile);
    } else {
        saveBookings(bookings);
        alert('Payment confirmed successfully!');
        closeBookingDetailsModal();
        loadStaffSchedule();
    }
}

function viewInvoice(invoiceData) {
    document.getElementById('imagePreviewImg').src = invoiceData;
    document.getElementById('imagePreviewModal').classList.remove('hidden');
}

function closeImagePreview() {
    document.getElementById('imagePreviewModal').classList.add('hidden');
}

function closeBookingDetailsModal() {
    document.getElementById('bookingDetailsModal').classList.add('hidden');
}

// Staff Schedule Functions
function loadStaffSchedule() {
    const user = getCurrentUser();
    if (user.role !== 'staff') return;
    
    const bookings = getBookings().filter(b => b.staff.includes(user.name));
    
    // Sort by date and time
    bookings.sort((a, b) => {
        const dateCompare = new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time);
        return dateCompare;
    });
    
    const scheduleHtml = bookings.length > 0
        ? bookings.map(b => `
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-2">
                            <h3 class="font-bold text-lg text-gray-800">${b.customerName}</h3>
                            ${b.isGift ? '<span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">GIFT</span>' : ''}
                            ${b.staffPayment && b.staffPayment[user.name] ? 
                                '<span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Payment Confirmed</span>' :
                                !b.isGift ? '<span class="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">Payment Pending</span>' : ''
                            }
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <p><i class="fas fa-calendar mr-2 text-rose-400"></i>${formatDate(b.date)} at ${b.time}</p>
                            <p><i class="fas fa-spa mr-2 text-rose-400"></i>${b.service}</p>
                            <p><i class="fas fa-map-marker-alt mr-2 text-rose-400"></i>${b.area}</p>
                            <p><i class="fas fa-clock mr-2 text-rose-400"></i>${b.duration} min</p>
                            ${!b.isGift ? `<p><i class="fas fa-money-bill mr-2 text-rose-400"></i>${b.price} QAR</p>` : '<p class="text-purple-600"><i class="fas fa-gift mr-2"></i>Complimentary</p>'}
                        </div>
                    </div>
                    <button onclick="viewBookingDetails(${b.id})" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        `).join('')
        : '<p class="text-gray-500 text-center py-8">No bookings assigned to you</p>';
    
    document.getElementById('staffSchedule').innerHTML = scheduleHtml;
}

// Staff Management Functions
function loadStaff() {
    const users = getUsers().filter(u => u.role === 'staff');
    
    const staffHtml = users.map(staff => `
        <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-start justify-between mb-3">
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-gray-800">${staff.name}</h3>
                    <p class="text-sm text-gray-600">${staff.specialization || 'General'}</p>
                </div>
                <span class="px-2 py-1 text-xs rounded-full ${staff.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}">
                    ${staff.active ? 'Active' : 'Inactive'}
                </span>
            </div>
            <div class="space-y-1 text-sm text-gray-600">
                <p><i class="fas fa-phone mr-2 text-rose-400"></i>${staff.phone}</p>
                <p><i class="fas fa-user mr-2 text-rose-400"></i>Username: ${staff.username}</p>
            </div>
            <div class="mt-3 flex gap-2">
                <button onclick="toggleStaffStatus('${staff.username}')" class="flex-1 px-3 py-1 text-sm rounded ${staff.active ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-green-500 text-white hover:bg-green-600'}">
                    ${staff.active ? 'Deactivate' : 'Activate'}
                </button>
                <button onclick="deleteStaff('${staff.username}')" class="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('staffList').innerHTML = staffHtml || '<p class="text-gray-500 text-center py-8 col-span-full">No staff members</p>';
}

function openStaffModal() {
    document.getElementById('staffModal').classList.remove('hidden');
}

function closeStaffModal() {
    document.getElementById('staffModal').classList.add('hidden');
    document.getElementById('staffForm').reset();
}

function handleStaffSave(e) {
    e.preventDefault();
    
    const staffData = {
        username: document.getElementById('staffUsername').value,
        password: document.getElementById('staffPassword').value,
        role: 'staff',
        name: document.getElementById('staffName').value,
        phone: document.getElementById('staffPhone').value,
        specialization: document.getElementById('staffSpecialization').value,
        active: document.getElementById('staffActive').checked
    };
    
    let users = getUsers();
    
    // Check if username exists
    if (users.find(u => u.username === staffData.username)) {
        alert('Username already exists!');
        return;
    }
    
    users.push(staffData);
    saveUsers(users);
    
    closeStaffModal();
    loadStaff();
    alert('Staff member added successfully!');
}

function toggleStaffStatus(username) {
    let users = getUsers();
    const staff = users.find(u => u.username === username);
    if (staff) {
        staff.active = !staff.active;
        saveUsers(users);
        loadStaff();
    }
}

function deleteStaff(username) {
    if (confirm('Are you sure you want to delete this staff member?')) {
        let users = getUsers();
        users = users.filter(u => u.username !== username);
        saveUsers(users);
        loadStaff();
    }
}

// Gift Functions
function openGiftModal() {
    document.getElementById('giftModal').classList.remove('hidden');
}

function closeGiftModal() {
    document.getElementById('giftModal').classList.add('hidden');
}

// Expense Functions
function showExpenseType(type) {
    // Update expense type
    document.getElementById('expenseType').value = type;
    
    // Update tabs
    document.querySelectorAll('.expense-type-tab').forEach(tab => {
        tab.classList.remove('border-rose-400', 'text-rose-400');
    });
    event.target.classList.add('border-rose-400', 'text-rose-400');
    
    // Show/hide expense lists
    document.querySelectorAll('.expense-list').forEach(list => {
        list.classList.add('hidden');
    });
    document.getElementById(type + 'Expenses').classList.remove('hidden');
}

function toggleExpenseForm() {
    const formContainer = document.getElementById('expenseFormContainer');
    formContainer.classList.toggle('hidden');
    
    if (!formContainer.classList.contains('hidden')) {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('expenseDate').value = today;
        
        // Reset products container to single item
        document.getElementById('expenseProductsContainer').innerHTML = `
            <div class="expense-product-item flex gap-2 mb-2">
                <input type="text" class="product-name flex-1 px-4 py-2 border border-gray-300 rounded-lg" placeholder="Product name *" required>
                <input type="number" class="product-price w-32 px-4 py-2 border border-gray-300 rounded-lg" placeholder="Price *" step="0.01" min="0" required onchange="calculateExpenseTotal()">
                <button type="button" onclick="removeExpenseProduct(this)" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        calculateExpenseTotal();
    }
}

function addExpenseProduct() {
    const container = document.getElementById('expenseProductsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'expense-product-item flex gap-2 mb-2';
    newItem.innerHTML = `
        <input type="text" class="product-name flex-1 px-4 py-2 border border-gray-300 rounded-lg" placeholder="Product name *" required>
        <input type="number" class="product-price w-32 px-4 py-2 border border-gray-300 rounded-lg" placeholder="Price *" step="0.01" min="0" required onchange="calculateExpenseTotal()">
        <button type="button" onclick="removeExpenseProduct(this)" class="text-red-500 hover:text-red-700">
            <i class="fas fa-times"></i>
        </button>
    `;
    container.appendChild(newItem);
}

function removeExpenseProduct(button) {
    const container = document.getElementById('expenseProductsContainer');
    // Keep at least one product
    if (container.children.length > 1) {
        button.closest('.expense-product-item').remove();
        calculateExpenseTotal();
    } else {
        alert('You must have at least one product!');
    }
}

function calculateExpenseTotal() {
    let total = 0;
    const priceInputs = document.querySelectorAll('.product-price');
    priceInputs.forEach(input => {
        const price = parseFloat(input.value) || 0;
        total += price;
    });
    document.getElementById('expenseTotal').textContent = total.toFixed(2) + ' QAR';
}

function handleExpenseSave(e) {
    e.preventDefault();
    
    // Collect all products
    const products = [];
    const productItems = document.querySelectorAll('.expense-product-item');
    let totalPrice = 0;
    
    productItems.forEach(item => {
        const name = item.querySelector('.product-name').value.trim();
        const price = parseFloat(item.querySelector('.product-price').value) || 0;
        
        if (name && price > 0) {
            products.push({ name, price });
            totalPrice += price;
        }
    });
    
    if (products.length === 0) {
        alert('Please add at least one product with a valid price!');
        return;
    }
    
    const expenseData = {
        id: Date.now(),
        type: document.getElementById('expenseType').value,
        company: document.getElementById('expenseCompany').value,
        date: document.getElementById('expenseDate').value,
        products: products,
        totalPrice: totalPrice,
        payment: document.getElementById('expensePayment').value,
        note: document.getElementById('expenseNote').value,
        createdAt: new Date().toISOString()
    };
    
    let expenses = getExpenses();
    expenses.push(expenseData);
    saveExpenses(expenses);
    
    document.getElementById('expenseForm').reset();
    toggleExpenseForm();
    loadExpenses();
    alert('Expense saved successfully!');
}

function loadExpenses() {
    const expenses = getExpenses();
    const consumables = expenses.filter(e => e.type === 'consumables');
    const assets = expenses.filter(e => e.type === 'assets');
    const admin = expenses.filter(e => e.type === 'admin');
    
    function renderExpenseList(expenseList, containerId) {
        const html = expenseList.length > 0
            ? expenseList.map(exp => {
                // Handle both old format (string) and new format (array)
                let productsHtml = '';
                let totalPrice = 0;
                
                if (Array.isArray(exp.products)) {
                    // New format with multiple products
                    productsHtml = exp.products.map(p => 
                        `<div class="flex justify-between text-sm mb-1">
                            <span class="text-gray-700">${p.name}</span>
                            <span class="font-medium text-gray-800">${p.price.toFixed(2)} QAR</span>
                        </div>`
                    ).join('');
                    totalPrice = exp.totalPrice || exp.products.reduce((sum, p) => sum + p.price, 0);
                } else {
                    // Old format with single product string
                    productsHtml = `<p class="text-sm text-gray-700 mb-2">${exp.products}</p>`;
                    totalPrice = exp.price || 0;
                }
                
                return `
                    <div class="bg-white rounded-lg shadow p-4 mb-3">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex-1">
                                <h4 class="font-semibold text-gray-800">${exp.company}</h4>
                                <p class="text-sm text-gray-600">${formatDate(exp.date)}</p>
                            </div>
                            <div class="text-right">
                                <p class="font-bold text-rose-400">${totalPrice.toFixed(2)} QAR</p>
                                <p class="text-xs text-gray-600">${exp.payment}</p>
                            </div>
                        </div>
                        <div class="mb-2 bg-gray-50 p-2 rounded">
                            ${productsHtml}
                        </div>
                        ${exp.note ? `<p class="text-xs text-gray-500 italic">${exp.note}</p>` : ''}
                        <button onclick="deleteExpense(${exp.id})" class="mt-2 text-red-500 hover:text-red-700 text-sm">
                            <i class="fas fa-trash mr-1"></i>Delete
                        </button>
                    </div>
                `;
            }).join('')
            : '<p class="text-gray-500 text-center py-8">No expenses recorded</p>';
        
        document.getElementById(containerId).innerHTML = html;
    }
    
    renderExpenseList(consumables, 'consumablesExpenses');
    renderExpenseList(assets, 'assetsExpenses');
    renderExpenseList(admin, 'adminExpenses');
}

function deleteExpense(id) {
    if (confirm('Are you sure you want to delete this expense?')) {
        let expenses = getExpenses();
        expenses = expenses.filter(e => e.id !== id);
        saveExpenses(expenses);
        loadExpenses();
    }
}

// Salary Functions
function loadStaffSelectForSalary() {
    const users = getUsers().filter(u => u.role === 'staff' && u.active);
    const select = document.getElementById('salaryStaff');
    
    select.innerHTML = '<option value="">Select Staff</option>';
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = user.name;
        select.appendChild(option);
    });
}

function openSalaryModal() {
    document.getElementById('salaryModal').classList.remove('hidden');
    const currentMonth = new Date().toISOString().slice(0, 7);
    document.getElementById('salaryMonth').value = currentMonth;
    calculateTotal();
}

function closeSalaryModal() {
    document.getElementById('salaryModal').classList.add('hidden');
    document.getElementById('salaryForm').reset();
}

function addDeduction() {
    const container = document.getElementById('deductionsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'deduction-item bg-white p-3 rounded-lg mb-2 border border-red-200';
    newItem.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <input type="text" class="deduction-label px-3 py-2 border border-gray-300 rounded-lg" placeholder="Reason (e.g., Late arrival, Damage)">
            <input type="date" class="deduction-date px-3 py-2 border border-gray-300 rounded-lg">
            <div class="flex gap-2">
                <input type="number" class="deduction-amount flex-1 px-3 py-2 border border-gray-300 rounded-lg" placeholder="Amount" step="0.01" value="0" min="0" onchange="calculateTotal()">
                <button type="button" onclick="removeDeduction(this)" class="text-red-500 hover:text-red-700 px-2">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <input type="text" class="deduction-note w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Additional notes (optional)">
    `;
    container.appendChild(newItem);
}

function removeDeduction(button) {
    button.closest('.deduction-item').remove();
    calculateTotal();
}

function addAdvance() {
    const container = document.getElementById('advancesContainer');
    const newItem = document.createElement('div');
    newItem.className = 'advance-item bg-white p-3 rounded-lg mb-2 border border-orange-200';
    newItem.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <input type="text" class="advance-label px-3 py-2 border border-gray-300 rounded-lg" placeholder="Reason (e.g., Emergency, Medical)">
            <input type="date" class="advance-date px-3 py-2 border border-gray-300 rounded-lg">
            <div class="flex gap-2">
                <input type="number" class="advance-amount flex-1 px-3 py-2 border border-gray-300 rounded-lg" placeholder="Amount" step="0.01" value="0" min="0" onchange="calculateTotal()">
                <button type="button" onclick="removeAdvance(this)" class="text-red-500 hover:text-red-700 px-2">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <input type="text" class="advance-note w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Additional notes (optional)">
    `;
    container.appendChild(newItem);
}

function removeAdvance(button) {
    button.closest('.advance-item').remove();
    calculateTotal();
}

function calculateTotal() {
    // Additions
    const basic = parseFloat(document.getElementById('salaryBasic').value) || 0;
    const accommodation = parseFloat(document.getElementById('salaryAccommodation').value) || 0;
    const transportation = parseFloat(document.getElementById('salaryTransportation').value) || 0;
    const mobile = parseFloat(document.getElementById('salaryMobile').value) || 0;
    const overtime = parseFloat(document.getElementById('salaryOvertime').value) || 0;
    const incentive = parseFloat(document.getElementById('salaryIncentive').value) || 0;
    
    let total = basic + accommodation + transportation + mobile + overtime + incentive;
    
    // Deductions
    const deductionAmounts = document.querySelectorAll('.deduction-amount');
    deductionAmounts.forEach(input => {
        total -= parseFloat(input.value) || 0;
    });
    
    // Advances
    const advanceAmounts = document.querySelectorAll('.advance-amount');
    advanceAmounts.forEach(input => {
        total -= parseFloat(input.value) || 0;
    });
    
    document.getElementById('salaryTotal').textContent = total.toFixed(2) + ' QAR';
}

function handleSalarySave(e) {
    e.preventDefault();
    
    // Collect deductions with dates and notes
    const deductions = [];
    document.querySelectorAll('.deduction-item').forEach(item => {
        const label = item.querySelector('.deduction-label').value;
        const date = item.querySelector('.deduction-date').value;
        const amount = parseFloat(item.querySelector('.deduction-amount').value) || 0;
        const note = item.querySelector('.deduction-note').value;
        if (label && amount > 0) {
            deductions.push({ label, date, amount, note });
        }
    });
    
    // Collect advances with dates and notes
    const advances = [];
    document.querySelectorAll('.advance-item').forEach(item => {
        const label = item.querySelector('.advance-label').value;
        const date = item.querySelector('.advance-date').value;
        const amount = parseFloat(item.querySelector('.advance-amount').value) || 0;
        const note = item.querySelector('.advance-note').value;
        if (label && amount > 0) {
            advances.push({ label, date, amount, note });
        }
    });
    
    const salaryData = {
        id: Date.now(),
        staff: document.getElementById('salaryStaff').value,
        month: document.getElementById('salaryMonth').value,
        basic: parseFloat(document.getElementById('salaryBasic').value) || 0,
        accommodation: parseFloat(document.getElementById('salaryAccommodation').value) || 0,
        transportation: parseFloat(document.getElementById('salaryTransportation').value) || 0,
        mobile: parseFloat(document.getElementById('salaryMobile').value) || 0,
        overtime: parseFloat(document.getElementById('salaryOvertime').value) || 0,
        incentive: parseFloat(document.getElementById('salaryIncentive').value) || 0,
        deductions: deductions,
        advances: advances,
        total: parseFloat(document.getElementById('salaryTotal').textContent.replace(' QAR', '')),
        paymentMethod: document.getElementById('salaryPaymentMethod').value,
        processedAt: new Date().toISOString()
    };
    
    let salaries = getSalaries();
    salaries.push(salaryData);
    saveSalaries(salaries);
    
    closeSalaryModal();
    loadSalaries();
    alert('Salary processed successfully!');
}

function loadSalaries() {
    const salaries = getSalaries();
    
    // Sort by date (most recent first)
    salaries.sort((a, b) => new Date(b.processedAt) - new Date(a.processedAt));
    
    const html = salaries.length > 0
        ? salaries.map(sal => `
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <h3 class="font-bold text-lg text-gray-800">${sal.staff}</h3>
                        <p class="text-sm text-gray-600">${formatMonth(sal.month)}</p>
                        <p class="text-xs text-gray-500">Processed: ${formatDate(sal.processedAt.split('T')[0])}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold text-rose-400">${sal.total} QAR</p>
                        <p class="text-xs text-gray-600">${sal.paymentMethod}</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div class="bg-green-50 p-2 rounded">
                        <p class="text-xs text-gray-600">Basic</p>
                        <p class="font-medium text-green-700">${sal.basic} QAR</p>
                    </div>
                    ${sal.accommodation > 0 ? `
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-gray-600">Accommodation</p>
                            <p class="font-medium text-green-700">${sal.accommodation} QAR</p>
                        </div>
                    ` : ''}
                    ${sal.transportation > 0 ? `
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-gray-600">Transportation</p>
                            <p class="font-medium text-green-700">${sal.transportation} QAR</p>
                        </div>
                    ` : ''}
                    ${sal.mobile > 0 ? `
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-gray-600">Mobile</p>
                            <p class="font-medium text-green-700">${sal.mobile} QAR</p>
                        </div>
                    ` : ''}
                    ${sal.overtime > 0 ? `
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-gray-600">Overtime</p>
                            <p class="font-medium text-green-700">${sal.overtime} QAR</p>
                        </div>
                    ` : ''}
                    ${sal.incentive > 0 ? `
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-gray-600">Incentive</p>
                            <p class="font-medium text-green-700">${sal.incentive} QAR</p>
                        </div>
                    ` : ''}
                </div>
                
                ${sal.deductions.length > 0 || sal.advances.length > 0 ? `
                    <div class="border-t pt-3 space-y-3">
                        ${sal.deductions.map(d => `
                            <div class="bg-red-50 p-2 rounded">
                                <div class="flex justify-between items-start mb-1">
                                    <span class="text-red-700 font-medium text-sm">- ${d.label}</span>
                                    <span class="text-red-700 font-bold">${d.amount} QAR</span>
                                </div>
                                ${d.date ? `<p class="text-xs text-gray-600">Date: ${formatDate(d.date)}</p>` : ''}
                                ${d.note ? `<p class="text-xs text-gray-600 italic">${d.note}</p>` : ''}
                            </div>
                        `).join('')}
                        ${sal.advances.map(a => `
                            <div class="bg-orange-50 p-2 rounded">
                                <div class="flex justify-between items-start mb-1">
                                    <span class="text-orange-700 font-medium text-sm">- ${a.label}</span>
                                    <span class="text-orange-700 font-bold">${a.amount} QAR</span>
                                </div>
                                ${a.date ? `<p class="text-xs text-gray-600">Date: ${formatDate(a.date)}</p>` : ''}
                                ${a.note ? `<p class="text-xs text-gray-600 italic">${a.note}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                <button onclick="deleteSalary(${sal.id})" class="mt-3 text-red-500 hover:text-red-700 text-sm">
                    <i class="fas fa-trash mr-1"></i>Delete
                </button>
            </div>
        `).join('')
        : '<p class="text-gray-500 text-center py-8">No salaries processed yet</p>';
    
    document.getElementById('salariesList').innerHTML = html;
}

function deleteSalary(id) {
    if (confirm('Are you sure you want to delete this salary record?')) {
        let salaries = getSalaries();
        salaries = salaries.filter(s => s.id !== id);
        saveSalaries(salaries);
        loadSalaries();
    }
}

// Transportation Functions
function openTransportationModal() {
    document.getElementById('transportationModal').classList.remove('hidden');
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('transportDate').value = today;
}

function closeTransportationModal() {
    document.getElementById('transportationModal').classList.add('hidden');
    document.getElementById('transportationForm').reset();
    document.getElementById('transportPreview').innerHTML = '';
}

function previewTransportImages() {
    const files = document.getElementById('transportPictures').files;
    const preview = document.getElementById('transportPreview');
    preview.innerHTML = '';
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'image-preview';
            img.onclick = function() {
                viewInvoice(e.target.result);
            };
            preview.appendChild(img);
        };
        
        reader.readAsDataURL(file);
    }
}

function handleTransportationSave(e) {
    e.preventDefault();
    
    const user = getCurrentUser();
    const files = document.getElementById('transportPictures').files;
    const pictures = [];
    
    const saveTransportation = () => {
        const transportData = {
            id: Date.now(),
            staff: user.name,
            date: document.getElementById('transportDate').value,
            trips: parseInt(document.getElementById('transportTrips').value),
            amount: parseFloat(document.getElementById('transportAmount').value) || 0,
            tips: parseFloat(document.getElementById('transportTips').value) || 0,
            pictures: pictures,
            createdAt: new Date().toISOString()
        };
        
        let transportation = getTransportation();
        transportation.push(transportData);
        saveTransportation(transportation);
        
        closeTransportationModal();
        loadTransportation();
        alert('Transportation logged successfully!');
    };
    
    if (files.length > 0) {
        let processed = 0;
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = function(e) {
                pictures.push(e.target.result);
                processed++;
                if (processed === files.length) {
                    saveTransportation();
                }
            };
            reader.readAsDataURL(files[i]);
        }
    } else {
        saveTransportation();
    }
}

function loadTransportation() {
    const user = getCurrentUser();
    const transportation = getTransportation().filter(t => t.staff === user.name);
    
    // Sort by date (most recent first)
    transportation.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const html = transportation.length > 0
        ? transportation.map(t => `
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <p class="font-semibold text-gray-800">${formatDate(t.date)}</p>
                        <p class="text-sm text-gray-600">${t.trips} trip${t.trips > 1 ? 's' : ''}</p>
                        ${t.amount ? `<p class="text-lg font-bold text-rose-400 mt-1">${t.amount.toFixed(2)} QAR</p>` : ''}
                    </div>
                    <div class="text-right">
                        ${t.tips > 0 ? `<p class="text-green-600 font-medium">${t.tips} QAR tips</p>` : ''}
                    </div>
                </div>
                
                ${t.pictures && t.pictures.length > 0 ? `
                    <div class="grid grid-cols-3 gap-2 mb-3">
                        ${t.pictures.map(pic => `
                            <img src="${pic}" class="image-preview" onclick="viewInvoice('${pic}')">
                        `).join('')}
                    </div>
                ` : ''}
                
                <button onclick="deleteTransportation(${t.id})" class="text-red-500 hover:text-red-700 text-sm">
                    <i class="fas fa-trash mr-1"></i>Delete
                </button>
            </div>
        `).join('')
        : '<p class="text-gray-500 text-center py-8">No transportation logs yet</p>';
    
    document.getElementById('transportationList').innerHTML = html;
}

function deleteTransportation(id) {
    if (confirm('Are you sure you want to delete this transportation log?')) {
        let transportation = getTransportation();
        transportation = transportation.filter(t => t.id !== id);
        saveTransportation(transportation);
        loadTransportation();
    }
}

// Transportation Reports Functions (Admin)
function loadTransportationReports() {
    const transportation = getTransportation();
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // Calculate statistics
    const todayLogs = transportation.filter(t => t.date === todayStr);
    const todayTrips = todayLogs.reduce((sum, t) => sum + t.trips, 0);
    
    // Weekly
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekLogs = transportation.filter(t => {
        const logDate = new Date(t.date);
        return logDate >= weekAgo && logDate <= today;
    });
    const weekTrips = weekLogs.reduce((sum, t) => sum + t.trips, 0);
    
    // Monthly
    const monthAgo = new Date(today);
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    const monthLogs = transportation.filter(t => {
        const logDate = new Date(t.date);
        return logDate >= monthAgo && logDate <= today;
    });
    const monthTrips = monthLogs.reduce((sum, t) => sum + t.trips, 0);
    
    // Total amounts and tips
    const totalAmount = monthLogs.reduce((sum, t) => sum + (t.amount || 0), 0);
    const totalTips = monthLogs.reduce((sum, t) => sum + (t.tips || 0), 0);
    
    // Update summary cards
    document.getElementById('transportTodayTrips').textContent = todayTrips;
    document.getElementById('transportWeekTrips').textContent = weekTrips;
    document.getElementById('transportMonthTrips').textContent = monthTrips;
    document.getElementById('transportTotalAmount').textContent = totalAmount.toFixed(2) + ' QAR';
    document.getElementById('transportTotalTips').textContent = totalTips.toFixed(2) + ' QAR';
    
    // Load staff filter
    const users = getUsers().filter(u => u.role === 'staff' && u.active);
    const staffSelect = document.getElementById('transportStaffFilter');
    staffSelect.innerHTML = '<option value="">All Staff</option>';
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = user.name;
        staffSelect.appendChild(option);
    });
    
    // Load transportation list
    filterTransportationReports();
}

function filterTransportationReports() {
    let transportation = getTransportation();
    const period = document.getElementById('transportPeriodFilter').value;
    const staffFilter = document.getElementById('transportStaffFilter').value;
    const sortFilter = document.getElementById('transportSortFilter').value;
    
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // Filter by period
    if (period === 'today') {
        transportation = transportation.filter(t => t.date === todayStr);
    } else if (period === 'week') {
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        transportation = transportation.filter(t => {
            const logDate = new Date(t.date);
            return logDate >= weekAgo && logDate <= today;
        });
    } else if (period === 'month') {
        const monthAgo = new Date(today);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        transportation = transportation.filter(t => {
            const logDate = new Date(t.date);
            return logDate >= monthAgo && logDate <= today;
        });
    }
    
    // Filter by staff
    if (staffFilter) {
        transportation = transportation.filter(t => t.staff === staffFilter);
    }
    
    // Sort
    switch(sortFilter) {
        case 'date_desc':
            transportation.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date_asc':
            transportation.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'trips_desc':
            transportation.sort((a, b) => b.trips - a.trips);
            break;
        case 'amount_desc':
            transportation.sort((a, b) => (b.amount || 0) - (a.amount || 0));
            break;
        case 'tips_desc':
            transportation.sort((a, b) => (b.tips || 0) - (a.tips || 0));
            break;
    }
    
    // Render list
    const html = transportation.length > 0
        ? transportation.map(t => `
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 class="font-bold text-lg text-gray-800">${t.staff}</h3>
                            <span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                ${t.trips} trip${t.trips > 1 ? 's' : ''}
                            </span>
                            ${t.amount ? `
                                <span class="px-2 py-1 text-xs rounded-full bg-rose-100 text-rose-800 font-semibold">
                                    ${t.amount.toFixed(2)} QAR
                                </span>
                            ` : ''}
                            ${t.tips > 0 ? `
                                <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                    ${t.tips} QAR tips
                                </span>
                            ` : ''}
                        </div>
                        <p class="text-sm text-gray-600">
                            <i class="fas fa-calendar mr-2 text-rose-400"></i>${formatDate(t.date)}
                        </p>
                        <p class="text-xs text-gray-500 mt-1">
                            Logged: ${formatDate(t.createdAt.split('T')[0])} at ${new Date(t.createdAt).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}
                        </p>
                    </div>
                    <div class="flex flex-col items-end gap-2">
                        ${t.pictures && t.pictures.length > 0 ? `
                            <button onclick="viewTransportationPictures(${t.id})" class="text-blue-500 hover:text-blue-700 text-sm">
                                <i class="fas fa-images mr-1"></i>${t.pictures.length} photo${t.pictures.length > 1 ? 's' : ''}
                            </button>
                        ` : '<p class="text-xs text-gray-400">No photos</p>'}
                    </div>
                </div>
                
                ${t.pictures && t.pictures.length > 0 ? `
                    <div class="grid grid-cols-4 md:grid-cols-6 gap-2 mt-3">
                        ${t.pictures.slice(0, 6).map(pic => `
                            <img src="${pic}" class="image-preview" onclick="viewInvoice('${pic}')">
                        `).join('')}
                        ${t.pictures.length > 6 ? `
                            <div class="image-preview bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                                +${t.pictures.length - 6}
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `).join('')
        : '<p class="text-gray-500 text-center py-8">No transportation logs found for selected filters</p>';
    
    document.getElementById('transportationReportsList').innerHTML = html;
}

function viewTransportationPictures(transportId) {
    const transportation = getTransportation().find(t => t.id === transportId);
    if (!transportation || !transportation.pictures || transportation.pictures.length === 0) {
        alert('No pictures available');
        return;
    }
    
    // Create a modal to show all pictures
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl modal-content">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold text-gray-800">Transportation Pictures - ${transportation.staff}</h3>
                        <button onclick="this.closest('.modal-overlay').remove()" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    <p class="text-sm text-gray-600 mb-4">${formatDate(transportation.date)} - ${transportation.trips} trips</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                        ${transportation.pictures.map(pic => `
                            <img src="${pic}" class="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80" onclick="viewInvoice('${pic}')">
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Reports Functions
function loadReports() {
    generateRevenueReport();
    updateStaffReport();
}

function loadStaffSelectForReports() {
    const users = getUsers().filter(u => u.role === 'staff' && u.active);
    const select = document.getElementById('staffReportSelect');
    
    select.innerHTML = '<option value="">All Staff</option>';
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = user.name;
        select.appendChild(option);
    });
}

function generateRevenueReport() {
    const bookings = getBookings().filter(b => b.paymentStatus === 'paid' && !b.isGift);
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // Daily revenue
    const dailyBookings = bookings.filter(b => b.date === todayStr);
    const dailyRevenue = dailyBookings.reduce((sum, b) => sum + b.price, 0);
    document.getElementById('reportDailyRevenue').textContent = dailyRevenue.toFixed(2) + ' QAR';
    
    // Weekly revenue
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weeklyBookings = bookings.filter(b => {
        const bookingDate = new Date(b.date);
        return bookingDate >= weekAgo && bookingDate <= today;
    });
    const weeklyRevenue = weeklyBookings.reduce((sum, b) => sum + b.price, 0);
    document.getElementById('reportWeeklyRevenue').textContent = weeklyRevenue.toFixed(2) + ' QAR';
    
    // Monthly revenue
    const monthAgo = new Date(today);
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    const monthlyBookings = bookings.filter(b => {
        const bookingDate = new Date(b.date);
        return bookingDate >= monthAgo && bookingDate <= today;
    });
    const monthlyRevenue = monthlyBookings.reduce((sum, b) => sum + b.price, 0);
    document.getElementById('reportMonthlyRevenue').textContent = monthlyRevenue.toFixed(2) + ' QAR';
    
    // Custom range (if dates selected)
    const startDate = document.getElementById('revenueStartDate').value;
    const endDate = document.getElementById('revenueEndDate').value;
    
    if (startDate && endDate) {
        const rangeBookings = bookings.filter(b => b.date >= startDate && b.date <= endDate);
        const rangeRevenue = rangeBookings.reduce((sum, b) => sum + b.price, 0);
        
        const detailsHtml = `
            <div class="border-t pt-4">
                <h4 class="font-semibold text-gray-800 mb-3">Custom Range (${formatDate(startDate)} - ${formatDate(endDate)})</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div class="bg-gray-50 p-4 rounded">
                        <p class="text-sm text-gray-600">Total Bookings</p>
                        <p class="text-2xl font-bold text-gray-800">${rangeBookings.length}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded">
                        <p class="text-sm text-gray-600">Total Revenue</p>
                        <p class="text-2xl font-bold text-green-600">${rangeRevenue.toFixed(2)} QAR</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded">
                        <p class="text-sm text-gray-600">Average per Booking</p>
                        <p class="text-2xl font-bold text-blue-600">${(rangeRevenue / (rangeBookings.length || 1)).toFixed(2)} QAR</p>
                    </div>
                </div>
                
                <div class="space-y-2">
                    <h5 class="font-medium text-gray-800">Breakdown by Service</h5>
                    ${Object.entries(
                        rangeBookings.reduce((acc, b) => {
                            if (!acc[b.category]) acc[b.category] = { count: 0, revenue: 0 };
                            acc[b.category].count++;
                            acc[b.category].revenue += b.price;
                            return acc;
                        }, {})
                    ).map(([category, data]) => `
                        <div class="flex justify-between p-2 bg-gray-50 rounded">
                            <span class="text-sm font-medium">${category}</span>
                            <div class="text-sm">
                                <span class="text-gray-600">${data.count} booking${data.count > 1 ? 's' : ''}</span>
                                <span class="ml-3 font-medium text-green-600">${data.revenue.toFixed(2)} QAR</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.getElementById('revenueReportDetails').innerHTML = detailsHtml;
    }
}

function showStaffReportPeriod(period) {
    // Update tabs
    document.querySelectorAll('.staff-report-tab').forEach(tab => {
        tab.classList.remove('border-rose-400', 'text-rose-400');
    });
    event.target.classList.add('border-rose-400', 'text-rose-400');
    
    // Show/hide report content
    document.querySelectorAll('.staff-report-content').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(period + 'StaffReport').classList.remove('hidden');
    
    updateStaffReport();
}

function updateStaffReport() {
    const selectedStaff = document.getElementById('staffReportSelect').value;
    const bookings = getBookings();
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // Filter by staff if selected
    let filteredBookings = selectedStaff 
        ? bookings.filter(b => b.staff.includes(selectedStaff))
        : bookings;
    
    // Daily report
    const dailyBookings = filteredBookings.filter(b => b.date === todayStr);
    renderStaffReport(dailyBookings, 'dailyStaffReport', 'Today');
    
    // Weekly report
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weeklyBookings = filteredBookings.filter(b => {
        const bookingDate = new Date(b.date);
        return bookingDate >= weekAgo && bookingDate <= today;
    });
    renderStaffReport(weeklyBookings, 'weeklyStaffReport', 'This Week');
    
    // Monthly report
    const monthAgo = new Date(today);
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    const monthlyBookings = filteredBookings.filter(b => {
        const bookingDate = new Date(b.date);
        return bookingDate >= monthAgo && bookingDate <= today;
    });
    renderStaffReport(monthlyBookings, 'monthlyStaffReport', 'This Month');
}

function renderStaffReport(bookings, containerId, periodLabel) {
    const selectedStaff = document.getElementById('staffReportSelect').value;
    
    if (selectedStaff) {
        // Individual staff report
        const completed = bookings.filter(b => b.completed).length;
        const revenue = bookings.filter(b => b.paymentStatus === 'paid' && !b.isGift).reduce((sum, b) => sum + b.price, 0);
        
        const html = `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div class="bg-blue-50 p-4 rounded">
                    <p class="text-sm text-gray-600">Total Bookings</p>
                    <p class="text-2xl font-bold text-blue-600">${bookings.length}</p>
                </div>
                <div class="bg-green-50 p-4 rounded">
                    <p class="text-sm text-gray-600">Completed</p>
                    <p class="text-2xl font-bold text-green-600">${completed}</p>
                </div>
                <div class="bg-purple-50 p-4 rounded">
                    <p class="text-sm text-gray-600">Revenue Generated</p>
                    <p class="text-2xl font-bold text-purple-600">${revenue.toFixed(2)} QAR</p>
                </div>
            </div>
            
            <div class="space-y-2">
                ${bookings.map(b => `
                    <div class="flex justify-between p-3 bg-gray-50 rounded">
                        <div class="flex-1">
                            <p class="font-medium">${b.customerName}</p>
                            <p class="text-sm text-gray-600">${formatDate(b.date)} - ${b.service}</p>
                        </div>
                        ${!b.isGift ? `<p class="font-medium text-green-600">${b.price} QAR</p>` : '<p class="text-purple-600">Gift</p>'}
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById(containerId).innerHTML = html || `<p class="text-gray-500 text-center py-8">No bookings for ${periodLabel.toLowerCase()}</p>`;
    } else {
        // All staff summary
        const staffSummary = {};
        const users = getUsers().filter(u => u.role === 'staff' && u.active);
        
        users.forEach(staff => {
            const staffBookings = bookings.filter(b => b.staff.includes(staff.name));
            const revenue = staffBookings.filter(b => b.paymentStatus === 'paid' && !b.isGift).reduce((sum, b) => sum + b.price, 0);
            
            staffSummary[staff.name] = {
                count: staffBookings.length,
                revenue: revenue
            };
        });
        
        const html = `
            <div class="space-y-3">
                ${Object.entries(staffSummary).map(([name, data]) => `
                    <div class="flex justify-between items-center p-4 bg-gray-50 rounded">
                        <div>
                            <p class="font-medium text-gray-800">${name}</p>
                            <p class="text-sm text-gray-600">${data.count} booking${data.count !== 1 ? 's' : ''}</p>
                        </div>
                        <p class="text-xl font-bold text-green-600">${data.revenue.toFixed(2)} QAR</p>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById(containerId).innerHTML = html || `<p class="text-gray-500 text-center py-8">No bookings for ${periodLabel.toLowerCase()}</p>`;
    }
}

// Utility Functions
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatMonth(monthStr) {
    const [year, month] = monthStr.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', initializeApp);
