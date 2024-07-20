document.addEventListener('DOMContentLoaded', function() {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const fontTypeSelector = document.getElementById('font-type-selector');
    const fontAdjusterButton = document.getElementById('font-adjuster-button');
    const fontAdjusterPopup = document.getElementById('font-adjuster-popup');
    let currentFontSize = 1;

    // Toggle font adjuster popup
    function toggleFontAdjusterPopup() {
        fontAdjusterPopup.style.display = fontAdjusterPopup.style.display === 'block' ? 'none' : 'block';
    }

    // Change font size
    function adjustFontSize(increase) {
        currentFontSize = increase ? currentFontSize + 0.1 : currentFontSize - 0.1;
        if (currentFontSize < 0.5) currentFontSize = 0.5; // Minimum font size
        document.documentElement.style.fontSize = `${currentFontSize}rem`;
    }

    increaseFontButton.addEventListener('click', () => adjustFontSize(true));
    decreaseFontButton.addEventListener('click', () => adjustFontSize(false));

    document.querySelectorAll('.font-type-button').forEach(button => {
        button.addEventListener('click', (event) => {
            document.body.style.fontFamily = event.target.getAttribute('data-font');
        });
    });

    fontAdjusterButton.addEventListener('click', toggleFontAdjusterPopup);

    // Close the popup when clicking outside
    document.addEventListener('click', function(event) {
        if (!fontAdjusterButton.contains(event.target) && !fontAdjusterPopup.contains(event.target)) {
            fontAdjusterPopup.style.display = 'none';
        }
    });

    // Handle Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.activeElement.blur();
        }
    });
});
