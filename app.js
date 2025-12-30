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
const filterTabs = document.querySelectorAll('.filter-tab');
const viewTabs = document.querySelectorAll('.view-tab');
const addEntryBtn = document.getElementById('addEntryBtn');
const entryModal = document.getElementById('entryModal');
const closeModal = document.getElementById('closeModal');
const entryForm = document.getElementById('entryForm');
const tagInput = document.getElementById('tagInput');
const tagsContainer = document.getElementById('tagsContainer');
const quickTags = document.querySelectorAll('.quick-tag');
const moodBtns = document.querySelectorAll('.mood-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const quickCheckIn = document.getElementById('quickCheckIn');
const quickLogbook = document.getElementById('quickLogbook');
const weeklySummary = document.getElementById('weeklySummary');
const entriesList = document.querySelector('.entries-list');

// State
let isCheckedIn = false;
let checkInTime = null;
let selectedTags = [];
let selectedMood = null;
let durationInterval = null;

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = item.dataset.page;
        
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
    attendanceStatus.classList.remove('not-checked-in');
    attendanceStatus.classList.add('checked-in');
    statusTitle.textContent = 'Checked In';
    statusSubtitle.textContent = 'Your session has started. Have a productive day!';
    checkBtn.querySelector('.check-btn-text').textContent = 'Check Out';
    checkBtn.classList.add('checked-in');
    
    // Show session info
    sessionInfo.style.display = 'block';
    checkInTimeEl.textContent = formatTime(checkInTime);
    checkOutTimeEl.textContent = '--:--';
    
    // Start duration counter
    startDurationCounter();
    
    // Show toast
    showToast('Successfully checked in!');
    
    // Animate
    checkBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        checkBtn.style.transform = 'scale(1)';
    }, 150);
}

function checkOut() {
    const checkOutTime = new Date();
    isCheckedIn = false;
    
    // Update UI
    attendanceStatus.classList.remove('checked-in');
    attendanceStatus.classList.add('not-checked-in');
    statusTitle.textContent = 'Checked Out';
    statusSubtitle.textContent = 'Great work today! See you next time.';
    checkBtn.querySelector('.check-btn-text').textContent = 'Check In';
    checkBtn.classList.remove('checked-in');
    
    // Update session info
    checkOutTimeEl.textContent = formatTime(checkOutTime);
    
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
    if (!checkInTime) return;
    
    const now = new Date();
    const diff = now - checkInTime;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    
    sessionDuration.querySelector('.duration-value').textContent = `${hours}h ${minutes}m`;
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Project Filter Tabs
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const filter = tab.dataset.filter;
        filterProjects(filter);
    });
});

function filterProjects(filter) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (filter === 'all') {
            project.style.display = 'block';
        } else if (project.classList.contains(filter)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
        
        // Add fade animation
        project.style.opacity = '0';
        setTimeout(() => {
            project.style.opacity = '1';
        }, 50);
    });
}

// Logbook View Tabs
viewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        viewTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const view = tab.dataset.view;
        toggleLogbookView(view);
    });
});

function toggleLogbookView(view) {
    if (view === 'weekly') {
        entriesList.style.display = 'none';
        weeklySummary.style.display = 'block';
    } else {
        entriesList.style.display = 'flex';
        weeklySummary.style.display = 'none';
    }
}

// Modal
if (addEntryBtn) {
    addEntryBtn.addEventListener('click', () => {
        entryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', closeEntryModal);
}

if (entryModal) {
    entryModal.addEventListener('click', (e) => {
        if (e.target === entryModal) {
            closeEntryModal();
        }
    });
}

function closeEntryModal() {
    entryModal.classList.remove('active');
    document.body.style.overflow = '';
    resetForm();
}

function resetForm() {
    if (entryForm) entryForm.reset();
    selectedTags = [];
    selectedMood = null;
    updateTagsDisplay();
    moodBtns.forEach(btn => btn.classList.remove('selected'));
    quickTags.forEach(tag => tag.classList.remove('selected'));
}

// Tags
if (tagInput) {
    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tag = tagInput.value.trim();
            if (tag && !selectedTags.includes(tag)) {
                selectedTags.push(tag);
                updateTagsDisplay();
            }
            tagInput.value = '';
        }
    });
}

quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const tagName = tag.dataset.tag;
        if (selectedTags.includes(tagName)) {
            selectedTags = selectedTags.filter(t => t !== tagName);
            tag.classList.remove('selected');
        } else {
            selectedTags.push(tagName);
            tag.classList.add('selected');
        }
        updateTagsDisplay();
    });
});

function updateTagsDisplay() {
    if (!tagsContainer) return;
    
    tagsContainer.innerHTML = selectedTags.map(tag => `
        <span class="tag-item">
            ${tag}
            <span class="tag-remove" data-tag="${tag}">×</span>
        </span>
    `).join('');
    
    // Add remove handlers
    tagsContainer.querySelectorAll('.tag-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const tagToRemove = btn.dataset.tag;
            selectedTags = selectedTags.filter(t => t !== tagToRemove);
            updateTagsDisplay();
            
            // Update quick tags
            quickTags.forEach(qt => {
                if (qt.dataset.tag === tagToRemove) {
                    qt.classList.remove('selected');
                }
            });
        });
    });
}

// Mood Selection
moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        moodBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedMood = btn.dataset.mood;
    });
});

// Form Submit
if (entryForm) {
    entryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const content = document.getElementById('entryContent').value;
        
        if (!content.trim()) {
            showToast('Please add some content to your entry');
            return;
        }
        
        // Simulate saving
        showToast('Entry saved successfully!');
        closeEntryModal();
        
        // Add entry to list (in real app, this would refresh from backend)
        addNewEntry(content);
    });
}

function addNewEntry(content) {
    const now = new Date();
    const moodEmoji = getMoodEmoji(selectedMood || 'good');
    const timeStr = formatTime(now);
    
    const entryHTML = `
        <div class="logbook-entry" style="animation: fadeIn 0.3s ease;">
            <div class="entry-mood">${moodEmoji}</div>
            <div class="entry-body">
                <p class="entry-text">${content}</p>
                <div class="entry-tags">
                    ${selectedTags.map(tag => `<span class="entry-tag">${tag}</span>`).join('')}
                </div>
                <span class="entry-time">${timeStr}</span>
            </div>
            <button class="entry-menu-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                </svg>
            </button>
        </div>
    `;
    
    // Find today's section or create it
    const todayHeader = entriesList.querySelector('.entry-date-header');
    if (todayHeader) {
        todayHeader.insertAdjacentHTML('afterend', entryHTML);
    }
}

function getMoodEmoji(mood) {
    const moods = {
        struggling: '😓',
        neutral: '😐',
        good: '🙂',
        great: '😊',
        amazing: '🚀'
    };
    return moods[mood] || '🙂';
}

// Toast
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Quick Actions
if (quickCheckIn) {
    quickCheckIn.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('[data-page="attendance"]').classList.add('active');
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById('attendance').classList.add('active');
        
        setTimeout(() => {
            if (!isCheckedIn) {
                checkIn();
            }
        }, 300);
    });
}

if (quickLogbook) {
    quickLogbook.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('[data-page="logbook"]').classList.add('active');
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById('logbook').classList.add('active');
        
        setTimeout(() => {
            entryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 300);
    });
}

// Initialize
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
    
    // Add ripple effect to interactive elements
    addRippleEffect();
});

// Ripple Effect
function addRippleEffect() {
    const rippleElements = document.querySelectorAll('.stat-card, .activity-item, .project-card, .logbook-entry');
    
    rippleElements.forEach(el => {
        el.addEventListener('click', function(e) {
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

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from { transform: scale(0); opacity: 1; }
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);
