document.addEventListener('DOMContentLoaded', function () {
    const boardgamesList = document.getElementById('boardgames-list');

    // Obține boardgamesle din localStorage și afișează-le
    const boardgames = JSON.parse(localStorage.getItem('boardgames')) || [];
    displayBoardgames(boardgames, boardgamesList);

    function displayBoardgames(boardgames, container) {
        container.innerHTML = '';

        boardgames.forEach(boardgame => {
            const boardgameElement = document.createElement('div');
            boardgameElement.classList.add('boardgame');
            boardgameElement.innerHTML = `
                <h3>Nume: ${boardgame.name}</h3>
                <p>Preț: ${boardgame.price}</p>
                <p>Stoc: ${boardgame.stock}</p>
            `;
            container.appendChild(boardgameElement);
        });
    }
});
