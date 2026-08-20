document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("open");

        });


        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("open");

            });

        });

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".expertise-card, .achievement-item, .project-card, .credential-card, .timeline-item"
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    /* =========================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        if (!mainNav || !menuToggle) {
            return;
        }


        const clickedInsideNav =
            mainNav.contains(event.target);

        const clickedMenu =
            menuToggle.contains(event.target);


        if (
            !clickedInsideNav &&
            !clickedMenu &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

        }

    });

});
