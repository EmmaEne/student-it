/**
 * StudentIT - Pages Content Loader
 * Populates Projects, Logbook, Payments, and Resources pages
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

            <!-- Add Project Button -->
            <button class="fab-btn" id="addProjectBtn" style="bottom: 100px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
            </button>

            <!-- Project Modal -->
            <div class="modal-overlay" id="projectModal">
                <div class="modal">
                    <div class="modal-header">
                        <h2 class="modal-title">New Project</h2>
                        <button class="modal-close" id="closeProjectModal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <form class="entry-form" id="projectForm">
                        <div class="form-group">
                            <label class="form-label">Project Title</label>
                            <input type="text" class="tag-input" id="projectTitle" placeholder="Enter project name" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Description</label>
                            <textarea class="form-textarea" id="projectDescription" placeholder="Briefly describe what this project is about..." rows="3" required></textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Due Date</label>
                            <input type="date" class="tag-input" id="projectDueDate" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                        </div>
                        <button type="submit" class="submit-btn" style="margin-top: 10px;">Create Project</button>
                    </form>
                </div>
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
        initProjectPage();
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
                        <div class="week-stat"><span class="week-stat-value">6</span><span class="week-stat-label">Active Days</span></div>
                        <div class="week-stat"><span class="week-stat-value">😊</span><span class="week-stat-label">Top Mood</span></div>
                        <div class="week-stat"><span class="week-stat-value">CSS</span><span class="week-stat-label">Most Used Tag</span></div>
                    </div>
                </div>
            </section>
        `;
        initLogbook();
    }

    // Populate Payments Page
    const paymentsPage = document.getElementById('payments');
    if (paymentsPage) {
        paymentsPage.innerHTML = `
            <div class="payment-hero">
                <span class="payment-hero-label">Total Outstanding Balance</span>
                <div class="payment-hero-amount">$450.00</div>
                <div class="payment-hero-meta">
                    <span class="payment-badge">Next Due: Jan 5, 2026</span>
                </div>
            </div>

            <section class="payment-method-section">
                <div class="section-header">
                    <h3 class="section-title">Payment Method</h3>
                    <button class="view-all-btn">Manage</button>
                </div>
                <div class="payment-card-list">
                    <div class="payment-method-card active">
                        <div class="method-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                            </svg>
                        </div>
                        <div class="method-info">
                            <span class="method-name">Visa Card</span>
                            <span class="method-details">•••• 4242 • Exp 12/26</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="section-header">
                    <h3 class="section-title">Recent Transactions</h3>
                    <button class="view-all-btn">View All</button>
                </div>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon" style="background: var(--success-light); color: var(--success);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                        </div>
                        <div class="activity-content">
                            <span class="activity-title">Quarter 1 Tuition</span>
                            <span class="activity-meta">Bank Transfer • Dec 01</span>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-weight: 700; color: var(--gray-900);">$1,200.00</div>
                            <div style="font-size: 11px; color: var(--success); font-weight: 600;">Paid</div>
                        </div>
                    </div>
                </div>
                <button class="submit-btn" style="margin-top: 24px;">Proceed to Payment</button>
            </section>
        `;
    }

    // Populate Resources Page
    const resourcesPage = document.getElementById('resources');
    if (resourcesPage) {
        resourcesPage.innerHTML = `
            <div class="resource-hero">
                <div class="search-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <input type="text" placeholder="Search resources...">
                </div>
                <div class="resource-categories">
                    <button class="category-chip active">All</button>
                    <button class="category-chip">Guides</button>
                    <button class="category-chip">Videos</button>
                </div>
            </div>

            <div class="resource-grid">
                <div class="featured-resource">
                    <div>
                        <span style="font-size: 12px; font-weight: 700; opacity: 0.8; text-transform: uppercase;">Masterclass</span>
                        <h3 style="font-size: 20px; margin-top: 4px;">Advanced JavaScript Patterns</h3>
                    </div>
                    <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Dive deep into closures, prototypes, and asynchronous programming.</p>
                    <button style="background: var(--white); color: #1e293b; border: none; padding: 10px 20px; border-radius: var(--radius-lg); font-size: 13px; font-weight: 700;">Start Learning</button>
                </div>

                <div class="resource-detailed-card">
                    <div class="resource-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: var(--info);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                    </div>
                    <div class="resource-title">HTML5 Reference</div>
                    <span class="resource-meta">PDF • 2.4 MB</span>
                </div>
                     <div class="resource-detailed-card">
                    <div class="resource-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: var(--info);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                    </div>
                    <div class="resource-title">HTML5 Reference</div>
                    <span class="resource-meta">PDF • 2.4 MB</span>
                </div>
            </div>
            
            <div style="margin-top: 32px; text-align: center; border-top: 1px solid var(--gray-100); padding-top: 24px;">
                <button class="project-action-btn secondary">Contact Support</button>
            </div>
        `;
    }
});

// Initialize Projects Page
function initProjectPage() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projectModal = document.getElementById('projectModal');
    const closeProjectModal = document.getElementById('closeProjectModal');
    const projectForm = document.getElementById('projectForm');

    if (!filterTabs.length) return;

    // Filter Tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;
            const projects = document.querySelectorAll('.project-card');

            projects.forEach(project => {
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.style.display = 'block';
                    setTimeout(() => project.style.opacity = '1', 50);
                } else {
                    project.style.display = 'none';
                    project.style.opacity = '0';
                }
            });
        });
    });

    // Modal Handling
    if (addProjectBtn && projectModal) {
        addProjectBtn.addEventListener('click', () => {
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeProjectModal && projectModal) {
        closeProjectModal.addEventListener('click', () => {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Form Submit
    if (projectForm) {
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('projectTitle').value;
            const desc = document.getElementById('projectDescription').value;
            const date = document.getElementById('projectDueDate').value;

            if (!title.trim() || !desc.trim()) {
                showToast('Please fill in all fields');
                return;
            }

            // Create new project card
            const projectsList = document.querySelector('.projects-list');
            if (projectsList) {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card in-progress';
                projectCard.innerHTML = `
                    <div class="project-header">
                        <div class="project-status-badge in-progress">In Progress</div>
                        <button class="project-menu-btn"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg></button>
                    </div>
                    <h3 class="project-title">${title}</h3>
                    <p class="project-description">${desc}</p>
                    <div class="project-progress">
                        <div class="project-progress-bar"><div class="project-progress-fill" style="width: 0%"></div></div>
                        <span class="project-progress-text">0%</span>
                    </div>
                    <div class="project-footer">
                        <div class="project-due">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            <span>Due ${new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <button class="project-action-btn">Start</button>
                    </div>
                `;
                projectsList.prepend(projectCard);
            }

            showToast('Project created successfully!');
            if (projectModal) projectModal.classList.remove('active');
            document.body.style.overflow = '';
            projectForm.reset();
        });
    }
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

    if (addEntryBtn && entryModal) {
        addEntryBtn.addEventListener('click', () => {
            entryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModal && entryModal) {
        closeModal.addEventListener('click', () => {
            entryModal.classList.remove('active');
            document.body.style.overflow = '';
            if (entryForm) entryForm.reset();
            selectedTags = [];
            if (tagsContainer) tagsContainer.innerHTML = '';
        });
    }

    // View Tabs
    if (viewTabs.length && entriesList && weeklySummary) {
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
    }

    // Mood Selection
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedMood = btn.dataset.mood;
        });
    });

    // Quick Tags
    quickTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const tagName = tag.dataset.tag;
            if (!selectedTags.includes(tagName)) {
                selectedTags.push(tagName);
                tag.classList.add('selected');
                updateTagsDisplay();
            } else {
                selectedTags = selectedTags.filter(t => t !== tagName);
                tag.classList.remove('selected');
                updateTagsDisplay();
            }
        });
    });

    function updateTagsDisplay() {
        if (!tagsContainer) return;
        tagsContainer.innerHTML = selectedTags.map(tag => `<span class="tag-item">${tag}</span>`).join('');
    }

    // Form Submit
    if (entryForm) {
        entryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const content = document.getElementById('entryContent').value;
            if (!content.trim()) return;

            showToast('Entry saved successfully!');
            if (entryModal) entryModal.classList.remove('active');
            document.body.style.overflow = '';
            entryForm.reset();

            // Add entry UI logic here if needed
        });
    }
}

// Toast function
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}
