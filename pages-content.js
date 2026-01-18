/**
 * StudentIT - Pages Content Loader
 * Populates Projects, Logbook, Payments, and Resources pages
 */

document.addEventListener('DOMContentLoaded', () => {
    // Populate Projects Page
    const projectsPage = document.getElementById('projects');
    if (projectsPage) {
        projectsPage.innerHTML = `
            <div class="projects-view-container" id="projectsViewContainer">
                <!-- Filter Tabs -->
                <div class="filter-tabs">
                    <button class="filter-tab active" data-filter="all">All Projects</button>
                    <button class="filter-tab" data-filter="pending">Pending</button>
                    <button class="filter-tab" data-filter="completed">Completed</button>
                </div>

                <!-- Projects Content -->
                <section class="projects-list">
                    <!-- Top Priority: Featured Pending Project -->
                    <div class="project-featured-card pending" id="priorityProject">
                      <div class="countdown-modern urgent" id="projectCountdown">
                                <div class="countdown-icon-pulse"></div>
                                <span class="countdown-text">Due in <span class="countdown-value" id="countdownValue">2d 14h 30m</span></span>
                            </div>
                        <div class="featured-tag">Upcoming Deadline</div>
                        <div class="project-header">
                            <h3 class="project-title">E-Commerce Dashboard</h3>
                        </div>
                        
                        <div class="project-description-wrapper">
                            <p class="project-description truncated" id="priorityDesc">Build a responsive admin dashboard with charts, tables, and user management. Implement a complex navigation system with collapsible sidebar, implement real-time data visualization with Chart.js, create CRUD operations interface for products and users, and ensure full mobile responsiveness.</p>
                            <button class="see-more-link" id="seeMoreBtn">See more</button>
                        </div>

                        <div class="featured-footer">
                          
                            <button class="project-submit-btn-premium" id="submitProjectBtn">
                                <span>Submit Project</span>
                            </button>
                        </div>
                    </div>

                    <!-- Pending Projects Section -->
                    <div class="projects-section">
                        <h4 class="projects-section-title">Pending Projects</h4>
                        <div class="projects-grid">
                            <div class="project-modern-item" data-project="2">
                                <div class="project-main">
                                    <div class="project-info-stack">
                                        <h3 class="project-title">Blog Platform</h3>
                                        <div class="project-description-wrapper">
                                            <p class="project-description truncated">Full-stack blog with authentication, CRUD operations, comments system, and markdown support.</p>
                                            <button class="see-more-link">See more</button>
                                        </div>
                                    </div>
                                    <div class="project-meta-row">
                                        <div class="project-due-inline">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                                            </svg>
                                            <span>Due Jan 25</span>
                                        </div>
                                        <button class="submit-btn-minimal" data-project="2">Submit</button>
                                    </div>
                                </div>
                            </div>

                            <div class="project-modern-item not-started" data-project="3">
                                <div class="project-main">
                                    <div class="project-info-stack">
                                        <h3 class="project-title">Social Media Clone</h3>
                                        <div class="project-description-wrapper">
                                            <p class="project-description truncated">Build a mini social platform with posts, likes, follows, and real-time notifications.</p>
                                            <button class="see-more-link">See more</button>
                                        </div>
                                    </div>
                                    <div class="project-meta-row">
                                        <div class="project-due-inline urgent">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                                            </svg>
                                            <span>Due Feb 10</span>
                                        </div>
                                        <button class="submit-btn-minimal secondary">Start</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Completed Projects Section -->
                    <div class="projects-section">
                        <h4 class="projects-section-title">Completed</h4>
                        <div class="project-modern-item completed" data-project="4">
                            <div class="project-main">
                                <div class="project-info-stack">
                                    <h3 class="project-title">Portfolio Website</h3>
                                    <div class="project-description-wrapper">
                                        <p class="project-description truncated">Personal portfolio showcasing skills, projects, and contact info with modern design.</p>
                                        <button class="see-more-link">See more</button>
                                    </div>
                                </div>
                                <div class="project-meta-row">
                                    <div class="project-grade-badge">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                                        </svg>
                                        <span>Grade: A</span>
                                    </div>
                                    <button class="submit-btn-minimal secondary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Modern Scrollable Submission Form Panel (Directly on page) -->
            <div class="project-submission-panel" id="projectSubmissionPanel">
                <div class="panel-header">
                    <button class="panel-back-btn" id="closeProjectPanel">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <h2 class="panel-title">Submit Project</h2>
                </div>
                
                <div class="panel-scroll-content">
                    <div class="project-context-card">
                        <span class="context-label">Project</span>
                        <h3 class="context-title" id="submittingProjectTitle">E-Commerce Dashboard</h3>
                        <div class="context-desc" id="submittingProjectDesc">Build a responsive admin dashboard with charts, tables, and user management.</div>
                    </div>

                    <form class="modern-submission-form" id="projectForm">
                        <div class="form-section">
                            <label class="modern-label">The Solution Approach</label>
                            <p class="label-hint">Explain how you solved the problem (100 words max)</p>
                            <textarea class="modern-textarea" id="projectExplanation" placeholder="Describe your logic, tools used, and challenges overcome..." rows="5"></textarea>
                            <div class="modern-word-count"><span id="explanationCount">0</span> / 100 words</div>
                        </div>

                        <div class="form-section">
                            <label class="modern-label">GitHub Repository</label>
                            <div class="modern-input-wrapper">
                                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                </svg>
                                <input type="url" class="modern-input" id="githubLink" placeholder="https://github.com/username/project">
                            </div>
                        </div>

                        <div class="form-actions">
                            <button type="button" class="btn-premium-full" id="confirmProjectSubmit">
                                <span>Confirm Submission</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        initProjectPage();
    }

    // Populate Logbook Page
    const logbookPage = document.getElementById('logbook');
    if (logbookPage) {
        logbookPage.innerHTML = `
            <!-- Filter Tabs -->
            <div class="view-tabs" style="margin-bottom: 20px;">
                <button class="view-tab active" data-view="all">Daily Logs</button>
                <button class="view-tab" data-view="weekly">Weekly View</button>
            </div>

            <!-- Logbook Summary -->
            <div class="logbook-summary-card" style="margin-bottom: 24px; background: var(--primary-gradient); color: var(--white); border-radius: var(--radius-2xl); padding: 20px; box-shadow: var(--shadow-lg);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <span style="font-size: 13px; font-weight: 700; opacity: 0.9; text-transform: uppercase; letter-spacing: 0.5px;">Your Progress</span>
                    <span style="font-size: 14px; font-weight: 700; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: var(--radius-full);">Week 8</span>
                </div>
                <div style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">4 Logs Completed</div>
                <div style="font-size: 13px; opacity: 0.8;">One more log to complete your weekly goal!</div>
            </div>

            <!-- Daily Logs List -->
            <section class="logbook-content" id="logbookContent">
                <!-- Current Week Section -->
                <div class="logbook-section-header" style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                    <h3 style="font-size: 15px; font-weight: 800; color: var(--gray-800);">This Week</h3>
                    <div style="height: 1px; flex: 1; background: var(--gray-100);"></div>
                </div>

                <div class="logs-stack" id="currentWeekLogs">
                    <!-- Day 4 (Today/Upcoming) -->
                    <div class="logbook-entry-expandable" data-day="4">
                        <div class="logbook-week-header">
                            <div style="flex: 1;">
                                <div class="logbook-day-tag">Day 4 • Today</div>
                                <div class="logbook-entry-preview">Working on the project submission flow and fixing responsive bugs in the dashboard...</div>
                            </div>
                            <div class="week-collapse-toggle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </div>
                        </div>
                        <div class="log-entry-content" style="display: none;">
                            <div class="log-entry-class-details">
                                <div style="font-size: 11px; font-weight: 700; color: var(--gray-400); text-transform: uppercase; margin-bottom: 8px;">Class Details</div>
                                <div style="font-weight: 700; font-size: 14px; color: var(--gray-800);">Advanced UI Interactivity</div>
                                <div style="font-size: 12px; color: var(--gray-500);">Tutor: Sarah Johnson • 14:00 - 15:30</div>
                            </div>
                            <div class="log-entry-full">
                                <div style="font-size: 11px; font-weight: 700; color: var(--gray-400); text-transform: uppercase; margin-bottom: 8px;">Your Learning Log</div>
                                <p style="font-size: 14px; color: var(--gray-700); line-height: 1.6;">Build a responsive admin dashboard with charts, tables, and user management. Use Chart.js for data visualization. Managed to implement the sidebar and main content areas.</p>
                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="project-action-btn secondary mini" style="padding: 6px 12px; font-size: 11px;">Edit Log</button>
                                    <button class="project-action-btn mini share-btn" style="padding: 6px 12px; font-size: 11px;">Share Card</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Day 3 -->
                    <div class="logbook-entry-expandable" data-day="3">
                        <div class="logbook-week-header">
                            <div style="flex: 1;">
                                <div class="logbook-day-tag">Day 3 • Completed</div>
                                <div class="logbook-entry-preview">Learned how to use CSS variables and custom properties for theme management...</div>
                            </div>
                            <div class="week-collapse-toggle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </div>
                        </div>
                        <div class="log-entry-content" style="display: none;">
                            <!-- Full content here similarly -->
                        </div>
                    </div>
                </div>

                <!-- Past Weeks Section -->
                <div class="logbook-section-header" style="display: flex; align-items: center; gap: 8px; margin-top: 32px; margin-bottom: 16px;">
                    <h3 style="font-size: 15px; font-weight: 800; color: var(--gray-800);">Past Weeks</h3>
                    <div style="height: 1px; flex: 1; background: var(--gray-100);"></div>
                </div>

                <div class="past-weeks-stack">
                    <div class="week-collapse-card" data-week="7">
                        <div class="week-collapse-header">
                            <div class="week-collapse-info">
                                <span class="week-collapse-title">Week 7 • CSS Fundamentals</span>
                                <span class="week-collapse-summary">5 logs • Completed</span>
                            </div>
                            <div class="week-collapse-toggle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </div>
                        </div>
                        <div class="week-collapse-content">
                            <div style="padding: 12px 0;">Past logs for this week would appear here...</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Floating Action Button -->
            <button class="fab-btn" id="addLogBtn" style="position: fixed; bottom: 100px; right: 24px; width: 56px; height: 56px; border-radius: 50%; background: var(--primary-gradient); color: var(--white); border: none; box-shadow: var(--shadow-xl); display: flex; align-items: center; justify-content: center; z-index: 100; cursor: pointer;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 24px; height: 24px;">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>

            <!-- New Log Entry Modal -->
            <div class="modal-overlay" id="logEntryModal">
                <div class="modal" style="max-height: 95vh;">
                    <div class="modal-header">
                        <h2 class="modal-title">New Log Entry</h2>
                        <button class="modal-close" id="closeLogModal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <div class="log-entry-form" style="padding: 24px;">
                        <div class="form-row" style="margin-bottom: 16px;">
                            <div class="form-group">
                                <label class="form-label">Week</label>
                                <input type="number" class="form-input" id="logWeek" value="8" min="1" max="12">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Day</label>
                                <select class="form-input" id="logDay">
                                    <option value="1">Day 1</option>
                                    <option value="2">Day 2</option>
                                    <option value="3">Day 3</option>
                                    <option value="4" selected>Day 4</option>
                                    <option value="5">Day 5</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label class="form-label">Today's Topic</label>
                            <input type="text" class="form-input" id="logTopic" placeholder="e.g., Responsive Design">
                        </div>
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label class="form-label">Tutor</label>
                            <input type="text" class="form-input" id="logTutor" placeholder="e.g., Sarah Johnson">
                        </div>
                        <div class="form-group" style="margin-bottom: 24px;">
                            <label class="form-label">What did you learn? (50 words max)</label>
                            <textarea class="form-textarea" id="logContent" placeholder="Briefly describe your learnings today..." rows="4" maxlength="400"></textarea>
                            <div class="char-count"><span id="logWordCount">0</span>/50 words</div>
                        </div>
                        <button class="submit-btn" id="saveLogBtn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; margin-right: 8px;">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                <polyline points="17 21 17 13 7 13 7 21"/>
                                <polyline points="7 3 7 8 15 8"/>
                            </svg>
                            Save & Generate Card
                        </button>
                    </div>
                </div>
            </div>

            <!-- Shareable Card Modal -->
            <div class="modal-overlay" id="shareCardModal">
                <div class="modal" style="background: transparent; box-shadow: none; max-width: 400px;">
                    <div id="shareableCardContainer"></div>
                    <div style="display: flex; gap: 12px; margin-top: 24px;">
                        <button class="project-submit-cta" style="flex: 1;" id="downloadCardBtn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; margin-right: 8px;">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Save Image
                        </button>
                        <button class="project-action-btn secondary" id="closeShareModal" style="background: var(--white);">Close</button>
                    </div>
                </div>
            </div>
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
                <button class="submit-btn" id="proceedToPaymentBtn" style="margin-top: 24px;">Proceed to Payment</button>
            </section>

            <!-- Payment Modal -->
            <div class="modal-overlay" id="paymentModal">
                <div class="modal">
                    <div class="modal-header">
                        <h2 class="modal-title">Make Payment</h2>
                        <button class="modal-close" id="closePaymentModal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <form class="entry-form" id="paymentForm">
                        <div class="payment-summary-card" style="background: var(--gray-50); padding: 16px; border-radius: var(--radius-lg); margin-bottom: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="color: var(--gray-500); font-size: 14px;">Item</span>
                                <span style="font-weight: 600; font-size: 14px;">Tuition Balance</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: var(--gray-500); font-size: 14px;">Amount</span>
                                <span style="font-weight: 700; color: var(--primary); font-size: 18px;">$450.00</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Cardholder Name</label>
                            <input type="text" class="tag-input" value="John Doe" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Card Number</label>
                            <input type="text" class="tag-input" placeholder="•••• •••• •••• 4242" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div class="form-group">
                                <label class="form-label">Expiry</label>
                                <input type="text" class="tag-input" placeholder="MM/YY" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">CVC</label>
                                <input type="text" class="tag-input" placeholder="•••" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                            </div>
                        </div>
                        <button type="submit" class="submit-btn" id="confirmPaymentBtn" style="margin-top: 10px;">Pay $450.00</button>
                    </form>
                </div>
            </div>

            <!-- Receipt Page (Mocked as a full-page modal) -->
            <div class="modal-overlay" id="receiptModal" style="background: var(--gray-50);">
                <div class="subpage-content" style="max-width: 480px; margin: 0 auto; background: var(--gray-50);">
                    <div class="subpage-header">
                        <button class="modal-close" id="closeReceiptModal" style="background: var(--white); width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px;">
                                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                        <h1 class="subpage-title">Receipt</h1>
                        <button class="view-all-btn" onclick="window.print()" style="margin-left: auto;">Print</button>
                    </div>

                    <div class="receipt-card" style="background: var(--white); padding: 32px; border-radius: var(--radius-2xl); box-shadow: var(--shadow-lg); text-align: center; margin-top: 20px;">
                        <div style="width: 64px; height: 64px; background: var(--success-light); color: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width: 32px;"><polyline points="20,6 9,17 4,12"/></svg>
                        </div>
                        <h2 style="font-size: 24px; font-weight: 800; color: var(--gray-900);">Payment Successful</h2>
                        <p style="color: var(--gray-500); margin-bottom: 30px;">Transaction ID: #ITC-88294-XP</p>
                        
                        <div style="border-top: 1px dashed var(--gray-200); border-bottom: 1px dashed var(--gray-200); padding: 20px 0; margin-bottom: 30px; text-align: left;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="color: var(--gray-500);">Date</span>
                                <span style="font-weight: 600;">${new Date().toLocaleDateString()}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="color: var(--gray-500);">Payment Method</span>
                                <span style="font-weight: 600;">Visa •••• 4242</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="color: var(--gray-500);">Amount Paid</span>
                                <span style="font-weight: 700; color: var(--primary);">$450.00</span>
                            </div>
                        </div>
                        
                        <button class="project-action-btn" id="doneReceiptBtn" style="width: 100%;">Done</button>
                    </div>
                </div>
            </div>
        `;
        initPayments();
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
    if (!filterTabs.length) return;

    const projectPanel = document.getElementById('projectSubmissionPanel');
    const closeProjectPanel = document.getElementById('closeProjectPanel');
    const submitBtns = document.querySelectorAll('#submitProjectBtn, .submit-btn-minimal');
    const projectsViewContainer = document.getElementById('projectsViewContainer');

    // Filter Tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;
            const projectSections = document.querySelectorAll('.projects-section');
            const featuredCard = document.getElementById('priorityProject');

            // Handle featured card visibility
            if (featuredCard) {
                if (filter === 'all' || filter === 'pending') {
                    featuredCard.style.display = 'block';
                    setTimeout(() => featuredCard.style.opacity = '1', 50);
                } else {
                    featuredCard.style.display = 'none';
                    featuredCard.style.opacity = '0';
                }
            }

            // Handle sections and individual modern items
            const allItems = document.querySelectorAll('.project-modern-item');
            allItems.forEach(item => {
                const isItemPending = item.classList.contains('pending') || item.parentElement.closest('.projects-section')?.querySelector('.projects-section-title')?.textContent.includes('Pending') || !item.classList.contains('completed');
                const isItemCompleted = item.classList.contains('completed');

                let shouldShow = filter === 'all';
                if (filter === 'pending') shouldShow = isItemPending && !isItemCompleted;
                if (filter === 'completed') shouldShow = isItemCompleted;

                if (shouldShow) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });

            // Hide empty sections
            projectSections.forEach(section => {
                const visibleItems = Array.from(section.querySelectorAll('.project-modern-item')).filter(i => i.style.display !== 'none');
                section.style.display = visibleItems.length > 0 ? 'block' : 'none';
            });
        });
    });

    // See More/Less Logic
    const seeMoreLinks = document.querySelectorAll('.see-more-link');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            const wrapper = link.closest('.project-description-wrapper');
            const desc = wrapper.querySelector('.project-description');

            if (desc.classList.contains('truncated')) {
                desc.classList.remove('truncated');
                link.textContent = 'See less';
            } else {
                desc.classList.add('truncated');
                link.textContent = 'See more';
            }
        });
    });

    // Panel Open/Close Logic
    const openPanel = (title, desc) => {
        if (projectPanel) {
            document.getElementById('submittingProjectTitle').textContent = title;
            document.getElementById('submittingProjectDesc').textContent = desc;
            projectPanel.classList.add('active');
            if (projectsViewContainer) projectsViewContainer.classList.add('blurred');
            document.body.style.overflow = 'hidden';
        }
    };

    const closePanel = () => {
        if (projectPanel) {
            projectPanel.classList.remove('active');
            if (projectsViewContainer) projectsViewContainer.classList.remove('blurred');
            document.body.style.overflow = '';
        }
    };

    submitBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.project-featured-card') || btn.closest('.project-modern-item');
            const title = card.querySelector('.project-title').textContent;
            const desc = card.querySelector('.project-description').textContent;

            if (btn.textContent.includes('Start')) {
                showToast(`Started project: ${title}`);
                btn.textContent = 'Submit';
                btn.classList.remove('secondary');
                return;
            }

            openPanel(title, desc);
        });
    });

    if (closeProjectPanel) {
        closeProjectPanel.addEventListener('click', closePanel);
    }

    // Word count for explanation
    const explanationField = document.getElementById('projectExplanation');
    const explanationCount = document.getElementById('explanationCount');

    if (explanationField && explanationCount) {
        explanationField.addEventListener('input', () => {
            const words = explanationField.value.trim().split(/\s+/).filter(w => w.length > 0);
            explanationCount.textContent = words.length;

            if (words.length > 100) {
                explanationCount.style.color = 'var(--danger)';
            } else {
                explanationCount.style.color = 'var(--gray-400)';
            }
        });
    }

    // Confirm submission
    const confirmSubmitBtn = document.getElementById('confirmProjectSubmit');
    if (confirmSubmitBtn) {
        confirmSubmitBtn.addEventListener('click', () => {
            const githubLink = document.getElementById('githubLink').value;
            const explanation = explanationField ? explanationField.value : '';

            if (!githubLink) {
                showToast('Please enter your GitHub repository link');
                return;
            }

            if (!explanation.trim()) {
                showToast('Please explain how you solved the problem');
                return;
            }

            const wordCount = explanation.trim().split(/\s+/).filter(w => w.length > 0).length;
            if (wordCount > 100) {
                showToast('Explanation exceeds 100 words limit');
                return;
            }

            // Simulate submission
            confirmSubmitBtn.disabled = true;
            confirmSubmitBtn.querySelector('span').textContent = 'Submitting...';

            setTimeout(() => {
                closePanel();
                showToast('Project submitted successfully!');

                // Reset
                confirmSubmitBtn.disabled = false;
                confirmSubmitBtn.querySelector('span').textContent = 'Confirm Submission';
                if (explanationField) explanationField.value = '';
                if (explanationCount) explanationCount.textContent = '0';
                document.getElementById('githubLink').value = '';
            }, 1800);
        });
    }

    // Countdown Timer Logic
    const deadline = new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);

    function updateCountdown() {
        const timerValue = document.getElementById('countdownValue');
        if (!timerValue) return;

        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            timerValue.textContent = "Expired";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        timerValue.textContent = `${days}d ${hours}h ${minutes}m`;
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// Initialize Logbook Page
function initLogbook() {
    const logEntryExpandables = document.querySelectorAll('.logbook-entry-expandable');
    logEntryExpandables.forEach(entry => {
        entry.addEventListener('click', () => {
            const content = entry.querySelector('.log-entry-content');
            const isExpanded = entry.classList.contains('expanded');

            // Close others
            logEntryExpandables.forEach(e => {
                e.classList.remove('expanded');
                e.querySelector('.log-entry-content').style.display = 'none';
            });

            if (!isExpanded) {
                entry.classList.add('expanded');
                content.style.display = 'block';
            }
        });
    });

    // Past weeks collapsible
    const weekCards = document.querySelectorAll('.week-collapse-card');
    weekCards.forEach(card => {
        const header = card.querySelector('.week-collapse-header');
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = card.classList.contains('expanded');
            weekCards.forEach(c => c.classList.remove('expanded'));
            if (!isExpanded) {
                card.classList.add('expanded');
            }
        });
    });

    // New Log Entry Flow
    const addLogBtn = document.getElementById('addLogBtn');
    const logEntryModal = document.getElementById('logEntryModal');
    const closeLogModal = document.getElementById('closeLogModal');
    const saveLogBtn = document.getElementById('saveLogBtn');
    const logContent = document.getElementById('logContent');
    const logWordCount = document.getElementById('logWordCount');

    if (addLogBtn) {
        addLogBtn.addEventListener('click', () => {
            logEntryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeLogModal) {
        closeLogModal.addEventListener('click', () => {
            logEntryModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (logContent && logWordCount) {
        logContent.addEventListener('input', () => {
            const words = logContent.value.trim().split(/\s+/).filter(w => w.length > 0);
            logWordCount.textContent = words.length;
            if (words.length > 50) {
                logWordCount.style.color = 'var(--danger)';
            } else {
                logWordCount.style.color = 'var(--gray-400)';
            }
        });
    }

    if (saveLogBtn) {
        saveLogBtn.addEventListener('click', () => {
            const content = logContent.value;
            const week = document.getElementById('logWeek').value;
            const day = document.getElementById('logDay').value;
            const topic = document.getElementById('logTopic').value;
            const tutor = document.getElementById('logTutor').value;

            if (!content || !topic || !tutor) {
                showToast('Please fill in all fields');
                return;
            }

            const wordCount = content.trim().split(/\s+/).filter(w => w.length > 0).length;
            if (wordCount > 50) {
                showToast('Log must be 50 words or less');
                return;
            }

            // Simulate save
            saveLogBtn.disabled = true;
            saveLogBtn.innerHTML = 'Saving...';

            setTimeout(() => {
                logEntryModal.classList.remove('active');
                generateShareableCard({
                    week, day, topic, tutor, content
                });
                saveLogBtn.disabled = false;
                saveLogBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; margin-right: 8px;">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                        <polyline points="17 21 17 13 7 13 7 21"/>
                        <polyline points="7 3 7 8 15 8"/>
                    </svg>
                    Save & Generate Card
                `;
                showToast('Log saved! Here is your shareable card.');

                // Reset form
                logContent.value = '';
                logWordCount.textContent = '0';
                document.getElementById('logTopic').value = '';
                document.getElementById('logTutor').value = '';
            }, 1000);
        });
    }

    // Share buttons on existing logs
    const shareBtns = document.querySelectorAll('.share-btn');
    shareBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            generateShareableCard({
                week: 8, day: 4, topic: 'Advanced UI Interactivity', tutor: 'Sarah Johnson',
                content: 'Build a responsive admin dashboard with charts, tables, and user management. Managed to implement the sidebar and main content areas.'
            });
        });
    });

    function generateShareableCard(data) {
        const container = document.getElementById('shareableCardContainer');
        const modal = document.getElementById('shareCardModal');

        if (!container || !modal) return;

        container.innerHTML = `
            <div class="shareable-log-card">
                <div class="shareable-header">
                    <div class="shareable-avatar">JD</div>
                    <div class="shareable-student-info">
                        <span class="shareable-student-name">John Doe</span>
                        <span class="shareable-student-id">Student ID: 2024-882</span>
                    </div>
                </div>
                <div class="shareable-content">
                    <span class="shareable-week-day">WEEK ${data.week} • DAY ${data.day}</span>
                    <div style="font-weight: 800; font-size: 18px; margin-bottom: 8px; color: var(--gray-900);">${data.topic}</div>
                    <p class="shareable-log-text" style="color: var(--gray-700); font-size: 14px; line-height: 1.6;">${data.content}</p>
                </div>
                <div class="shareable-footer" style="display: flex; justify-content: space-between; border-top: 1px solid var(--gray-100); padding-top: 16px; margin-top: 16px;">
                    <span style="font-size: 12px; font-weight: 600; color: var(--gray-400);">${new Date().toLocaleDateString()}</span>
                    <span style="font-size: 12px; font-weight: 800; color: var(--primary);">StudentIT</span>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const downloadBtn = document.getElementById('downloadCardBtn');
        const closeShare = document.getElementById('closeShareModal');

        if (downloadBtn) {
            downloadBtn.onclick = () => {
                showToast('Card saved to your photos!');
                setTimeout(() => {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }, 1000);
            };
        }

        if (closeShare) {
            closeShare.onclick = () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            };
        }
    }
}

// Initialize Payments
function initPayments() {
    const proceedBtn = document.getElementById('proceedToPaymentBtn');
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentModal = document.getElementById('closePaymentModal');
    const paymentForm = document.getElementById('paymentForm');
    const receiptModal = document.getElementById('receiptModal');
    const closeReceiptModal = document.getElementById('closeReceiptModal');
    const doneReceiptBtn = document.getElementById('doneReceiptBtn');

    if (proceedBtn && paymentModal) {
        proceedBtn.addEventListener('click', () => {
            paymentModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closePaymentModal) {
        closePaymentModal.addEventListener('click', () => {
            paymentModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('confirmPaymentBtn');
            btn.disabled = true;
            btn.textContent = 'Processing...';

            setTimeout(() => {
                paymentModal.classList.remove('active');
                receiptModal.classList.add('active');
                btn.disabled = false;
                btn.textContent = 'Pay $450.00';
                showToast('Payment successful!');
            }, 2000);
        });
    }

    if (closeReceiptModal) {
        closeReceiptModal.addEventListener('click', () => {
            receiptModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (doneReceiptBtn) {
        doneReceiptBtn.addEventListener('click', () => {
            receiptModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// Toast function
window.showToast = function (message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}
