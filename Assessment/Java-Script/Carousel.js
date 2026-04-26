/* UNIVERSAL CAROUSEL FUNCTIONALITY */
/* Wait until the HTML document is fully loaded before running the script */
document.addEventListener("DOMContentLoaded", function () {

    /* Select ALL carousel containers on the page */
    const carousels = document.querySelectorAll('.carousel');

    /* Loop through each carousel so multiple carousels can work independently */
    carousels.forEach(carousel => {

        /* Get all slide images inside THIS carousel */
        const slides = carousel.querySelectorAll('.slide');

        /* Get the navigation buttons inside THIS carousel */
        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');

        /* Keeps track of the current slide index */
        let index = 0;

        /* Stores the interval ID for auto-scrolling */
        let interval;

        /* SLIDE CONTROL */

        /* Function to display a specific slide */
        function showSlide(i) {
            /* Remove active class from current slide */
            slides[index].classList.remove('active');

            /* Update index (loops around using modulo) */
            index = (i + slides.length) % slides.length;

            /* Add active class to new slide */
            slides[index].classList.add('active');
        }

        /* Move to the next slide */
        function nextSlide() {
            showSlide(index + 1);
        }

        /* Move to the previous slide */
        function prevSlide() {
            showSlide(index - 1);
        }

        /* AUTO SCROLL */

        /* Start automatic slide rotation */
        function startAutoScroll() {
            interval = setInterval(nextSlide, 4500); // change slide every 4.5 seconds
        }

        /* Stop automatic slide rotation */
        function stopAutoScroll() {
            clearInterval(interval);
        }

        /* BUTTON CONTROLS */

        /* Only add events if both buttons exist */
        if (nextBtn && prevBtn) {

            /* When NEXT button is clicked */
            nextBtn.addEventListener('click', () => {
                nextSlide();        // go to next slide
                stopAutoScroll();   // stop current timer
                startAutoScroll();  // restart timer (prevents fast skipping)
            });

            /* When PREVIOUS button is clicked */
            prevBtn.addEventListener('click', () => {
                prevSlide();        // go to previous slide
                stopAutoScroll();   // reset timer
                startAutoScroll();
            });
        }

        /* HOVER BEHAVIOUR */

        /* Pause auto-scroll when mouse is over the carousel */
        carousel.addEventListener('mouseenter', stopAutoScroll);

        /* Resume auto-scroll when mouse leaves */
        carousel.addEventListener('mouseleave', startAutoScroll);

        /* INITIAL START */

        /* Start the carousel when the page loads */
        startAutoScroll();

    });

});