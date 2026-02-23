document.addEventListener('DOMContentLoaded', () => {
    // Profile Tabs Logic
    const profileTabs = document.querySelectorAll('.profile-tab');

    if (profileTabs.length > 0) {
        profileTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                profileTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');

                // In a real app, this would switch content below.
                // For this UI demo, we'll just toggle the visual state 
                console.log('Switched profile view to:', tab.textContent);
            });
        });
    }

    // Video Feed Live Indicators Animation (Optional Polishing)
    const liveBadges = document.querySelectorAll('.live-dot');
    liveBadges.forEach(dot => {
        // CSS animation 'pulse' handles this, but we could add more logic here.
    });

    console.log('Admin views initialized with Premium UI');
});
