document.addEventListener('DOMContentLoaded', function () {
    const booksList = document.getElementById('books-list');

    // Fetch books data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (booksList) {
                const topBooks = getTopBooks(data.books, 10);
                displayBooks(topBooks, booksList);
            }
        });

    function getTopBooks(books, limit) {
        return books
            .sort((a, b) => b.purchases - a.purchases)
            .slice(0, limit);
    }

    function displayBooks(books, container) {
        container.innerHTML = '';
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>Cumpărări: ${book.purchases}</p>`;
            container.appendChild(bookElement);
        });
    }

    
    });

    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');
        const confirmationBox = document.getElementById('confirmation-box');
    
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            // Simulare trimitere formular (înlocuiește cu codul real pentru trimiterea formularului)
            // Dacă trimiterea este reușită, afișează mesajul de confirmare
            simulateFormSubmission(name, email, message);
        });
    
        function simulateFormSubmission(name, email, message) {
            // Aici trebuie să adaugi codul pentru a trimite efectiv formularul
            // Deocamdată, vom afișa doar mesajul de confirmare
            setTimeout(function () {
                
                contactForm.reset();
                showConfirmationBox();
            }, 1000); // Simulează un timp de așteptare pentru trimiterea formularului
        }
    
        function showConfirmationBox() {
            confirmationBox.style.display = 'block';
            setTimeout(function () {
                confirmationBox.style.display = 'none';
            }, 5000); // Ascunde mesajul de confirmare după 5 secunde
        }
    });
    
document.getElementById('random-text').addEventListener('click', function() {
    const randomColor = getRandomColor();
 
    
    const textElement = document.getElementById('random-text');
    textElement.style.color = randomColor;

});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    // Modifică tema întunecată pe tot documentul
    document.body.classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    
    // Verifică dacă există div-ul cu id-ul "about-section"
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
        // Adaugă sau elimină clasa "dark-mode" pentru div-ul cu id-ul "about-section"
        aboutSection.classList.toggle('dark-mode');
    }
    
    // Modifică textul butonului în funcție de temă
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});
// Obține formularul de contact
const contactForm = document.getElementById('contact-form');

// Adaugă un eveniment de ascultare pentru trimiterea formularului
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne comportamentul implicit de trimitere a formularului

    // Afișează promptul cu mesajul "Mesaj Trimis"
    alert('Mesaj Trimis');
});
