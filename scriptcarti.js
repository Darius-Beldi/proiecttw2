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
