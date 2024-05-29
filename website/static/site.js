function verificaSenha(){
    let senha = document.getElementById("senha").value;
    let caracteresEspeciais = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-'];
    let caracteresNumericos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let letrasMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                            'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                            'V', 'W', 'X', 'Y', 'Z'];
    let valido = false;

    let i = 0;
    let j = 0;
    let k = 0;

    for (i = 0; i < caracteresEspeciais.length; i++) {
        if (senha.includes(caracteresEspeciais[i])) {
            for(j = 0; j < caracteresNumericos.length; j++) {
                if (senha.includes(caracteresNumericos[j])) {
                    for (k = 0; k < letrasMaiusculas.length; k++) {
                        if(senha.includes(letrasMaiusculas[k])) {
                            valido = true;
                        }
                    }
                }
            }
            break;
    }
}

    var mensagem = document.getElementById("mensagem");
    var barraProgresso = document.getElementById("barraProgresso");
    if (valido) {
        if (senha.length <= 5) {
            mensagem.className = "fraca";
            barraProgresso.style.width = "33%";
            barraProgresso.style.background = "linear-gradient(to right, red, red)";
        } else if (senha.length >= 6 && senha.length <= 9) {
            mensagem.className = "media";
            barraProgresso.style.width = "66%";
            barraProgresso.style.background = "linear-gradient(to right, orange, orange)";
        } else {
            mensagem.className = "forte";
            barraProgresso.style.width = "100%";
            barraProgresso.style.background = "linear-gradient(to right, green, green)";
        }
    } else {
        mensagem.className = "invalida";
        barraProgresso.style.width = "0%";
    }
}

function togglePassword() {
    var senha = document.getElementById("senha");
    var togglePasswordIcon = document.getElementById("toggle-password");
    if (senha.type === "password") {
        senha.type = "text";
        togglePasswordIcon.src = "../static/open-padlock.png";
    } else {
        senha.type = "password";
        togglePasswordIcon.src = "../static/padlock.png"
    }
}

function toggleIcons() {
    var icons = document.querySelectorAll('.instagram, .github, .linkedin');
    for (var i = 0; i < icons.length; i++) {
        if (icons[i].style.display === 'none' || icons[i].style.display === '') {
            icons[i].style.display = 'block';
        }
    }
}
    document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('dashes').addEventListener('click', toggleIcons)
})

function animateIcons() {
    document.getElementById('dashes').addEventListener('click', function() {
        var icons = document.querySelectorAll('.instagram, .github, .linkedin');
        icons.forEach(function(icon) {
            if (icon.classList.contains('slideOut')) {
                icon.classList.remove('slideOut');
                icon.classList.add('slideIn');
            } else {
                icon.classList.remove('slideIn');
                icon.classList.add('slideOut');
            }
        });
    });
}
animateIcons();