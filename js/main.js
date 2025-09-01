// This file serves as the entry point for the JavaScript functionality. 
// It initializes the application, handles page navigation, and manages the overall state of the SPA.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    initApp();
});

function initApp() {
    // Show the initial page
    navigateTo('inicio');

    // Set up event listeners for navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            navigateTo(page);
        });
    });
}

function navigateTo(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // Show the selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update active navigation button
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-page') === page) {
            button.classList.add('active');
        }
    });
}