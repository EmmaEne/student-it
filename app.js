/**
 * StudentIT - Main Application JavaScript
 * A modern, habit-forming student dashboard
 */

// Session Check
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Global Logout Function
window.logout = function () {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
};

// Hide Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 800);
    }
});

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

// Learning-Focused Home Page Elements
const statusBanner = document.getElementById('statusBanner');
const classAttendanceStatus = document.getElementById('classAttendanceStatus');
const panelLogAttendanceBtn = document.getElementById('panelLogAttendanceBtn');
const homeStats = document.querySelectorAll('.home-stat');
const homeUpnextItems = document.querySelectorAll('.home-upnext-item');
const homeUpnextAll = document.querySelector('.home-upnext-all');

// State
let isCheckedIn = false;
let checkInTime = null;
let durationInterval = null;

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // e.preventDefault(); // Removed to allow natural event bubbling if needed, though we handle target below

        let target = e.target;
        // Closest nav-item check to ensure we get the container even if pointer-events: none was somehow bypassed
        const navItem = target.closest('.nav-item');
        if (!navItem) return;

        const targetPage = navItem.dataset.page;
        if (!targetPage) return;

        // Update nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        navItem.classList.add('active');

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

// More Menu removed - now using full-page More section
// Navigation to More page is handled by the standard nav-item click handler

// Time & Banner Display
function updateTime() {
    const now = new Date();
    const hoursNum = now.getHours();
    const minutesNum = now.getMinutes();
    const hours = hoursNum.toString().padStart(2, '0');
    const minutes = minutesNum.toString().padStart(2, '0');
    const options = { weekday: 'long', month: 'short', day: 'numeric' };

    if (currentTimeEl) {
        currentTimeEl.textContent = `${hours}:${minutes}`;
    }
    if (currentDateEl) {
        currentDateEl.textContent = now.toLocaleDateString('en-US', options);
    }

    updateClassStatus(hoursNum, minutesNum);
}

function updateClassStatus(h, m) {
    // Current class is 14:00 - 15:30
    const currentTimeMinutes = h * 60 + m;
    const startTimeMinutes = 14 * 60; // 14:00
    const endTimeMinutes = 15 * 60 + 30; // 15:30

    const isOngoing = currentTimeMinutes >= startTimeMinutes && currentTimeMinutes <= endTimeMinutes;

    if (statusBanner) {
        const bannerText = statusBanner.querySelector('.banner-text');
        if (isOngoing) {
            statusBanner.className = 'status-banner ongoing';
            if (bannerText) bannerText.textContent = 'Class is currently ongoing';
        } else {
            statusBanner.className = 'status-banner no-class';
            if (bannerText) bannerText.textContent = 'No class at the moment';
        }
    }

    // Update Dashboard Class Card
    const classBadge = document.querySelector('.class-badge');
    const classTimeValue = document.querySelector('.meta-value:nth-child(2)'); // Time meta value

    if (classBadge) {
        if (isOngoing) {
            classBadge.className = 'class-badge ongoing';
            classBadge.textContent = 'Ongoing';
        } else if (currentTimeMinutes > endTimeMinutes) {
            classBadge.className = 'class-badge completed';
            classBadge.textContent = 'Completed';
            // Update time label if completed
            const timeMetaLabel = document.querySelectorAll('.meta-label')[1];
            if (timeMetaLabel) timeMetaLabel.textContent = 'Ended At';
            const timeMetaValue = document.querySelectorAll('.meta-value')[1];
            if (timeMetaValue) timeMetaValue.textContent = '15:30';
        } else {
            classBadge.className = 'class-badge up-next';
            classBadge.textContent = 'Up Next';
        }
    }

    updateAttendanceIndicator();
}

function updateAttendanceIndicator() {
    if (classAttendanceStatus && panelLogAttendanceBtn) {
        if (isCheckedIn) {
            classAttendanceStatus.style.display = 'flex';
            panelLogAttendanceBtn.style.display = 'none';
        } else {
            classAttendanceStatus.style.display = 'none';
            panelLogAttendanceBtn.style.display = 'block';
        }
    }
}

updateTime();
setInterval(updateTime, 60000); // Update every minute


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

    // Update dashboard indicator
    updateAttendanceIndicator();

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

    // Update dashboard indicator
    updateAttendanceIndicator();

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
window.showToast = function (message) {
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

// ========================================
// Learning-Focused Home Page Interactions
// ========================================

// Helper: Navigate to a page
function navigateToPage(pageId) {
    navItems.forEach(nav => nav.classList.remove('active'));
    const targetNav = document.querySelector(`[data-page="${pageId}"]`);
    if (targetNav) targetNav.classList.add('active');

    pages.forEach(page => page.classList.remove('active'));
    const pageEl = document.getElementById(pageId);
    if (pageEl) pageEl.classList.add('active');

    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

// Log Attendance Button in Class Panel
if (panelLogAttendanceBtn) {
    panelLogAttendanceBtn.addEventListener('click', () => {
        // Navigate to attendance page and check in
        navigateToPage('attendance');
        setTimeout(() => {
            if (!isCheckedIn) {
                checkIn();
            }
        }, 300);
    });
}

// Home Stats Navigation
homeStats.forEach(stat => {
    stat.addEventListener('click', () => {
        const targetPage = stat.dataset.nav;
        if (targetPage) {
            navigateToPage(targetPage);
        }
    });
});

// Home Up Next Items
homeUpnextItems.forEach(item => {
    item.addEventListener('click', () => {
        // For now, show toast - in real app, this would open the lesson/quiz
        showToast('Loading content...');

        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
});

// Home Up Next "See All" button
if (homeUpnextAll) {
    homeUpnextAll.addEventListener('click', () => {
        const targetPage = homeUpnextAll.dataset.nav;
        if (targetPage) {
            navigateToPage(targetPage);
        }
    });
}
