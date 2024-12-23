document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const snowflakesContainer = document.querySelector('.snowflakes');
    const dollarRainContainer = document.querySelector('.dollar-rain');
    
    // Initially hide the body content
    body.classList.add('hidden');
    
    // Wait for the flash animation to end
    const flash = document.getElementById('flash');
    flash.addEventListener('animationend', () => {
        // Reveal the website content after the flash
        body.classList.remove('hidden');
        body.classList.add('show-content');
        
        // Start snowflakes falling initially
        createSnowflakes();
        
        // Start the dollar rain after 45 seconds
        setTimeout(() => {
            createDollarRain();
            stopSnowflakes();
        }, 45000);
    });

    function createSnowflakes() {
        const snowflakeCount = 100;
        
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '❄'; // Snowflake symbol
            snowflake.style.left = `${Math.random() * 100}vw`; // Random position
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed
            
            snowflakesContainer.appendChild(snowflake);
            
            // Remove the snowflake after animation completes
            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
            });
        }
    }

    function stopSnowflakes() {
        snowflakesContainer.innerHTML = ''; // Stop snowflakes
    }

    function createDollarRain() {
        const dollarCount = 100;

        for (let i = 0; i < dollarCount; i++) {
            const dollar = document.createElement('div');
            dollar.classList.add('dollar');
            dollar.textContent = '$'; // Dollar symbol
            dollar.style.left = `${Math.random() * 100}vw`; // Random position
            dollar.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed

            dollarRainContainer.appendChild(dollar);

            // Remove the dollar after animation completes
            dollar.addEventListener('animationend', () => {
                dollar.remove();
            });
        }
    }
});
