document.addEventListener('DOMContentLoaded', () => {
    // Profile dropdown menu
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown i')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    // Animations
    const welcomeBanner = document.querySelector('.welcome-banner');
    const optionCards = document.querySelectorAll('.option-card');
    const activeGames = document.querySelector('.active-games');

    welcomeBanner.classList.add('slide-down');
    optionCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200);
    });
    setTimeout(() => {
        activeGames.classList.add('fade-in');
    }, 1000);
});