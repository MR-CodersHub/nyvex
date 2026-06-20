// Theme Toggle
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Tab Switching
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const goToSignup = document.getElementById('goToSignup');
const goToLogin = document.getElementById('goToLogin');

function showLogin() {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
}

function showSignup() {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
}

loginTab.addEventListener('click', showLogin);
signupTab.addEventListener('click', showSignup);
goToSignup.addEventListener('click', (e) => { e.preventDefault(); showSignup(); });
goToLogin.addEventListener('click', (e) => { e.preventDefault(); showLogin(); });

// Toggle Password Visibility
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('input');
        const icon = btn.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// Form Submissions
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful! (Demo)');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    alert('Account created successfully! (Demo)');
    showLogin();
});
