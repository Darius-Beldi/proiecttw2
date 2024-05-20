
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne trimiterea formularului

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Verifică dacă username-ul și parola sunt corecte
        if (usernameInput === 'DariusB' && passwordInput === 'proiecttw') {
            // Dacă sunt corecte, redirecționează către pagina main.html
            window.location.href = 'editare.html';
        } else {
            // Dacă nu sunt corecte, afișează un mesaj de eroare
            alert('Username sau parolă incorectă. Te rog să încerci din nou.');
        }
    });
});