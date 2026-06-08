/* Futuristic Portfolio — Noe Bravo | Main Script */
$(document).ready(function () {
    // Navbar scroll effect — adds solid background on scroll
    $(document).scroll(function () {
        const $nav = $('.fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    // Smooth scroll to #about when clicking down arrow
    $('#down-arrow').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });

    // Initialize Animate On Scroll library
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false
    });

    // ===== THEME TOGGLE (Switch) =====
    const themeCheckbox = document.getElementById('theme-checkbox');
    const body = document.body;
    const sunIcon = document.querySelector('.switch-icon.sun-icon');
    const moonIcon = document.querySelector('.switch-icon.moon-icon');

    function updateSwitchIcons(isDark) {
        if (sunIcon && moonIcon) {
            if (isDark) {
                moonIcon.classList.add('active-icon');
                sunIcon.classList.remove('active-icon');
            } else {
                sunIcon.classList.add('active-icon');
                moonIcon.classList.remove('active-icon');
            }
        }
    }

    // Apply saved theme on load (default to dark)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        if (themeCheckbox) themeCheckbox.checked = false;
        updateSwitchIcons(false);
    } else {
        body.classList.add('dark-mode');
        if (themeCheckbox) themeCheckbox.checked = true;
        updateSwitchIcons(true);
    }

    // Switch theme on change
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', function () {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
                updateSwitchIcons(true);
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
                updateSwitchIcons(false);
            }
        });
    }

    // ===== SMOOTH SCROLL for all navbar links =====
    $('.navbar-nav .nav-link').on('click', function (e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 600);
            // Collapse mobile navbar after click
            $('.navbar-collapse').collapse('hide');
        }
    });
});


document.addEventListener("click", function () {
    const video = document.getElementById("miVideo");
    video.muted = false;
    video.play();
}, { once: true });