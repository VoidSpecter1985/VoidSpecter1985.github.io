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