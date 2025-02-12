      const books = [
        { title: "JavaScript for Beginners", author: "John Doe" },
        { title: "Learning HTML & CSS", author: "Jane Smith" },
        { title: "Mastering Python", author: "Alice Johnson" },
        { title: "React for Developers", author: "Bob Brown" },
        { title: "Web Design in 2024", author: "Charlie White" }
    ];

    function searchBooks() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // Clear previous results

        if (searchInput === '') {
            resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
            return;
        }

        // .........Filter books based on search input (title or author)......
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchInput) || 
            book.author.toLowerCase().includes(searchInput)
        );

        // .............Display the filtered results...............
        if (filteredBooks.length > 0) {
            filteredBooks.forEach(book => {
                const bookDiv = document.createElement('div');
                bookDiv.classList.add('book');
                bookDiv.innerHTML = `<strong>${book.title}</strong><br>Author: ${book.author}`;
                resultsContainer.appendChild(bookDiv);
            });
        } else {
            resultsContainer.innerHTML = '<p>No books found.</p>';
        }
    }

// .............................



// .........LogIn Page..................


// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-password');

    // Check if the password is currently of type 'password' (hidden)
    if (passwordField.type === 'password') {
        passwordField.type = 'text';  // Change to text to show the password
        toggleButton.textContent = 'Hide';  // Change the button text to 'Hide'
    } else {
        passwordField.type = 'password';  // Change back to password to hide it
        toggleButton.textContent = 'Show';  // Change the button text to 'Show'
    }
}

// .........Example login function............
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageContainer = document.getElementById('loginMessage');

    // .........Clear previous messages.........
    messageContainer.textContent = '';

    if (username === '' || password === '') {
        messageContainer.textContent = 'Please fill in both fields.';
        messageContainer.style.color = 'red';
        return;
    }

    const correctUsername = 'user@example.com';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        messageContainer.textContent = 'Login successful!';
        messageContainer.style.color = 'green';
        window.location.href = 'dashboard.html';  // Redirect to another page
    } else {
        messageContainer.textContent = 'Invalid username or password.';
        messageContainer.style.color = 'red';
    }
}


// ................................




// .............Cart.................



// .............................................. 