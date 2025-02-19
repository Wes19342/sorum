async function fetchPlayers() {
    try {
        const response = await fetch('https://api.mcsrvstat.us/2/192.168.1.206');
        const data = await response.json();
        const playersList = document.getElementById('players');
        playersList.innerHTML = '';

        if (data.players && data.players.list) {
            data.players.list.forEach(player => {
                const li = document.createElement('li');
                li.textContent = player;
                playersList.appendChild(li);
            });
        } else {
            playersList.innerHTML = '<li>No players online</li>';
        }
    } catch (error) {
        console.error('Error fetching player data:', error);
        document.getElementById('players').innerHTML = '<li>Failed to load players</li>';
    }
}

fetchPlayers();
setInterval(fetchPlayers, 60000);
