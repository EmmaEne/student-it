/**
 * StudentIT - Main Application JavaScript
 * A modern, habit-forming student dashboard
 */

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const checkBtn = document.getElementById('checkBtn');
const attendanceStatus = document.getElementById('attendanceStatus');
const statusTitle = document.getElementById('statusTitle');
const statusSubtitle = document.getElementById('statusSubtitle');
const sessionInfo = document.getElementById('sessionInfo');
const checkInTimeEl = document.getElementById('checkInTime');
const checkOutTimeEl = document.getElementById('checkOutTime');
const sessionDuration = document.getElementById('sessionDuration');
const currentTimeEl = document.getElementById('currentTime');
const currentDateEl = document.getElementById('currentDate');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const quickCheckIn = document.getElementById('quickCheckIn');
const moreNavBtn = document.getElementById('moreNavBtn');
const moreMenuOverlay = document.getElementById('moreMenuOverlay');
const closeMoreMenu = document.getElementById('closeMoreMenu');
const moreMenuItems = document.querySelectorAll('.more-menu-item');

// State
let isCheckedIn = false;
let checkInTime = null;
let durationInterval = null;

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = item.dataset.page;
        if (!targetPage) return;

        // Update nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Update pages
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });

        // Haptic feedback simulation
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
});

// More Menu Handling
if (moreNavBtn) {
    moreNavBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moreMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeMoreMenu) {
    closeMoreMenu.addEventListener('click', () => {
        moreMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (moreMenuOverlay) {
    moreMenuOverlay.addEventListener('click', (e) => {
        if (e.target === moreMenuOverlay) {
            moreMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// More Menu Items Navigation
moreMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetPage = item.dataset.page;

        // Hide More Menu
        moreMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';

        // Update nav items (clear active state from main bottom nav)
        navItems.forEach(nav => nav.classList.remove('active'));

        // Update pages
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });

        window.scrollTo(0, 0);
    });
});

// Time Display
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const options = { weekday: 'long', month: 'short', day: 'numeric' };

    if (currentTimeEl) {
        currentTimeEl.textContent = `${hours}:${minutes}`;
    }
    if (currentDateEl) {
        currentDateEl.textContent = now.toLocaleDateString('en-US', options);
    }
}

updateTime();
setInterval(updateTime, 1000);

// Attendance Check-in/out
if (checkBtn) {
    checkBtn.addEventListener('click', () => {
        if (!isCheckedIn) {
            checkIn();
        } else {
            checkOut();
        }
    });
}

function checkIn() {
    isCheckedIn = true;
    checkInTime = new Date();

    // Update UI
    if (attendanceStatus) {
        attendanceStatus.classList.remove('not-checked-in');
        attendanceStatus.classList.add('checked-in');
    }
    if (statusTitle) statusTitle.textContent = 'Checked In';
    if (statusSubtitle) statusSubtitle.textContent = 'Your session has started. Have a productive day!';

    if (checkBtn) {
        const btnText = checkBtn.querySelector('.check-btn-text');
        if (btnText) btnText.textContent = 'Check Out';
        checkBtn.classList.add('checked-in');
        checkBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            checkBtn.style.transform = 'scale(1)';
        }, 150);
    }

    // Show session info
    if (sessionInfo) {
        sessionInfo.style.display = 'block';
        if (checkInTimeEl) checkInTimeEl.textContent = formatTime(checkInTime);
        if (checkOutTimeEl) checkOutTimeEl.textContent = '--:--';
    }

    // Start duration counter
    startDurationCounter();

    // Show toast
    showToast('Successfully checked in!');
}

function checkOut() {
    const checkOutTime = new Date();
    isCheckedIn = false;

    // Update UI
    if (attendanceStatus) {
        attendanceStatus.classList.remove('checked-in');
        attendanceStatus.classList.add('not-checked-in');
    }
    if (statusTitle) statusTitle.textContent = 'Checked Out';
    if (statusSubtitle) statusSubtitle.textContent = 'Great work today! See you next time.';

    if (checkBtn) {
        const btnText = checkBtn.querySelector('.check-btn-text');
        if (btnText) btnText.textContent = 'Check In';
        checkBtn.classList.remove('checked-in');
    }

    // Update session info
    if (checkOutTimeEl) checkOutTimeEl.textContent = formatTime(checkOutTime);

    // Stop duration counter
    if (durationInterval) {
        clearInterval(durationInterval);
    }

    // Show toast
    showToast('Successfully checked out!');
}

function startDurationCounter() {
    updateDuration();
    durationInterval = setInterval(updateDuration, 60000);
}

function updateDuration() {
    if (!checkInTime || !sessionDuration) return;

    const now = new Date();
    const diff = now - checkInTime;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);

    const durationValEl = sessionDuration.querySelector('.duration-value');
    if (durationValEl) {
        durationValEl.textContent = `${hours}h ${minutes}m`;
    }
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Toast
function showToast(message) {
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Quick Actions
if (quickCheckIn) {
    quickCheckIn.addEventListener('click', () => {
        // Go to attendance page
        navItems.forEach(nav => nav.classList.remove('active'));
        const attendanceNav = document.querySelector('[data-page="attendance"]');
        if (attendanceNav) attendanceNav.classList.add('active');

        pages.forEach(page => page.classList.remove('active'));
        const attendancePage = document.getElementById('attendance');
        if (attendancePage) attendancePage.classList.add('active');

        setTimeout(() => {
            if (!isCheckedIn) {
                checkIn();
            }
        }, 300);
    });
}

// Global ripple effect for dashboard cards
function addRippleEffect() {
    const rippleElements = document.querySelectorAll('.stat-card, .activity-item, .progress-card');

    rippleElements.forEach(el => {
        el.addEventListener('click', function (e) {
            const rect = el.getBoundingClientRect();
            const ripple = document.createElement('span');

            ripple.style.cssText = `
                position: absolute;
                background: rgba(42, 56, 168, 0.1);
                border-radius: 50%;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: ${e.clientX - rect.left - 50}px;
                top: ${e.clientY - rect.top - 50}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
            `;

            el.style.position = 'relative';
            el.style.overflow = 'hidden';
            el.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Set greeting based on time
    const hour = new Date().getHours();
    const greetingEl = document.querySelector('.greeting-text');

    if (greetingEl) {
        if (hour < 12) {
            greetingEl.textContent = 'Good morning';
        } else if (hour < 17) {
            greetingEl.textContent = 'Good afternoon';
        } else {
            greetingEl.textContent = 'Good evening';
        }
    }

    addRippleEffect();
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from { transform: scale(0); opacity: 1; }
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);
