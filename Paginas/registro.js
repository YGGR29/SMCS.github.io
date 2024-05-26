document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

   
    registrationForm.addEventListener('submit', function (event) {
        
        event.preventDefault();

       
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;

        fetch('/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombres, apellidos, correo, contrasena })
        })
        .then(response => response.json())
        .then(data => {
           
            if (data.success) {
                alert('¡Registro exitoso!');
                window.location.href = 'login.html';
            } else {
                alert('Hubo un problema con el registro. Inténtelo de nuevo más tarde.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema con el registro. Inténtelo de nuevo más tarde.');
        });
    });
});
