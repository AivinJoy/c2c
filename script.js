document.addEventListener('DOMContentLoaded', () => {

    // --- Page Sections ---
    const loginPage = document.getElementById('login-page');
    const homePage = document.getElementById('home-page');
    const secondPage = document.getElementById('second-page');
    const pages = [loginPage, homePage, secondPage];

    // --- Navigation Triggers ---
    const loginButton = document.getElementById('login-btn');
    const navToHomeLinks = document.querySelectorAll('.nav-home');
    const navToSecondLinks = document.querySelectorAll('.nav-second');

    // --- Page Switching Function ---
    const showPage = (pageToShow) => {
        // Hide all pages
        pages.forEach(page => {
            if (page) {
                page.style.display = 'none';
            }
        });

        // Show the target page
        if (pageToShow) {
            // Login page uses flex, dashboards use block (container inside uses grid)
            pageToShow.style.display = (pageToShow === loginPage) ? 'flex' : 'block';
        }
    };

    // --- Event Listeners ---

    // 1. Login Button
    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission
            showPage(homePage);
        });
    }

    // 2. Navigate to Home Page links
    navToHomeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showPage(homePage);
        });
    });

    // 3. Navigate to Second Page links
    navToSecondLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showPage(secondPage);
        });
    });

    // --- Initial State ---
    // The initial state (showing login page) is handled by inline styles in the HTML.
    // showPage(loginPage); // This would also work.
});