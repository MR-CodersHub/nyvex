// Dashboard Tab Navigation
const navItems = document.querySelectorAll('.dash-nav-item[data-tab]');
const tabs = document.querySelectorAll('.dash-tab');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabId = item.dataset.tab;

        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        tabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');

        // Close sidebar on mobile
        document.getElementById('dashSidebar').classList.remove('open');
    });
});

// Mobile sidebar toggle
const menuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('dashSidebar');

if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}
