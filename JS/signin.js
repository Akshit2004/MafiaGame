function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@admin.com' && password === 'Admin@123') {
        window.location.href = 'play.html';
    } else {
        alert('Invalid email or password');
    }
}