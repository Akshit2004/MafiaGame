function showRequirements() {
    document.getElementById("password-requirements").style.display = "block";
}

function hideRequirements() {
    const password = document.getElementById("password").value;
    if (password.length === 0) {
        document.getElementById("password-requirements").style.display = "none";
    }
}

function checkPassword() {
    const password = document.getElementById("password").value;

    // Update validation rules
    document.getElementById("length").classList.toggle("valid", password.length >= 6);
    document.getElementById("length").innerHTML = password.length >= 6 ? "🟢 At least 6 characters" : "🔴 At least 6 characters";

    document.getElementById("uppercase").classList.toggle("valid", /[A-Z]/.test(password));
    document.getElementById("uppercase").innerHTML = /[A-Z]/.test(password) ? "🟢 At least one uppercase letter" : "🔴 At least one uppercase letter";

    document.getElementById("number").classList.toggle("valid", /\d/.test(password));
    document.getElementById("number").innerHTML = /\d/.test(password) ? "🟢 At least one number" : "🔴 At least one number";

    document.getElementById("special").classList.toggle("valid", /[@$!%*?&]/.test(password));
    document.getElementById("special").innerHTML = /[@$!%*?&]/.test(password) ? "🟢 At least one special character" : "🔴 At least one special character";
}

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈"; // Change to hide icon
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁"; // Change back to show icon
    }
}

function validateForm() {
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Password validation regex
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordPattern.test(password)) {
        alert("Password does not meet the requirements!");
        return false;
    }

    // Store user data (for demo purposes, this is only stored in local storage)
    localStorage.setItem("signupName", name);
    localStorage.setItem("signupEmail", email);
    localStorage.setItem("signupPassword", password);

    alert("Signup successful! Redirecting to Login...");
    window.location.href = "signin.html"; // Redirect to Sign-In page

    return false; // Prevent form submission (no backend)
}
