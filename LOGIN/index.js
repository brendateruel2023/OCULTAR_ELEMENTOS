document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === '' || senha === '') {
        alert('Preencha todos os campos.');
        return;
    }
});
