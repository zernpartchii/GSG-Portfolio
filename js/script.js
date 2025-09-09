document.addEventListener('DOMContentLoaded', function () {
    toggleTheme();
    waveText(".wave-text");

    const elements = document.querySelectorAll(".scroll-animate");
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    document.querySelector('#year').textContent = new Date().getFullYear();

    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // remove active from all links first
            navLinks.forEach(function (nav) {
                nav.classList.remove('active');
            });

            // add active to the clicked link
            this.classList.add('active');

            // close the navbar on mobile after click
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });


    function handleScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // when element is in viewport
            if (rect.top < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    function toggleTheme() {
        const themeToggleButton = document.querySelector('.themeMode');
        const body = document.body;

        themeToggleButton.addEventListener('click', function () {
            body.classList.toggle('darkmode');
            body.classList.toggle('lightmode');
            document.querySelector('.themeMode').classList.toggle('bi-moon');
            document.querySelector('.themeMode').classList.toggle('bi-sun');
            document.querySelector('.themeMode').textContent = body.classList.contains('darkmode') ? ' dark' : ' light';
            document.querySelector('.navbar').classList.toggle('navbar-body');
        });

    }

    function waveText(className) {
        const waveText = document.querySelectorAll(className);
        waveText.forEach(element => {
            const text = element.textContent;

            // Clear text
            element.textContent = "";

            // Rebuild text with spans
            text.split("").forEach((char, i) => {
                const span = document.createElement("span");
                span.textContent = char === " " ? "\u00A0" : char; // keep spaces
                span.style.animationDelay = `${i * 0.1}s`;
                element.appendChild(span);
            });
        });
    }
});