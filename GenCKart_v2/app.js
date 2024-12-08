let users = [
    { name: "John Doe", email: "johndoe@example.com", password: "password123" }
];

function signUp(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    if (users.find(user => user.email === email)) {
        alert("User already exists. Please log in.");
        return;
    }

    users.push({ name, email, password });
    alert("Sign-up successful! You can now log in.");
    document.querySelector("form").reset();
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (users.find(user => user.email === email && user.password === password)) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
}
