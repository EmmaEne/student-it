// Coordinator App Logic
window.pageScrollPositions = {};

// Session Check
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = '../../core/login.html';
}

// Hide Loader
function hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 800);
    }
}

if (document.readyState === 'complete') {
    hideLoader();
} else {
    window.addEventListener('load', hideLoader);
}

function navigateToPage(pageId, isBack = false) {
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('.nav-item');
    const headerBackBtn = document.getElementById('headerBackBtn');
    const globalBackContainer = document.getElementById('globalBackContainer');

    // Hide all pages
    pages.forEach(p => p.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Update Bottom Nav
    navItems.forEach(item => {
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Sync Sidebar Nav
    const sidebarItems = document.querySelectorAll('.sidebar-nav-item');
    sidebarItems.forEach(item => {
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Sync Header Tabs
    const headerTabs = document.querySelectorAll('.header-tab');
    headerTabs.forEach(tab => {
        if (tab.getAttribute('data-page') === pageId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update Header Back Button (Mobile)
    if (pageId === 'dashboard') {
        if (headerBackBtn) headerBackBtn.style.display = 'none';
        if (globalBackContainer) globalBackContainer.style.display = 'none';
    } else {
        if (headerBackBtn) headerBackBtn.style.display = 'flex';
    }

    // Set greeting based on time (if on dashboard)
    if (pageId === 'dashboard') {
        const hour = new Date().getHours();
        const greetingEls = document.querySelectorAll('.greeting-text');
        greetingEls.forEach(el => {
            if (hour < 12) el.textContent = 'Good morning';
            else if (hour < 17) el.textContent = 'Good afternoon';
            else el.textContent = 'Good evening';
        });
    }
}

function logout() {
    window.location.href = '../../core/login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Click Handlers
    const navTriggers = document.querySelectorAll('.nav-item, .sidebar-nav-item, .header-tab');
    navTriggers.forEach(item => {
        item.addEventListener('click', (e) => {
            const pageId = item.getAttribute('data-page');
            if (pageId) {
                navigateToPage(pageId);
                e.preventDefault();
            }
        });
    });

    // Initial Navigation
    navigateToPage('dashboard');
});

// Toast Utility
window.showToast = function (message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }
};
