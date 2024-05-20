document.addEventListener('DOMContentLoaded', function () {
    const boardgameForm = document.getElementById('boardgame-form');

    // Adăugarea evenimentului de submit pentru formularul de boardgame
    boardgameForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne trimiterea formularului

        // Obține valorile introduse în formular
        const boardgameName = document.getElementById('boardgame-name').value;
        const price = document.getElementById('price').value;
        const stock = document.getElementById('stock').value;

        // Creează un obiect pentru boardgame
        const boardgame = {
            name: boardgameName,
            price: price,
            stock: stock
        };

        // Salvarea boardgame-ului în localStorage
        saveBoardgame(boardgame);

        // Resetează formularul
        boardgameForm.reset();
    });

    function saveBoardgame(boardgame) {
        // Obține boardgamesle existente din localStorage sau inițializează un array nou
        let boardgames = JSON.parse(localStorage.getItem('boardgames')) || [];

        // Adaugă noul boardgame în array
        boardgames.push(boardgame);

        // Salvează array-ul actualizat în localStorage
        localStorage.setItem('boardgames', JSON.stringify(boardgames));
    }
});


// Selectăm butonul pentru ștergerea localStorage
const clearLocalStorageButton = document.getElementById('clear-localstorage');

// Adăugăm un eveniment de click butonului
clearLocalStorageButton.addEventListener('click', function() {
    // Afișăm un prompt cu textul "test"
    const promptText = prompt("Sunteti sigur? Y/N");

    // Verificăm dacă prompt-ul a fost confirmat
    if (promptText === "Y") {
        // Ștergem toate datele stocate în localStorage
        localStorage.clear();
        alert("localStorage a fost șters!");
    } else {
        alert("Acțiune anulată!");
    }
});
