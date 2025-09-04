document.addEventListener('DOMContentLoaded', function () {
    toggleTheme();
    waveText(".wave-text");
});

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