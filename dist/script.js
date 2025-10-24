
function isStrongPassword(password) {
    if (password.length < 8) return false;      // check for length

    if (password.toLowerCase().includes("password")) return false;      //check for capitalization
    
    if (!/[A-Z]/.test(password)) return false;

    return true;
}

document.getElementById("loginButton").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (isStrongPassword(password)) {
        message.textContent = "Password is strong!";
        message.style.color="green";
    } else {
        message.textContent = "Password is weak..."
        message.style.color="red"
    }
});

