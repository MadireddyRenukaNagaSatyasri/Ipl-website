// 1. DYNAMIC MATCH COUNTDOWN LOGIC
function startCountdown() {
    // Set a date for the next match (Change this as needed)
    const matchDate = new Date("March 31, 2024 20:00:00").getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = matchDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("match-timer").innerHTML = 
            `Next Match: ${days}d ${hours}h ${minutes}m`;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("match-timer").innerHTML = "MATCH IS LIVE!";
        }
    }, 1000);
}

// 2. PLAYER SQUAD FILTER LOGIC
function filterSquad(role) {
    const cards = document.querySelectorAll('.player-card');
    cards.forEach(card => {
        if (role === 'all' || card.getAttribute('data-role') === role) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 3. FAN POLL LOGIC
function castVote(playerName) {
    const result = document.getElementById('poll-result');
    result.innerText = `You voted for ${playerName}! Whistle Podu! 🦁`;
    
    // Hide buttons after voting
    document.querySelector('.poll-options').style.display = 'none';
}

// Initialize Countdown on Load
window.onload = startCountdown;