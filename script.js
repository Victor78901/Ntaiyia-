// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Bet button functionality
document.querySelectorAll('.bet-button').forEach(button => {
    button.addEventListener('click', function() {
        const eventCard = this.closest('.event-card');
        const eventName = eventCard.querySelector('h3').textContent;
        const eventDetails = eventCard.querySelector('p').textContent;
        
        // Check if user is logged in
        if (!isLoggedIn()) {
            alert('Please login to place bets.');
            openLoginModal();
            return;
        }
        
        alert(`You selected: ${eventName} - ${eventDetails}\n\nIn a real betting site, this would open a bet slip.`);
    });
});

// CTA button functionality
document.querySelector('.cta-button').addEventListener('click', function() {
    if (!isLoggedIn()) {
        alert('Please sign up or log in to start betting.');
        openSignupModal();
    } else {
        alert('Welcome back! Ready to place some bets?');
    }
});

// Modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userGreeting = document.getElementById('userGreeting');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Open modals
loginBtn.addEventListener('click', openLoginModal);
signupBtn.addEventListener('click', openSignupModal);

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('active');
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
    }
});

// Switch between login and signup
switchToSignup.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.remove('active');
    setTimeout(() => openSignupModal(), 300);
});

switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.remove('active');
    setTimeout(() => openLoginModal(), 300);
});

// Login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username] && users[username] === password) {
        // Login successful
        localStorage.setItem('currentUser', username);
        updateUIForLoggedInUser(username);
        loginModal.classList.remove('active');
        loginForm.reset();
        alert(`Welcome back, ${username}!`);
    } else {
        alert('Invalid username or password. Please try again or sign up.');
    }
});

// Signup form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (password.length < 4) {
        alert('Password must be at least 4 characters long.');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username]) {
        alert('Username already exists. Please choose a different one.');
        return;
    }
    
    // Save new user
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    localStorage.setItem('currentUser', username);
    updateUIForLoggedInUser(username);
    signupModal.classList.remove('active');
    signupForm.reset();
    alert(`Account created successfully! Welcome, ${username}!`);
});

// Logout functionality
logoutBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        updateUIForLoggedOutUser();
        alert('You have been logged out successfully.');
    }
});

// Helper functions
function openLoginModal() {
    loginModal.classList.add('active');
}

function openSignupModal() {
    signupModal.classList.add('active');
}

function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function updateUIForLoggedInUser(username) {
    loginBtn.style.display = 'none';
    signupBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    userGreeting.textContent = `Welcome, ${username}!`;
}

function updateUIForLoggedOutUser() {
    loginBtn.style.display = 'block';
    signupBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
    userGreeting.textContent = '';
}

// Check login status on page load
function checkLoginStatus() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        updateUIForLoggedInUser(currentUser);
    } else {
        updateUIForLoggedOutUser();
    }
}

// Initialize on page load
checkLoginStatus();

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe event cards and promo cards
document.querySelectorAll('.event-card, .promo-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Initialize cards as visible after a short delay
setTimeout(() => {
    document.querySelectorAll('.event-card, .promo-card').forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
}, 100);