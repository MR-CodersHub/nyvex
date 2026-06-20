// RTL Initialization (Run immediately to prevent layout shift)
const savedRTL = localStorage.getItem('rtl') === 'true';
if (savedRTL) {
    document.documentElement.dir = 'rtl';
} else {
    document.documentElement.dir = 'ltr';
}

document.addEventListener('DOMContentLoaded', () => {
    // Inject RTL Button
    const headerActions = document.querySelector('.header-actions');
    if (headerActions && !document.getElementById('rtlBtn')) {
        const rtlBtn = document.createElement('button');
        rtlBtn.className = 'icon-btn';
        rtlBtn.id = 'rtlBtn';
        rtlBtn.title = 'Toggle RTL';
        rtlBtn.setAttribute('aria-label', 'Toggle RTL');

        const isRTL = document.documentElement.dir === 'rtl';
        rtlBtn.innerHTML = isRTL ? '<i class="fas fa-align-left"></i>' : '<i class="fas fa-align-right"></i>';

        // Insert as first child of header-actions
        headerActions.insertBefore(rtlBtn, headerActions.firstChild);

        rtlBtn.addEventListener('click', () => {
            const htmlEl = document.documentElement;
            if (htmlEl.dir === 'rtl') {
                htmlEl.dir = 'ltr';
                rtlBtn.innerHTML = '<i class="fas fa-align-right"></i>';
                localStorage.setItem('rtl', 'false');
            } else {
                htmlEl.dir = 'rtl';
                rtlBtn.innerHTML = '<i class="fas fa-align-left"></i>';
                localStorage.setItem('rtl', 'true');
            }
        });
    }
});

// Theme Toggle
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

if (themeBtn) {
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
}

// Profile Dropdown
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!profileDropdown.contains(e.target) && e.target !== profileBtn) {
            profileDropdown.classList.remove('active');
        }
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        const icon = mobileMenuBtn.querySelector('i');
        if (nav.classList.contains('nav-open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Close button inside nav overlay
    const navCloseBtn = document.getElementById('navCloseBtn');
    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', () => {
            nav.classList.remove('nav-open');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    }
}

// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature-item, .why-card, .review-card').forEach(el => {
    observer.observe(el);
});


// FAQ Preview Accordion
document.querySelectorAll('.fpq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-preview-item');
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-preview-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});


// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 50) {
            el.classList.add('visible');
        }
    });
}

// Trigger on load and scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);
