/**
 * StudentIT - Pages Content Loader
 * Populates Projects and Logbook pages
 */

document.addEventListener('DOMContentLoaded', () => {
    // Populate Projects Page
    const projectsPage = document.getElementById('projects');
    if (projectsPage) {
        projectsPage.innerHTML = `
            <!-- Filter Tabs -->
            <div class="filter-tabs">
                <button class="filter-tab active" data-filter="all">All</button>
                <button class="filter-tab" data-filter="in-progress">In Progress</button>
                <button class="filter-tab" data-filter="completed">Completed</button>
                <button class="filter-tab" data-filter="pending">Pending</button>
            </div>

            <!-- Projects List -->
            <section class="projects-list">
                <div class="project-card in-progress">
                    <div class="project-header">
                        <div class="project-status-badge in-progress">In Progress</div>
                        <button class="project-menu-btn" aria-label="More options">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="2"/>
                                <circle cx="12" cy="12" r="2"/>
                                <circle cx="12" cy="19" r="2"/>
                            </svg>
                        </button>
                    </div>
                    <h3 class="project-title">E-Commerce Dashboard</h3>
                    <p class="project-description">Build a responsive admin dashboard with charts, tables, and user management.</p>
                    <div class="project-progress">
                        <div class="project-progress-bar">
                            <div class="project-progress-fill" style="width: 65%"></div>
                        </div>
                        <span class="project-progress-text">65%</span>
                    </div>
                    <div class="project-footer">
                        <div class="project-due">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>Due Jan 15</span>
                        </div>
                        <button class="project-action-btn">Continue</button>
                    </div>
                </div>

                <div class="project-card completed">
                    <div class="project-header">
                        <div class="project-status-badge completed">Completed</div>
                        <button class="project-menu-btn" aria-label="More options">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="2"/>
                                <circle cx="12" cy="12" r="2"/>
                                <circle cx="12" cy="19" r="2"/>
                            </svg>
                        </button>
                    </div>
                    <h3 class="project-title">Portfolio Website</h3>
                    <p class="project-description">Personal portfolio showcasing skills, projects, and contact info.</p>
                    <div class="project-progress">
                        <div class="project-progress-bar">
                            <div class="project-progress-fill completed" style="width: 100%"></div>
                        </div>
                        <span class="project-progress-text">100%</span>
                    </div>
                    <div class="project-footer">
                        <div class="project-grade">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                            </svg>
                            <span>Grade: A</span>
                        </div>
                        <button class="project-action-btn secondary">View</button>
                    </div>
                </div>

                <div class="project-card in-progress">
                    <div class="project-header">
                        <div class="project-status-badge in-progress">In Progress</div>
                        <button class="project-menu-btn" aria-label="More options">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="2"/>
                                <circle cx="12" cy="12" r="2"/>
                                <circle cx="12" cy="19" r="2"/>
                            </svg>
                        </button>
                    </div>
                    <h3 class="project-title">Weather App</h3>
                    <p class="project-description">Interactive weather application using APIs for real-time data.</p>
                    <div class="project-progress">
                        <div class="project-progress-bar">
                            <div class="project-progress-fill" style="width: 40%"></div>
                        </div>
                        <span class="project-progress-text">40%</span>
                    </div>
                    <div class="project-footer">
                        <div class="project-due">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>Due Jan 25</span>
                        </div>
                        <button class="project-action-btn">Continue</button>
                    </div>
                </div>

                <div class="project-card pending">
                    <div class="project-header">
                        <div class="project-status-badge pending">Pending Review</div>
                        <button class="project-menu-btn" aria-label="More options">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="2"/>
                                <circle cx="12" cy="12" r="2"/>
                                <circle cx="12" cy="19" r="2"/>
                            </svg>
                        </button>
                    </div>
                    <h3 class="project-title">Blog Platform</h3>
                    <p class="project-description">Full-stack blog with authentication, CRUD operations, and comments.</p>
                    <div class="project-progress">
                        <div class="project-progress-bar">
                            <div class="project-progress-fill pending" style="width: 100%"></div>
                        </div>
                        <span class="project-progress-text">Submitted</span>
                    </div>
                    <div class="project-footer">
                        <div class="project-submitted">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20,6 9,17 4,12"/>
                            </svg>
                            <span>Submitted Dec 28</span>
                        </div>
                        <button class="project-action-btn secondary">View</button>
                    </div>
                </div>

                <div class="project-card completed">
                    <div class="project-header">
                        <div class="project-status-badge completed">Completed</div>
                        <button class="project-menu-btn" aria-label="More options">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="2"/>
                                <circle cx="12" cy="12" r="2"/>
                                <circle cx="12" cy="19" r="2"/>
                            </svg>
                        </button>
                    </div>
                    <h3 class="project-title">Calculator App</h3>
                    <p class="project-description">Modern calculator with scientific functions and history.</p>
                    <div class="project-progress">
                        <div class="project-progress-bar">
                            <div class="project-progress-fill completed" style="width: 100%"></div>
                        </div>
                        <span class="project-progress-text">100%</span>
                    </div>
                    <div class="project-footer">
                        <div class="project-grade">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                            </svg>
                            <span>Grade: A+</span>
                        </div>
                        <button class="project-action-btn secondary">View</button>
                    </div>
                </div>

                <div class="project-card not-started">
                    <div class="project-header">
                        <div class="project-status-badge not-started">Not Started</div>
                        <button class="project-menu-btn" aria-label="More options">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="2"/>
                                <circle cx="12" cy="12" r="2"/>
                                <circle cx="12" cy="19" r="2"/>
                            </svg>
                        </button>
                    </div>
                    <h3 class="project-title">Social Media Clone</h3>
                    <p class="project-description">Build a mini social platform with posts, likes, and follows.</p>
                    <div class="project-progress">
                        <div class="project-progress-bar">
                            <div class="project-progress-fill" style="width: 0%"></div>
                        </div>
                        <span class="project-progress-text">0%</span>
                    </div>
                    <div class="project-footer">
                        <div class="project-due urgent">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>Due Feb 10</span>
                        </div>
                        <button class="project-action-btn">Start</button>
                    </div>
                </div>
            </section>
        `;

        // Re-initialize filter tabs
        initFilterTabs();
    }

    // Populate Logbook Page
    const logbookPage = document.getElementById('logbook');
    if (logbookPage) {
        logbookPage.innerHTML = `
            <!-- FAB Button -->
            <button class="fab-btn" id="addEntryBtn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
            </button>

            <!-- Entry Modal -->
            <div class="modal-overlay" id="entryModal">
                <div class="modal">
                    <div class="modal-header">
                        <h2 class="modal-title">New Entry</h2>
                        <button class="modal-close" id="closeModal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <form class="entry-form" id="entryForm">
                        <div class="form-group">
                            <label class="form-label">What did you learn today?</label>
                            <textarea class="form-textarea" id="entryContent" placeholder="Describe what you worked on, learned, or accomplished..." rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Tags</label>
                            <div class="tag-input-wrapper">
                                <div class="tags-container" id="tagsContainer"></div>
                                <input type="text" class="tag-input" id="tagInput" placeholder="Add tags (press Enter)">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Quick Tags</label>
                            <div class="quick-tags">
                                <button type="button" class="quick-tag" data-tag="html">HTML</button>
                                <button type="button" class="quick-tag" data-tag="css">CSS</button>
                                <button type="button" class="quick-tag" data-tag="javascript">JavaScript</button>
                                <button type="button" class="quick-tag" data-tag="react">React</button>
                                <button type="button" class="quick-tag" data-tag="python">Python</button>
                                <button type="button" class="quick-tag" data-tag="debugging">Debugging</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Mood</label>
                            <div class="mood-selector">
                                <button type="button" class="mood-btn" data-mood="struggling">😓</button>
                                <button type="button" class="mood-btn" data-mood="neutral">😐</button>
                                <button type="button" class="mood-btn" data-mood="good">🙂</button>
                                <button type="button" class="mood-btn" data-mood="great">😊</button>
                                <button type="button" class="mood-btn" data-mood="amazing">🚀</button>
                            </div>
                        </div>
                        <button type="submit" class="submit-btn">Save Entry</button>
                    </form>
                </div>
            </div>

            <!-- View Tabs -->
            <div class="view-tabs">
                <button class="view-tab active" data-view="daily">Daily</button>
                <button class="view-tab" data-view="weekly">Weekly</button>
            </div>

            <!-- Entries List -->
            <section class="entries-list">
                <div class="entry-date-header">
                    <span class="entry-date">Today • Dec 30</span>
                </div>
                
                <div class="logbook-entry">
                    <div class="entry-mood">🚀</div>
                    <div class="entry-body">
                        <p class="entry-text">Completed the responsive layout for the dashboard project. Finally understood CSS Grid properly!</p>
                        <div class="entry-tags">
                            <span class="entry-tag">CSS</span>
                            <span class="entry-tag">Grid</span>
                            <span class="entry-tag">Responsive</span>
                        </div>
                        <span class="entry-time">9:30 AM</span>
                    </div>
                    <button class="entry-menu-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="2"/>
                            <circle cx="12" cy="12" r="2"/>
                            <circle cx="12" cy="19" r="2"/>
                        </svg>
                    </button>
                </div>

                <div class="entry-date-header">
                    <span class="entry-date">Yesterday • Dec 29</span>
                </div>

                <div class="logbook-entry">
                    <div class="entry-mood">😊</div>
                    <div class="entry-body">
                        <p class="entry-text">Worked on JavaScript event handling. Built a todo list with drag-and-drop functionality.</p>
                        <div class="entry-tags">
                            <span class="entry-tag">JavaScript</span>
                            <span class="entry-tag">DOM</span>
                        </div>
                        <span class="entry-time">4:45 PM</span>
                    </div>
                    <button class="entry-menu-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="2"/>
                            <circle cx="12" cy="12" r="2"/>
                            <circle cx="12" cy="19" r="2"/>
                        </svg>
                    </button>
                </div>

                <div class="logbook-entry">
                    <div class="entry-mood">🙂</div>
                    <div class="entry-body">
                        <p class="entry-text">Morning session: Reviewed flexbox concepts and practiced alignment properties.</p>
                        <div class="entry-tags">
                            <span class="entry-tag">CSS</span>
                            <span class="entry-tag">Flexbox</span>
                        </div>
                        <span class="entry-time">10:15 AM</span>
                    </div>
                    <button class="entry-menu-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="2"/>
                            <circle cx="12" cy="12" r="2"/>
                            <circle cx="12" cy="19" r="2"/>
                        </svg>
                    </button>
                </div>

                <div class="entry-date-header">
                    <span class="entry-date">Dec 28 • Saturday</span>
                </div>

                <div class="logbook-entry">
                    <div class="entry-mood">😊</div>
                    <div class="entry-body">
                        <p class="entry-text">Submitted the blog platform project! Learned a lot about authentication and sessions.</p>
                        <div class="entry-tags">
                            <span class="entry-tag">Project</span>
                            <span class="entry-tag">Auth</span>
                            <span class="entry-tag">Full-Stack</span>
                        </div>
                        <span class="entry-time">3:20 PM</span>
                    </div>
                    <button class="entry-menu-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="2"/>
                            <circle cx="12" cy="12" r="2"/>
                            <circle cx="12" cy="19" r="2"/>
                        </svg>
                    </button>
                </div>

                <div class="logbook-entry">
                    <div class="entry-mood">😓</div>
                    <div class="entry-body">
                        <p class="entry-text">Struggled with database queries. Need to practice SQL joins more.</p>
                        <div class="entry-tags">
                            <span class="entry-tag">SQL</span>
                            <span class="entry-tag">Debugging</span>
                        </div>
                        <span class="entry-time">11:00 AM</span>
                    </div>
                    <button class="entry-menu-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="2"/>
                            <circle cx="12" cy="12" r="2"/>
                            <circle cx="12" cy="19" r="2"/>
                        </svg>
                    </button>
                </div>
            </section>

            <!-- Weekly Summary (hidden by default) -->
            <section class="weekly-summary" id="weeklySummary" style="display: none;">
                <div class="week-summary-card">
                    <div class="week-summary-header">
                        <h3>Week of Dec 23 - 30</h3>
                        <span class="week-entry-count">12 entries</span>
                    </div>
                    <div class="week-stats">
                        <div class="week-stat">
                            <span class="week-stat-value">6</span>
                            <span class="week-stat-label">Active Days</span>
                        </div>
                        <div class="week-stat">
                            <span class="week-stat-value">😊</span>
                            <span class="week-stat-label">Top Mood</span>
                        </div>
                        <div class="week-stat">
                            <span class="week-stat-value">CSS</span>
                            <span class="week-stat-label">Most Used Tag</span>
                        </div>
                    </div>
                    <div class="week-highlights">
                        <h4>Highlights</h4>
                        <ul>
                            <li>Completed blog platform project</li>
                            <li>Mastered CSS Grid layouts</li>
                            <li>Built drag-and-drop todo list</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;

        // Re-initialize logbook functionality
        initLogbook();
    }
});

// Initialize Filter Tabs
function initFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;
            const projects = document.querySelectorAll('.project-card');

            projects.forEach(project => {
                if (filter === 'all') {
                    project.style.display = 'block';
                } else if (project.classList.contains(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }

                project.style.opacity = '0';
                setTimeout(() => {
                    project.style.opacity = '1';
                }, 50);
            });
        });
    });
}

// Initialize Logbook
function initLogbook() {
    const addEntryBtn = document.getElementById('addEntryBtn');
    const entryModal = document.getElementById('entryModal');
    const closeModal = document.getElementById('closeModal');
    const entryForm = document.getElementById('entryForm');
    const viewTabs = document.querySelectorAll('.view-tab');
    const weeklySummary = document.getElementById('weeklySummary');
    const entriesList = document.querySelector('.entries-list');
    const quickTags = document.querySelectorAll('.quick-tag');
    const moodBtns = document.querySelectorAll('.mood-btn');
    const tagInput = document.getElementById('tagInput');
    const tagsContainer = document.getElementById('tagsContainer');

    let selectedTags = [];
    let selectedMood = null;

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

    // View Tabs
    viewTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            viewTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const view = tab.dataset.view;
            if (view === 'weekly') {
                entriesList.style.display = 'none';
                weeklySummary.style.display = 'block';
            } else {
                entriesList.style.display = 'flex';
                weeklySummary.style.display = 'none';
            }
        });
    });

    // Quick Tags
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

    // Tag Input
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

    function updateTagsDisplay() {
        if (!tagsContainer) return;

        tagsContainer.innerHTML = selectedTags.map(tag => `
            <span class="tag-item">
                ${tag}
                <span class="tag-remove" data-tag="${tag}">×</span>
            </span>
        `).join('');

        tagsContainer.querySelectorAll('.tag-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const tagToRemove = btn.dataset.tag;
                selectedTags = selectedTags.filter(t => t !== tagToRemove);
                updateTagsDisplay();

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

            showToast('Entry saved successfully!');
            closeEntryModal();
            addNewEntry(content, selectedTags, selectedMood);
        });
    }

    function addNewEntry(content, tags, mood) {
        const now = new Date();
        const moodEmoji = getMoodEmoji(mood || 'good');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeStr = `${hours}:${minutes}`;

        const entryHTML = `
            <div class="logbook-entry" style="animation: fadeIn 0.3s ease;">
                <div class="entry-mood">${moodEmoji}</div>
                <div class="entry-body">
                    <p class="entry-text">${content}</p>
                    <div class="entry-tags">
                        ${tags.map(tag => `<span class="entry-tag">${tag}</span>`).join('')}
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
}

// Toast function
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}
