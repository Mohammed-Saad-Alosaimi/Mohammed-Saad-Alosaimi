/* =========================================================
   MOHAMMED SAUD ALOSAIMI
   PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("open");

            const icon = menuToggle.querySelector("i");

            if (mainNav.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* ================= CLOSE MENU ================= */

    document.querySelectorAll(".main-nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (mainNav) {
                mainNav.classList.remove("open");
            }

            const icon = menuToggle?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    /* ================= SCROLL ANIMATION ================= */

    const animatedItems = document.querySelectorAll(
        ".experience-card, .profile-grid, .section-heading"
    );


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

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


    animatedItems.forEach(item => {

        item.classList.add("animate");

        observer.observe(item);

    });

});
