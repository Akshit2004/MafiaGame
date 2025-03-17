document.addEventListener('DOMContentLoaded', () => {
    // Loading screen functionality
    const loadingScreen = document.querySelector('.loading-screen');
    const hideLoadingScreen = () => {
        // Add the hidden class to trigger CSS transition
        loadingScreen.classList.add('hidden');
        // Remove from DOM after transition completes
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    };
    
    // Ensure loading screen shows for at least 1.5 seconds for a smooth experience
    setTimeout(() => {
        // Check if page has fully loaded before hiding
        if (document.readyState === 'complete') {
            hideLoadingScreen();
        } else {
            // If not yet loaded, wait for the load event
            window.addEventListener('load', hideLoadingScreen);
        }
    }, 1500);
    
    // Video background adjustments
    const video = document.getElementById('bgVideo');
    
    // Ensure video plays and loops
    video.play().catch(error => {
        console.log("Video autoplay was prevented:", error);
        // Add play button if autoplay is blocked
        const playButton = document.createElement('button');
        playButton.innerHTML = '<i class="fas fa-play"></i> Play Background';
        playButton.className = 'video-play-btn';
        document.querySelector('.video-background').appendChild(playButton);
        
        playButton.addEventListener('click', () => {
            video.play();
            playButton.style.display = 'none';
        });
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    
    // Check for saved theme preference and set initial icon
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Theme toggle click handler with icon swap animation
    themeToggle.addEventListener('click', () => {
        // Toggle the theme class
        body.classList.toggle('light-theme');
        
        // Store the new theme preference
        const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        
        // Animate icon swap
        themeIcon.style.transform = 'rotate(360deg)';
        
        // Switch icon after rotation starts
        setTimeout(() => {
            if (currentTheme === 'light') {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }, 150);
        
        // Reset the transform after animation completes
        setTimeout(() => {
            themeIcon.style.transform = 'rotate(0)';
        }, 500);
    });
    
    // Modal functionality
    const joinOption = document.getElementById('join');
    const joinModal = document.getElementById('join-modal');
    const closeModal = document.querySelector('.close-modal');
    
    joinOption.addEventListener('click', () => {
        joinModal.classList.add('show');
    });
    
    closeModal.addEventListener('click', () => {
        joinModal.classList.remove('show');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === joinModal) {
            joinModal.classList.remove('show');
        }
    });
    
    // Create game option
    const createOption = document.getElementById('create');
    createOption.addEventListener('click', () => {
        console.log('Creating new game...');
        // Add game creation logic
    });
    
    // Quick play option
    const quickOption = document.getElementById('quick');
    quickOption.addEventListener('click', () => {
        console.log('Quick play initiated...');
        // Add quick play logic
    });
    
    // Join buttons for active games
    const joinButtons = document.querySelectorAll('.join-btn:not(.locked)');
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gameTitle = this.closest('.game').querySelector('.game-title').textContent;
            console.log(`Joining game: ${gameTitle}`);
            // Add join game logic
        });
    });
    
    // Footer menu navigation - Enhance with actual navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const pageSections = document.querySelectorAll('.page-section');
    const statsBar = document.getElementById('stats-bar');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items and add to clicked item
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Get the section to navigate to
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            // Hide all sections and show the target one with animation
            pageSections.forEach(section => {
                section.classList.remove('active');
                section.classList.remove('slide-in');
            });
            
            // Show target section with animation
            if (targetSection) {
                setTimeout(() => {
                    targetSection.classList.add('active');
                    targetSection.classList.add('slide-in');
                }, 100);
                
                // Update page title based on section
                updatePageTitle(sectionId);
                
                // Show/hide stats bar based on section
                if (sectionId === 'home-section') {
                    statsBar.style.display = 'flex';
                } else {
                    statsBar.style.display = 'none';
                }
            }
        });
    });
    
    // Helper function to update page title
    function updatePageTitle(sectionId) {
        const baseName = 'Mafia - ';
        let sectionName = 'Home';
        
        switch(sectionId) {
            case 'friends-section':
                sectionName = 'Friends';
                break;
            case 'leaderboard-section':
                sectionName = 'Leaderboard';
                break;
            case 'settings-section':
                sectionName = 'Settings';
                break;
            default:
                sectionName = 'Home';
        }
        
        document.title = baseName + sectionName;
    }
    
    // Apply animations to games list
    const games = document.querySelectorAll('.game');
    games.forEach((game, index) => {
        setTimeout(() => {
            game.classList.add('slide-in');
        }, 800 + (index * 100));
    });
    
    // Add hover effects for options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Check if video fails to load and provide fallback
    video.addEventListener('error', () => {
        console.log('Video failed to load');
        document.querySelector('.video-background').style.backgroundImage = 'url("https://i.imgur.com/uFxQUXS.jpg")';
        document.querySelector('.video-background').style.backgroundSize = 'cover';
    });

    // Apply animations to elements
    document.querySelector('.action-panel').classList.add('fade-in');

    // Announcement carousel functionality
    let currentSlide = 0;
    const announcements = document.querySelectorAll('.announcement');
    const dots = document.querySelectorAll('.dot');
    
    function showSlide(index) {
        // Hide all slides
        announcements.forEach(announcement => {
            announcement.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected slide and activate corresponding dot
        announcements[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % announcements.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Click on dots to change slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Role carousel navigation
    const roleCards = document.querySelectorAll('.role-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentRoleIndex = 0;
    
    // Handle role carousel on mobile
    if (window.innerWidth <= 768) {
        prevBtn.addEventListener('click', () => {
            if (currentRoleIndex > 0) {
                currentRoleIndex--;
                updateRoleCarousel();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentRoleIndex < roleCards.length - 1) {
                currentRoleIndex++;
                updateRoleCarousel();
            }
        });
        
        function updateRoleCarousel() {
            const offset = currentRoleIndex * -100;
            document.querySelector('.roles-carousel').style.transform = `translateX(${offset}%)`;
        }
    }
    
    // Settings tab navigation
    const settingNavItems = document.querySelectorAll('.setting-nav-item');
    const settingsTabs = document.querySelectorAll('.settings-tab');
    
    settingNavItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the tab to show
            const tabId = this.getAttribute('data-tab');
            const targetTab = document.getElementById(tabId + '-tab');
            
            // Update active states
            settingNavItems.forEach(navItem => navItem.classList.remove('active'));
            settingsTabs.forEach(tab => tab.classList.remove('active'));
            
            this.classList.add('active');
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    
    // Friends list filter tabs functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    const friendCards = document.querySelectorAll('.friend-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active filter tab
            filterTabs.forEach(filterTab => filterTab.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter the friends list
            friendCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                } else if (filter === 'online' && card.classList.contains('online')) {
                    card.style.display = 'flex';
                } else if (filter === 'requests' && card.classList.contains('request')) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Theme selector in settings
    const themeSelect = document.querySelector('#preferences-tab select');
    if (themeSelect) {
        // Set initial value based on current theme
        const currentTheme = localStorage.getItem('theme') || 'dark';
        themeSelect.value = currentTheme;
        
        // Listen for changes
        themeSelect.addEventListener('change', function() {
            const selectedTheme = this.value;
            
            if (selectedTheme === 'light') {
                document.body.classList.add('light-theme');
                document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
            } else {
                document.body.classList.remove('light-theme');
                document.querySelector('.theme-toggle i').classList.replace('fa-sun', 'fa-moon');
            }
            
            // Save preference
            localStorage.setItem('theme', selectedTheme);
        });
    }
    
    // User dropdown toggle
    const userInfo = document.querySelector('.user-info');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (userInfo && userDropdown) {
        userInfo.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('visible');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            userDropdown.classList.remove('visible');
        });
    }
    
    // Add animation to stats numbers - count up effect
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const targetValue = parseInt(stat.textContent);
        
        // Use different animation speeds based on stat type
        let duration = 2000; // Default 2 seconds
        
        // Customize animation based on the stat label
        const statLabel = stat.nextElementSibling.textContent.toLowerCase();
        if (statLabel.includes('rank')) {
            duration = 1500; // Faster for ranks
        } else if (statLabel.includes('rating')) {
            duration = 2500; // Slower for rating points
        }
        
        animateCountUp(stat, targetValue, duration);
    });
    
    function animateCountUp(element, target, duration) {
        let count = 0;
        const increment = Math.ceil(target / (duration / 16)); // 60fps
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(count).toLocaleString();
            }
        }, 16);
    }
    
    // Handle form submissions in settings
    const settingsForms = document.querySelectorAll('.settings-tab form');
    
    settingsForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show saving indicator
            const saveBtn = this.querySelector('button[type="submit"]');
            const originalText = saveBtn.textContent;
            saveBtn.textContent = 'Saving...';
            saveBtn.disabled = true;
            
            // Simulate API call with timeout
            setTimeout(() => {
                saveBtn.textContent = 'Saved!';
                
                // Reset button after a delay
                setTimeout(() => {
                    saveBtn.textContent = originalText;
                    saveBtn.disabled = false;
                }, 1500);
            }, 1000);
        });
    });
    
    // Notification badge update
    function updateNotificationBadge(count) {
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    }
    
    // Initialize with some notifications
    updateNotificationBadge(2);
    
    // Add parallax effect to background video
    if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) { // Skip on mobile
        document.addEventListener('mousemove', function(e) {
            const videoBackground = document.querySelector('.video-background');
            if (videoBackground) {
                const x = (e.clientX - window.innerWidth / 2) / 50;
                const y = (e.clientY - window.innerHeight / 2) / 50;
                
                videoBackground.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }
        });
    }

    // Function to update XP bar
    function updateXPBar(currentXP, nextLevelXP) {
        const xpBarFill = document.querySelector('.xp-bar-fill');
        const xpText = document.querySelector('.xp-text');
        
        const percentage = (currentXP / nextLevelXP) * 100;
        xpBarFill.style.width = `${percentage}%`;
        xpText.textContent = `XP: ${currentXP} / ${nextLevelXP}`;
    }

    // Example usage
    const currentXP = 500;
    const nextLevelXP = 1000;
    updateXPBar(currentXP, nextLevelXP);
});