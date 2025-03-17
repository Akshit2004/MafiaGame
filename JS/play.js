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
    
    // Footer menu navigation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Add navigation logic
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-users')) {
                console.log('Navigate to Friends');
            } else if (icon.classList.contains('fa-trophy')) {
                console.log('Navigate to Achievements');
            } else if (icon.classList.contains('fa-cog')) {
                console.log('Navigate to Settings');
            } else if (icon.classList.contains('fa-home')) {
                console.log('Navigate to Home');
            }
        });
    });
    
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
});