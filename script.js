document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const flash = document.getElementById('flash');
    const music = document.getElementById('background-music');

    // Initially hide the body content
    body.classList.add('hidden');

    // Wait for the flash animation to end
    flash.addEventListener('animationend', () => {
        // Reveal the website content after the flash
        body.classList.remove('hidden');
        body.classList.add('show-content');

        // Start the dollar rain
        createDollarRain();

        // Play music after flash effect ends
        music.play();
    });

    function createDollarRain() {
        const dollarRain = document.querySelector('.dollar-rain');

        setInterval(() => {
            // Generate a new dollar
            const dollar = document.createElement('div');
            dollar.textContent = '$';
            dollar.classList.add('dollar');

            // Randomize starting position
            dollar.style.left = `${Math.random() * 100}vw`; // Random position within the viewport
            dollar.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random speed between 2-5 seconds

            // Append the dollar to the rain container
            dollarRain.appendChild(dollar);

            // Remove the dollar after it falls out of the screen
            dollar.addEventListener('animationend', () => {
                dollar.remove();
            });
        }, 100); // Continuously add new dollars every 100ms
    }
});

