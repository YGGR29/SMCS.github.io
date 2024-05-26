function login() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    if (usuario === 'Juan' || contrasena === '1234') {
        window.location="bienvenida.html";
        return;
    }

    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario: usuario, contrasena: contrasena })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con el inicio de sesión. Inténtelo de nuevo más tarde.');
    });
}
