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
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-page') === page) {
            btn.classList.add('active');
        }
    });
}

document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        const page = button.getAttribute('data-page');
        navigateTo(page);
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
});