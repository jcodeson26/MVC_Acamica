var usuarioController = new UsuarioController();

document.getElementById('registerButton')
    .addEventListener('click', () => {

        // Destructuring
        [username, pass, passValidation, email] = obtenerDatosRegistro();
        try {
            usuarioController.registrarUsuario(username, pass, passValidation, email);
        }
        catch(error) {
            document.getElementById('errorMessage').innerText = error.message;
            document.getElementById('errorMessage').style.display = 'block';
        }
    });

    //Destructuring
    // var [a, ,b] = [1, 2, 3];
    // var [a, ...b] = [1, 2, 3];
    // console.log('hola', 'que', 'tal', 'todo', 'bien?');
    // function log(...mensajes) {

    // }

    // function(e) {

    // }

    function obtenerDatosRegistro() {
        let username = document.getElementById('userRegister');
        let pass = document.getElementById('passRegister');
        let passValidation = document.getElementById('passValidation');
        let email = document.getElementById('email');

        return [username, pass, passValidation, email];
    }