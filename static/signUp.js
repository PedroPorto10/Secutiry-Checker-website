function togglePassword() {
    let senha = document.getElementById("pswd-signup");
    let togglePasswordIcon = document.getElementById("toggle-password");
    if (senha.type === "password") {
        senha.type = "text";
        togglePasswordIcon.src = "../static/open-padlock.png";
    } else {
        senha.type = "password";
        togglePasswordIcon.src = "../static/padlock.png"
    }
}

function togglePasswordLogin() {
    let senha = document.getElementById("pswd-login");
    let togglePasswordIcon = document.getElementById("toggle-password-login");
    if (senha.type === "password") {
        senha.type = "text";
        togglePasswordIcon.src = "../static/open-padlock.png";
    } else {
        senha.type = "password";
        togglePasswordIcon.src = "../static/padlock.png"
    }
}
