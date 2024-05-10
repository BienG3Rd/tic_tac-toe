// homepage.js

document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.getElementById('signInButton');
    const playerNameInput = document.getElementById('playerNameInput');

    signInButton.addEventListener('click', function() {
        const playerName = playerNameInput.value.trim();
        if (playerName !== "") {
            // Store player name in localStorage for future use
            localStorage.setItem('playerName', playerName);
            // Redirect to the game page
            window.location.href = "game.html";
        } else {
            alert("Please enter a valid name.");
        }
    });
});
